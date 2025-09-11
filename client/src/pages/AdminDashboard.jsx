import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function AdminDashboard() {
  const stats = [
    {
      title: "Total Faculty",
      value: "24",
      change: "+2",
      changeType: "positive",
      icon: "👨‍🏫",
    },
    {
      title: "Active Rooms",
      value: "18",
      change: "0",
      changeType: "neutral",
      icon: "🏢",
    },
    {
      title: "Scheduled Classes",
      value: "156",
      change: "+12",
      changeType: "positive",
      icon: "📚",
    },
    {
      title: "Active Conflicts",
      value: "3",
      change: "-2",
      changeType: "negative",
      icon: "⚠️",
    },
  ];

  const quickActions = [
    {
      title: "Generate Timetable",
      description: "Create new timetable for current term",
      path: "/admin/timetable/generate",
      icon: "⚙️",
      color: "bg-blue-500",
    },
    {
      title: "Manage Faculty",
      description: "Add, edit, or remove faculty members",
      path: "/admin/faculty",
      icon: "👨‍🏫",
      color: "bg-green-500",
    },
    {
      title: "Room Management",
      description: "Manage classrooms and laboratories",
      path: "/admin/rooms",
      icon: "🏢",
      color: "bg-purple-500",
    },
    {
      title: "View Conflicts",
      description: "Resolve scheduling conflicts",
      path: "/admin/conflicts",
      icon: "⚠️",
      color: "bg-red-500",
    },
  ];

  const recentActivities = [
    {
      action: "Timetable approved for Fall 2024",
      time: "2 hours ago",
      type: "success",
    },
    {
      action: "New faculty member added: Dr. Sarah Wilson",
      time: "4 hours ago",
      type: "info",
    },
    {
      action: "Conflict detected in Room R101",
      time: "6 hours ago",
      type: "warning",
    },
    {
      action: "Room R102 maintenance scheduled",
      time: "1 day ago",
      type: "info",
    },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p
                  className={`text-sm ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : stat.changeType === "negative"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {stat.change} from last month
                </p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Room Utilization
          </h3>
          {/* {roomLoading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={roomUtilization?.datasets[0].data.map((value, index) => ({
                  day: roomUtilization.labels[index],
                  utilization: value,
                }))}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="utilization" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          )} */}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Faculty Workload Distribution
          </h3>
          {/* {facultyLoading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={facultyWorkload?.labels.map((label, index) => ({
                    name: label,
                    value: facultyWorkload.datasets[0].data[index],
                  }))}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {facultyWorkload?.labels.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )} */}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center text-white text-lg`}
                  >
                    {action.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {action.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activities
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "success"
                      ? "bg-green-500"
                      : activity.type === "warning"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* {!conflictLoading && conflictSummary && (
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Conflict Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">
                {conflictSummary.total}
              </div>
              <div className="text-sm text-red-600">Total Conflicts</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {conflictSummary.resolved}
              </div>
              <div className="text-sm text-green-600">Resolved</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {conflictSummary.byType.faculty_clash}
              </div>
              <div className="text-sm text-yellow-600">Faculty Clashes</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {conflictSummary.byType.room_clash}
              </div>
              <div className="text-sm text-blue-600">Room Clashes</div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default AdminDashboard;
