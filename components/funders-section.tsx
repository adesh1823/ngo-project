export function FundersSection() {
  const funders = [
    { name: "CRY", logo: "/1st.avif" },
    { name: "Inter-Aide", logo: "/2nd.avif" },
    { name: "Bansuri Foundation", logo: "/3rd.avif" },
    { name: "Kirloskar", logo: "/4th.avif" },
    { name: "Zilla Parishad", logo: "/5t.avif" },
    { name: "Persistent", logo: "/6.avif" },
    { name: "Yardi", logo: "/7.avif" },
    { name: "Rotary", logo: "/8.avif" },
    { name: "United Way", logo: "/9.avif" },
    { name: "Tata Trust", logo: "/10.avif" },
    { name: "Infosys Foundation", logo: "/11.avif" },
    { name: "Wipro Cares", logo: "/12.avif" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Funders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are grateful for the support of these organizations who share our vision of creating a better future for
            children.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {funders.map((funder, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={funder.logo || "/placeholder.svg"}
                alt={`${funder.name} logo`}
                className="max-h-16 max-w-full object-contain hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
