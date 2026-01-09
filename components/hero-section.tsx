import { ArrowRight, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Droplets className="w-4 h-4" />
              Custom Branded Plastic Bottles
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Your Brand on
              <span className="text-primary"> Every Table</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Wateru delivers premium custom branded plastic water bottles for restaurants, hotels, banquet halls, and
              catering services across India. Elevate your guest experience with every sip.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                <Link href="#contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-border hover:bg-secondary bg-transparent"
              >
                <Link href="#clients">See Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 pt-8 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">1M+</p>
                <p className="text-sm text-muted-foreground">Bottles Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">24h</p>
                <p className="text-sm text-muted-foreground">Fast Delivery</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              <img
                src="/anantha-executive-suites-bottle.jpg"
                alt="Custom branded plastic water bottle for Anantha Executive Suites"
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card shadow-xl rounded-2xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Premium Quality</p>
                  <p className="text-xs text-muted-foreground">BPA Free & Safe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
