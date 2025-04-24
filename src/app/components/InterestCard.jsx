export default function InterestCard({ icon: Icon, title, description }) {
    return (
        <div className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            {/* Title with Icon */}
            <h3 className="text-xl sm:text-xl font-semibold text-center bg-blue-200 p-3 rounded-xl mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-center text-gray-700">{description}</p>
        </div>
    );
}
