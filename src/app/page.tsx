import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Users, TrendingUp, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-grape-50 via-white to-vine-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-grape-500 to-vine-500 rounded-lg"></div>
            <span className="text-2xl font-bold gradient-text">GRPVNE</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-gradient-to-r from-grape-500 to-vine-500 hover:from-grape-600 hover:to-vine-600">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The{' '}
            <span className="gradient-text">Zapier</span>
            {' '}for{' '}
            <span className="gradient-text">Creator Tools</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Automate your creative workflows across AI services and social platforms. 
            Increase your content output 5-10x while reducing operational overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="bg-gradient-to-r from-grape-500 to-vine-500 hover:from-grape-600 hover:to-vine-600 text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Creators Choose GRPVNE</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform scattered, manual creative processes into automated, intelligent workflows
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="w-12 h-12 bg-grape-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-grape-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
            <p className="text-muted-foreground">
              Connect 20+ AI tools and social platforms in visual workflows without coding
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="w-12 h-12 bg-vine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-vine-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Creator-First Design</h3>
            <p className="text-muted-foreground">
              Built by creators for creators with intuitive drag-and-drop interface
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="w-12 h-12 bg-grape-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-grape-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
            <p className="text-muted-foreground">
              Track workflow performance and optimize for maximum ROI
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="w-12 h-12 bg-vine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-vine-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Platform Independence</h3>
            <p className="text-muted-foreground">
              Reduce dependency on any single platform with multi-channel distribution
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to 10x Your Content Output?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of creators who have automated their workflows with GRPVNE
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="bg-gradient-to-r from-grape-500 to-vine-500 hover:from-grape-600 hover:to-vine-600 text-lg px-8 py-4">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}