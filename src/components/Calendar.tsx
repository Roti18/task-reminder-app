import { useState } from "react";
import { ChevronLeft, ChevronRight, Book, Clock } from "lucide-react";
import { motion } from "motion/react";

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 29)); // November 29, 2025

  const tasksData = {
    "2025-11-29": [
      { id: "1", title: "Belajar Matematika - Integral", subject: "Matematika", time: "14:00", color: "blue" },
      { id: "2", title: "Membaca Bab 5 - Fotosintesis", subject: "Biologi", time: "16:00", color: "green" },
      { id: "3", title: "Mengerjakan Tugas Fisika", subject: "Fisika", time: "19:00", color: "purple" },
    ],
    "2025-11-30": [
      { id: "4", title: "Latihan Soal Kimia", subject: "Kimia", time: "10:00", color: "orange" },
      { id: "5", title: "Review Materi Bahasa Inggris", subject: "Bahasa Inggris", time: "15:00", color: "pink" },
    ],
    "2025-12-01": [
      { id: "6", title: "Proyek Sejarah - Presentasi", subject: "Sejarah", time: "09:00", color: "red" },
    ],
    "2025-12-03": [
      { id: "7", title: "Ujian Matematika", subject: "Matematika", time: "08:00", color: "blue" },
    ],
    "2025-12-05": [
      { id: "8", title: "Praktikum Biologi", subject: "Biologi", time: "13:00", color: "green" },
      { id: "9", title: "Tugas Kelompok Sosiologi", subject: "Sosiologi", time: "16:00", color: "indigo" },
    ],
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const monthName = currentDate.toLocaleDateString("id-ID", { month: "long", year: "numeric" });

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getTasksForDate = (day: number) => {
    const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return tasksData[dateString as keyof typeof tasksData] || [];
  };

  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-700 border-blue-300",
      green: "bg-green-100 text-green-700 border-green-300",
      purple: "bg-purple-100 text-purple-700 border-purple-300",
      orange: "bg-orange-100 text-orange-700 border-orange-300",
      pink: "bg-pink-100 text-pink-700 border-pink-300",
      red: "bg-red-100 text-red-700 border-red-300",
      indigo: "bg-indigo-100 text-indigo-700 border-indigo-300",
    };
    return colors[color] || "bg-gray-100 text-gray-700 border-gray-300";
  };

  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="h-32 bg-gray-50/50 rounded-lg" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const tasks = getTasksForDate(day);
    const isToday = day === 29 && currentDate.getMonth() === 10 && currentDate.getFullYear() === 2025;

    days.push(
      <motion.div
        key={day}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: day * 0.01 }}
        className={`h-32 p-2 rounded-lg border transition-all hover:shadow-md ${
          isToday
            ? "bg-blue-50 border-blue-300 ring-2 ring-blue-400"
            : tasks.length > 0
            ? "bg-white border-gray-200 hover:border-blue-300"
            : "bg-gray-50/50 border-gray-100"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-sm ${
              isToday ? "bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center" : "text-gray-700"
            }`}
          >
            {day}
          </span>
          {tasks.length > 0 && (
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">{tasks.length}</span>
          )}
        </div>
        <div className="space-y-1 overflow-y-auto max-h-20">
          {tasks.slice(0, 2).map((task) => (
            <div key={task.id} className={`text-xs px-2 py-1 rounded border ${getColorClass(task.color)} truncate`}>
              {task.time} • {task.subject}
            </div>
          ))}
          {tasks.length > 2 && <div className="text-xs text-gray-500 px-2">+{tasks.length - 2} lainnya</div>}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6 pb-20 md:pb-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl text-gray-900">Kalender Belajar</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={previousMonth}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all"
              aria-label="Bulan sebelumnya"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <span className="min-w-[180px] text-center text-gray-900">{monthName}</span>
            <button
              onClick={nextMonth}
              className="p-2 rounded-lg hover:bg-gray-100 transition-all"
              aria-label="Bulan berikutnya"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
            <div key={day} className="text-center text-sm text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">{days}</div>
      </motion.div>

      {/* Today's Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-gray-900 mb-4">Jadwal Hari Ini (29 November)</h2>
        <div className="space-y-3">
          {tasksData["2025-11-29"].map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex flex-col items-center justify-center text-white">
                  <span className="text-xs">Jam</span>
                  <span className="text-sm">{task.time.split(":")[0]}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm text-gray-900 mb-1">{task.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-600">
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-blue-50 rounded-xl p-4 border border-blue-100"
      >
        <h3 className="text-sm text-gray-900 mb-3">Keterangan</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-50 border-2 border-blue-400 ring-2 ring-blue-400 rounded" />
            <span className="text-gray-700">Hari Ini</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border border-gray-200 rounded" />
            <span className="text-gray-700">Ada Tugas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-50 border border-gray-100 rounded" />
            <span className="text-gray-700">Tidak Ada Tugas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center">
              3
            </div>
            <span className="text-gray-700">Jumlah Tugas</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
