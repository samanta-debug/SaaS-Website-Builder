import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12 py-20">
        <h1 className="text-5xl font-bold text-center mb-12">Simple, Transparent Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg border border-white/10 bg-white/5 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <div className="text-3xl font-bold mb-6">$49<span className="text-sm font-normal text-gray-400">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1 text-gray-400">
              <li>Up to 5 users</li>
              <li>Basic analytics</li>
              <li>Standard support</li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          <div className="p-8 rounded-lg border border-primary bg-primary/5 flex flex-col scale-105">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <div className="text-3xl font-bold mb-6">$149<span className="text-sm font-normal text-gray-400">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1 text-gray-400">
              <li>Up to 20 users</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>Custom integrations</li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          <div className="p-8 rounded-lg border border-white/10 bg-white/5 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-6">Custom</div>
            <ul className="space-y-4 mb-8 flex-1 text-gray-400">
              <li>Unlimited users</li>
              <li>Full platform access</li>
              <li>24/7 dedicated support</li>
              <li>SLA guarantees</li>
            </ul>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
