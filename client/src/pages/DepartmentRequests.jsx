import React from "react";

function DepartmentRequests() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Department Requests</h1>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Requester
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {requests.map((r) => (
              <tr key={r.id}>
                <td className="px-6 py-3">{r.type}</td>
                <td className="px-6 py-3">{r.requester}</td>
                <td className="px-6 py-3">{r.date}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      r.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : r.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-right space-x-2">
                  <button
                    onClick={() => update(r.id, "Approved")}
                    className="px-3 py-1 bg-green-600 text-white rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => update(r.id, "Rejected")}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DepartmentRequests;
