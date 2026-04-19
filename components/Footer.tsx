import Link from "next/link";
import { footerData, colors } from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full" style={{ backgroundColor: colors.bordoDark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Brand Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: colors.cream }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span 
                className="font-bold text-xl"
                style={{ color: colors.cream }}
              >
                Yosh Tarixchi
              </span>
            </div>
            <p 
              className="text-sm mb-4 leading-relaxed"
              style={{ color: colors.cream }}
            >
              {footerData.description}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {footerData.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-80"
                  style={{ backgroundColor: colors.cream, color: colors.bordo }}
                >
                  <span className="font-bold text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="font-bold text-lg mb-4"
              style={{ color: colors.cream }}
            >
              Tezkor havolalar
            </h3>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:opacity-80"
                    style={{ color: colors.cream }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 
              className="font-bold text-lg mb-4"
              style={{ color: colors.cream }}
            >
              Resurslar
            </h3>
            <ul className="space-y-2">
              {footerData.resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-sm transition-colors duration-200 hover:opacity-80"
                    style={{ color: colors.cream }}
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 
              className="font-bold text-lg mb-4"
              style={{ color: colors.cream }}
            >
              Yordam
            </h3>
            <ul className="space-y-2 mb-4">
              {footerData.support.map((support) => (
                <li key={support.href}>
                  <Link
                    href={support.href}
                    className="text-sm transition-colors duration-200 hover:opacity-80"
                    style={{ color: colors.cream }}
                  >
                    {support.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href={`mailto:${footerData.contact.email}`}
                className="text-sm flex items-center space-x-2 transition-colors duration-200 hover:opacity-80"
                style={{ color: colors.cream }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>{footerData.contact.email}</span>
              </a>
              <div 
                className="text-sm flex items-center space-x-2"
                style={{ color: colors.cream }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>{footerData.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t pt-8" style={{ borderColor: colors.bordo }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div 
              className="text-sm"
              style={{ color: colors.cream }}
            >
              © {currentYear} Yosh Tarixchi. Barcha huquqlar himoyalangan.
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link
                href="/terms"
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: colors.cream }}
              >
                Foydalanish shartlari
              </Link>
              <Link
                href="/privacy"
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: colors.cream }}
              >
                Maxfiylik siyosati
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
