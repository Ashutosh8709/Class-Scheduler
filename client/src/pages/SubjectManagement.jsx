import React from "react";

function SubjectManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Subject/Course Management
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Subject
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Code
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Credits
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Sessions/Week
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Duration(min)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {(subjects || []).map((s) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{s.code}</td>
                  <td className="px-4 py-3">{s.name}</td>
                  <td className="px-4 py-3 capitalize">{s.type}</td>
                  <td className="px-4 py-3">{s.credits}</td>
                  <td className="px-4 py-3">{s.sessionsPerWeek}</td>
                  <td className="px-4 py-3">{s.durationPerSession}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <form
            onSubmit={addSubject}
            className="bg-white rounded-xl p-6 w-full max-w-md space-y-3"
          >
            <h2 className="text-lg font-semibold">Add Subject</h2>
            <input
              className="w-full p-2 border rounded"
              placeholder="Code"
              value={form.code}
              onChange={(e) => setForm({ ...form, code: e.target.value })}
              required
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <select
              className="w-full p-2 border rounded"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="theory">Theory</option>
              <option value="practical">Practical</option>
              <option value="tutorial">Tutorial</option>
              <option value="project">Project</option>
            </select>
            <input
              className="w-full p-2 border rounded"
              type="number"
              placeholder="Credits"
              value={form.credits}
              onChange={(e) => setForm({ ...form, credits: e.target.value })}
            />
            <input
              className="w-full p-2 border rounded"
              type="number"
              placeholder="Sessions/Week"
              value={form.sessionsPerWeek}
              onChange={(e) =>
                setForm({ ...form, sessionsPerWeek: e.target.value })
              }
            />
            <input
              className="w-full p-2 border rounded"
              type="number"
              placeholder="Duration per session (min)"
              value={form.durationPerSession}
              onChange={(e) =>
                setForm({ ...form, durationPerSession: e.target.value })
              }
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

export default SubjectManagement;
