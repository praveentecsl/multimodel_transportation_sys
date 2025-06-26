import Img from "../assets/images/homepage.jpeg";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 ">
      <h2 className="text-4xl font-bold mb-6 text-blue-700">
        About TranspoEase
      </h2>
      <p className="text-gray-700 mb-6">
        TranspoEase is a modern transportation company committed to providing
        efficient, reliable, and affordable transport services across the
        region. With years of industry experience, our team is dedicated to
        ensuring smooth and safe journeys for passengers and cargo alike.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Established in 2020</li>
        <li>Over 500+ vehicles in our fleet</li>
        <li>Operating in 30+ cities nationwide</li>
        <li>24/7 Customer Support</li>
      </ul>

      <p className="text-gray-700">
        Our mission is to revolutionize how people and goods move. We combine
        technology and transport excellence to deliver real-time, cost-effective
        solutions.
      </p>
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={Img}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-black- text-center px-4">
          <h2 className="text-4xl font-bold mb-4">
            Your Reliable Transport Partner
          </h2>
          <p className="text-lg mb-6">
            Safe and efficient transportation for everyone.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
