import { Layout, Smartphone, Monitor } from "lucide-react";
import { motion } from "motion/react";

export function Wireframe() {
  return (
    <div className="space-y-6 pb-20 md:pb-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <Layout className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl text-gray-900">Wireframe & Layout Structure</h1>
        </div>
        <p className="text-gray-600 text-sm">
          Wireframe low-fidelity menunjukkan struktur dasar dan penempatan elemen inti. High-fidelity design sudah
          diterapkan di semua halaman aplikasi dengan warna, tipografi, dan ikon lengkap.
        </p>
      </motion.div>

      {/* Design Principle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl p-6 text-white"
      >
        <h2 className="text-xl mb-4">Prinsip Desain</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Simplicity",
              desc: "Interface sederhana tanpa elemen yang membingungkan",
            },
            {
              title: "Readability",
              desc: "Tipografi jelas dengan kontras warna yang baik",
            },
            {
              title: "Accessibility",
              desc: "Navigasi mudah dan tombol yang jelas",
            },
          ].map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
            >
              <h3 className="mb-2">{principle.title}</h3>
              <p className="text-sm text-blue-100">{principle.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Low-Fidelity Wireframes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-gray-900 mb-6">Low-Fidelity Wireframes</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mobile Dashboard Wireframe */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <h3 className="text-gray-900">Dashboard - Mobile</h3>
            </div>
            <div className="border-4 border-gray-300 rounded-3xl p-6 bg-gray-50 aspect-[9/16]">
              {/* Header */}
              <div className="h-16 bg-gray-300 rounded-lg mb-4" />
              
              {/* Welcome Card */}
              <div className="h-24 bg-blue-200 rounded-lg mb-4" />
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="h-20 bg-gray-300 rounded-lg" />
                <div className="h-20 bg-gray-300 rounded-lg" />
              </div>
              
              {/* Task List */}
              <div className="space-y-2 mb-4">
                <div className="h-12 bg-gray-300 rounded-lg" />
                <div className="h-12 bg-gray-300 rounded-lg" />
                <div className="h-12 bg-gray-300 rounded-lg" />
              </div>
              
              {/* Bottom Nav */}
              <div className="h-12 bg-gray-400 rounded-lg mt-auto" />
            </div>
          </div>

          {/* Desktop Dashboard Wireframe */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-5 h-5 text-purple-600" />
              <h3 className="text-gray-900">Dashboard - Desktop</h3>
            </div>
            <div className="border-4 border-gray-300 rounded-lg p-6 bg-gray-50 aspect-[16/10]">
              {/* Top Nav */}
              <div className="h-12 bg-gray-400 rounded-lg mb-4" />
              
              {/* Welcome Banner */}
              <div className="h-16 bg-blue-200 rounded-lg mb-4" />
              
              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="h-16 bg-gray-300 rounded-lg" />
                <div className="h-16 bg-gray-300 rounded-lg" />
                <div className="h-16 bg-gray-300 rounded-lg" />
                <div className="h-16 bg-gray-300 rounded-lg" />
              </div>
              
              {/* Content Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-40 bg-gray-300 rounded-lg" />
                <div className="h-40 bg-gray-300 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Task List Wireframe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-gray-900 mb-6">Halaman Daftar Tugas</h2>
        
        <div className="border-4 border-gray-300 rounded-lg p-6 bg-gray-50">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-48 bg-gray-400 rounded" />
            <div className="h-10 w-36 bg-blue-300 rounded-lg" />
          </div>
          
          {/* Search & Filter */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1 h-10 bg-gray-300 rounded-lg" />
            <div className="h-10 w-20 bg-gray-300 rounded-lg" />
            <div className="h-10 w-20 bg-gray-300 rounded-lg" />
          </div>
          
          {/* Task Items */}
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg border-l-4 border-blue-400">
                <div className="w-6 h-6 bg-gray-300 rounded-full" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 bg-gray-400 rounded" />
                  <div className="h-3 w-1/2 bg-gray-300 rounded" />
                </div>
                <div className="w-16 h-6 bg-orange-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Calendar Wireframe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-gray-900 mb-6">Halaman Kalender</h2>
        
        <div className="border-4 border-gray-300 rounded-lg p-6 bg-gray-50">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-40 bg-gray-400 rounded" />
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded" />
              <div className="h-8 w-32 bg-gray-300 rounded" />
              <div className="w-8 h-8 bg-gray-300 rounded" />
            </div>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
              <div key={i} className="h-6 bg-gray-400 rounded flex items-center justify-center text-xs">
                {day}
              </div>
            ))}
            {[...Array(35)].map((_, i) => (
              <div
                key={i}
                className={`h-20 rounded border-2 ${
                  i === 15 ? "bg-blue-200 border-blue-400" : i % 7 === 5 ? "bg-gray-200" : "bg-white border-gray-300"
                }`}
              >
                {i % 5 === 0 && i > 0 && <div className="h-2 w-full bg-purple-300 rounded mt-1 mx-1" />}
              </div>
            ))}
          </div>
          
          {/* Today's Schedule */}
          <div className="space-y-2">
            <div className="h-6 w-40 bg-gray-400 rounded mb-3" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3 p-3 bg-white rounded-lg border border-gray-300">
                <div className="w-12 h-12 bg-blue-300 rounded" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-3/4 bg-gray-400 rounded" />
                  <div className="h-2 w-1/2 bg-gray-300 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Layout Grid System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100"
      >
        <h2 className="text-gray-900 mb-4">Grid System & Spacing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm text-gray-900 mb-3">Spacing Scale</h3>
            <div className="space-y-2">
              {[
                { name: "xs", value: "4px" },
                { name: "sm", value: "8px" },
                { name: "md", value: "16px" },
                { name: "lg", value: "24px" },
                { name: "xl", value: "32px" },
              ].map((space) => (
                <div key={space.name} className="flex items-center gap-4">
                  <span className="text-xs text-gray-600 w-8">{space.name}</span>
                  <div className="h-4 bg-blue-400 rounded" style={{ width: space.value }} />
                  <span className="text-xs text-gray-500">{space.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm text-gray-900 mb-3">Border Radius</h3>
            <div className="space-y-2">
              {[
                { name: "sm", value: "8px" },
                { name: "md", value: "12px" },
                { name: "lg", value: "16px" },
                { name: "xl", value: "24px" },
              ].map((radius) => (
                <div key={radius.name} className="flex items-center gap-4">
                  <span className="text-xs text-gray-600 w-8">{radius.name}</span>
                  <div className="w-12 h-12 bg-purple-400" style={{ borderRadius: radius.value }} />
                  <span className="text-xs text-gray-500">{radius.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Learnings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-blue-50 rounded-xl p-6 border border-blue-100"
      >
        <h2 className="text-gray-900 mb-4">Key Learnings dari Wireframe</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600">•</span>
            <span>Navigasi utama harus selalu terlihat (sticky top nav + bottom nav mobile)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">•</span>
            <span>Komponen tidak terlalu padat - beri breathing space untuk menghindari cognitive overload</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">•</span>
            <span>Visual hierarchy jelas: judul besar, konten sedang, metadata kecil</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">•</span>
            <span>Call-to-action (tombol) harus menonjol dengan warna kontras</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">•</span>
            <span>Progress indicator dan feedback visual untuk memberikan sense of achievement</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
