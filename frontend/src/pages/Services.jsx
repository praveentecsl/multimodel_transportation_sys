import { useNavigate } from "react-router-dom";

const Services = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/buses")
  }

  const handleClick_2 = () => {
    navigate("/users")
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-6 text-blue-700">
        Our Transportation Services
      </h2>
      <p className="text-gray-700 mb-8">
        We offer a wide range of reliable and efficient transportation solutions
        to meet your every need. Whether you're commuting, moving cargo, or
        renting a vehicle — we have you covered.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Passenger Transport</h3>
          <p>
            We provide safe, comfortable, and timely transport services for
            individuals and groups.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Cargo & Logistics</h3>
          <p>
            Fast and secure cargo delivery with real-time tracking and
            full-service logistics support.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Vehicle Rentals</h3>
          <p>
            Choose from a range of vehicles including cars, vans, and trucks for
            rent at flexible rates.
          </p>
        </div>
      </div>
      <br />
      <div class="flex justify-between px-4 py-2">
        <button
          className="w-52 bg-green-600 text-white p-3 rounded hover:bg-green-500 transition"
          onClick={handleClick}
        >
          Buses
        </button>

        <button
          className="w-52 bg-green-600 text-white p-3 rounded hover:bg-green-500 transition"
          onClick={handleClick_2}
        >
          Users
        </button>



      </div>
    </div>
  );
};

export default Services;
