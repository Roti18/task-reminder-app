import { User, Mail, School, Target, Bell, Moon, Globe, ChevronRight, Edit2, Award, TrendingUp, Calendar } from "lucide-react";
import { motion } from "motion/react";

export function Profile() {
  const userData = {
    name: "Rara Anastasia",
    email: "rara.anastasia@student.id",
    school: "SMA Negeri 1 Jakarta",
    grade: "Kelas 12 IPA",
    joinDate: "September 2024",
    avatar: "👩‍🎓",
  };

  const stats = [
    { label: "Total Tugas Selesai", value: "156", icon: Award, color: "blue" },
    { label: "Jam Belajar", value: "342h", icon: TrendingUp, color: "purple" },
    { label: "Streak Terpanjang", value: "21 hari", icon: Calendar, color: "green" },
  ];

  const achievements = [
    { id: "1", title: "Konsisten 7 Hari", icon: "🔥", date: "29 Nov 2025", color: "orange" },
    { id: "2", title: "100 Tugas Selesai", icon: "🎯", date: "15 Nov 2025", color: "blue" },
    { id: "3", title: "Belajar 50 Jam", icon: "⏰", date: "01 Nov 2025", color: "purple" },
    { id: "4", title: "Minggu Sempurna", icon: "⭐", date: "22 Okt 2025", color: "yellow" },
  ];

  const settings = [
    { label: "Notifikasi & Pengingat", icon: Bell, value: "Aktif" },
    { label: "Mode Gelap", icon: Moon, value: "Mati" },
    { label: "Bahasa", icon: Globe, value: "Indonesia" },
    { label: "Target Harian", icon: Target, value: "4 jam/hari" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 md:pb-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl p-8 text-white"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl border-4 border-white/30">
            {userData.avatar}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl mb-2">{userData.name}</h1>
            <p className="text-blue-100 text-sm mb-3">{userData.email}</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs flex items-center gap-2">
                <School className="w-3 h-3" />
                {userData.school}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                {userData.grade}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                Bergabung {userData.joinDate}
              </span>
            </div>
          </div>
          <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all flex items-center gap-2">
            <Edit2 className="w-4 h-4" />
            Edit Profil
          </button>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: "bg-blue-100 text-blue-600",
            purple: "bg-purple-100 text-purple-600",
            green: "bg-green-100 text-green-600",
          };

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-2xl mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-gray-900 mb-4">Pencapaian</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {achievements.map((achievement, index) => {
            const colorClasses = {
              orange: "bg-orange-50 border-orange-200",
              blue: "bg-blue-50 border-blue-200",
              purple: "bg-purple-50 border-purple-200",
              yellow: "bg-yellow-50 border-yellow-200",
            };

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className={`p-4 rounded-lg border ${colorClasses[achievement.color as keyof typeof colorClasses]}`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-sm text-gray-900">{achievement.title}</h3>
                    <p className="text-xs text-gray-600">{achievement.date}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-gray-900 mb-4">Pengaturan</h2>
        <div className="space-y-2">
          {settings.map((setting, index) => {
            const Icon = setting.icon;
            return (
              <motion.button
                key={setting.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-900">{setting.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{setting.value}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Study Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-gray-900 mb-4">Preferensi Belajar</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-700 mb-2 block">Target Jam Belajar Harian</label>
            <input
              type="range"
              min="1"
              max="8"
              defaultValue="4"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 jam</span>
              <span>4 jam</span>
              <span>8 jam</span>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-700 mb-2 block">Mata Pelajaran Favorit</label>
            <div className="flex flex-wrap gap-2">
              {["Matematika", "Fisika", "Kimia", "Biologi", "Bahasa Inggris"].map((subject) => (
                <span
                  key={subject}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs cursor-pointer hover:bg-blue-200 transition-all"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-700 mb-2 block">Waktu Belajar Terbaik</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Pagi (06:00 - 12:00)</option>
              <option selected>Siang (12:00 - 18:00)</option>
              <option>Malam (18:00 - 24:00)</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-red-50 rounded-xl p-6 border border-red-200"
      >
        <h2 className="text-gray-900 mb-4">Zona Berbahaya</h2>
        <div className="space-y-3">
          <button className="w-full px-4 py-3 bg-white text-red-600 rounded-lg hover:bg-red-100 transition-all border border-red-200 text-sm">
            Reset Semua Progress
          </button>
          <button className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all text-sm">
            Hapus Akun
          </button>
        </div>
      </motion.div>
    </div>
  );
}
