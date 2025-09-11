import React from "react";

function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Student Dashboard
          </h1>
          <p className="text-gray-600">Welcome back, {user?.name}</p>
        </div>
        <div className="text-sm text-gray-500">
          Batch: CS-2024-1 • Semester: 1
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div
                className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white text-xl`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{action.icon}</div>
                <h4 className="font-medium text-gray-900">{action.title}</h4>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Today's Schedule and Upcoming Exams */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Today's Schedule
          </h3>
          <div className="space-y-3">
            {todaySchedule.map((class_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">
                      {class_.time}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        class_.subject.includes("Lab")
                          ? "bg-blue-100 text-blue-800"
                          : class_.subject.includes("MATH")
                          ? "bg-green-100 text-green-800"
                          : class_.subject.includes("PHYS")
                          ? "bg-purple-100 text-purple-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {class_.subject.includes("Lab")
                        ? "Lab"
                        : class_.subject.includes("MATH")
                        ? "Math"
                        : class_.subject.includes("PHYS")
                        ? "Physics"
                        : "CS"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{class_.subject}</p>
                  <p className="text-xs text-gray-500">
                    {class_.faculty} • {class_.room}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Upcoming Exams
          </h3>
          <div className="space-y-3">
            {upcomingExams.map((exam, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    exam.type === "Midterm"
                      ? "bg-red-500"
                      : exam.type === "Quiz"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{exam.subject}</p>
                  <p className="text-sm text-gray-600">
                    {exam.date} at {exam.time}
                  </p>
                  <p className="text-xs text-gray-500">{exam.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Announcements
        </h3>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
            >
              <div
                className={`w-2 h-2 rounded-full mt-2 ${
                  announcement.type === "info"
                    ? "bg-blue-500"
                    : announcement.type === "warning"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">
                  {announcement.title}
                </h4>
                <p className="text-sm text-gray-600">{announcement.message}</p>
                <p className="text-xs text-gray-500">{announcement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Progress */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Academic Progress
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">85%</div>
            <div className="text-sm text-gray-600">Attendance</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">92%</div>
            <div className="text-sm text-gray-600">Assignment Completion</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: "92%" }}
              ></div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">3.8</div>
            <div className="text-sm text-gray-600">Current GPA</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: "76%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
