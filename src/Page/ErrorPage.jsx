

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-lg text-gray-300 mb-6">Page not found 😕</p>
      <Link
        to="/"
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
