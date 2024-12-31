import { Button } from '@/components/ui/button';
import { Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary-blue max-w-4xl mx-auto">
          Transform Your Business with Scotland's Leading AI Expert
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ranked #1 among 10,000+ global AI specialists, bringing enterprise-level AI solutions to businesses of all sizes across Scotland and the UK.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" className="bg-primary-blue hover:bg-primary-blue/90">
            Get Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary-blue">
              Democratising AI Technology with Scottish Practicality
            </h2>
            <p className="text-lg text-muted-foreground">
              Our innovative automated assessment system provides instant, transparent pricing and recommendations, making world-class AI consultancy accessible to every business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Brain className="h-8 w-8 text-primary-blue" />
            <h3 className="text-xl font-semibold">AI Consultancy</h3>
            <p className="text-muted-foreground">Expert guidance tailored to your business size and sector.</p>
            <Link to="/services" className="text-primary-blue hover:underline inline-flex items-center">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            <Brain className="h-8 w-8 text-primary-purple" />
            <h3 className="text-xl font-semibold">Learning Platform</h3>
            <p className="text-muted-foreground">Access comprehensive AI education with Scottish business context.</p>
            <Link to="/learning" className="text-primary-blue hover:underline inline-flex items-center">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            <Brain className="h-8 w-8 text-secondary-green" />
            <h3 className="text-xl font-semibold">Implementation Support</h3>
            <p className="text-muted-foreground">End-to-end assistance with system integration and optimization.</p>
            <Link to="/services" className="text-primary-blue hover:underline inline-flex items-center">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-blue text-white py-16">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get your free assessment today and join the hundreds of Scottish businesses already benefiting from our expertise.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-primary-blue hover:bg-white/90">
            Start Free Assessment
          </Button>
        </div>
      </section>
    </div>
  );
}