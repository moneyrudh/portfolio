export default function Header() {
    return (
      <div className="flex flex-col items-center mb-16 mt-12">
        <div className="relative w-32 h-32 mb-6 overflow-hidden rounded-full border-2 border-black shadow-lg">
          {/* Using regular img tag instead of next/image to avoid warnings */}
          <img
            src="/profile-picture.jpg"
            alt="ani"
            className="absolute w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-5xl mb-2 text-maroon-200 tracking-tight">ani</h1>
        
        <p className="text-maroon-300 mb-4">
          software engineer • nyc
        </p>
        
        <div className="flex space-x-1">
          <a 
            href="mailto:ani@moneyrudh.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-maroon-300 hover:text-maroon-200 hover:bg-maroon-800 hover:underline-offset-4 transition-colors p-1 rounded-md"
          >
            email
          </a>
          <span className="text-maroon-300 mx-2 px-0.5 py-1">•</span>
          <a 
            href="https://github.com/moneyrudh"
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-maroon-300 hover:text-maroon-200 hover:bg-maroon-800 hover:underline-offset-4 transition-colors p-1 rounded-md"
          >
            github
          </a>
        </div>
      </div>
    );
  }