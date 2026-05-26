import Input from "../components/ui/Input";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">

      {/* Login Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        {/* Heading */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue your interview preparation
          </p>

        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <Input
              type="email"
              placeholder="Enter your email"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <Input
              type="password"
              placeholder="Enter your password"
            />

          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-3 rounded-xl font-semibold shadow-lg">

            Login

          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">

          <div className="flex-1 h-[1px] bg-gray-300"></div>

          <span className="px-4 text-gray-400 text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-gray-300"></div>

        </div>

        {/* Google Login */}
        <button className="w-full border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-100 transition">

          Continue with Google

        </button>

      </div>

    </div>
  );
}