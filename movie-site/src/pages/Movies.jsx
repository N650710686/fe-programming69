import { Link } from 'react-router-dom';
import { movies } from '../data';

function Movies() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">รายการหนังทั้งหมด</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((m) => (
          <div key={m.id} className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
              <p className="mt-1 text-sm text-slate-500">ปี {m.year}</p>
              <span className="mt-3 inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                {m.genre}
              </span>
            </div>
            <Link
              to={`/movies/${m.id}`}
              className="mt-4 block rounded-lg bg-cyan-600 py-2 text-center text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              ดูรายละเอียด
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;