import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ExpertVets = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    fetch("/Vets.json")
      .then((res) => res.json())
      .then((data) => setVets(data))
      .catch((err) => console.error("Error loading vets:", err));
  }, []);

  return (
    <aside className="bg-gray-50 p-4 rounded shadow-sm">
      <h2 className="text-xl font-bold text-purple-900 mb-4">
        Meet Our Expert Vets
      </h2>

      <div className="space-y-4">
        {vets.map((vet, index) => (
          <motion.div
            key={vet.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // staggered effect
              ease: "easeOut",
            }}
            className="flex items-center gap-3 bg-white rounded-lg p-3 shadow hover:shadow-md hover:scale-[1.02] transition"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-16 h-16 object-cover rounded-full border border-purple-200"
            />
            <div>
              <h3 className="font-semibold text-gray-800">{vet.name}</h3>
              <p className="text-sm text-gray-500">{vet.specialty}</p>
              <p className="text-xs text-gray-400">{vet.experience}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </aside>
  );
};

export default ExpertVets;
