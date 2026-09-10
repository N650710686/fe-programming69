import Navbar from './Navbar';
import Footer from './Footer';
import ProfileCard from './ProfileCard';
import Button from './Button';

// ข้อมูลสมาชิกกลุ่ม
const members = [
  { id: 1, name: 'ณัฏฐนันท์ ชื่นใหจวัง', nickname: 'บอล', major: 'เทคโนโลยีสารสนเทศ', favorites: ['โกโก้', 'หมา', 'ดูหนัง'] },
  { id: 2, name: 'สมชาย สายลุย', nickname: 'โจ้', major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'แมว'] },
  { id: 3, name: 'สมหญิง จริงใจ', nickname: 'เจน', major: 'วิทยาการคอมพิวเตอร์', favorites: ['กาแฟ', 'ฟังเพลง'] },
];

const movies = [
  { id: 1, title: 'Interstellar', genre: 'Sci-Fi', year: 2014 },
  { id: 2, title: 'Your Name', genre: 'Animation', year: 2016 },
  { id: 3, title: 'Parasite', genre: 'Thriller', year: 2019 },
];

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      {/* Hero */}
      <header className="bg-slate-900 px-6 pb-16 pt-12 text-center">
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          ดูหนังดี ๆ ไปด้วยกัน
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          รวมหนังคุณภาพที่คัดมาแล้ว อัปเดตใหม่ทุกสัปดาห์
        </p>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 space-y-12">
        {/* ส่วนที่ 1: การ์ดสมาชิกกลุ่ม (Grid 1 / 2 / 3 ตามขนาดหน้าจอ) */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-slate-800">สมาชิกกลุ่มของเรา</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {members.map((m) => (
              <ProfileCard
                key={m.id}
                name={m.name}
                nickname={m.nickname}
                major={m.major}
                favorites={m.favorites}
              />
            ))}
          </div>
        </section>

        {/* ส่วนที่ 2: หนังแนะนำ */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-slate-800">หนังแนะนำ</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {movies.map((m) => (
              <div
                key={m.id}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
                <p className="mt-1 text-sm text-slate-500">ปี {m.year}</p>
                <span className="mt-3 inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                  {m.genre}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ส่วนที่ 3: ปุ่มแบบ Variant */}
        <section className="flex justify-center gap-3 border-t border-slate-200 pt-8">
          <Button variant="primary">บันทึก</Button>
          <Button variant="danger">ลบ</Button>
          <Button variant="ghost">ยกเลิก</Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;