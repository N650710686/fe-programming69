import { useState } from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data';
import SearchBox from '../components/SearchBox';
import GenreBox from '../components/GenreBox';

const GENRES = [...new Set(movies.map((m) => m.genre))];

function Movies() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('all');

  const q = query.trim().toLowerCase();

  const shown = movies.filter((m) => {
    // ถ้าไม่ได้พิมพ์อะไร ให้แสดงทุกเรื่อง
    const matchQuery =
      q === '' ||
      m.title
        .toLowerCase()
        .split(' ')
        .some((word) => word.startsWith(q));

    // กรองตามประเภท
    const matchGenre =
      genre === 'all' || m.genre === genre;

    return matchQuery && matchGenre;
  });

  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">
        หนังทั้งหมด
      </h1>

      {/* ค้นหา + เลือกประเภท */}
      <div className="mb-6 flex flex-wrap items-start gap-4">
        <SearchBox
          query={query}
          setQuery={setQuery}
        />

        <GenreBox
          genre={genre}
          onGenreChange={setGenre}
          genres={GENRES}
        />
      </div>

      {/* รายการหนัง */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((m) => (
          <Link
            key={m.id}
            to={`/movies/${m.id}`}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                       transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-lg font-bold text-slate-800">
              {m.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              ปี {m.year} · {m.genre}
            </p>
          </Link>
        ))}
      </div>

      {/* ไม่พบหนัง */}
      {shown.length === 0 && (
        <p className="mt-8 text-center text-slate-400">
          ไม่พบหนังที่ค้นหา
        </p>
      )}
    </div>
  );
}

export default Movies;