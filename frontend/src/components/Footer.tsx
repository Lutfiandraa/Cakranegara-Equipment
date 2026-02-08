export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="font-bold text-white hover:text-amber-400 transition-colors">
            Cakranegara
          </a>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Cakranegara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
