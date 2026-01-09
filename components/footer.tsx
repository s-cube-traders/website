import Link from "next/link"
import { Droplets } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Droplets className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">S CUBE TRADERS</h3>
                <p className="text-xs tracking-widest text-background/60 uppercase">Wateru</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md">
              Wateru by S Cube Traders - Your trusted partner for premium custom branded water bottles. Serving the
              hospitality industry with quality and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link href="#why" className="hover:text-background transition-colors">
                  Why Wateru
                </Link>
              </li>
              <li>
                <Link href="#clients" className="hover:text-background transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-background transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <span className="text-background">Wateru</span> - Custom Water Bottles
              </li>
              <li>
                <span className="text-background/50">Coming Soon</span> - More Services
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} S Cube Traders. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
