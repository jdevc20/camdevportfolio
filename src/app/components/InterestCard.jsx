export default function InterestCard({ icon: Icon, title, description }) {
    return (
      <div className="bg-amber-100 p-6 rounded-full shadow-md hover:rounded-2xl transition-shadow duration-300 flex flex-col items-center text-center">
        <Icon className="text-3xl text-indigo-500 mb-3" />
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    );
  }
  