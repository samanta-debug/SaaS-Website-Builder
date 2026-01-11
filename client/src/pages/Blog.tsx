export default function Blog() {
  const posts = [
    {
      title: "The Future of B2B SaaS",
      excerpt: "How AI and machine learning are reshaping the enterprise software landscape.",
      date: "Oct 12, 2025"
    },
    {
      title: "Scaling Your Engineering Team",
      excerpt: "Best practices for growing your technical team without losing velocity.",
      date: "Oct 5, 2025"
    },
    {
      title: "Security in the Cloud Era",
      excerpt: "Essential steps to ensure your data remains protected in a distributed world.",
      date: "Sep 28, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12 py-20">
        <h1 className="text-5xl font-bold">Blog</h1>
        <div className="space-y-12">
          {posts.map((post, idx) => (
            <article key={idx} className="border-b border-white/10 pb-8">
              <span className="text-sm text-gray-500">{post.date}</span>
              <h2 className="text-2xl font-bold mt-2 mb-4 hover:text-primary cursor-pointer">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <span className="text-primary cursor-pointer font-medium">Read more →</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
