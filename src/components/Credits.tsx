import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Palette, Users, FileText, Image, Code, Sparkles, ArrowLeft, BookOpen, PenTool } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Credits() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

const team = [
    {
      name: "Raihan Aryanova Narendra",
      icon: Code,
      color: "from-blue-400 to-blue-600",
      nim: "240411100094",
    },
    {
      name: "Azka Syaikhu",
      icon: Sparkles,
      color: "from-purple-400 to-purple-600",
      nim: "240411100028",
    },
    {
      name: "Ravi Dian Fahrezi",
      icon: Sparkles,
      color: "from-orange-400 to-orange-600",
      nim: "240411100056",
    },
    {
      name: "Muhammad Zidan Dhikrulloh Perdana",
      icon: Sparkles,
      color: "from-orange-400 to-orange-600",
      nim: "240411100083",
    },
    {
      name: "Moch. Zamroni Fahreza",
      icon: Code,
      color: "from-orange-400 to-orange-600",
      nim: "240411100085",
    },
  ];

  const scenes = [
    {
      title: "LearnHub",
      subtitle: "Aplikasi Manajemen Belajar",
      type: "intro",
    },
    ...team.map((member) => ({
      title: member.name,
      nim: member.nim,
      icon: member.icon,
      color: member.color,
      type: "credit",
    })),
    {
      title: "Terima Kasih!",
      subtitle: "© 2025 LearnHub Team",
      type: "outro",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
      } else {
        setIsPlaying(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying, scenes.length]);

  const currentSceneData = scenes[currentScene];

  const handleReplay = () => {
    setCurrentScene(0);
    setIsPlaying(true);
  };

  const handleSkip = () => {
    setIsPlaying(false);
    setCurrentScene(scenes.length - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
          />
        ))}
      </div>

      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white/70 hover:text-white transition-colors z-20"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Kembali</span>
      </Link>

      <div className="w-full max-w-4xl relative z-10">
        <AnimatePresence mode="wait">
          {currentSceneData.type === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center text-6xl shadow-2xl"
              >
                📚
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-6xl text-white mb-4"
              >
                {currentSceneData.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-300"
              >
                {currentSceneData.subtitle}
              </motion.p>
            </motion.div>
          )}

          {currentSceneData.type === "credit" && (
            <motion.div
              key={`credit-${currentScene}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`w-40 h-40 mx-auto mb-8 bg-gradient-to-br ${currentSceneData.color} rounded-full flex items-center justify-center shadow-2xl`}
              >
                {currentSceneData.icon && <currentSceneData.icon className="w-20 h-20 text-white" />}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <h2 className="text-4xl text-white mb-2">{currentSceneData.title}</h2>
                <p className="text-xl text-blue-300 mb-4">NIM: {currentSceneData.nim}</p>
              </motion.div>
            </motion.div>
          )}

          {currentSceneData.type === "outro" && (
            <motion.div
              key="outro"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-8xl mb-8"
              >
                🎉
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-6xl text-white mb-4"
              >
                {currentSceneData.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-300 mb-8"
              >
                {currentSceneData.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex gap-4 justify-center"
              >
                <button
                  onClick={handleReplay}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Putar Ulang
                </button>
                <Link
                  to="/"
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all border border-white/20"
                >
                  Kembali ke Dashboard
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-2 mt-12"
        >
          {scenes.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + index * 0.05 }}
              className={`h-2 rounded-full transition-all ${
                index === currentScene ? "w-8 bg-blue-500" : index < currentScene ? "w-2 bg-blue-400" : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </motion.div>

        {isPlaying && currentScene < scenes.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-8"
          >
            <button onClick={handleSkip} className="text-sm text-gray-400 hover:text-white transition-colors">
              Lewati Animasi
            </button>
          </motion.div>
        )}
      </div>

      {!isPlaying && currentScene === scenes.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-8"
        >
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-2 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-white font-medium mb-1">{member.name}</p>
                  <p className="text-xs text-gray-400">{member.nim}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}