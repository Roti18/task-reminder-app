import { User, Target, Frown, Smile, BookOpen, Clock, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

export function Persona() {
  const persona = {
    name: "Rara Anastasia",
    age: 17,
    occupation: "Siswa SMA Kelas 12 IPA",
    location: "Jakarta, Indonesia",
    avatar: "👩‍🎓",
    quote: "Aku sering lupa tugas dan sulit mengatur waktu belajar. Butuh bantuan untuk lebih terorganisir!",
  };

  const demographics = [
    { label: "Usia", value: "15-22 tahun" },
    { label: "Pendidikan", value: "SMA/Mahasiswa" },
    { label: "Tech-savvy", value: "Tinggi" },
    { label: "Perangkat", value: "Mobile & Desktop" },
  ];

  const goals = [
    "Mengatur jadwal belajar yang terstruktur",
    "Tidak lupa deadline tugas sekolah/kuliah",
    "Meningkatkan konsistensi belajar harian",
    "Memantau progress dan pencapaian belajar",
    "Mendapatkan motivasi untuk terus belajar",
  ];

  const frustrations = [
    "Sering lupa tugas karena tidak ada sistem pengingat yang baik",
    "Sulit membagi waktu antara belajar dan aktivitas lain",
    "Tidak konsisten belajar, kadang rajin kadang malas",
    "Tidak tahu sudah belajar berapa jam atau berapa banyak progress",
    "Aplikasi yang ada terlalu rumit dan membingungkan",
  ];

  const behaviors = [
    { label: "Multitasking", description: "Sering mengerjakan banyak hal sekaligus" },
    { label: "Mobile First", description: "Lebih sering menggunakan smartphone" },
    { label: "Visual Learner", description: "Lebih mudah memahami informasi visual" },
    { label: "Procrastinator", description: "Cenderung menunda pekerjaan hingga deadline" },
  ];

  const needsAndSolutions = [
    {
      need: "Sistem pengingat yang efektif",
      solution: "Notifikasi push sebelum deadline dan waktu belajar",
      icon: AlertTriangle,
    },
    {
      need: "Interface yang simpel dan tidak membingungkan",
      solution: "Desain minimalis dengan navigasi intuitif",
      icon: Target,
    },
    {
      need: "Motivasi untuk konsisten belajar",
      solution: "Gamifikasi dengan streak, achievement, dan progress tracking",
      icon: Smile,
    },
    {
      need: "Manajemen waktu yang baik",
      solution: "Kalender visual dan estimasi waktu untuk setiap tugas",
      icon: Clock,
    },
  ];

  return (
    <div className="space-y-6 pb-20 md:pb-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <User className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl text-gray-900">User Persona</h1>
        </div>
        <p className="text-gray-600 text-sm">
          Persona pengguna ini dikembangkan berdasarkan riset target audience LearnHub: pelajar usia 15-22 tahun yang
          kesulitan mengatur jadwal belajar dan sering lupa tugas.
        </p>
      </motion.div>

      {/* Main Persona Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl p-8 text-white"
      >
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-7xl border-4 border-white/30">
            {persona.avatar}
          </div>
          <div className="flex-1">
            <h2 className="text-3xl mb-2">{persona.name}</h2>
            <p className="text-blue-100 mb-4">
              {persona.age} tahun • {persona.occupation}
            </p>
            <p className="text-white/90 text-sm mb-4">📍 {persona.location}</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <p className="text-sm italic">"{persona.quote}"</p>
            </div>
          </div>
        </div>

        {/* Demographics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {demographics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
            >
              <p className="text-xs text-blue-100 mb-1">{item.label}</p>
              <p className="text-sm">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Goals */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-gray-900">Goals & Motivations</h3>
          </div>
          <ul className="space-y-3">
            {goals.map((goal, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-start gap-3 text-sm text-gray-700"
              >
                <Smile className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{goal}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Frustrations */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Frown className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-gray-900">Frustrations & Pain Points</h3>
          </div>
          <ul className="space-y-3">
            {frustrations.map((frustration, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-start gap-3 text-sm text-gray-700"
              >
                <Frown className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{frustration}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Behaviors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-gray-900">Behaviors & Characteristics</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {behaviors.map((behavior, index) => (
            <motion.div
              key={behavior.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-4 bg-purple-50 rounded-lg border border-purple-100"
            >
              <h4 className="text-sm text-gray-900 mb-1">{behavior.label}</h4>
              <p className="text-xs text-gray-600">{behavior.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Needs & Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h3 className="text-gray-900 mb-6">User Needs & Design Solutions</h3>
        <div className="space-y-4">
          {needsAndSolutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm text-gray-900 mb-1">User Need:</h4>
                  <p className="text-sm text-gray-700 mb-2">{item.need}</p>
                  <h4 className="text-sm text-blue-600 mb-1">Design Solution:</h4>
                  <p className="text-sm text-gray-700">{item.solution}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Journey Map Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6 border border-orange-100"
      >
        <h3 className="text-gray-900 mb-4">User Journey Summary</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {["Aware", "Consider", "Download", "Use", "Advocate"].map((stage, index) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-2">
                {index + 1}
              </div>
              <p className="text-sm text-gray-900">{stage}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
