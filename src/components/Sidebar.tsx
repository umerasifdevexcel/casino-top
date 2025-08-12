export default function Sidebar() {
  const navigationLinks = [
    { href: "#key-facts", text: "Key Facts" },
    { href: "#why-crypto-casinos", text: "Why Use Crypto Casinos?" },
    { href: "#how-to-deposit", text: "How to Deposit Using Crypto" },
    { href: "#ranking-methodology", text: "How We Rank & Test Crypto Casinos" },
    { href: "#casino-assistant", text: "Ask Our Casino Assistant" },
    { href: "#faq", text: "Frequently Asked Questions" }
  ];

  const linkStyle = {
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0%',
    color: '#555A65',
    transition: 'all 0.2s ease'
  };

  const headingStyle = {
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0%',
    color: '#FF3B30'
  };

  return (
    <div className="w-88 bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-gray-100 sticky top-7 ml-6">
      <nav className="space-y-4">
        {/* Top Picks - Featured */}
        <div className="px-3">
          <h3
            className="mb-0"
            style={headingStyle}
          >
            Top Picks
          </h3>
        </div>
        
        {/* Navigation Links */}
        <div className="space-y-1">
          {navigationLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="block py-2 px-3 rounded hover:underline custom-link-hover"
              style={linkStyle}
            >
              {link.text}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}