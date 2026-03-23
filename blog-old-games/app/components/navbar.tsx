import { Search, Menu } from "lucide-react";

export default function NavbarRetro() {
  return (
    <header className="sticky top-0 z-50 px-6 py-4 border-b border-white/10 backdrop-blur bg-black/40">
      
      <div className="flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
          <a href="/">🎮 RetroPlay</a>
        </h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" className="hover:text-purple-400 transition">Home</a>
          <a href="/consoles" className="hover:text-purple-400 transition">Consoles</a>
          <a href="/sobre" className="hover:text-purple-400 transition">Sobre</a>
        </nav>

        {/* SEARCH */}
        <div className="hidden md:flex items-center gap-2 w-80 relative">
          <Search className="absolute left-3 w-4 h-4 text-white/50" />
          
          <input
            type="text"
            placeholder="Buscar jogos..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-white/40"
          />
          
          <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-600/30">
            Buscar
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20">
          <Menu />
        </button>

      </div>
    </header>
  );
}