import NavbarRetro from "./components/navbar";

export default function HomePageRetro() {
  const posts = [
    {
      title: "A magia dos 16-bits",
      desc: "Revisitando a era dourada dos consoles e pixels gigantes.",
    },
    {
      title: "Top 5 RPGs clássicos",
      desc: "Uma viagem pelos mundos que moldaram gerações.",
    },
    {
      title: "Arcades inesquecíveis",
      desc: "Luzes neon, fichas e recordes eternos.",
    },
  ];

  const consoles = [
    { name: "PS1", link: "/PS1Page" },
    { name: "PS2", link: "/PS2Page" },
    { name: "GameCube", link: "/GameCubePage" },
    { name: "Wii", link: "/WiiPage" },
    { name: "Dreamcast", link: "/DreamcastPage" },
    { name: "Xbox Clássico", link: "/XboxPage" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-gray-950 text-white">
      <NavbarRetro />

      {/* HERO */}
      <section className="p-10 text-center h-96">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
          Explorando o universo retrô
        </h2>

        <p className="max-w-xl mx-auto text-gray-300 mb-6 text-lg">
          Notícias, análises e lembranças de uma época onde cada pixel carregava aventura.
        </p>

        <button className="rounded-2xl text-lg px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition">
          Ver artigos recentes
        </button>
      </section>

      {/* 🎮 TAB DE CONSOLES */}
      <section className="px-6 md:px-10 pb-12">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-400">
          🎮 Consoles
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {consoles.map((console, i) => (
            <a
              key={i}
              href={console.link}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-600 hover:border-purple-500 hover:scale-105 transition"
            >
              {console.name}
            </a>
          ))}
        </div>
      </section>

      {/* POSTS */}
      <section className="grid md:grid-cols-3 gap-6 px-6 md:px-10 pb-16">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl shadow-lg p-6 hover:scale-[1.03] hover:border-purple-500 transition"
          >
            <h3 className="text-xl font-semibold mb-2 hover:text-purple-400 transition">
              {post.title}
            </h3>

            <p className="text-gray-400 mb-4">{post.desc}</p>

            <button className="rounded-xl border border-white/20 px-4 py-2 hover:bg-purple-600 hover:border-purple-600 transition">
              Ler mais
            </button>
          </div>
        ))}
      </section>

      {/* SEPARADOR */}
      <div className="border-t border-white/10 my-8">
        <h2 className="text-center text-2xl font-bold text-purple-400 mt-4">
          E tem mais...
        </h2>
        <p className="text-center text-gray-400 mt-2">
          Fique ligado para análises de consoles, entrevistas com desenvolvedores e muito mais!
        </p>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 p-6 border-t border-white/10">
        © {new Date().getFullYear()} RetroPlay. Feito com nostalgia 🕹️
      </footer>
    </div>
  );
}