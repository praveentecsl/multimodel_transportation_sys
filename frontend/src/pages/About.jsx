import Img from "../assets/images/homepage.jpeg";

const About = () => {
  return (
    <>
      <div>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-6 text-blue-700">
            About TranspoEase
          </h2>
          <p className="text-gray-700 mb-6">
            TranspoEase is a modern transportation company committed to
            providing efficient, reliable, and affordable transport services
            across the region. With years of industry experience, our team is
            dedicated to ensuring smooth and safe journeys for passengers and
            cargo alike.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Established in 2020</li>
            <li>Over 500+ vehicles in our fleet</li>
            <li>Operating in 30+ cities nationwide</li>
            <li>24/7 Customer Support</li>
          </ul>

          <p className="text-gray-700">
            Our mission is to revolutionize how people and goods move. We
            combine technology and transport excellence to deliver real-time,
            cost-effective solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
