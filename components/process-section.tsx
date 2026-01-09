const steps = [
  {
    number: "01",
    title: "Share Your Design",
    description: "Send us your logo and brand guidelines. Our team will create mockups for your approval.",
  },
  {
    number: "02",
    title: "Review & Approve",
    description: "Review the digital proofs and request any adjustments until you're completely satisfied.",
  },
  {
    number: "03",
    title: "Production",
    description: "Once approved, we begin production with quality checks at every stage.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Receive your custom branded water bottles delivered right to your doorstep, on schedule.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Simple Steps to Your Custom Bottles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300">
                <div className="text-6xl font-bold text-primary-foreground/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{step.description}</p>
              </div>
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-foreground/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
