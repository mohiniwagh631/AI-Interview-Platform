import { Link } from "react-router-dom";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

import {
  FaRobot,
  FaMicrophone,
  FaCode,
  FaChartLine
} from "react-icons/fa";

export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-linear-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-6xl">
          Ace Your Technical Interviews with AI
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Practice AI-powered mock interviews, analyze your resume,
          improve coding skills, and get real-time feedback.
        </p>

        {/* Button Navigation */}
        <Link to="/login">

          <div className="mt-8">
            <Button text="Start Interview" />
          </div>

        </Link>

      </section>

      {/* FEATURES SECTION */}
      <section
        id="features"
        className="py-20 px-8 bg-gray-100"
      >

        <h2 className="text-4xl font-bold text-center mb-16">
          Powerful Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <Card
            icon={<FaRobot />}
            title="AI Resume Analyzer"
            description="Analyze ATS score and improve your resume instantly."
          />

          <Card
            icon={<FaMicrophone />}
            title="Voice Interviews"
            description="Practice real-time voice interviews using AI."
          />

          <Card
            icon={<FaCode />}
            title="Coding Practice"
            description="Solve coding problems with online compiler support."
          />

          <Card
            icon={<FaChartLine />}
            title="Dashboard Analytics"
            description="Track your performance and improvement."
          />

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold mb-4">
            How It Works
          </h2>

          <p className="text-gray-500">
            Simple AI-powered interview preparation process
          </p>

        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">

          {/* Step 1 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">

            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              1
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Upload Resume
            </h3>

            <p className="text-gray-600">
              Upload your resume for AI analysis.
            </p>

          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">

            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              2
            </div>

            <h3 className="text-xl font-semibold mb-2">
              AI Analysis
            </h3>

            <p className="text-gray-600">
              AI evaluates your resume and skills.
            </p>

          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">

            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              3
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Mock Interview
            </h3>

            <p className="text-gray-600">
              Practice AI-powered interviews.
            </p>

          </div>

          {/* Step 4 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">

            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              4
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Feedback
            </h3>

            <p className="text-gray-600">
              Get instant AI performance feedback.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER / ABOUT */}
      <footer
        id="about"
        className="bg-black text-white py-10 text-center"
      >

        <h2 className="text-2xl font-bold text-blue-500">
          InterviewAI
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto px-4">
          AI-powered interview preparation platform helping students
          improve technical, coding, and communication skills.
        </p>

        <p className="mt-6 text-gray-500">
          © 2026 All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}