export default function Footer() {
    return (
      <footer className="bg-emerald-300 text-gray-800 py-4 mt-12 rounded-t-2xl shadow-inner">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} John Dave Camarin Portfolio</p>
        </div>
      </footer>
    );
  }
  