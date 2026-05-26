export default function Button({ text }) {
  return (

    <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-6 py-3 rounded-xl shadow-lg font-semibold">

      {text}

    </button>

  );
}