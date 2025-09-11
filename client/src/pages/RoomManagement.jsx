import React from "react";

function RoomManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Room & Lab Management
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Room
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
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Capacity
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Building/Floor
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Features
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {(rooms || []).map((room) => (
                <tr key={room.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{room.name}</td>
                  <td className="px-4 py-3 capitalize">{room.type}</td>
                  <td className="px-4 py-3">{room.capacity}</td>
                  <td className="px-4 py-3">
                    {room.building} • {room.floor}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {room.features.join(", ")}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => removeRoom(room.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <form
            onSubmit={addRoom}
            className="bg-white rounded-xl p-6 w-full max-w-md space-y-3"
          >
            <h2 className="text-lg font-semibold">Add Room</h2>
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
              <option value="classroom">Classroom</option>
              <option value="lab">Lab</option>
              <option value="auditorium">Auditorium</option>
              <option value="seminar">Seminar</option>
            </select>
            <input
              className="w-full p-2 border rounded"
              type="number"
              placeholder="Capacity"
              value={form.capacity}
              onChange={(e) => setForm({ ...form, capacity: e.target.value })}
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="Building"
              value={form.building}
              onChange={(e) => setForm({ ...form, building: e.target.value })}
            />
            <input
              className="w-full p-2 border rounded"
              type="number"
              placeholder="Floor"
              value={form.floor}
              onChange={(e) => setForm({ ...form, floor: e.target.value })}
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="Features (comma-separated)"
              value={form.features}
              onChange={(e) => setForm({ ...form, features: e.target.value })}
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

export default RoomManagement;
