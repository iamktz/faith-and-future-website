export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Faith and Future</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Faith and Future exists to create a welcoming space for doubters, seekers, and anyone exploring Christian faith. Our mission is to share hope, tackle hard questions, and encourage honest conversation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe real faith can stand up to real questions—and that Jesus meets people wherever they are.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                <i className="fas fa-search mr-2"></i>
                For Seekers
              </h3>
              <p className="text-blue-800">
                Whether you're curious about faith for the first time or returning after time away, you'll find resources that honor your questions and respect your journey.
              </p>
            </div>
            
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                <i className="fas fa-question-circle mr-2"></i>
                For Doubters
              </h3>
              <p className="text-emerald-800">
                Doubt isn't the enemy of faith—it's often the pathway to deeper understanding. We provide thoughtful responses to life's biggest questions.
              </p>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Honesty</h4>
                <p className="text-gray-600">We welcome authentic questions and real struggles without pretense.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Grace</h4>
                <p className="text-gray-600">Everyone is welcome, regardless of where they are in their journey.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Hope</h4>
                <p className="text-gray-600">We believe there's always reason for hope, even in the darkest seasons.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
