import React from "react";

function ElectivesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Choose Your Electives
          </h1>
          <p className="text-gray-600">
            Select up to 2 elective courses for this semester
          </p>
        </div>

        {/* Selection Summary */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle2 className="w-6 h-6 text-green-600 mr-3" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Selected Electives
                </h2>
                <p className="text-gray-600">
                  {selectedElectives.length}/2 electives selected
                </p>
              </div>
            </div>
            <button
              onClick={saveSelections}
              disabled={selectedElectives.length === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedElectives.length === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Save Selection
            </button>
          </div>

          {selectedElectives.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {selectedElectives.map((id) => {
                  const elective = [
                    ...electives.technical,
                    ...electives.management,
                    ...electives.humanities,
                  ].find((e) => e.id === id);
                  return (
                    <span
                      key={id}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {elective?.title}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl shadow-sm border mb-6">
          <div className="flex border-b border-gray-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {category.name}
                <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Electives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {electives[activeCategory].map((elective) => {
            const isSelected = selectedElectives.includes(elective.id);
            const availability = getAvailabilityStatus(
              elective.enrolled,
              elective.seats
            );
            const isFull = elective.enrolled >= elective.seats;

            return (
              <div
                key={elective.id}
                className={`bg-white rounded-xl shadow-sm border transition-all hover:shadow-md ${
                  isSelected ? "ring-2 ring-blue-500 border-blue-200" : ""
                }`}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {elective.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <User className="w-4 h-4 mr-1" />
                        {elective.faculty}
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                            elective.difficulty
                          )}`}
                        >
                          {elective.difficulty}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm text-gray-600">
                            {elective.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleElective(elective.id)}
                      disabled={isFull && !isSelected}
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white"
                          : isFull
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {isSelected ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <BookOpen className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {elective.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {elective.time}
                      </div>
                      <div className="text-gray-600">Room: {elective.room}</div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {elective.enrolled}/{elective.seats} enrolled
                      </div>
                      <div className={`font-medium ${availability.color}`}>
                        {availability.text}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="text-gray-600">
                        Prerequisites: {elective.prerequisites}
                      </div>
                      <div className="font-medium text-gray-900">
                        {elective.credits} Credits
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          elective.enrolled / elective.seats >= 0.9
                            ? "bg-red-500"
                            : elective.enrolled / elective.seats >= 0.7
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                        style={{
                          width: `${
                            (elective.enrolled / elective.seats) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {isFull && !isSelected && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center">
                        <AlertCircle className="w-4 h-4 text-red-600 mr-2" />
                        <span className="text-sm text-red-700">
                          This elective is full
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ElectivesPage;
