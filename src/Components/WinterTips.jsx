import React, { useEffect, useState } from "react";

const WinterTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/WinterTips.json") // JSON file inside public folder
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error("Error loading tips:", err));
  }, []);

  return (
    <div className="my-6 w-11/12 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4 text-purple-700">
        🐾 Winter Care Tips for Pets
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="p-4 border rounded-lg shadow-md bg-white text-left"
          >
            <h2 className="text-lg font-semibold text-purple-700 mb-2">
              {tip.title}
            </h2>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterTips;
