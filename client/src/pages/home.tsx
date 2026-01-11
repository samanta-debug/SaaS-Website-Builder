import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadDialog } from "@/components/lead-dialog";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight">SaaS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#product" className="hover:text-foreground transition-colors">Product</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block text-sm font-medium hover:text-foreground transition-colors text-muted-foreground">Log in</a>
            <LeadDialog>
              <Button size="sm" className="rounded-full px-6 bg-white text-black hover:bg-white/90">
                Get Started
              </Button>
            </LeadDialog>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-medium text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Enterprise SaaS Platform v2.0 is live
              </div>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
            >
              Transform Your Business with <br />
              <span className="text-white">Modern SaaS Solutions</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Streamline operations, boost productivity, and scale your business with our enterprise-grade platform designed for the modern web.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <LeadDialog>
                <Button size="lg" className="h-12 px-8 rounded-full text-base bg-white text-black hover:bg-white/90 glow-effect w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </LeadDialog>
              
              <LeadDialog>
                <Button variant="outline" size="lg" className="h-12 px-8 rounded-full text-base border-muted-foreground/20 hover:bg-secondary w-full sm:w-auto">
                  Schedule Demo
                </Button>
              </LeadDialog>
            </motion.div>
          </motion.div>

          {/* Abstract Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 100, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 relative mx-auto max-w-5xl perspective-1000"
            style={{ perspective: "1000px" }}
          >
            <div className="relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl shadow-blue-500/10 p-2 transform transition-transform hover:scale-[1.01] duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl pointer-events-none" />
              <div className="aspect-[16/9] rounded-lg bg-[#0A0A0A] overflow-hidden relative grid place-items-center">
                 {/* Abstract UI representation without actual image */}
                 <div className="absolute inset-0 grid grid-cols-12 gap-4 p-8 opacity-50">
                    <div className="col-span-3 bg-white/5 rounded-lg h-full" />
                    <div className="col-span-9 space-y-4">
                       <div className="h-32 bg-white/5 rounded-lg w-full" />
                       <div className="grid grid-cols-3 gap-4">
                          <div className="h-40 bg-white/5 rounded-lg" />
                          <div className="h-40 bg-white/5 rounded-lg" />
                          <div className="h-40 bg-white/5 rounded-lg" />
                       </div>
                    </div>
                 </div>
                 <div className="text-white/20 font-mono text-sm">Dashboard Preview</div>
              </div>
            </div>
            {/* Glow behind the dashboard */}
            <div className="absolute -inset-4 bg-gradient-to-t from-blue-500/20 to-purple-500/20 blur-3xl -z-10 opacity-50" />
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-32 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to scale</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform provides all the tools and integrations you need to manage your business efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed and performance, ensuring your team never waits for data to load."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade encryption and security protocols to keep your data safe and compliant."
              },
              {
                icon: Globe,
                title: "Global Infrastructure",
                description: "Deployed on the edge to ensure low latency access for your users worldwide."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-secondary/50 border border-white/5 hover:bg-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-black border border-white/10 text-center p-12 md:p-24">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to transform your workflow?</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of enterprise teams who have already made the switch. Start your 14-day free trial today.
              </p>
              <LeadDialog>
                <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-white text-black hover:bg-white/90">
                  Get Started Now
                </Button>
              </LeadDialog>
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> 14-day free trial
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-xs">S</span>
                </div>
                <span className="font-bold">SaaS</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building the future of enterprise software.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 SaaS Platform Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
