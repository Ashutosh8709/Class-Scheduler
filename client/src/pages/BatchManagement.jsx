import React from "react";

function BatchManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Batch/Section Management
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Batch
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Program
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Year/Sem
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Size
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Department
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {(batches || []).map((b) => (
                <tr key={b.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{b.name}</td>
                  <td className="px-4 py-3">{b.program}</td>
                  <td className="px-4 py-3">
                    {b.year}/{b.semester}
                  </td>
                  <td className="px-4 py-3">{b.size}</td>
                  <td className="px-4 py-3">{b.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <form
            onSubmit={addBatch}
            className="bg-white rounded-xl p-6 w-full max-w-md space-y-3"
          >
            <h2 className="text-lg font-semibold">Add Batch</h2>
            <input
              className="w-full p-2 border rounded"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="Program"
              value={form.program}
              onChange={(e) => setForm({ ...form, program: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                className="w-full p-2 border rounded"
                type="number"
                placeholder="Year"
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
              />
              <input
                className="w-full p-2 border rounded"
                type="number"
                placeholder="Semester"
                value={form.semester}
                onChange={(e) => setForm({ ...form, semester: e.target.value })}
              />
            </div>
            <input
              className="w-full p-2 border rounded"
              type="number"
              placeholder="Size"
              value={form.size}
              onChange={(e) => setForm({ ...form, size: e.target.value })}
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="Department"
              value={form.department}
              onChange={(e) => setForm({ ...form, department: e.target.value })}
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default BatchManagement;
