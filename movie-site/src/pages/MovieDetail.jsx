import { useParams, Link } from 'react-router-dom';
import { movies } from '../data';

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">ไม่พบข้อมูลหนังรหัสนี้</h2>
        <Link to="/movies" className="mt-4 inline-block text-cyan-600 hover:underline">
          ← กลับไปหน้าหนังทั้งหมด
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md">
        <span className="inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
          {movie.genre} ({movie.year})
        </span>
        <h1 className="mt-4 text-3xl font-bold text-slate-800">{movie.title}</h1>
        <p className="mt-4 leading-relaxed text-slate-600">{movie.detail}</p>

        <div className="mt-8 border-t pt-6">
          <Link
            to="/movies"
            className="inline-block rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            ← กลับไปหน้าหนังทั้งหมด
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;