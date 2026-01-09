import { Droplets, BadgeCheck, Truck, Palette } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Full-color printing with your logo, colors, and design. Make every bottle a brand ambassador.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description:
      "BPA-free plastic bottles with crystal-clear water. Food-grade materials that meet industry standards.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "On-time delivery across your locations. Flexible scheduling to match your event calendar.",
  },
  {
    icon: Droplets,
    title: "Eco-Friendly",
    description: "Recyclable plastic options available. Support your green initiatives with responsible materials.",
  },
]

export function WhySection() {
  return (
    <section id="why" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Premium Branding Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            At Wateru, we understand that every detail matters in hospitality. Our custom branded plastic water bottles
            help you create memorable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
