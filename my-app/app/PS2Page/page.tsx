export default function PS2Page() {
  const games = [
    {
      title: "GTA: San Andreas",
      desc: "Um dos mundos abertos mais icônicos da história dos games.",
    },
    {
      title: "God of War",
      desc: "Kratos chegou destruindo mitologias e redefinindo ação.",
    },
    {
      title: "Shadow of the Colossus",
      desc: "Uma obra de arte minimalista e emocionante.",
    },
    {
      title: "Resident Evil 4",
      desc: "Mudou completamente o gênero survival horror.",
    },
    {
      title: "Need for Speed: Underground 2",
      desc: "Corridas noturnas e tuning que marcaram época.",
    },
    {
      title: "Dragon Ball Z: Budokai Tenkaichi 3",
      desc: "O ápice dos jogos de Dragon Ball no PS2.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white">

      {/* HEADER */}
      <header className="p-6 border-b border-white/10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          🎮 PlayStation 2
        </h1>
        <p className="text-gray-400 mt-2">
          O console mais vendido da história
        </p>
      </header>

      {/* HERO */}
      <section className="p-10 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          A era de ouro dos games
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-6">
          Lançado em 2000, o PS2 dominou o mundo dos videogames com uma biblioteca
          gigantesca e revolucionou o mercado ao funcionar também como leitor de DVD.
          Foi o console que marcou gerações inteiras.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-white/10 rounded-xl">📅 2000</span>
          <span className="px-4 py-2 bg-white/10 rounded-xl">💿 DVD</span>
          <span className="px-4 py-2 bg-white/10 rounded-xl">🔥 +155M vendidos</span>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="px-6 md:px-16 pb-12">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">
          📜 História
        </h3>

        <p className="text-gray-300 leading-relaxed">
          O PlayStation 2 consolidou a Sony como líder absoluta da indústria.
          Com suporte a DVDs, gráficos mais avançados e uma biblioteca absurda de jogos,
          ele conquistou tanto jogadores casuais quanto hardcore. Seu sucesso foi tão
          grande que se tornou o console mais vendido de todos os tempos.
        </p>
      </section>

      {/* JOGOS */}
      <section className="px-6 md:px-16 pb-16">
        <h3 className="text-2xl font-bold mb-6 text-blue-400">
          🕹️ Jogos Icônicos
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {games.map((game, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.03] hover:border-blue-500 transition"
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
        <h3 className="text-2xl font-bold mb-4 text-blue-400">
          🤯 Curiosidades
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>👉 Foi o console mais vendido da história (mais de 155 milhões).</li>
          <li>👉 Funcionava como leitor de DVD, o que ajudou muito nas vendas.</li>
          <li>👉 Tinha retrocompatibilidade com jogos do PS1.</li>
          <li>👉 Seu menu com torres representava os jogos salvos no memory card.</li>
        </ul>
      </section>

      {/* BOTÃO VOLTAR */}
      <div className="text-center pb-16">
        <a
          href="/"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
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