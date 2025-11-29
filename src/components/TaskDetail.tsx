import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Clock, Book, Tag, AlertCircle, CheckCircle2, Edit2, Trash2, Bell } from "lucide-react";
import { motion } from "motion/react";

export function TaskDetail() {
  const { id } = useParams();

  // Mock task data
  const task = {
    id: id,
    title: "Belajar Matematika - Integral",
    subject: "Matematika",
    description: "Pelajari konsep integral tentu dan tak tentu. Fokus pada teknik substitusi dan integrasi parsial.",
    dueDate: "2025-11-29",
    dueTime: "14:00",
    priority: "high",
    completed: false,
    category: "Belajar",
    notes: "Jangan lupa review rumus dasar integral terlebih dahulu. Kerjakan latihan soal di halaman 120-125.",
    estimatedTime: "2 jam",
    reminder: true,
    subtasks: [
      { id: "1", title: "Baca teori integral dasar", completed: true },
      { id: "2", title: "Pelajari teknik substitusi", completed: true },
      { id: "3", title: "Pelajari integrasi parsial", completed: false },
      { id: "4", title: "Kerjakan 10 soal latihan", completed: false },
      { id: "5", title: "Review dan buat catatan ringkas", completed: false },
    ],
  };

  const completedSubtasks = task.subtasks.filter((st) => st.completed).length;
  const progressPercentage = Math.round((completedSubtasks / task.subtasks.length) * 100);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-600 border-red-200";
      case "medium":
        return "bg-orange-100 text-orange-600 border-orange-200";
      case "low":
        return "bg-blue-100 text-blue-600 border-blue-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "Prioritas Tinggi";
      case "medium":
        return "Prioritas Sedang";
      case "low":
        return "Prioritas Rendah";
      default:
        return "Tidak Ada Prioritas";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 md:pb-6">
      {/* Back Button */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link
          to="/tasks"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Kembali ke Daftar Tugas</span>
        </Link>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs mb-3">
                {task.category}
              </span>
              <h1 className="text-2xl mb-2">{task.title}</h1>
              <p className="text-blue-100 text-sm">{task.description}</p>
            </div>
            <button
              className={`px-4 py-2 rounded-full border-2 transition-all ${
                task.completed
                  ? "bg-white text-green-600 border-white"
                  : "bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
              }`}
            >
              {task.completed ? (
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Selesai
                </span>
              ) : (
                "Tandai Selesai"
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/20 backdrop-blur-sm rounded-full h-2 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-xs text-blue-100 mt-2">
            Progress: {completedSubtasks} dari {task.subtasks.length} sub-tugas selesai ({progressPercentage}%)
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Book className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Mata Pelajaran</p>
                <p className="text-sm text-gray-900">{task.subject}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Tenggat Waktu</p>
                <p className="text-sm text-gray-900">
                  {new Date(task.dueDate).toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Waktu & Estimasi</p>
                <p className="text-sm text-gray-900">
                  {task.dueTime} • {task.estimatedTime}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Prioritas</p>
                <span className={`inline-block px-2 py-1 rounded text-xs border ${getPriorityColor(task.priority)}`}>
                  {getPriorityLabel(task.priority)}
                </span>
              </div>
            </div>
          </div>

          {/* Notes */}
          {task.notes && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-900 mb-1">Catatan</p>
                  <p className="text-sm text-gray-700">{task.notes}</p>
                </div>
              </div>
            </div>
          )}

          {/* Reminder */}
          {task.reminder && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-900">Pengingat Aktif</p>
                    <p className="text-xs text-gray-600">Kamu akan mendapat notifikasi 1 jam sebelum deadline</p>
                  </div>
                </div>
                <button className="text-xs text-blue-600 hover:underline">Ubah</button>
              </div>
            </div>
          )}

          {/* Subtasks */}
          <div>
            <h3 className="text-gray-900 mb-3 flex items-center gap-2">
              Sub-tugas
              <span className="text-xs text-gray-500">
                ({completedSubtasks}/{task.subtasks.length})
              </span>
            </h3>
            <div className="space-y-2">
              {task.subtasks.map((subtask, index) => (
                <motion.div
                  key={subtask.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                    subtask.completed
                      ? "bg-green-50 border-green-200"
                      : "bg-gray-50 border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <button
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      subtask.completed
                        ? "bg-green-500 border-green-500"
                        : "border-gray-300 hover:border-blue-500"
                    }`}
                  >
                    {subtask.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </button>
                  <span
                    className={`text-sm flex-1 ${
                      subtask.completed ? "line-through text-gray-500" : "text-gray-900"
                    }`}
                  >
                    {subtask.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
              <Edit2 className="w-4 h-4" />
              Edit Tugas
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all border border-red-200">
              <Trash2 className="w-4 h-4" />
              Hapus Tugas
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
