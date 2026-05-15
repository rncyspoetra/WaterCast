export default function BaseErrorLayout({ title, description }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md w-full">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>

        {/* Description */}
        <p className="text-gray-500 mb-6">{description}</p>
      </div>
    </div>
  );
}
