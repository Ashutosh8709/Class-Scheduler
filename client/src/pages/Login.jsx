import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Eye, EyeOff } from "lucide-react";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login, isLoading, isAuthenticated, user } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "admin",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated && user) {
      const roleRoutes = {
        admin: "/admin",
        dept: "/department",
        faculty: "/faculty",
        student: "/student",
      };
      navigate(roleRoutes[user.role] || "/student", { replace: true });
    }
  }, [isAuthenticated, user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const success = await login(
        formData.email,
        formData.password,
        formData.role
      );
      if (success) {
        const roleRoutes = {
          admin: "/admin",
          dept: "/department",
          faculty: "/faculty",
          student: "/student",
        };
        navigate(roleRoutes[formData.role]);
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  const handleQuickLogin = async (role) => {
    setFormData((prev) => ({ ...prev, role }));
    const success = await login("demo@university.edu", "password", role);
    if (success) {
      const roleRoutes = {
        admin: "/admin",
        dept: "/department",
        faculty: "/faculty",
        student: "/student",
      };
      navigate(roleRoutes[role]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Timetable Manager
          </h1>
          <p className="text-gray-600">Academic Class Scheduling System</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              University Email
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="text"
                required
                value={formData.email}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
                className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                placeholder="User ID"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <User className="h-5 w-5 text-gray-600 transition-colors" />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-600 transition-colors" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-600 transition-colors" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role
            </label>
            <select
              value={formData.role}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, role: e.target.value }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="admin">Administrator</option>
              <option value="dept">Department Coordinator</option>
              <option value="faculty">Faculty</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 cursor-pointer"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Quick Access Links
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              //   onClick={() => handleQuickLogin("admin")}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition duration-200"
            >
              <span className="mr-2">👑</span>
              Admin
            </button>
            <button
              //   onClick={() => handleQuickLogin("dept")}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition duration-200"
            >
              <span className="mr-2">🏢</span>
              Dept Coord
            </button>
            <button
              //   onClick={() => handleQuickLogin("faculty")}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition duration-200"
            >
              <span className="mr-2">👨‍🏫</span>
              Faculty
            </button>
            <button
              //   onClick={() => handleQuickLogin("student")}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition duration-200"
            >
              <span className="mr-2">🎓</span>
              Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
