export default function Card({ icon, title, description }) {
  return (

    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-2">

      {/* Icon */}
      <div className="text-4xl text-blue-500 mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600">
        {description}
      </p>

    </div>
  );
}