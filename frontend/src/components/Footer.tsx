const footerSections = [
  {
    title: 'Rent',
    links: [
      { label: 'All Equipment', href: '/' },
      { label: 'Location Directory', href: '/' },
    ],
  },
  {
    title: 'Buy',
    links: [
      { label: 'Buy New', href: '/' },
      { label: 'Buy Used', href: '/' },
      { label: 'Parts & Tools', href: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/' },
      { label: 'Careers', href: '/' },
      { label: 'Contact', href: '/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Pay Bill', href: '/' },
      { label: 'Request Service', href: '/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
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
