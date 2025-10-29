import React, { useState } from "react";
import "./SifirdanAnket.css";

function SifirdanAnket() {
  const [soruSayisi, setSoruSayisi] = useState(0);
  const [sorular, setSorular] = useState([]);

  const handleOlustur = () => {
    const yeniSorular = [];
    for (let i = 0; i < soruSayisi; i++) {
      yeniSorular.push({
        id: i + 1,
        metin: "",
        tip: "klasik",
        secenekler: [],
      });
    }
    setSorular(yeniSorular);
  };

  const handleSoruDegis = (id, yeniMetin) => {
    setSorular(
      sorular.map((s) => (s.id === id ? { ...s, metin: yeniMetin } : s))
    );
  };

  const handleTipDegis = (id, tip) => {
    setSorular(
      sorular.map((s) => (s.id === id ? { ...s, tip, secenekler: [] } : s))
    );
  };

  const handleSecenekEkle = (id) => {
    setSorular(
      sorular.map((s) =>
        s.id === id
          ? { ...s, secenekler: [...s.secenekler, "Yeni Seçenek"] }
          : s
      )
    );
  };

  const handleSecenekDegis = (id, index, text) => {
    setSorular(
      sorular.map((s) => {
        if (s.id === id) {
          const yeniSecenekler = [...s.secenekler];
          yeniSecenekler[index] = text;
          return { ...s, secenekler: yeniSecenekler };
        }
        return s;
      })
    );
  };

  return (
    <div className="anket-container">
      <h1>📝 Sıfırdan Anket Oluştur</h1>

      <div className="soru-sayisi-alani">
        <label>Kaç soru eklemek istiyorsunuz?</label>
        <input
          type="number"
          min="1"
          max="20"
          value={soruSayisi}
          onChange={(e) => setSoruSayisi(e.target.value)}
        />
        <button onClick={handleOlustur}>Oluştur</button>
      </div>

      <div className="sorular-listesi">
        {sorular.map((soru, index) => (
          <div key={soru.id} className="soru-kutusu">
            <div className="soru-ust">
              <span className="soru-baslik">Soru {index + 1}:</span>
              <span className="plus-icon">➕</span>
            </div>

            <input
              type="text"
              placeholder="Sorunuzu yazın..."
              value={soru.metin}
              onChange={(e) => handleSoruDegis(soru.id, e.target.value)}
            />

            <div className="tip-secim">
              <label>Soru tipi: </label>
              <select
                value={soru.tip}
                onChange={(e) => handleTipDegis(soru.id, e.target.value)}
              >
                <option value="klasik">Klasik (Yazılı Cevap)</option>
                <option value="coktan">Çoktan Seçmeli</option>
                <option value="slider">Slider (1–10 arası)</option>
              </select>
            </div>

            {soru.tip === "klasik" && (
              <input
                type="text"
                placeholder="Katılımcı bu alana cevabını yazacak"
                disabled
                className="dummy-input"
              />
            )}

            {soru.tip === "coktan" && (
              <div className="secenekler">
                {soru.secenekler.map((secenek, i) => (
                  <input
                    key={i}
                    type="text"
                    value={secenek}
                    onChange={(e) =>
                      handleSecenekDegis(soru.id, i, e.target.value)
                    }
                  />
                ))}
                <button
                  className="btn-secenek"
                  onClick={() => handleSecenekEkle(soru.id)}
                >
                  + Seçenek Ekle
                </button>
              </div>
            )}

            {soru.tip === "slider" && (
              <div className="slider-alani">
                <label>1</label>
                <input type="range" min="1" max="10" disabled />
                <label>10</label>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SifirdanAnket;
