import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle2, Calendar, Bell, TrendingUp, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Selamat Datang di LearnHub!",
      description: "Kelola jadwal belajar, tugas, dan pantau progresmu dengan mudah. Mari mulai perjalanan belajarmu!",
      icon: "👋",
      color: "from-blue-400 to-blue-600",
      illustration: (
        <div className="relative w-full h-64 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center text-6xl shadow-2xl"
          >
            📚
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute left-8 top-16 bg-white rounded-xl px-4 py-2 shadow-lg"
          >
            <div className="text-xs text-gray-600">Target Hari Ini</div>
            <div className="text-sm">4 jam belajar</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute right-8 bottom-16 bg-white rounded-xl px-4 py-2 shadow-lg"
          >
            <div className="text-xs text-gray-600">Tugas Pending</div>
            <div className="text-sm">3 tugas</div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Tambahkan Tugas Baru",
      description: "Catat semua tugas sekolah atau kuliah dengan mudah. Atur prioritas, tenggat waktu, dan pengingat.",
      icon: "✅",
      color: "from-green-400 to-green-600",
      illustration: (
        <div className="relative w-full h-64 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-80 bg-white rounded-xl p-6 shadow-2xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span className="text-gray-900">Tugas Baru</span>
            </div>
            <div className="space-y-3">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="h-10 bg-gray-100 rounded-lg"
              />
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="h-10 bg-gray-100 rounded-lg"
              />
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "60%" }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="h-10 bg-blue-500 rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Atur Jadwal Belajar",
      description: "Buat jadwal belajar harian dan mingguan. Lihat semua tugasmu dalam kalender yang praktis.",
      icon: "📅",
      color: "from-purple-400 to-purple-600",
      illustration: (
        <div className="relative w-full h-64 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-80 bg-white rounded-xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-900">November 2025</span>
              <Calendar className="w-5 h-5 text-purple-500" />
            </div>
            <div className="grid grid-cols-7 gap-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <div key={i} className="text-center text-xs text-gray-500">
                  {day}
                </div>
              ))}
              {[...Array(35)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.02 }}
                  className={`h-8 rounded ${
                    i === 13
                      ? "bg-purple-500"
                      : [5, 12, 19, 26].includes(i)
                      ? "bg-blue-100"
                      : "bg-gray-50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Aktifkan Pengingat Belajar",
      description: "Jangan sampai lupa! Dapatkan notifikasi pengingat sebelum waktu belajar dan deadline tugas.",
      icon: "🔔",
      color: "from-orange-400 to-orange-600",
      illustration: (
        <div className="relative w-full h-64 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative"
          >
            <Bell className="w-32 h-32 text-orange-500" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white"
            >
              3
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-8 bg-white rounded-xl px-6 py-3 shadow-lg"
          >
            <div className="text-xs text-gray-600 mb-1">Pengingat</div>
            <div className="text-sm text-gray-900">Belajar Matematika dalam 1 jam</div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Pantau Progress Belajar",
      description: "Lihat statistik belajarmu, jam belajar, streak harian, dan capai targetmu setiap hari!",
      icon: "📊",
      color: "from-pink-400 to-pink-600",
      illustration: (
        <div className="relative w-full h-64 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-80 bg-white rounded-xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-pink-500" />
              <span className="text-gray-900">Progress Minggu Ini</span>
            </div>
            <div className="space-y-3">
              {[
                { day: "Sen", value: 70 },
                { day: "Sel", value: 90 },
                { day: "Rab", value: 60 },
                { day: "Kam", value: 100 },
                { day: "Jum", value: 85 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs text-gray-600 w-8">{item.day}</span>
                  <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"
                    />
                  </div>
                  <span className="text-xs text-gray-600 w-12">{item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ),
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`h-2 rounded-full transition-all ${
                index === currentStep
                  ? "w-8 bg-gradient-to-r " + currentStepData.color
                  : index < currentStep
                  ? "w-2 bg-blue-400"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Main Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${currentStepData.color} p-8 text-white text-center`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-6xl mb-4"
              >
                {currentStepData.icon}
              </motion.div>
              <h2 className="text-2xl mb-2">{currentStepData.title}</h2>
              <p className="text-sm text-white/90">{currentStepData.description}</p>
            </div>

            {/* Illustration */}
            <div className="p-8 bg-gray-50">{currentStepData.illustration}</div>

            {/* Navigation */}
            <div className="p-6 flex items-center justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  currentStep === 0
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Sebelumnya</span>
              </button>

              <div className="text-sm text-gray-600">
                {currentStep + 1} / {steps.length}
              </div>

              {currentStep === steps.length - 1 ? (
                <Link
                  to="/"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <span className="text-sm">Mulai Belajar</span>
                  <CheckCircle2 className="w-4 h-4" />
                </Link>
              ) : (
                <button
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <span className="text-sm">Selanjutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Skip Button */}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
            Lewati Tutorial
          </Link>
        </div>
      </div>
    </div>
  );
}
