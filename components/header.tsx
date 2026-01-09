"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const services = [
  { name: "Wateru", description: "Custom Branded Water Bottles", href: "#", active: true },
  { name: "Coming Soon", description: "New Services", href: "#", active: false },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(services[0])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Droplets className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground">S CUBE TRADERS</span>
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase">Wateru</span>
          </div>
        </Link>

        {/* Service Switcher - Desktop */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 text-sm font-medium hover:bg-secondary">
                <span className="text-primary font-semibold">{activeService.name}</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              {services.map((service) => (
                <DropdownMenuItem
                  key={service.name}
                  onClick={() => service.active && setActiveService(service)}
                  className={!service.active ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{service.name}</span>
                    <span className="text-xs text-muted-foreground">{service.description}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="#why" className="text-muted-foreground hover:text-foreground transition-colors">
              Why Wateru
            </Link>
            <Link href="#clients" className="text-muted-foreground hover:text-foreground transition-colors">
              Clients
            </Link>
            <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
              Process
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-b border-border">
          <div className="px-6 py-4 space-y-4">
            {/* Service Switcher - Mobile */}
            <div className="pb-4 border-b border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Our Services</p>
              {services.map((service) => (
                <button
                  key={service.name}
                  onClick={() => {
                    if (service.active) {
                      setActiveService(service)
                      setMobileMenuOpen(false)
                    }
                  }}
                  className={`block w-full text-left py-2 ${
                    activeService.name === service.name
                      ? "text-primary font-semibold"
                      : service.active
                        ? "text-foreground"
                        : "text-muted-foreground opacity-50"
                  }`}
                >
                  {service.name}
                  <span className="text-xs text-muted-foreground block">{service.description}</span>
                </button>
              ))}
            </div>

            <Link
              href="#why"
              className="block py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Wateru
            </Link>
            <Link
              href="#clients"
              className="block py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="#process"
              className="block py-2 text-foreground font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </Link>
            <Button asChild className="w-full bg-primary text-primary-foreground mt-4 rounded-full">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
