import { Link } from "react-router";
import { Calendar, CheckCircle2, Clock, TrendingUp, Book, Target, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export function Dashboard() {
  const todayTasks = [
    { id: "1", title: "Belajar Matematika - Integral", subject: "Matematika", time: "14:00", priority: "high", completed: false },
    { id: "2", title: "Membaca Bab 5 - Fotosintesis", subject: "Biologi", time: "16:00", priority: "medium", completed: false },
    { id: "3", title: "Mengerjakan Tugas Fisika", subject: "Fisika", time: "19:00", priority: "high", completed: true },
  ];

  const weeklyProgress = [
    { day: "Sen", hours: 3.5, target: 4 },
    { day: "Sel", hours: 4.2, target: 4 },
    { day: "Rab", hours: 2.8, target: 4 },
    { day: "Kam", hours: 4.5, target: 4 },
    { day: "Jum", hours: 3.9, target: 4 },
    { day: "Sab", hours: 2.5, target: 4 },
    { day: "Min", hours: 1.0, target: 4 },
  ];

  const stats = [
    { label: "Tugas Selesai", value: "12", subtitle: "Minggu ini", icon: CheckCircle2, color: "blue" },
    { label: "Jam Belajar", value: "22.4", subtitle: "Total minggu ini", icon: Clock, color: "purple" },
    { label: "Streak", value: "7", subtitle: "Hari berturut-turut", icon: TrendingUp, color: "green" },
    { label: "Target Tercapai", value: "85%", subtitle: "Progress mingguan", icon: Target, color: "orange" },
  ];

  return (
    <div className="space-y-6 pb-20 md:pb-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl p-6 text-white"
      >
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl mb-2">Halo, Rara! 👋</h1>
            <p className="text-blue-100 text-sm">Semangat belajar hari ini! Kamu punya 3 tugas yang perlu diselesaikan.</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
            <div className="text-xs text-blue-100">Hari ini</div>
            <div className="text-sm">Sabtu, 29 Nov</div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: "bg-blue-100 text-blue-600",
            purple: "bg-purple-100 text-purple-600",
            green: "bg-green-100 text-green-600",
            orange: "bg-orange-100 text-orange-600",
          };
          
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className={`w-10 h-10 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-2xl mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm mb-1">{stat.label}</div>
              <div className="text-gray-400 text-xs">{stat.subtitle}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's Tasks */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-900 flex items-center gap-2">
              <Book className="w-5 h-5 text-blue-600" />
              Tugas Hari Ini
            </h2>
            <Link to="/tasks" className="text-blue-600 text-sm hover:underline">
              Lihat Semua
            </Link>
          </div>

          <div className="space-y-3">
            {todayTasks.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/tasks/${task.id}`}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      task.completed
                        ? "bg-green-500 border-green-500"
                        : "border-gray-300"
                    }`}>
                      {task.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`text-sm ${task.completed ? "line-through text-gray-400" : "text-gray-900"}`}>
                          {task.title}
                        </h3>
                        {task.priority === "high" && !task.completed && (
                          <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded">Penting</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Book className="w-3 h-3" />
                          {task.subject}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {task.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {todayTasks.filter(t => !t.completed).length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-green-500" />
              <p>Semua tugas hari ini sudah selesai! 🎉</p>
            </div>
          )}
        </div>

        {/* Weekly Progress */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            Progress Mingguan
          </h2>

          <div className="space-y-3 mb-6">
            {weeklyProgress.map((day) => (
              <div key={day.day}>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>{day.day}</span>
                  <span>{day.hours}h / {day.target}h</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      day.hours >= day.target ? "bg-green-500" : "bg-blue-500"
                    }`}
                    style={{ width: `${Math.min((day.hours / day.target) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-800 mb-1">Tips Hari Ini</p>
                <p className="text-xs text-gray-600">
                  Kamu hampir mencapai target minggu ini! Tambahkan 3 jam lagi untuk mencapai 100%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-gray-900 mb-4">Aksi Cepat</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            to="/tasks"
            className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-gray-800">Tambah Tugas</span>
          </Link>
          <Link
            to="/calendar"
            className="flex items-center gap-3 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-all"
          >
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-gray-800">Lihat Kalender</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-3 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-all"
          >
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-gray-800">Atur Target</span>
          </Link>
          <Link
            to="/onboarding"
            className="flex items-center gap-3 p-4 rounded-lg bg-orange-50 hover:bg-orange-100 transition-all"
          >
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Book className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-gray-800">Tutorial</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
