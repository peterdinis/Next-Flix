import { FC } from "react";
import Link from "next/link";

const NotFound: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-4xl font-bold text-blue-50 mb-4">404</h1>
        <p className="text-xl text-blue-50 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    )
}

export default NotFound