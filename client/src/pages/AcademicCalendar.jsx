import React from "react";

function AcademicCalendar() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Academic Calendar</h1>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <div className="text-sm text-gray-500">Term</div>
            <div className="text-lg font-semibold">{calendar.term}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Start Date</div>
            <div className="text-lg font-semibold">{calendar.startDate}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">End Date</div>
            <div className="text-lg font-semibold">{calendar.endDate}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="text-lg font-semibold mb-3">Holidays</h3>
          <ul className="space-y-2">
            {calendar.holidays.map((h) => (
              <li
                key={h.id}
                className="flex justify-between p-2 bg-gray-50 rounded"
              >
                <span>{h.name}</span>
                <span className="text-gray-600 text-sm">{h.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="text-lg font-semibold mb-3">Exam Periods</h3>
          <ul className="space-y-2">
            {calendar.examPeriods.map((e) => (
              <li key={e.id} className="p-2 bg-gray-50 rounded">
                <div className="font-medium">{e.name}</div>
                <div className="text-gray-600 text-sm">
                  {e.startDate} → {e.endDate}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AcademicCalendar;
