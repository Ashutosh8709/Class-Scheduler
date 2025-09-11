import React from "react";

function DepartmentFaculty() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Department Faculty</h1>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Designation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Availability (Mon-Fri)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Workload
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {(faculty || []).map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{member.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {member.email}
                  </td>
                  <td className="px-6 py-4">{member.designation}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-1">
                      {[
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                      ].map((d, i) => {
                        const slot = (member.availability || []).find(
                          (a) => a.day === d
                        );
                        const ok = slot ? slot.isAvailable : false;
                        return (
                          <div
                            key={d}
                            className={`w-3 h-3 rounded-full ${
                              ok ? "bg-green-400" : "bg-red-400"
                            }`}
                            title={d}
                          ></div>
                        );
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4">{member.workload} h/week</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DepartmentFaculty;
