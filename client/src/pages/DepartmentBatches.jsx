import React from "react";

function DepartmentBatches() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Department Batches</h1>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Program
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Year/Sem
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Size
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {(batches || []).map((b) => (
                <tr key={b.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{b.name}</td>
                  <td className="px-6 py-4">{b.program}</td>
                  <td className="px-6 py-4">
                    {b.year}/{b.semester}
                  </td>
                  <td className="px-6 py-4">{b.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DepartmentBatches;
