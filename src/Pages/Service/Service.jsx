import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/Service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="card bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{service.name}</h3>
              <p className="text-yellow-500">Rating: {service.rating}</p>
              <p className="text-gray-700">{service.price}</p>
              <button
                className="mt-2 btn btn-sm btn-primary w-full"
                onClick={() => setSelected(service)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="h-48 w-full object-cover rounded"
            />
            <h2 className="text-2xl font-bold mt-4">{selected.name}</h2>
            <p className="mt-2 text-yellow-500">Rating: {selected.rating}</p>
            <p className="mt-2 text-gray-700">{selected.price}</p>
            <p className="mt-2">{selected.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
