export default function Sidebar() {
  return (
    <div className="w-88 bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-gray-100 sticky top-7">
      <nav className="space-y-4">
        {/* Top Picks - Featured */}
        <div className="">
          <h3 className="text-red-500 font-semibold text-lg mb-0">
            Top Picks
          </h3>
        </div>
        
        {/* Navigation Links */}
        <div className="space-y-1">
          <a 
            href="#key-facts" 
            className="block text-gray-700 hover:text-red-500 hover:underline transition-colors duration-200 py-2 text-base font-medium"
          >
            Key Facts
          </a>
          
          <a 
            href="#why-crypto-casinos" 
            className="block text-gray-700 hover:text-red-500 hover:underline transition-colors duration-200 py-2 text-base font-medium"
          >
            Why Use Crypto Casinos?
          </a>
          
          <a 
            href="#how-to-deposit" 
            className="block text-gray-700 hover:text-red-500 hover:underline transition-colors duration-200 py-2 text-base font-medium"
          >
            How to Deposit Using Crypto
          </a>
          
          <a 
            href="#ranking-methodology" 
            className="block text-gray-700 hover:text-red-500 hover:underline transition-colors duration-200 py-2 text-base font-medium"
          >
            How We Rank & Test Crypto Casinos
          </a>
          
          <a 
            href="#casino-assistant" 
            className="block text-gray-700 hover:text-red-500 hover:underline transition-colors duration-200 py-2 text-base font-medium"
          >
            Ask Our Casino Assistant
          </a>
          
          <a 
            href="#faq" 
            className="block text-gray-700 hover:text-red-500 hover:underline transition-colors duration-200 py-2 text-base font-medium"
          >
            Frequently Asked Questions
          </a>
        </div>
      </nav>
    </div>
  );
}