import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import Head from "next/head";
import Image from "next/image";

const MAX_SPLIT = 6;

const PosterPage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewParts, setPreviewParts] = useState<string[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [imgNatural, setImgNatural] = useState<{ width: number; height: number } | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreviewParts([]);
      setImageLoaded(false);
      setImgNatural(null);
      return;
    }
    setLoading(true);
    const img = new window.Image();
    const reader = new FileReader();
    reader.onload = () => {
      img.src = reader.result as string;
    };
    reader.onerror = (e) => {
      setLoading(false);
      setPreviewParts([]);
      setImageLoaded(false);
      setImgNatural(null);
      alert("Error leyendo el archivo. Por favor intenta con otro archivo.");
    };
    reader.readAsDataURL(file);

    img.onload = () => {
      setImgNatural({ width: img.width, height: img.height });
      splitAndPreview(img, rows, cols);
    };
    img.onerror = (e) => {
      setLoading(false);
      setPreviewParts([]);
      setImageLoaded(false);
      setImgNatural(null);
      alert("Error cargando la imagen. Por favor intenta con otro archivo.");
    };
  };

  const splitAndPreview = (img: HTMLImageElement, rows: number, cols: number) => {
    const width = img.width;
    const height = img.height;
    const partWidth = width / cols;
    const partHeight = height / rows;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setLoading(false);
      setPreviewParts([]);
      setImageLoaded(false);
      return;
    }
    canvas.width = partWidth;
    canvas.height = partHeight;
    const previews: string[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        ctx.clearRect(0, 0, partWidth, partHeight);
        ctx.drawImage(
          img,
          col * partWidth,
          row * partHeight,
          partWidth,
          partHeight,
          0,
          0,
          partWidth,
          partHeight
        );
        previews.push(canvas.toDataURL("image/jpeg", 0.95));
      }
    }
    setPreviewParts(previews);
    setImageLoaded(true);
    setLoading(false);
  };

  const handleRowsColsChange = (newRows: number, newCols: number) => {
    setRows(newRows);
    setCols(newCols);
    if (imgNatural && fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files[0]) {
      setLoading(true);
      const file = fileInputRef.current.files[0];
      const img = new window.Image();
      const reader = new FileReader();
      reader.onload = () => {
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
      img.onload = () => {
        splitAndPreview(img, newRows, newCols);
      };
      img.onerror = () => {
        setLoading(false);
        setPreviewParts([]);
        setImageLoaded(false);
      };
    }
  };

  const generatePoster = async () => {
    if (!fileInputRef.current || !fileInputRef.current.files || !fileInputRef.current.files[0]) {
      alert("Por favor selecciona una imagen");
      return;
    }
    const file = fileInputRef.current.files[0];
    const img = new window.Image();
    const reader = new FileReader();
    reader.onload = () => {
      img.src = reader.result as string;
    };
    reader.onerror = (e) => {
      alert("Error leyendo el archivo. Por favor intenta con otro archivo.");
    };
    reader.readAsDataURL(file);

    img.onload = () => {
      const width = img.width;
      const height = img.height;
      const partWidth = width / cols;
      const partHeight = height / rows;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        alert("No se pudo obtener el contexto del canvas");
        return;
      }
      canvas.width = partWidth;
      canvas.height = partHeight;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      const scale = 210 / partWidth; // A4 width in mm
      let page = 0;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          ctx.clearRect(0, 0, partWidth, partHeight);
          ctx.drawImage(
            img,
            col * partWidth,
            row * partHeight,
            partWidth,
            partHeight,
            0,
            0,
            partWidth,
            partHeight
          );
          const imgData = canvas.toDataURL("image/jpeg", 1.0);
          if (page > 0) pdf.addPage();
          pdf.addImage(imgData, "JPEG", 0, 0, partWidth * scale, partHeight * scale);
          page++;
        }
      }
      pdf.save(`poster_${rows}x${cols}.pdf`);
    };
    img.onerror = (e) => {
      alert("Error cargando la imagen. Por favor intenta con otro archivo.");
    };
  };

  return (
    <>
      <Head>
        <title>Poster Generator</title>
        <link rel="icon" href="/marco_nobg.png" />
      </Head>
      <div
        style={{
          minHeight: "100vh",
          background: "#f7f7fa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            padding: 32,
            maxWidth: 480,
            width: "100%",
            margin: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              marginBottom: 0,
              fontSize: 24,
              color: "#222",
            }}
          >
            <Image
              src="/marco_nobg.png"
              alt="Marco"
              width={20}
              height={20}
              style={{ marginRight: 8 }}
            />
            Marco
          </h2>
          <p style={{ color: "#666", marginBottom: 24, textAlign: "center" }}>
            Selecciona una imagen y elige en cuántas filas y columnas deseas
            dividirla. Previsualiza antes de generar el PDF.
          </p>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{
              padding: 8,
              borderRadius: 8,
              border: "1px solid #ddd",
              marginBottom: 16,
              width: "100%",
              background: "#fafbfc",
            }}
            onChange={handleFileChange}
            disabled={loading}
          />
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 24,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div>
              <label style={{ fontSize: 14, color: "#444" }}>Filas</label>
              <input
                type="number"
                min={1}
                max={MAX_SPLIT}
                value={rows}
                onChange={(e) =>
                  handleRowsColsChange(Number(e.target.value), cols)
                }
                style={{
                  width: 56,
                  marginLeft: 8,
                  padding: 4,
                  borderRadius: 6,
                  border: "1px solid #ddd",
                  fontSize: 16,
                  textAlign: "center",
                }}
                disabled={!imgNatural || loading}
              />
            </div>
            <div>
              <label style={{ fontSize: 14, color: "#444" }}>Columnas</label>
              <input
                type="number"
                min={1}
                max={MAX_SPLIT}
                value={cols}
                onChange={(e) =>
                  handleRowsColsChange(rows, Number(e.target.value))
                }
                style={{
                  width: 56,
                  marginLeft: 8,
                  padding: 4,
                  borderRadius: 6,
                  border: "1px solid #ddd",
                  fontSize: 16,
                  textAlign: "center",
                }}
                disabled={!imgNatural || loading}
              />
            </div>
          </div>
          {loading && (
            <div style={{ marginBottom: 16, color: "#888" }}>
              Procesando imagen...
            </div>
          )}
          {previewParts.length === rows * cols && !loading && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gap: 8,
                marginBottom: 24,
                width: "100%",
                aspectRatio: `${cols} / ${rows}`,
              }}
            >
              {previewParts.map((src, idx) => (
                <div
                  key={idx}
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    background: "#f0f0f0",
                    borderRadius: 8,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={src}
                    alt={`Parte ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          )}
          <button
            onClick={generatePoster}
            disabled={!imageLoaded || loading}
            style={{
              background: !imageLoaded || loading ? "#e0e0e0" : "#222",
              color: !imageLoaded || loading ? "#aaa" : "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 32px",
              fontWeight: 600,
              fontSize: 16,
              cursor: !imageLoaded || loading ? "not-allowed" : "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              transition: "background 0.2s, color 0.2s",
              marginTop: 8,
              width: "100%",
            }}
          >
            Generar Póster en PDF
          </button>
        </div>
        <div style={{ marginTop: 32, color: "#bbb", fontSize: 14 }}>
          &copy; {new Date().getFullYear()} arciniega.dev
        </div>
      </div>
    </>
  );
};

export default PosterPage;