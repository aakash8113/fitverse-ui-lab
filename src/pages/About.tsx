import { Sparkles, Users, Target, Leaf, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import heroAI from "@/assets/hero-ai.jpg";

const values = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "We're pushing the boundaries of AI technology to revolutionize how people shop for fashion.",
  },
  {
    icon: Users,
    title: "Customer Obsessed",
    description: "Every feature we build starts with our customers' needs. Your satisfaction drives our success.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "From our thrift marketplace to reducing returns, we're committed to sustainable fashion.",
  },
];

const milestones = [
  { year: "2023", title: "Founded", description: "Fitverse launched with a vision to transform online fashion shopping" },
  { year: "2024", title: "AI Try-On Beta", description: "Released our first AI virtual try-on feature to 10,000 beta users" },
  { year: "2024", title: "Series A", description: "Raised $12M to scale our technology and expand our team" },
  { year: "2025", title: "Thrift Launch", description: "Introduced our sustainable thrift marketplace" },
];

const team = [
  { name: "Alex Chen", role: "CEO & Co-founder", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Sarah Williams", role: "CTO & Co-founder", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Marcus Johnson", role: "Head of AI", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Emma Davis", role: "Head of Design", image: "https://randomuser.me/api/portraits/women/4.jpg" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-ai-subtle" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge-ai mx-auto mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Transforming Fashion
              <br />
              <span className="gradient-ai-text">with AI</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We believe everyone deserves to shop with confidence. Our AI technology eliminates 
              the guesswork from online shopping, reducing returns and revolutionizing the fashion experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                Making Fashion Shopping 
                <br />
                Personal & Sustainable
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Online fashion shopping has always had one major problem: you can't try before you buy. 
                This leads to massive return rates, wasted shipping, and frustrated customers.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Fitverse changes everything. Our AI-powered virtual try-on technology lets you see exactly 
                how clothes will look on your body, from anywhere. Combined with our sustainable thrift 
                marketplace, we're building a more personal and planet-friendly way to shop.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-4xl font-bold gradient-ai-text">73%</p>
                  <p className="text-sm text-muted-foreground">Less Returns</p>
                </div>
                <div>
                  <p className="text-4xl font-bold gradient-ai-text">2M+</p>
                  <p className="text-sm text-muted-foreground">Try-Ons</p>
                </div>
                <div>
                  <p className="text-4xl font-bold gradient-ai-text">4.9</p>
                  <p className="text-sm text-muted-foreground">User Rating</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src={heroAI}
                  alt="Fitverse AI Technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-ai rounded-2xl blur-3xl opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-3xl p-8 border border-border/50 text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-ai flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Key milestones in our story</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year + milestone.title} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-ai flex items-center justify-center text-white font-bold text-sm">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm text-accent font-medium">{milestone.year}</p>
                  <h3 className="text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">The people behind Fitverse</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="section-container">
          <div className="gradient-ai rounded-3xl p-12 lg:p-16 text-center text-white">
            <Award className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Us on This Journey</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Whether you're shopping, selling, or just curious about the future of fashion — we'd love to have you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/fitverse-ai">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Try AI Try-On
                </Button>
              </Link>
              <Link to="/shop">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
