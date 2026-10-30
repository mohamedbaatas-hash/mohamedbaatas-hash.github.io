import React, { useState } from 'react';

/**
 * Interactive Visual Schematics & Live Mini-Workbenches for the 4 Verified FluiDev Software Systems:
 * 1. avant-metre: Interactive Pipe Trench Cross-Section & BOQ Quantity Takeoff Calculator
 * 2. waterfit: Interactive Hydrochemical Mineral Profile & WHO/EPA Standard Benchmark
 * 3. nfc-business-card: Interactive ISO 14443-4 APDU Protocol & 13.56 MHz HCE Transceiver
 * 4. management-erps: Interactive SQLite Relational Schema & Module Switcher (Al Madrasa, Al-Quds, Maktabati)
 */
export function SoftwareSchematicPreview({ appId, isAr }) {
  if (appId === 'avant-metre') {
    return <AvantMetreWidget isAr={isAr} />;
  }
  if (appId === 'waterfit') {
    return <WaterFitMineralWidget isAr={isAr} />;
  }
  if (appId === 'nfc-business-card') {
    return <NfcHceProtocolWidget isAr={isAr} />;
  }
  return <ErpDatabaseSchemaWidget isAr={isAr} />;
}

/* ============================================================================
 * 1. AVANT MÉTRÉ — INTERACTIVE TRENCH TAKEOFF & BOQ CALCULATOR
 * ============================================================================ */
const TRENCH_SPECS = {
  DN200: { dn: 'DN200', widthB: 0.80, depthH: 1.35, pipeR: 11, bedVolPerM: 0.12, excVolPerM: 1.08, backfillPerM: 0.93 },
  DN400: { dn: 'DN400', widthB: 1.10, depthH: 1.65, pipeR: 18, bedVolPerM: 0.17, excVolPerM: 1.82, backfillPerM: 1.52 },
  DN600: { dn: 'DN600', widthB: 1.40, depthH: 2.00, pipeR: 25, bedVolPerM: 0.28, excVolPerM: 2.80, backfillPerM: 2.24 },
};

function AvantMetreWidget({ isAr }) {
  const [dnKey, setDnKey] = useState('DN400');
  const [lengthM, setLengthM] = useState(100);
  const spec = TRENCH_SPECS[dnKey];

  const totalExcavation = (spec.excVolPerM * lengthM).toFixed(1);
  const totalBedding = (spec.bedVolPerM * lengthM).toFixed(1);
  const totalBackfill = (spec.backfillPerM * lengthM).toFixed(1);

  return (
    <div className="border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#080C17] font-mono text-xs">
      {/* Top Interactive Controls Bar */}
      <div className="px-3.5 py-2 border-b border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B101E] flex flex-wrap items-center justify-between gap-2 text-[10px]">
        <span className="font-bold text-blue-600 dark:text-sky-400 uppercase">
          {isAr ? 'محرك حساب كميات الحفر والردم (DQE)' : 'PYQT TRENCH & BOQ ENGINE // LIVE PREVIEW'}
        </span>
        <div className="flex items-center gap-1">
          {Object.keys(TRENCH_SPECS).map((k) => (
            <button
              key={k}
              onClick={() => setDnKey(k)}
              className={`px-2 py-0.5 border transition-colors ${
                dnKey === k
                  ? 'bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950 border-transparent font-bold'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {k}
            </button>
          ))}
          <button
            onClick={() => setLengthM(lengthM === 100 ? 250 : 100)}
            className="px-2 py-0.5 border border-blue-600/30 dark:border-sky-400/30 bg-blue-600/10 dark:bg-sky-400/10 text-blue-700 dark:text-sky-300 font-bold"
          >
            L={lengthM}m
          </button>
        </div>
      </div>

      {/* Split Schematic + Live BOQ Table */}
      <div className="grid grid-cols-1 sm:grid-cols-12 divide-y sm:divide-y-0 sm:divide-x rtl:divide-x-reverse divide-slate-200/90 dark:divide-slate-800/90">
        {/* Left: Trench Cross Section SVG */}
        <div className="sm:col-span-6 p-3 flex items-center justify-center bg-swiss-grid">
          <svg viewBox="0 0 220 135" className="w-full h-auto select-none">
            {/* Ground Surface Line */}
            <line x1="15" y1="20" x2="205" y2="20" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2" />
            <text x="18" y="14" className="fill-emerald-600 dark:fill-emerald-400 text-[7.5px] font-bold">
              TN (GROUND)
            </text>

            {/* Trench Excavation Box */}
            <rect x="60" y="20" width="100" height="92" className="fill-amber-500/10 stroke-slate-700 dark:stroke-slate-300" strokeWidth="1.5" />

            {/* Sand Bedding Layer (Lit de Pose) */}
            <rect x="61" y="94" width="98" height="17" className="fill-amber-400/35 stroke-amber-500/60" strokeWidth="1" />

            {/* Pipe Conduit Section */}
            <circle
              cx="110"
              cy={94 - spec.pipeR}
              r={spec.pipeR}
              className="fill-sky-500/30 stroke-blue-600 dark:stroke-sky-400 transition-all duration-300"
              strokeWidth="2.5"
            />
            <text x="110" y={97 - spec.pipeR} textAnchor="middle" className="fill-slate-900 dark:fill-white text-[8px] font-bold">
              {spec.dn}
            </text>

            {/* Dimension Annotations */}
            <line x1="60" y1="124" x2="160" y2="124" className="stroke-blue-600 dark:stroke-sky-400" strokeWidth="1" />
            <text x="110" y="133" textAnchor="middle" className="fill-blue-600 dark:fill-sky-400 text-[8px] font-bold">
              B = {spec.widthB.toFixed(2)}m
            </text>

            <line x1="46" y1="20" x2="46" y2="112" className="stroke-slate-500" strokeWidth="1" />
            <text x="42" y="68" textAnchor="end" className="fill-slate-600 dark:fill-slate-400 text-[8px] font-bold">
              H={spec.depthH}m
            </text>
          </svg>
        </div>

        {/* Right: Live BOQ / Avant-Métré Output */}
        <div className="sm:col-span-6 divide-y divide-slate-200/80 dark:divide-slate-800/80 bg-white dark:bg-[#0B101E] text-[11px] flex flex-col justify-between">
          <div className="p-2.5 flex items-center justify-between">
            <span className="text-slate-500">1. Déblais (Excavation)</span>
            <span className="font-bold text-slate-900 dark:text-white tabular-nums">{totalExcavation} m³</span>
          </div>
          <div className="p-2.5 flex items-center justify-between">
            <span className="text-slate-500">2. Lit de Pose (Bedding)</span>
            <span className="font-bold text-amber-600 dark:text-amber-400 tabular-nums">{totalBedding} m³</span>
          </div>
          <div className="p-2.5 flex items-center justify-between">
            <span className="text-slate-500">3. Remblais (Backfill)</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">{totalBackfill} m³</span>
          </div>
          <div className="p-2.5 bg-slate-50 dark:bg-[#080C17] flex items-center justify-between text-[10px] text-slate-400">
            <span>EXPORT: EXCEL / PDF DQE</span>
            <span className="text-blue-600 dark:text-sky-400 font-bold">V = L × B × H</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 2. WATERFIT ECOSYSTEM — HYDROCHEMICAL & OCR MINERAL BENCHMARK
 * ============================================================================ */
const WATER_PROFILES = {
  balanced: {
    id: 'balanced',
    name: 'Sample A (Low-Sodium)',
    nameAr: 'عينة أ (موزونة المعادن)',
    ph: '7.3',
    tds: '310 mg/L',
    verdict: 'WHO OPTIMAL DAILY DRINKING',
    verdictColor: 'text-emerald-600 dark:text-emerald-400',
    minerals: [
      { ion: 'Ca²⁺', val: '68 mg/L', pct: 68, limit: 'WHO < 100' },
      { ion: 'Mg²⁺', val: '22 mg/L', pct: 44, limit: 'WHO < 50' },
      { ion: 'Na⁺', val: '11 mg/L', pct: 22, limit: 'Low-Na < 20' },
      { ion: 'NO₃⁻', val: '3.8 mg/L', pct: 15, limit: 'WHO < 50' },
    ]
  },
  mineralRich: {
    id: 'mineralRich',
    name: 'Sample B (Calcic-Magnesian)',
    nameAr: 'عينة ب (غنية بالكالسيوم)',
    ph: '7.6',
    tds: '640 mg/L',
    verdict: 'HIGH MINERALIZATION (CA/MG)',
    verdictColor: 'text-blue-600 dark:text-sky-400',
    minerals: [
      { ion: 'Ca²⁺', val: '118 mg/L', pct: 92, limit: 'High Ca²⁺' },
      { ion: 'Mg²⁺', val: '45 mg/L', pct: 88, limit: 'High Mg²⁺' },
      { ion: 'Na⁺', val: '28 mg/L', pct: 45, limit: 'Moderate' },
      { ion: 'NO₃⁻', val: '8.5 mg/L', pct: 24, limit: 'Safe < 50' },
    ]
  }
};

function WaterFitMineralWidget({ isAr }) {
  const [sampleKey, setSampleKey] = useState('balanced');
  const sample = WATER_PROFILES[sampleKey];

  return (
    <div className="border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#080C17] font-mono text-xs">
      {/* Top Bar */}
      <div className="px-3.5 py-2 border-b border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B101E] flex flex-wrap items-center justify-between gap-2 text-[10px]">
        <span className="font-bold text-blue-600 dark:text-sky-400 uppercase">
          {isAr ? 'مختبر تحليل المعادن (OCR + WHO BENCHMARK)' : 'OCR HYDROCHEMICAL ANALYZER // WHO STANDARDS'}
        </span>
        <div className="flex items-center gap-1">
          {Object.values(WATER_PROFILES).map((p) => (
            <button
              key={p.id}
              onClick={() => setSampleKey(p.id)}
              className={`px-2 py-0.5 border transition-colors ${
                sampleKey === p.id
                  ? 'bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950 border-transparent font-bold'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {isAr ? p.nameAr : p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mineral Bars & Telemetry */}
      <div className="p-3.5 bg-white dark:bg-[#0B101E] space-y-2.5">
        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span>pH: <strong className="text-slate-900 dark:text-white">{sample.ph}</strong></span>
            <span>TDS: <strong className="text-blue-600 dark:text-sky-400">{sample.tds}</strong></span>
          </div>
          <span className={`text-[10px] font-bold ${sample.verdictColor}`}>
            {sample.verdict}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {sample.minerals.map((m) => (
            <div key={m.ion} className="p-2 bg-slate-50 dark:bg-[#080C17] border border-slate-200/70 dark:border-slate-800/70">
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="font-bold text-slate-900 dark:text-white">{m.ion}</span>
                <span className="text-blue-600 dark:text-sky-400 font-bold tabular-nums">{m.val}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-blue-600 dark:bg-sky-400 transition-all duration-500"
                  style={{ width: `${m.pct}%` }}
                />
              </div>
              <span className="text-[9px] text-slate-400 block mt-1">{m.limit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 3. SMART NFC BUSINESS CARD — ISO 14443-4 APDU & HCE TRANSCEIVER
 * ============================================================================ */
function NfcHceProtocolWidget({ isAr }) {
  const [tapStep, setTapStep] = useState(0);

  const triggerHandshake = () => {
    setTapStep((prev) => (prev + 1) % 3);
  };

  const frames = [
    { cmd: '00 A4 04 00 07 D2 76 00 00 85 01 01', resp: '90 00 (NDEF TAG APPLICATION SELECTED)', state: 'IDLE // LISTENING 13.56 MHz' },
    { cmd: '00 A4 00 0C 02 E1 04 (SELECT NDEF FILE)', resp: '90 00 (CAPABILITY CONTAINER OK)', state: 'HANDSHAKE IN PROGRESS' },
    { cmd: '00 B0 00 00 64 (READ BINARY PAYLOAD)', resp: 'BEGIN:VCARD // FN:Mohammed Baatas // 90 00', state: 'VCARD PAYLOAD BROADCASTED' },
  ];

  const currentFrame = frames[tapStep];

  return (
    <div className="border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#080C17] font-mono text-xs">
      <div className="px-3.5 py-2 border-b border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B101E] flex items-center justify-between gap-2 text-[10px]">
        <span className="font-bold text-blue-600 dark:text-sky-400 uppercase">
          {isAr ? 'بث البطاقة عبر محاكاة الشريحة (ISO 14443-4 HCE)' : 'KOTLIN HCE APDU TRANSCEIVER // 13.56 MHz'}
        </span>
        <button
          onClick={triggerHandshake}
          className="px-2.5 py-0.5 bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950 font-bold hover:opacity-90 transition-opacity"
        >
          {isAr ? 'محاكاة تمرير الهاتف (NFC TAP)' : 'SIMULATE NFC TAP →'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 divide-y sm:divide-y-0 sm:divide-x rtl:divide-x-reverse divide-slate-200/90 dark:divide-slate-800/90 bg-white dark:bg-[#0B101E]">
        {/* RF Wave Schematic */}
        <div className="sm:col-span-5 p-3 flex items-center justify-center bg-swiss-grid">
          <svg viewBox="0 0 180 110" className="w-full h-auto select-none">
            {/* Concentric 13.56 MHz RF Waves */}
            <circle cx="90" cy="55" r="44" fill="none" className="stroke-blue-600/25 dark:stroke-sky-400/25 animate-pulse" strokeDasharray="3 3" />
            <circle cx="90" cy="55" r="30" fill="none" className="stroke-blue-600/50 dark:stroke-sky-400/50" strokeWidth="1.2" />
            {/* Central HCE Chip Node */}
            <rect x="68" y="37" width="44" height="36" rx="3" className="fill-slate-900 dark:fill-slate-950 stroke-blue-600 dark:stroke-sky-400" strokeWidth="1.5" />
            <text x="90" y="53" textAnchor="middle" className="fill-white text-[8px] font-bold">
              HCE AID
            </text>
            <text x="90" y="64" textAnchor="middle" className="fill-sky-400 text-[7px]">
              13.56 MHz
            </text>
          </svg>
        </div>

        {/* Live APDU Hex Inspector */}
        <div className="sm:col-span-7 p-3 space-y-2 text-[10px] flex flex-col justify-between">
          <div>
            <span className="text-slate-400 block text-[9px]">READER APDU COMMAND (C-APDU)</span>
            <code className="text-slate-900 dark:text-slate-200 font-bold block mt-0.5 break-all">
              &gt; {currentFrame.cmd}
            </code>
          </div>
          <div>
            <span className="text-slate-400 block text-[9px]">HOST EMULATED RESPONSE (R-APDU)</span>
            <code className="text-emerald-600 dark:text-emerald-400 font-bold block mt-0.5 break-all">
              &lt; {currentFrame.resp}
            </code>
          </div>
          <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[9px] text-blue-600 dark:text-sky-400 font-bold">
            <span>{currentFrame.state}</span>
            <span>STEP {tapStep + 1}/3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 4. COMMERCIAL ERP & POS SYSTEMS — RELATIONAL SCHEMA EXPLORER
 * ============================================================================ */
const ERP_SYSTEMS = {
  madrasa: {
    id: 'madrasa',
    name: 'Al Madrasa ERP',
    tables: ['students_registry', 'tuition_ledgers', 'teacher_payroll'],
    metric: '100% Automated Tuition & Payroll SQLite ACID'
  },
  quds: {
    id: 'quds',
    name: 'Al-Quds Gym',
    tables: ['memberships', 'biometric_checkins', 'pos_supplements'],
    metric: 'Real-Time Access Control & Subscription Alerts'
  },
  maktabati: {
    id: 'maktabati',
    name: 'Maktabati POS',
    tables: ['barcode_inventory', 'pos_invoices', 'daily_cashflow'],
    metric: 'High-Speed Barcode Checkout & Stock Auditing'
  }
};

function ErpDatabaseSchemaWidget({ isAr }) {
  const [sysKey, setSysKey] = useState('madrasa');
  const sys = ERP_SYSTEMS[sysKey];

  return (
    <div className="border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#080C17] font-mono text-xs">
      <div className="px-3.5 py-2 border-b border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B101E] flex flex-wrap items-center justify-between gap-2 text-[10px]">
        <span className="font-bold text-blue-600 dark:text-sky-400 uppercase">
          {isAr ? 'معمارية قواعد البيانات (PYTHON + SQLITE)' : 'RELATIONAL SQLITE ARCHITECTURE'}
        </span>
        <div className="flex items-center gap-1">
          {Object.values(ERP_SYSTEMS).map((s) => (
            <button
              key={s.id}
              onClick={() => setSysKey(s.id)}
              className={`px-2 py-0.5 border transition-colors ${
                sysKey === s.id
                  ? 'bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950 border-transparent font-bold'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="p-3.5 bg-white dark:bg-[#0B101E] space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {sys.tables.map((tbl, idx) => (
            <div
              key={tbl}
              className="p-2 bg-slate-50 dark:bg-[#080C17] border border-slate-200 dark:border-slate-800 text-[10px]"
            >
              <span className="text-[8px] text-blue-600 dark:text-sky-400 block font-bold">
                TABLE 0{idx + 1} // PK_ID
              </span>
              <span className="font-bold text-slate-800 dark:text-slate-200 truncate block mt-0.5">
                {tbl}
              </span>
            </div>
          ))}
        </div>
        <div className="px-2.5 py-1.5 bg-slate-50 dark:bg-[#080C17] border-l-2 border-emerald-500 text-[10px] text-slate-600 dark:text-slate-300 flex items-center justify-between">
          <span>{sys.metric}</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">PRODUCTION READY</span>
        </div>
      </div>
    </div>
  );
}

export default SoftwareSchematicPreview;
