# 🌱 TRAZA//CO2 · CRM de Consultoría en Trazabilidad de Carbono

![PWA](https://img.shields.io/badge/PWA-instalable-14b8a6)
![React](https://img.shields.io/badge/React-18-61dafb)
![Vite](https://img.shields.io/badge/Vite-6-646cff)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-38bdf8)
![Licencia](https://img.shields.io/badge/licencia-copyright--reserved-orange)

> **Consultorio:** TRAZA//CO2 — WMS · Sistemas de Trazabilidad de Carbono · Logística 5.0
> **Propietario:** Miguel Ángel Layunta López
> **Contacto:** mlayuntalopez@gmail.com · 📞 698 910 833

CRM vertical diseñado para la consultoría logística B2B con foco en descarbonización.
Gana el ciclo de venta técnico (auditorías de flota, última milla, empaques, logística inversa)
y demuestra el retorno **económico (ROI)** y **ambiental (ROE)** de cada proyecto.

---

## ✨ Módulos

### 1️⃣ Calculadora y Huella de Carbono *(core sostenible)*
- Simulador **antes / después** de emisiones por **Alcances 1, 2 y 3** (GHG Protocol).
- Factores de emisión de referencia (diésel 2,68 kg/L, electricidad ES 0,17 kg/kWh, etc.)
actualizables vía API del **MITECO**.
- **Conversor de métricas verdes**: tCO₂e evitadas → árboles plantados, km en coche, hogares/año.
- Fichas de cliente **eco-segmentadas** con objetivos Net Zero 2030 / 2050.

### 2️⃣ Pipeline de Consultoría
- Embudos por tipo de proyecto: *Auditoría Flota Eléctrica · Última Milla Multimodal ·
Ingeniería de Empaques · Logística Inversa*.
- **Scoring verde** de prospectos (urgencia normativa / presión de cadena de suministro).
- Tablero Kanban con valor de oportunidad y objetivo de reducción comprometido.

### 3️⃣ Propuestas Comerciales (CPQ)
- Generación automática de ofertas técnico-económicas.
- KPIs cruzados en el mismo documento: precio, ahorro operativo, valor del carbono,
ROI del cliente y equivalencias verdes.
- Exportación a PDF desde el navegador.

### 4️⃣ Cumplimiento Normativo y Auditoría
- **Alertas regulatorias automáticas**: ZBE, normativa Euro, directiva CSRD, ISO 14001 pendiente.
- Repositorio documental de certificaciones con control de vencimientos.

### 5️⃣ Dashboards de Negocio y Sostenibilidad
- BI integrado: ingresos vs. tCO₂e mitigadas, pipeline por tipo, ROE (tCO₂e / 1.000 €).
- Seguimiento de **SLA verdes**: objetivo prometido vs. reducción real conseguida.

### 🔌 Ecosistema de integraciones (simulado, listo para conectar)
ERP (SAP) · TMS · IoT/Telemetría de flota · Datos satelitales · Factores MITECO / GHG Protocol.

---

## 🛠️ Stack técnico

| Capa | Tecnología |
|---|---|
| Frontend | React 18 + TypeScript |
| Build | Vite 6 |
| Estilos | TailwindCSS 4 |
| Gráficos | Recharts |
| Iconos | lucide-react |
| PWA | manifest.json + Service Worker (cache-first) |

## 📂 Estructura del proyecto

```
├── public/            manifest.json, sw.js, icons/
├── src/
│   ├── App.tsx        CRM completo (los 5 módulos)
│   ├── main.tsx       bootstrap + registro del service worker
│   └── index.css      Tailwind
├── index.html
├── vite.config.ts
└── .github/workflows/deploy.yml
```

## 🚀 Puesta en marcha

```bash
# 1. Clonar
git clone https://github.com/<tu-usuario>/traza-co2-crm.git
cd traza-co2-crm

# 2. Instalar dependencias
npm install

# 3. Desarrollo
npm run dev          # http://localhost:5173

# 4. Producción
npm run build
npm run preview
```

## 🌐 Despliegue en GitHub Pages

1. Sube el repo a GitHub.
2. En **Settings → Pages**, selecciona *GitHub Actions* como origen.
3. Cada *push* a `main` ejecuta el workflow `deploy.yml` automáticamente.

## 📱 Instalable como PWA

Al abrir la web en Chrome/Edge aparece el icono **"Instalar"** en la barra de direcciones.
El CRM queda disponible **offline** gracias a `sw.js`.
Para publicar los iconos, exporta el logo a `icons/icon-192.png` e `icons/icon-512.png`
y sube la versión de `CACHE` en `sw.js` (p. ej. `traza-co2-v2`).

## 🗺️ Roadmap

- [ ] Persistencia real de datos (Supabase / Firebase en lugar de estado local)
- [ ] Conexión OAuth a ERP/TMS de clientes
- [ ] Exportación de informes de huella en PDF firmado (ISO 14064)
- [ ] Firma digital de propuestas y contrato desde el CRM
- [ ] Multiusuario con roles (consultor / dirección)

## ⚖️ Licencia y aviso legal

Software propietario de **Miguel Ángel Layunta López © 2026**. Todos los derechos reservados.
Los factores de emisión son de referencia; para uso contractual deben validarse contra las
tablas oficiales vigentes del MITECO y del GHG Protocol.

---

<p align="center">
<b>TRAZA//CO₂</b> — WMS · Sistemas de Trazabilidad de Carbono · Logística 5.0<br/>
mlayuntalopez@gmail.com · 698 910 833
</p>