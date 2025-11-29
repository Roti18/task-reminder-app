import { Check, X, Palette, Type, Square, Grid3x3 } from "lucide-react";
import { motion } from "motion/react";

export function DesignSystem() {
  const colors = {
    primary: [
      { name: "Blue 50", hex: "#EFF6FF", class: "bg-blue-50" },
      { name: "Blue 100", hex: "#DBEAFE", class: "bg-blue-100" },
      { name: "Blue 400", hex: "#60A5FA", class: "bg-blue-400" },
      { name: "Blue 500", hex: "#3B82F6", class: "bg-blue-500" },
      { name: "Blue 600", hex: "#2563EB", class: "bg-blue-600" },
    ],
    secondary: [
      { name: "Purple 50", hex: "#FAF5FF", class: "bg-purple-50" },
      { name: "Purple 100", hex: "#F3E8FF", class: "bg-purple-100" },
      { name: "Purple 400", hex: "#C084FC", class: "bg-purple-400" },
      { name: "Purple 500", hex: "#A855F7", class: "bg-purple-500" },
      { name: "Purple 600", hex: "#9333EA", class: "bg-purple-600" },
    ],
    neutral: [
      { name: "Gray 50", hex: "#F9FAFB", class: "bg-gray-50" },
      { name: "Gray 100", hex: "#F3F4F6", class: "bg-gray-100" },
      { name: "Gray 200", hex: "#E5E7EB", class: "bg-gray-200" },
      { name: "Gray 600", hex: "#4B5563", class: "bg-gray-600" },
      { name: "Gray 900", hex: "#111827", class: "bg-gray-900" },
    ],
    accent: [
      { name: "Green 500", hex: "#22C55E", class: "bg-green-500" },
      { name: "Orange 500", hex: "#F97316", class: "bg-orange-500" },
      { name: "Red 500", hex: "#EF4444", class: "bg-red-500" },
    ],
  };

  const typography = [
    { name: "Heading 1", size: "text-2xl", weight: "", example: "Dashboard Belajar" },
    { name: "Heading 2", size: "text-xl", weight: "", example: "Progress Mingguan" },
    { name: "Body", size: "text-sm", weight: "", example: "Ini adalah contoh teks body yang digunakan untuk konten utama." },
    { name: "Caption", size: "text-xs", weight: "", example: "Metadata dan keterangan kecil" },
  ];

  const buttons = [
    { variant: "Primary", bgClass: "bg-blue-600 hover:bg-blue-700", textClass: "text-white" },
    { variant: "Secondary", bgClass: "bg-gray-100 hover:bg-gray-200", textClass: "text-gray-700" },
    { variant: "Outline", bgClass: "bg-white hover:bg-blue-50 border-2 border-blue-600", textClass: "text-blue-600" },
    { variant: "Danger", bgClass: "bg-red-50 hover:bg-red-100 border border-red-200", textClass: "text-red-600" },
  ];

  const spacing = [
    { name: "xs", value: "4px", pixels: "1" },
    { name: "sm", value: "8px", pixels: "2" },
    { name: "md", value: "16px", pixels: "4" },
    { name: "lg", value: "24px", pixels: "6" },
    { name: "xl", value: "32px", pixels: "8" },
    { name: "2xl", value: "48px", pixels: "12" },
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
          <Grid3x3 className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl text-gray-900">Design System LearnHub</h1>
        </div>
        <p className="text-gray-600 text-sm">
          Dokumentasi komponen, palet warna, tipografi, dan aturan penggunaan untuk konsistensi desain aplikasi
          LearnHub.
        </p>
      </motion.div>

      {/* Colors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <Palette className="w-5 h-5 text-blue-600" />
          <h2 className="text-gray-900">Color Palette</h2>
        </div>

        <div className="space-y-6">
          {Object.entries(colors).map(([category, colorList], index) => (
            <div key={category}>
              <h3 className="text-sm text-gray-700 mb-3 capitalize">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {colorList.map((color, i) => (
                  <motion.div
                    key={color.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 + i * 0.05 }}
                    className="space-y-2"
                  >
                    <div className={`${color.class} h-16 rounded-lg shadow-sm border border-gray-200`} />
                    <div className="text-xs text-gray-900">{color.name}</div>
                    <div className="text-xs text-gray-500">{color.hex}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="text-sm text-gray-900 mb-2">Aturan Penggunaan Warna</h4>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• Blue: Warna utama untuk CTA, link, dan elemen interaktif</li>
            <li>• Purple: Warna sekunder untuk aksen dan variasi visual</li>
            <li>• Gray: Warna netral untuk teks, background, dan border</li>
            <li>• Green/Orange/Red: Warna status untuk success, warning, dan error</li>
          </ul>
        </div>
      </motion.div>

      {/* Typography */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <Type className="w-5 h-5 text-purple-600" />
          <h2 className="text-gray-900">Typography</h2>
        </div>

        <div className="space-y-6">
          {typography.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="pb-4 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-xs text-gray-500 w-24">{type.name}</span>
                <span className="text-xs text-gray-400">{type.size}</span>
              </div>
              <p className={`${type.size} ${type.weight} text-gray-900`}>{type.example}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
          <h4 className="text-sm text-gray-900 mb-2">Aturan Tipografi</h4>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• Font stack: System UI fonts untuk performa optimal</li>
            <li>• Line height: 1.5 untuk body text, 1.2 untuk headings</li>
            <li>• Jangan override font-size, font-weight, line-height kecuali diminta</li>
            <li>• Gunakan text-gray-900 untuk judul, text-gray-700 untuk body, text-gray-500 untuk metadata</li>
          </ul>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <Square className="w-5 h-5 text-green-600" />
          <h2 className="text-gray-900">Buttons</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm text-gray-700 mb-4">Variants</h3>
            <div className="space-y-3">
              {buttons.map((button, index) => (
                <motion.div
                  key={button.variant}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <button
                    className={`px-4 py-2 rounded-lg transition-all ${button.bgClass} ${button.textClass} text-sm`}
                  >
                    {button.variant} Button
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-gray-700 mb-4">States & Sizes</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600 mb-2">Default</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Button</button>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-2">Hover (with shadow)</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg text-sm">Button</button>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-2">Disabled</p>
                <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed text-sm" disabled>
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
          <h4 className="text-sm text-gray-900 mb-2">Aturan Button</h4>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• Minimal height 40px untuk touch target (mobile)</li>
            <li>• Padding horizontal 16px, vertical 8px</li>
            <li>• Border radius 8px (rounded-lg)</li>
            <li>• Gunakan Primary untuk aksi utama, Secondary untuk aksi sekunder</li>
          </ul>
        </div>
      </motion.div>

      {/* Spacing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-gray-900 mb-6">Spacing Scale</h2>

        <div className="space-y-4">
          {spacing.map((space, index) => (
            <motion.div
              key={space.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs text-gray-600 w-12">{space.name}</span>
              <div className="h-8 bg-blue-400 rounded" style={{ width: space.value }} />
              <span className="text-xs text-gray-500">
                {space.value} ({space.pixels} unit)
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
          <h4 className="text-sm text-gray-900 mb-2">Aturan Spacing</h4>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• Gunakan spacing konsisten untuk jarak antar elemen</li>
            <li>• Section padding: lg (24px) atau xl (32px)</li>
            <li>• Card/component gap: md (16px)</li>
            <li>• Element gap dalam component: sm (8px)</li>
          </ul>
        </div>
      </motion.div>

      {/* Card Component */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-gray-900 mb-6">Card Component</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm text-gray-700 mb-3">Standard Card</h3>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h4 className="text-sm text-gray-900 mb-2">Card Title</h4>
              <p className="text-xs text-gray-600">
                Card dengan background putih, border abu-abu, dan shadow tipis untuk depth.
              </p>
            </div>
            <div className="mt-3 p-3 bg-gray-50 rounded-lg text-xs text-gray-700">
              <code>bg-white rounded-xl p-4 shadow-sm border border-gray-100</code>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-gray-700 mb-3">Gradient Card</h3>
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl p-4 text-white">
              <h4 className="text-sm mb-2">Card Title</h4>
              <p className="text-xs text-blue-100">Card dengan gradient untuk highlight dan call-to-action.</p>
            </div>
            <div className="mt-3 p-3 bg-gray-50 rounded-lg text-xs text-gray-700">
              <code>bg-gradient-to-r from-blue-400 to-purple-500</code>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Do's and Don'ts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-gray-900 mb-6">Do's and Don'ts</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Do's */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-sm text-gray-900">Do</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Gunakan spacing konsisten",
                "Maintain visual hierarchy yang jelas",
                "Pastikan kontras warna memadai",
                "Gunakan rounded corners untuk soft feel",
                "Beri feedback visual untuk interaksi",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-sm text-gray-900">Don't</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Jangan override font-size tanpa alasan",
                "Hindari terlalu banyak warna dalam satu view",
                "Jangan buat component terlalu padat",
                "Hindari animasi yang terlalu agresif",
                "Jangan gunakan shadow terlalu tebal",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Icon Set */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100"
      >
        <h2 className="text-gray-900 mb-4">Icon Set</h2>
        <p className="text-sm text-gray-700 mb-4">
          Menggunakan <code className="px-2 py-1 bg-white rounded text-xs">lucide-react</code> untuk icon set yang
          konsisten. Ukuran standar: 16px (w-4 h-4) untuk inline, 20px (w-5 h-5) untuk button, 24px (w-6 h-6) untuk
          header.
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            "CheckCircle2",
            "Calendar",
            "Book",
            "Target",
            "TrendingUp",
            "Bell",
            "User",
            "Settings",
          ].map((icon, i) => (
            <motion.div
              key={icon}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.05 }}
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg text-xs text-gray-700"
            >
              <div className="w-5 h-5 bg-blue-100 rounded" />
              {icon}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
