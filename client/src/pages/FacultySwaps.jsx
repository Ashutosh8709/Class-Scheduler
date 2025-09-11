import React from "react";

function FacultySwaps() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Swap Requests</h1>

      <form
        onSubmit={submit}
        className="bg-white rounded-xl shadow-sm border p-4 grid grid-cols-1 md:grid-cols-3 gap-3"
      >
        <input
          className="p-2 border rounded"
          placeholder="Course/Code"
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          required
        />
        <input
          className="p-2 border rounded"
          placeholder="From Slot (e.g., Mon 09-10)"
          value={form.fromSlot}
          onChange={(e) => setForm({ ...form, fromSlot: e.target.value })}
          required
        />
        <input
          className="p-2 border rounded"
          placeholder="To Slot (e.g., Tue 10-11)"
          value={form.toSlot}
          onChange={(e) => setForm({ ...form, toSlot: e.target.value })}
          required
        />
        <div className="md:col-span-3 text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="bg-white rounded-xl shadow-sm border">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Course
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                From
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                To
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {swaps.map((s) => (
              <tr key={s.id}>
                <td className="px-4 py-2">{s.course}</td>
                <td className="px-4 py-2">{s.fromSlot}</td>
                <td className="px-4 py-2">{s.toSlot}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      s.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FacultySwaps;
