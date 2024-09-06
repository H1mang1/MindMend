const Offers = () => {
    return (
      <section id="offers" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <span className="text-lg font-bold text-purple-500 bg-purple-200 pl-4 pr-4 pt-1.5 pb-1.5 rounded-lg">
            Looking for therapy?
          </span>
          <h1 className="text-3xl font-bold mt-4 mb-8">What Wellzy offers</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:translate-y-[-6px] flex flex-col items-center">
              <img src="/images/chat.jpg" alt="chat" className="w-22 h-12 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">AI Counselor</h3>
              <p className="text-gray-700 text-sm text-center">Get immediate support with our AI counselor. A secure and private chat bot, available 24/7. All your data is encrypted and no one has access to your chat history.</p>
            </div>
            <div className="card bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:translate-y-[-6px] flex flex-col items-center">
              <img src="/images/search.jpg" alt="search" className="w-22 h-12 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Find therapists nearby</h3>
              <p className="text-gray-700 text-sm text-center">Use our search tool to find professional therapists near you! Filter for location, insurance and more for the best options for you.</p>
            </div>
            <div className="card bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:translate-y-[-6px] flex flex-col items-center">
              <img src="/images/smiley.jpg" alt="smiley" className="w-22 h-12 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Empathy & understanding</h3>
              <p className="text-gray-700 text-sm text-center">Wellzy is designed to provide empathetic and non-judgmental support, helping you navigate life`&aposs challenges with understanding.</p>
            </div>
            <div className="card bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:translate-y-[-6px] flex flex-col items-center">
              <img src="/images/tools.jpg" alt="tools" className="w-22 h-12 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Learn new skills</h3>
              <p className="text-gray-700 text-sm text-center">Unlock the power of CBT to reframe your thinking or DBT to help manage emotions and reduce conflict in relationships.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Offers;
  