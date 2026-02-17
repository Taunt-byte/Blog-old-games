import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="p-6 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold tracking-wide"
        >
          🎮 RetroPlay Blog
        </motion.h1>

        <div className="flex items-center gap-2 w-full md:w-80">
          <Input placeholder="Buscar jogos..." className="text-black" />
          <Button size="icon">
            <Search size={18} />
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="p-10 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-extrabold mb-4"
        >
          Explorando o universo retrô
        </motion.h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-6">
          Notícias, análises e lembranças de uma época onde cada pixel
          carregava aventura. Entre e pressione start.
        </p>
        <Button className="rounded-2xl text-lg px-6 py-4">
          Ver artigos recentes
        </Button>
      </section>

      {/* Posts */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-16">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <Card className="bg-white/5 backdrop-blur border-white/10 rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.desc}</p>
                <Button variant="outline" className="rounded-xl">
                  Ler mais
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 p-6 border-t border-white/10">
        © {new Date().getFullYear()} RetroPlay Blog. Feito com nostalgia.
      </footer>
    </div>
  );
}
