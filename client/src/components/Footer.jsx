export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-black border-t border-white/20 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-white">Social Grabber</h2>
          <p className="text-white/70 mb-4">
            Download any video from our premium  softwares. No Ads.
          </p>
          <p className="text-xs text-white/50">&copy; {new Date().getFullYear()} Social Grabber Inc.</p>
        </div>

        {/* Column 2: Product */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">App Download</a></li>
            <li><a href="#" className="hover:underline">Roadmap</a></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Report a Bug</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 px-4 flex flex-col md:flex-row justify-between items-center text-white/60 text-xs">
        <span>Made with ❤️ by Team GhostBuilders</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
