import Link from "next/link";

const footerLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B1918] border-t border-white/8 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                GILL<span className="text-[#C8644E]">OPS</span>
              </span>
            </Link>
            <p className="text-[#9E9B93] text-sm leading-relaxed max-w-xs">
              Websites, AI automation, and SEO systems for businesses that need
              more than a static online presence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#9E9B93] hover:text-[#C8644E] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:gill0px@gmail.com"
                className="block text-[#9E9B93] hover:text-[#C8644E] transition-colors duration-300 text-sm"
              >
                gill0px@gmail.com
              </a>
              <a
                href="tel:+917740002634"
                className="block text-[#9E9B93] hover:text-[#C8644E] transition-colors duration-300 text-sm"
              >
                +91 774-000-2634
              </a>
              <a
                href="https://www.linkedin.com/in/dilshaangill/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#9E9B93] hover:text-[#C8644E] transition-colors duration-300 text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B6863] text-sm">
            &copy; {new Date().getFullYear()} GILLOPS. Remote-first since 2025.
          </p>
          <p className="text-[#6B6863] text-sm">
            Based in India — working with clients globally.
          </p>
        </div>
      </div>
    </footer>
  );
}
