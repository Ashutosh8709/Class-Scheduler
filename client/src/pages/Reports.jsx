import React from "react";

function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Room Utilization
        </h3>
        <div style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={(roomUtilization?.datasets?.[0]?.data || []).map(
                (v, i) => ({ day: roomUtilization.labels[i], utilization: v })
              )}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="utilization" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Faculty Workload Histogram
        </h3>
        <div className="text-sm text-gray-600">
          (Placeholder) Use analyticsApi.getFacultyWorkload to add a chart here.
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Clash Summary Table
        </h3>
        <div className="text-sm text-gray-600">
          (Placeholder) Show conflicts by type and severity.
        </div>
      </div>
    </div>
  );
}

export default Reports;
