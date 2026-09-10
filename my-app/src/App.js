import Hello from './Hello';   // 1. import เข้ามา (./ = โฟลเดอร์เดียวกัน)

function App() {
  return (
    <div>
      <h1>แอปของฉัน</h1>
      <Hello />               {/* 2. ใช้เหมือนแท็ก HTML */}
      <Hello />               {/* 3. ใช้ซ้ำกี่ครั้งก็ได้! */}
      <Hello />
    </div>
  );
}

export default App;
