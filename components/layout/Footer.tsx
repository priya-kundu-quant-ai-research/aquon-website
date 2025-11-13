import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-light border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-white">Aquon AI</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Democratizing access to institutional-grade AI for wealth
              management, empowering investors of all sizes to achieve their
              financial goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-brand-cyan transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/platform"
                  className="text-gray-400 hover:text-brand-cyan transition-colors text-sm"
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-gray-400 hover:text-brand-cyan transition-colors text-sm"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="text-gray-400 hover:text-brand-cyan transition-colors text-sm"
                >
                  Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/company#contact"
                  className="text-gray-400 hover:text-brand-cyan transition-colors text-sm"
                >
                  Request a Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/company#contact"
                  className="text-gray-400 hover:text-brand-cyan transition-colors text-sm"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  href="/company#join"
                  className="text-gray-400 hover:text-brand-cyan transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Aquon AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-brand-cyan transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-brand-cyan transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}