import { useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieGallery from "../components/MovieGallery";
import { movies } from "../data";

function Home() {
  const [watchlist, setWatchlist] = useState([]);

  // เพิ่มหนังต่อท้าย
  function addToEnd(newMovie) {
    setWatchlist([...watchlist, newMovie]);
  }

  // เพิ่มหนังไว้ข้างหน้า
  function addToStart(newMovie) {
    setWatchlist([newMovie, ...watchlist]);
  }

  // ลบหนัง
  function removeMovie(id) {
    setWatchlist(watchlist.filter(m => m.id !== id));
  }

  // แก้ไข watched ของหนัง
  function toggleWatched(id) {
    setWatchlist(
      watchlist.map(m =>
        m.id === id
          ? { ...m, watched: !m.watched }
          : m
      )
    );
  }

  // แทรกหนังตรงตำแหน่งที่ต้องการ
  function insertMovie(newMovie) {
    const at = 1;

    setWatchlist([
      ...watchlist.slice(0, at),
      newMovie,
      ...watchlist.slice(at),
    ]);
  }

  // เรียงตามปี
  function sortByYear() {
    const sorted = [...watchlist];
    sorted.sort((a, b) => a.year - b.year);
    setWatchlist(sorted);
  }

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">
        🏠 หน้าแรก
      </h1>

      <p className="mt-2 text-slate-500">
        ยินดีต้อนรับสู่ MovieHub
      </p>

      {/* ถ้าไม่มีหนังใน Watchlist */}
      {watchlist.length === 0 && (
        <p className="text-slate-400">
          ยังไม่มีหนังในลิสต์ ลองเพิ่มดูสิ
        </p>
      )}

      <h2 className="mt-8 text-2xl font-bold text-slate-800">
        หนังแนะนำ
      </h2>

      <div className="mx-auto mt-8 max-w-5xl flex flex-wrap justify-center gap-6">
        {movies.slice(0, 3).map((m) => (
          <MovieCard
            key={m.id}
            title={m.title}
            year={m.year}
            poster={m.poster}
          />
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">
        ดูหนังเพิ่มเติม
      </h2>

      <div className="mx-auto mt-8 max-w-md">
        <MovieGallery />
      </div>
    </div>
  );
}

export default Home;