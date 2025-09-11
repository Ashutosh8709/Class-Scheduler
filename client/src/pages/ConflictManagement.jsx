import React from "react";

function ConflictManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Conflict Management
        </h1>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">
            {filteredConflicts.length} conflicts found
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Conflicts</option>
            <option value="unresolved">Unresolved</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <div className="text-2xl font-bold text-gray-900">
            {conflicts?.length || 0}
          </div>
          <div className="text-sm text-gray-600">Total Conflicts</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <div className="text-2xl font-bold text-red-600">
            {conflicts?.filter((c) => !c.isResolved).length || 0}
          </div>
          <div className="text-sm text-gray-600">Unresolved</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <div className="text-2xl font-bold text-green-600">
            {conflicts?.filter((c) => c.isResolved).length || 0}
          </div>
          <div className="text-sm text-gray-600">Resolved</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <div className="text-2xl font-bold text-yellow-600">
            {conflicts?.filter(
              (c) => c.severity === "high" || c.severity === "critical"
            ).length || 0}
          </div>
          <div className="text-sm text-gray-600">High Priority</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Suggested Fix
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredConflicts.map((conflict) => (
                <tr key={conflict.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">
                        {getTypeIcon(conflict.type)}
                      </span>
                      <div className="text-sm font-medium text-gray-900 capitalize">
                        {conflict.type.replace("_", " ")}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {conflict.description}
                    </div>
                    <div className="text-xs text-gray-500">
                      Affected entries: {conflict.affectedEntries.length}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getSeverityColor(
                        conflict.severity
                      )}`}
                    >
                      {conflict.severity.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        conflict.isResolved
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {conflict.isResolved ? "Resolved" : "Pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">
                      {conflict.suggestedFix || "No suggestion available"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => setSelectedConflict(conflict)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View Details
                      </button>
                      {!conflict.isResolved && (
                        <button
                          onClick={() =>
                            handleResolve(
                              conflict.id,
                              conflict.suggestedFix || ""
                            )
                          }
                          className="text-green-600 hover:text-green-900"
                        >
                          Apply Fix
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedConflict && (
        <ConflictDetailModal
          conflict={selectedConflict}
          onClose={() => setSelectedConflict(null)}
          onResolve={(fix) => handleResolve(selectedConflict.id, fix)}
        />
      )}
    </div>
  );
}

const ConflictDetailModal = ({ conflict, onClose, onResolve }) => {
  const [fixDescription, setFixDescription] = useState(
    conflict.suggestedFix || ""
  );

  const handleResolve = () => {
    onResolve(fixDescription);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-900">Conflict Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Conflict Type
            </label>
            <div className="text-sm text-gray-900 capitalize">
              {conflict.type.replace("_", " ")}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <div className="text-sm text-gray-900">{conflict.description}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Severity
            </label>
            <span
              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${
                conflict.severity === "critical"
                  ? "bg-red-100 text-red-800 border-red-200"
                  : conflict.severity === "high"
                  ? "bg-orange-100 text-orange-800 border-orange-200"
                  : conflict.severity === "medium"
                  ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                  : "bg-blue-100 text-blue-800 border-blue-200"
              }`}
            >
              {conflict.severity.toUpperCase()}
            </span>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Affected Entries
            </label>
            <div className="text-sm text-gray-900">
              {conflict.affectedEntries.length} entries affected
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Suggested Fix
            </label>
            <textarea
              value={fixDescription}
              onChange={(e) => setFixDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Describe how to fix this conflict..."
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            {!conflict.isResolved && (
              <button
                onClick={handleResolve}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Apply Fix
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConflictManagement;
