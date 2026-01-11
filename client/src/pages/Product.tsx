export default function Product() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12 py-20">
        <h1 className="text-5xl font-bold">Our Product</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold mb-2">Scalable Infrastructure</h3>
            <p className="text-gray-400">Built to handle your business as it grows, from startup to enterprise.</p>
          </div>
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
            <p className="text-gray-400">Real-time insights to help you make data-driven decisions.</p>
          </div>
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold mb-2">Security First</h3>
            <p className="text-gray-400">Enterprise-grade security and compliance out of the box.</p>
          </div>
          <div className="p-6 rounded-lg border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold mb-2">API Integration</h3>
            <p className="text-gray-400">Seamlessly connect with your existing tools and workflows.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
