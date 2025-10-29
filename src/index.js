import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Anasayfa from './anasayfa';
import Giris from './Giris';
import UyeOl from './UyeOl';
import Panel from './Panel';
import AnketOlustur from './AnketOlustur'; // ✅ yeni sayfa

// Debug için
console.log('🔍 Anasayfa:', typeof Anasayfa);
console.log('🔍 Giris:', typeof Giris);
console.log('🔍 UyeOl:', typeof UyeOl);
console.log('🔍 Panel:', typeof Panel);
console.log('🔍 AnketOlustur:', typeof AnketOlustur);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/giris" element={<Giris />} />
        <Route path="/uyeol" element={<UyeOl />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/anket-olustur" element={<AnketOlustur />} /> {/* ✅ yeni rota */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
