import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand (no tagline — the company carries none) */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Aquon
            </h3>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/zeton" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Zeton
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/technology" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/company/aquon-ai-inc/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-vibrant-teal transition-colors"
                >
                  LinkedIn Aquon
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zeton-ai/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-vibrant-teal transition-colors"
                >
                  LinkedIn Zeton
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-700 text-center text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Aquon Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
