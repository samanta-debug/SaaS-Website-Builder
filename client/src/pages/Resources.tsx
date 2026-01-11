export default function Resources() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12 py-20">
        <h1 className="text-5xl font-bold">Resources</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Documentation</h2>
            <p className="text-gray-400">Everything you need to get started with our API and platform.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
            <p className="text-gray-400">See how other companies are transforming their business with us.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Webinars</h2>
            <p className="text-gray-400">Watch our latest product demos and strategy sessions.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
