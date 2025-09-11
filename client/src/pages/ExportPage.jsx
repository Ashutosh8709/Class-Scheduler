import React from "react";

function ExportPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Export Timetable
          </h1>
          <p className="text-gray-600">
            Export timetable data in Excel format for your selected batch
          </p>
        </div>

        {/* Export Card */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-6">
          <div className="flex items-center mb-6">
            <FileSpreadsheet className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Excel Export
              </h2>
              <p className="text-gray-600">
                Download timetable data as CSV file (Excel compatible)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Batch Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Batch *
              </label>
              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Choose a batch...</option>
                {batches.map((batch) => (
                  <option key={batch} value={batch}>
                    {batch}
                  </option>
                ))}
              </select>
            </div>

            {/* Semester Selection (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Semester (Optional)
              </label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All semesters</option>
                {semesters.map((sem) => (
                  <option key={sem} value={sem}>
                    Semester {sem}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Export Button */}
          <button
            onClick={handleExport}
            disabled={isExporting || !selectedBatch}
            className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
              isExporting || !selectedBatch
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
            }`}
          >
            {isExporting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Export to Excel
              </>
            )}
          </button>
        </div>

        {/* Export Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="font-semibold text-gray-900">What's Included</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Daily class schedules</li>
              <li>• Subject details</li>
              <li>• Faculty assignments</li>
              <li>• Room allocations</li>
              <li>• Time slots</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center mb-4">
              <FileSpreadsheet className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="font-semibold text-gray-900">File Format</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• CSV format (.csv)</li>
              <li>• Excel compatible</li>
              <li>• Easy to import</li>
              <li>• Structured data</li>
              <li>• UTF-8 encoding</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-purple-600 mr-3" />
              <h3 className="font-semibold text-gray-900">Usage Tips</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Open with Excel/Sheets</li>
              <li>• Apply filters for analysis</li>
              <li>• Create pivot tables</li>
              <li>• Share with stakeholders</li>
              <li>• Print schedules</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportPage;
