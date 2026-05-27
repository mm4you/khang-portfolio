import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  Mail,
  BrainCircuit,
} from "lucide-react";

const projects = [
  {
    title: "Smart Port Scheduling App",
    description:
      "Ý tưởng hackathon giúp tài xế đặt lịch vào cảng, giảm ùn tắc và tích điểm xanh để đổi phần thưởng.",
    stack: ["React", "Backend", "MySQL", "AI"],
    highlight: "Top 20 - DigiPort Logistics Hackathon 2025",
  },
  {
    title: "Movie Ticket Booking System",
    description:
      "Đồ án kỹ thuật phần mềm hỗ trợ đặt vé xem phim, quản lý người dùng, ghế, suất chiếu và dữ liệu rạp.",
    stack: ["Software Engineering", "Database", "UI/UX"],
  },
  {
    title: "Realtime Chess & Caro Game",
    description:
      "Dự án game cờ vua và cờ caro chơi realtime, sử dụng socket để đồng bộ nước đi giữa nhiều người chơi.",
    stack: ["Socket", "Realtime", "Game Logic"],
  },
];

const achievements = [
  {
    title: "Top 20",
    event: "DigiPort Logistics Hackathon 2025",
    description:
      "Được ghi nhận với ý tưởng logistics thông minh tập trung vào đặt lịch vào cảng, giảm ùn tắc và tích điểm xanh.",
  },
];

const skills = [
  "C++",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "MySQL",
  "Git",
  "Software Engineering",
  "Database Design",
];

export default function KhangPortfolio() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-white/10 pb-5">
          <a
            href="#home"
            className="text-sm font-semibold tracking-wide text-white"
          >
            KHANG
          </a>

          <div className="hidden items-center gap-7 text-sm text-neutral-400 sm:flex">
            <a className="transition hover:text-white" href="#about">
              Giới thiệu
            </a>
            <a className="transition hover:text-white" href="#projects">
              Dự án
            </a>
            <a className="transition hover:text-white" href="#contact">
              Liên hệ
            </a>
          </div>
        </nav>

        <div
          id="home"
          className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
              Sinh viên CNTT / Web Developer
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Xin chào, mình là Khang. Mình xây dựng những sản phẩm số đơn giản và hữu ích.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
              Mình đang học phát triển web, kỹ thuật phần mềm và thiết kế cơ sở
              dữ liệu. Mình thích giao diện gọn gàng, logic rõ ràng và các dự
              án thực tế có thể giải quyết vấn đề thật.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                Xem dự án
              </a>

              <a
                href="https://github.com/mm4you"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/20"
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500">Hồ sơ</p>
                  <h2 className="mt-1 text-2xl font-semibold">Khang</h2>
                </div>

                <div className="h-12 w-12 rounded-full bg-white text-center text-lg font-semibold leading-[48px] text-neutral-950">
                  K
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <InfoRow label="Định hướng" value="Web Development" />
                <InfoRow label="Thành tích" value="Top 20 Hackathon 2025" />
                <InfoRow label="Đang học" value="React, Python, MySQL" />
                <InfoRow label="Phong cách" value="Gọn gàng, thực tế" />
                <InfoRow label="GitHub" value="github.com/mm4you" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-white/10 bg-neutral-900/40 px-5 py-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              Giới thiệu
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Một sinh viên thích biến ý tưởng thành sản phẩm thật.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-neutral-400">
            <p>
              Mình tập trung xây dựng website và các dự án phần mềm dễ dùng,
              dễ hiểu. Hướng học hiện tại của mình gồm frontend development,
              backend fundamentals và database design.
            </p>

            <p>
              Mình quan tâm đến UI đơn giản, cấu trúc rõ ràng và tính năng thực
              tế. Mục tiêu của mình là tiếp tục cải thiện thông qua dự án thật
              và làm việc nhóm.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Thành tích
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {achievements.map((item) => (
              <div
                key={item.event}
                className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm text-neutral-500">{item.event}</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Kỹ năng
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                Dự án
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Một số sản phẩm nổi bật
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-500">
              Một vài dự án và ý tưởng trong quá trình học CNTT, phát triển web
              và kỹ thuật phần mềm.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-neutral-950">
                  {index === 0 ? (
                    <BrainCircuit size={20} />
                  ) : index === 1 ? (
                    <Database size={20} />
                  ) : (
                    <Code2 size={20} />
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {project.highlight && (
                  <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300">
                    {project.highlight}
                  </p>
                )}

                <p className="mt-4 min-h-28 text-sm leading-7 text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
              Liên hệ
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Kết nối với mình.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
              Theo dõi quá trình học tập, dự án và các cập nhật mới của mình.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <SocialLink
              href="https://github.com/mm4you"
              icon={<Code2 size={18} />}
              label="GitHub"
            />
            <SocialLink
              href="mailto:ungnhutkhang53@gmail.com"
              icon={<Mail size={18} />}
              label="Email"
            />
            <SocialLink
              href="https://www.facebook.com/agug103"
              icon={<ArrowUpRight size={18} />}
              label="Facebook"
            />
            <SocialLink
              href="https://www.instagram.com/kh4ng.u"
              icon={<ArrowUpRight size={18} />}
              label="Instagram"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
      <span className="text-neutral-500">{label}</span>
      <span className="text-right text-neutral-200">{value}</span>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}
