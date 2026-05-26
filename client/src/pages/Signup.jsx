export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Start your AI interview preparation journey
          </p>

        </div>

        <form className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-3 rounded-xl font-semibold shadow-lg">

            Create Account

          </button>

        </form>

      </div>

    </div>
  );
}