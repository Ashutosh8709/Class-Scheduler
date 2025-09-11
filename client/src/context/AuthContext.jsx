import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { handleSuccess, handleError } from "../utils";

const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    if (getUser) {
      setUser(JSON.parse(getUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (regId, password, userRole) => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/auth/login", {
        regId,
        password,
        userRole,
      });

      const { success, message, userId, error, name, token, role } = res.data;
      if (success) {
        setUser(name);
        localStorage.setItem(
          "user",
          JSON.stringify({ name, userId, role, token })
        );
        handleSuccess(message || "Login successful!");
        setIsLoading(false);
        return true;
      }
      handleError(error || "Login failed!");
      return false;
    } catch (err) {
      handleError(err.response?.data?.message || "Something went wrong!");
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    handleSuccess("Logged out successfully!");
  };

  const value = {
    user,
    login,
    logout,
    isloading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
