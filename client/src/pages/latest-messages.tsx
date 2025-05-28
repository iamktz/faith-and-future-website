export default function LatestMessages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Messages</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Find our latest devotionals, articles, and spiritual insights on our Substack.
        </p>
        
        <div className="bg-gray-50 rounded-2xl p-12 mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-external-link-alt text-blue-600 text-3xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Read Our Latest Content</h2>
          <p className="text-gray-600 mb-8">
            We regularly publish thoughtful articles, devotionals, and responses to common questions about faith. Join our community of readers exploring life's biggest questions.
          </p>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <i className="fas fa-arrow-right mr-2"></i>
            Read on Substack
          </a>
        </div>
        
        <div className="text-sm text-gray-500">
          <p>New content published weekly • Free to read • No subscription required</p>
        </div>
      </div>
    </section>
  );
}
