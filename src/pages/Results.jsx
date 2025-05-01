import React from 'react';

const Results = () => {
  // TODO: Replace with actual results data
  const results = {
    prediction: 'Positive',
    confidence: '85%',
    timestamp: new Date().toLocaleString(),
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Analysis Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Prediction</h3>
          <p className={`text-xl font-bold ${
            results.prediction.toLowerCase() === 'positive' 
              ? 'text-red-600' 
              : 'text-green-600'
          }`}>
            {results.prediction}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Confidence</h3>
          <p className="text-xl font-bold text-blue-600">{results.confidence}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Analysis Time</h3>
          <p className="text-gray-600">{results.timestamp}</p>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
          Download Report
        </button>
        <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200">
          Share Results
        </button>
      </div>
    </div>
  );
};

export default Results; 