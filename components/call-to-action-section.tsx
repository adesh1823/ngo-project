import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Mail } from "lucide-react"

export function CallToActionSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Every contribution, no matter the size, makes a difference. Choose how you'd like to help create positive
            change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-primary-foreground text-foreground hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Make a Donation</h3>
              <p className="text-muted-foreground mb-6">
                Your financial support directly funds our programs and helps us reach more communities in need.
              </p>
              <Button className="w-full">Donate Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground text-foreground hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Volunteer</h3>
              <p className="text-muted-foreground mb-6">
                Share your skills and time to make a direct impact. We have opportunities both locally and
                internationally.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Join Us
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground text-foreground hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
              <p className="text-muted-foreground mb-6">
                Get updates on our programs, success stories, and ways you can help make a difference.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Subscribe
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
