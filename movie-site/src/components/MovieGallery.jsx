import { useState } from 'react';
import { movies } from '../data';


function MovieGallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const hasNext = index < movies.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);   // ไปเรื่องถัดไป
        } else {
            setIndex(0);           // สุดท้ายแล้ว วนกลับเรื่องแรก
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);  // กลับค่า true/false
    }

    const movie = movies[index];   // ค่าที่คำนวณจาก state ไม่ต้องเป็น state เอง

    return (
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-md">
            <button onClick={handleNextClick}
                className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white">
                เรื่องถัดไป
            </button>

            <div className="mt-4 flex flex-col gap-6 md:flex-row">
                {movie.poster && (
                    <img src={movie.poster} alt={`โปสเตอร์ ${movie.title}`}
                        className="w-40 shrink-0 self-start rounded-xl shadow" />
                )}
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        {movie.title} <span className="text-slate-400">({movie.year})</span>
                    </h2>
                    <p className="text-sm text-slate-500">
                        เรื่องที่ {index + 1} จาก {movies.length} | {movie.genre}
                    </p>

                    <button onClick={handleMoreClick} className="mt-2 text-sm text-cyan-600">
                        {showMore ? 'ซ่อนเรื่องย่อ' : 'อ่านเรื่องย่อ'}
                    </button>
                    {showMore && <p className="mt-2 text-slate-700">{movie.detail}</p>}
                </div>
            </div>
        </div>
    );
}
// function MovieNav() {
//   const [index, setIndex] = useState(0);

//   // วิธีที่ 1: ประกาศฟังก์ชันแยก เหมาะกับ logic ยาว ๆ
//   function handleReset() {
//     setIndex(0);
//   }

//   return (
//     <div className="flex items-center gap-3">
//       {/* วิธีที่ 2: arrow function สั้น ๆ ตรงนั้นเลย */}
//       <button onClick={() => setIndex(index - 1)}>ก่อนหน้า</button>
//       <span className="text-2xl font-bold">{movies[index].title}</span>
//       <button onClick={() => setIndex(index + 1)}>ถัดไป</button>
//       <button onClick={handleReset}>เรื่องแรก</button>
//     </div>
//   );
// }

export default MovieGallery;