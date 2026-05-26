export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-black text-white p-6 hidden md:block">

        <h1 className="text-3xl font-bold text-blue-500 mb-10">
          InterviewAI
        </h1>

        <ul className="space-y-6 font-medium">

          <li className="hover:text-blue-400 cursor-pointer transition">
            Dashboard
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            Resume Analyzer
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            Mock Interview
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            Coding Round
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            Performance
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            Settings
          </li>

        </ul>

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">

        {/* Welcome Card */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-8">

          <h1 className="text-3xl font-bold mb-2">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500">
            Ready for your next AI-powered interview session?
          </p>

        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-gray-500">
              Total Interviews
            </h2>

            <p className="text-3xl font-bold mt-2">
              24
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-gray-500">
              Average Score
            </h2>

            <p className="text-3xl font-bold mt-2">
              82%
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-gray-500">
              Coding Problems
            </h2>

            <p className="text-3xl font-bold mt-2">
              56
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-gray-500">
              Resume Score
            </h2>

            <p className="text-3xl font-bold mt-2">
              88%
            </p>
          </div>

        </div>

        {/* Charts Placeholder */}
        <div className="bg-white p-8 rounded-2xl shadow-md mb-8 h-80 flex items-center justify-center">

          <p className="text-gray-400 text-xl">
            Performance Chart Coming Soon
          </p>

        </div>

        {/* Recent Interviews */}
        <div className="bg-white p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold mb-6">
            Recent Interviews
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span>MERN Stack Interview</span>
              <span className="font-semibold text-blue-500">
                85%
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Frontend Developer</span>
              <span className="font-semibold text-blue-500">
                78%
              </span>
            </div>

            <div className="flex justify-between">
              <span>DSA Round</span>
              <span className="font-semibold text-blue-500">
                91%
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}