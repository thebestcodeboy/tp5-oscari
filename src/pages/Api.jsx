import { useState, useEffect } from "react";
import axios from "axios";

export default function Api() {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.open-meteo.com/v1/forecast?latitude=-24.78&longitude=-65.41&current_weather=true")
      .then((res) => setClima(res.data.current_weather))
      .catch(() => setClima({ error: true }));
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>API - Clima actual en Salta</h1>
      {clima ? (
        clima.error ? (
          <p>Error al cargar los datos.</p>
        ) : (
          <div style={{ border: "1px solid #ccc", borderRadius: 10, padding: 16, maxWidth: 320 }}>
            <img
              src="/tp4-oscari/img/clima.jpg"
              alt="Clima"
              style={{ width: "100%", borderRadius: 8, marginBottom: 10 }}
            />
            <p><strong>Temperatura:</strong> {clima.temperature} °C</p>
            <p><strong>Viento:</strong> {clima.windspeed} km/h</p>
            <p><strong>Dirección:</strong> {clima.winddirection}°</p>
            <p><strong>Hora:</strong> {clima.time}</p>
          </div>
        )
      ) : (
        <p>Cargando datos...</p>
      )}
    </main>
  );
}
