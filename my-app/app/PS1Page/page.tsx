export default function PS1Page() {
  const games = [
    {
      title: "Final Fantasy VII",
      desc: "Uma das histórias mais marcantes dos games, com Cloud e Sephiroth.",
    },
    {
      title: "Metal Gear Solid",
      desc: "Stealth revolucionário e narrativa cinematográfica.",
    },
    {
      title: "Resident Evil 2",
      desc: "Terror e sobrevivência que definiu o gênero.",
    },
    {
      title: "Crash Bandicoot",
      desc: "O mascote mais caótico do PlayStation.",
    },
    {
      title: "Gran Turismo",
      desc: "Simulação de corrida realista para a época.",
    },
    {
      title: "Castlevania: Symphony of the Night",
      desc: "Um clássico eterno dos metroidvanias.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-purple-950 text-white">

      {/* HEADER */}
      <header className="p-6 border-b border-white/10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          🎮 PlayStation 1
        </h1>
        <p className="text-gray-400 mt-2">
          O console que mudou a história dos videogames
        </p>
      </header>

      {/* HERO */}
      <section className="p-10 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          A revolução dos 32-bits
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-6">
          Lançado em 1994 pela Sony, o PlayStation 1 trouxe gráficos 3D,
          CDs no lugar de cartuchos e uma nova forma de contar histórias
          nos games. Foi aqui que nasceram verdadeiras lendas.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-white/10 rounded-xl">📅 1994</span>
          <span className="px-4 py-2 bg-white/10 rounded-xl">💿 CD-ROM</span>
          <span className="px-4 py-2 bg-white/10 rounded-xl">🧠 32-bits</span>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="px-6 md:px-16 pb-12">
        <h3 className="text-2xl font-bold mb-4 text-purple-400">
          📜 História
        </h3>

        <p className="text-gray-300 leading-relaxed">
          O PlayStation nasceu de uma parceria que deu errado entre Sony e Nintendo.
          Após a ruptura, a Sony decidiu seguir sozinha e criou um dos consoles mais
          icônicos de todos os tempos. Com foco em jogos mais maduros e tecnologia
          avançada para a época, o PS1 dominou o mercado e vendeu mais de 100 milhões
          de unidades.
        </p>
      </section>

      {/* JOGOS */}
      <section className="px-6 md:px-16 pb-16">
        <h3 className="text-2xl font-bold mb-6 text-purple-400">
          🕹️ Jogos Icônicos
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {games.map((game, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.03] hover:border-purple-500 transition"
            >
              <h4 className="text-xl font-semibold mb-2">
                {game.title}
              </h4>
              <p className="text-gray-400">{game.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CURIOSIDADES */}
      <section className="px-6 md:px-16 pb-16">
        <h3 className="text-2xl font-bold mb-4 text-purple-400">
          🤯 Curiosidades
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>👉 O som de inicialização do PS1 é um dos mais icônicos da história.</li>
          <li>👉 Foi o primeiro console a popularizar o uso de CDs.</li>
          <li>👉 O controle DualShock trouxe vibração e analógicos.</li>
          <li>👉 Mudou o foco da indústria para jogos mais cinematográficos.</li>
        </ul>
      </section>

      {/* BOTÃO VOLTAR */}
      <div className="text-center pb-16">
        <a
          href="/"
          className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
        >
          ⬅ Voltar para Home
        </a>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 p-6 border-t border-white/10">
        © {new Date().getFullYear()} RetroPlay
      </footer>
    </div>
  );
}