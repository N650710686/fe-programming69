import { useState } from 'react';

function MovieCard({ title, year, poster }) {
  const [likes, setLikes] = useState(0);
  const [watched, setWatched] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">

      {poster && (
        <img
          src={poster}
          alt={`โปสเตอร์ ${title}`}
          className="aspect-[2/3] w-full object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-bold">
          {title} ({year})
        </h3>

        {/* Like */}
        <button
          onClick={() => setLikes(l => l + 1)}
          className="mt-3 rounded-lg bg-pink-100 px-4 py-2 font-semibold text-pink-700 transition hover:bg-pink-200"
        >
          ❤️ {likes}
        </button>

        {/* ถ้า Like มากกว่า 10 ให้แสดง */}
        {likes > 10 && (
          <p className="text-amber-600">
            🔥 หนังเรื่องนี้กำลังมาแรง!
          </p>
        )}

        {/* Watched */}
        <div className="mt-4 flex items-center gap-4">
          {watched ? (
            <p className="text-green-600">
              ดูแล้ว 🍿
            </p>
          ) : (
            <p className="text-slate-400">
              ยังไม่ได้ดู
            </p>
          )}

          <button
            onClick={() => setWatched(!watched)}
            className="rounded bg-cyan-600 px-3 py-1 text-white"
          >
            {watched ? 'ยังไม่ได้ดู' : 'ดูแล้ว'}
          </button>
        </div>

      </div>
    </div>
  );
}

export default MovieCard;