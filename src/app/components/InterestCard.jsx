export default function InterestCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-green-200 p-4 sm:p-2 rounded-lg sm:rounded-full shadow-md hover:rounded-2xl transition-shadow duration-300 flex flex-col items-center text-center">
      <Icon className="text-2xl sm:text-3xl text-green-500 mb-2 sm:mb-3" />
      <h3 className="text-sm sm:text-lg font-semibold mb-1">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600">{description}</p>
    </div>
  );
}
