import React from "react";

function FacultyAvailability() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">My Availability</h1>
        <button
          onClick={save}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                Time
              </th>
              {days.map((d) => (
                <th
                  key={d}
                  className="px-4 py-3 text-center text-sm font-medium text-gray-500"
                >
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            {slots.map((slot) => (
              <tr key={slot}>
                <td className="px-4 py-2 text-sm font-medium text-gray-700">
                  {slot}
                </td>
                {days.map((day) => (
                  <td key={day} className="px-2 py-2 text-center">
                    <button
                      onClick={() => toggle(day, slot)}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        availability[day][slot]
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {availability[day][slot] ? "Available" : "Block"}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FacultyAvailability;
