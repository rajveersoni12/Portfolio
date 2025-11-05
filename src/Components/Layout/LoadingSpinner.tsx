const LoadingSpinner = () => {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="relative">
        {/* Main spinner */}
        <div className="w-16 h-16 border-4 border-gray-800 border-t-white rounded-full animate-spin"></div>

        {/* Optional: Add a pulsing effect */}
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
