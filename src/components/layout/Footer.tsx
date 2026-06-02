import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Aquon
            </h3>
            <p className="text-sm text-neutral-300">
              The Operating System for Portfolio Management.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/zeton" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Zeton Platform
                </Link>
              </li>
              <li>
                <Link href="/why-zeton" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Why Zeton
                </Link>
              </li>
              <li>
                <Link href="/customers" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Customers
                </Link>
              </li>
              {/* <li>
                <Link href="/pricing" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Pricing
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/company" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Technology
                </Link>
              </li>
              {/* <li>
                <Link href="/careers" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Careers
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources — hidden until a sanitized public Aqua Technical Brief exists */}
          {/* <div>
            <h4 className="font-semibold text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources#whitepapers" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  White Papers
                </Link>
              </li>
              <li>
                <Link href="/resources#case-studies" className="text-neutral-300 hover:text-vibrant-teal transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Column 5: Connect */}
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
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-vibrant-teal">
              Privacy Policy
            </Link>
            <span className="text-neutral-500">|</span>
            <Link href="/terms" className="hover:text-vibrant-teal">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
