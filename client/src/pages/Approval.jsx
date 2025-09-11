import { useState } from "react";

function Approval() {
  const [status, setStatus] = useState("Pending");
  const [comment, setComment] = useState("");

  const approve = () => {
    setStatus("Approved");
  };

  const reject = () => {
    setStatus("Rejected");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Approval</h1>

      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h2 className="text-lg font-semibold mb-2">
          Selected Timetable Candidate
        </h2>
        <div className="text-sm text-gray-600">
          Generated Timetable - Option 1
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-4 space-y-3">
        <div className="text-sm">
          Status:{" "}
          <span
            className={`font-semibold ${
              status === "Approved"
                ? "text-green-600"
                : status === "Rejected"
                ? "text-red-600"
                : "text-yellow-600"
            }`}
          >
            {status}
          </span>
        </div>
        <textarea
          className="w-full border rounded p-2"
          rows={3}
          placeholder="Add comments..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            onClick={approve}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Approve
          </button>
          <button
            onClick={reject}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default Approval;
