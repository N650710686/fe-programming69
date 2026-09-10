function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-900 px-6 py-4">
      <span className="text-xl font-bold text-white">
        🎬 Movie<span className="text-cyan-400">Hub</span>
      </span>
      <div className="hidden gap-6 text-slate-300 md:flex">
        <a href="#" className="hover:text-cyan-400 transition">หน้าแรก</a>
        <a href="#" className="hover:text-cyan-400 transition">หนังใหม่</a>
        <a href="#" className="hover:text-cyan-400 transition">รายการโปรด</a>
      </div>
      <button className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold
                         text-white hover:bg-cyan-700 transition">
        เข้าสู่ระบบ
      </button>
    </nav>
  );
}

export default Navbar;