import { Quote } from "lucide-react"

export function FounderSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Founder's Note</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="aspect-video bg-primary-foreground/10 rounded-2xl overflow-hidden">
              <video className="w-full h-full object-cover" controls poster="/founder-video-thumbnail.png">
                <source src="https://your-video-url.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-white/80 mt-4 text-sm">Watch our founder's message</p>
          </div>

          <div className="relative bg-yellow-400 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-black/30" />
            <div className="relative">
              <p className="text-lg lg:text-xl text-black leading-relaxed mb-6">
                The future of our society depends on how well we nurture and develop our children today. By empowering
                parents, teachers, communities, and service providers with the right knowledge, skills, and resources,
                we can create an environment where every child has the opportunity to thrive.
              </p>
              <p className="text-lg lg:text-xl text-black leading-relaxed">
                Our work is not just about individual children—it's about building stronger families, more engaged
                communities, and a better future for all. Together, we can make a lasting difference in the lives of
                children and create the foundation for a more compassionate world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
