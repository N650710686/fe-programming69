import ProfileCard from './ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ณัฏฐนันท์ ชื่นใหจวัง', nickname: 'บอล',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['โกโก้', 'หมา'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
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
    </div>
  );
}

export default App;