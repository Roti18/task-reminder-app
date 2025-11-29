import { useState } from "react";
import { Link } from "react-router";
import { Plus, Search, Filter, CheckCircle2, Clock, Book, Calendar as CalendarIcon, Trash2 } from "lucide-react";
import { motion } from "motion/react";

export function TaskList() {
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allTasks = [
    {
      id: "1",
      title: "Belajar Matematika - Integral",
      subject: "Matematika",
      description: "Pelajari konsep integral tentu dan tak tentu",
      dueDate: "2025-11-29",
      dueTime: "14:00",
      priority: "high",
      completed: false,
      category: "Belajar",
    },
    {
      id: "2",
      title: "Membaca Bab 5 - Fotosintesis",
      subject: "Biologi",
      description: "Baca dan buat ringkasan tentang proses fotosintesis",
      dueDate: "2025-11-29",
      dueTime: "16:00",
      priority: "medium",
      completed: false,
      category: "Membaca",
    },
    {
      id: "3",
      title: "Mengerjakan Tugas Fisika",
      subject: "Fisika",
      description: "Soal halaman 45-47 tentang gerak parabola",
      dueDate: "2025-11-29",
      dueTime: "19:00",
      priority: "high",
      completed: true,
      category: "Tugas",
    },
    {
      id: "4",
      title: "Latihan Soal Kimia",
      subject: "Kimia",
      description: "Kerjakan 20 soal tentang stoikiometri",
      dueDate: "2025-11-30",
      dueTime: "10:00",
      priority: "medium",
      completed: false,
      category: "Latihan",
    },
    {
      id: "5",
      title: "Review Materi Bahasa Inggris",
      subject: "Bahasa Inggris",
      description: "Review grammar: Present Perfect Tense",
      dueDate: "2025-11-30",
      dueTime: "15:00",
      priority: "low",
      completed: false,
      category: "Review",
    },
    {
      id: "6",
      title: "Proyek Sejarah - Presentasi",
      subject: "Sejarah",
      description: "Buat slide presentasi tentang kemerdekaan Indonesia",
      dueDate: "2025-12-01",
      dueTime: "09:00",
      priority: "high",
      completed: false,
      category: "Proyek",
    },
  ];

  const filteredTasks = allTasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "pending" && !task.completed) ||
      (filter === "completed" && task.completed);
    const matchesSearch =
      searchQuery === "" ||
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const pendingCount = allTasks.filter((t) => !t.completed).length;
  const completedCount = allTasks.filter((t) => t.completed).length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-300 bg-red-50";
      case "medium":
        return "border-orange-300 bg-orange-50";
      case "low":
        return "border-blue-300 bg-blue-50";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded">Penting</span>;
      case "medium":
        return <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs rounded">Sedang</span>;
      case "low":
        return <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded">Rendah</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 pb-20 md:pb-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl text-gray-900 mb-2">Daftar Tugas</h1>
          <p className="text-sm text-gray-600">
            {pendingCount} tugas belum selesai, {completedCount} sudah selesai
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          <Plus className="w-4 h-4" />
          Tambah Tugas Baru
        </button>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
      >
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari tugas atau mata pelajaran..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filter === "pending"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Belum Selesai
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                filter === "completed"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Selesai
            </button>
          </div>
        </div>
      </motion.div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100"
          >
            <Filter className="w-12 h-12 mx-auto mb-3 text-gray-400" />
            <p className="text-gray-600 mb-2">Tidak ada tugas yang ditemukan</p>
            <p className="text-sm text-gray-500">Coba ubah filter atau tambahkan tugas baru</p>
          </motion.div>
        ) : (
          filteredTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white rounded-xl p-4 shadow-sm border-l-4 hover:shadow-md transition-all ${getPriorityColor(
                task.priority
              )}`}
            >
              <div className="flex items-start gap-3">
                {/* Checkbox */}
                <button
                  className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    task.completed
                      ? "bg-green-500 border-green-500"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                >
                  {task.completed && <CheckCircle2 className="w-5 h-5 text-white" />}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Link to={`/tasks/${task.id}`} className="group">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3
                        className={`text-sm group-hover:text-blue-600 transition-colors ${
                          task.completed ? "line-through text-gray-400" : "text-gray-900"
                        }`}
                      >
                        {task.title}
                      </h3>
                      {!task.completed && getPriorityBadge(task.priority)}
                    </div>

                    <p className="text-xs text-gray-500 mb-3 line-clamp-1">{task.description}</p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <Book className="w-3 h-3" />
                        {task.subject}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-3 h-3" />
                        {new Date(task.dueDate).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {task.dueTime}
                      </span>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                        {task.category}
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Delete Button */}
                <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Stats Footer */}
      {filteredTasks.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-blue-50 rounded-xl p-4 border border-blue-100"
        >
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700">
              Menampilkan {filteredTasks.length} dari {allTasks.length} tugas
            </span>
            <span className="text-blue-600">
              Progress: {Math.round((completedCount / allTasks.length) * 100)}%
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
