export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hello World!
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Welcome to your first Next.js application. This is a simple Hello World page built with modern styling.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <div className="px-6 py-3 bg-white rounded-lg shadow-md">
            <span className="text-sm text-gray-500">Built with</span>
            <p className="font-semibold text-gray-800">Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}