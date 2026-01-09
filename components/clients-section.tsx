import { Building2, UtensilsCrossed, PartyPopper, ChefHat } from "lucide-react"

const clientTypes = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "From fine dining to casual eateries, enhance your table presentation with branded bottles.",
  },
  {
    icon: Building2,
    title: "Hotels",
    description: "Room service, conferences, and lobbies - consistent branding throughout your property.",
  },
  {
    icon: PartyPopper,
    title: "Banquet Halls",
    description: "Weddings, corporate events, and celebrations deserve premium branded refreshments.",
  },
  {
    icon: ChefHat,
    title: "Catering Services",
    description: "Deliver your brand promise at every event with professional custom water bottles.",
  },
]

export function ClientsSection() {
  return (
    <section id="clients" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform -rotate-2" />
            <img
              src="/indian-plastic-water-bottles-shrink-wrap-labels.jpg"
              alt="Custom branded plastic water bottles collection with Indian brand labels"
              className="relative rounded-3xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-5 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-sm opacity-90">Brands Delivered</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Who We Serve
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Trusted by the Hospitality Industry Across India
            </h2>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              From boutique restaurants to large hotel chains across India, Wateru provides premium quality and reliable
              service that hospitality businesses depend on.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {clientTypes.map((client) => (
                <div key={client.title} className="flex gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <client.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{client.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{client.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
