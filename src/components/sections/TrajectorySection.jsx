import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  GraduationCap,
  Trophy,
  Users,
  Compass,
  Code2,
  Globe2,
  CheckCircle2
} from 'lucide-react';
import { EDUCATION_AND_EXPERIENCE, SKILLS_CATEGORIES } from '../../data/portfolioData';
import { MosaicStageGrid } from '../common/MosaicStageGrid';

export function TrajectorySection() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const eduM2 = EDUCATION_AND_EXPERIENCE.education[0];
  const eduBsc = EDUCATION_AND_EXPERIENCE.education[1];
  const bernoulli = EDUCATION_AND_EXPERIENCE.leadership[0];
  const autoptimus = EDUCATION_AND_EXPERIENCE.leadership[1];

  const mosaicItems = [
    // 1. M.Sc. (M2) Water & Sanitation (Tall Card: 4 cols x 2 rows)
    {
      id: 'm2-water-sanitation',
      title: isAr ? eduM2.degreeAr : eduM2.degree,
      subtitle: isAr ? eduM2.institutionAr : eduM2.institution,
      badge: `${eduM2.period} // ${isAr ? eduM2.statusAr : eduM2.status}`,
      summary: eduM2.details,
      tags: ['Master 2', 'Water Supply', 'Sanitation', 'Biskra University'],
      color: 'cyan',
      shape: 'tall',
      icon: <GraduationCap className="w-3.5 h-3.5" />,
      detailsList: isAr
        ? [
            'تخصص دقيق في تسيير وهندسة خدمات مياه الشرب والتطهير الحضري بجامعة محمد خيضر بسكرة.',
            'نمذجة الشبكات الهيدروليكية المضغوطة وشبكات الصرف الصحي ومحطات الضخ والمعالجة.',
            'إعداد مشروع التخرج للماستر (M2) مع جاهزية كاملة للمنح وبرامج البحث الدولية.'
          ]
        : [
            'Advanced specialization in urban drinking water distribution, sanitation services, and hydraulic infrastructure management.',
            'Focus on numerical network simulation (EPANET/SWMM), pumping station design, and water quality governance.',
            'Currently completing Master 2 thesis at Université Mohamed Khider Biskra.'
          ],
      renderDiagram: () => (
        <div className="p-5 bg-slate-950/90 font-mono text-xs space-y-4">
          <div className="flex items-center justify-between text-sky-300 border-b border-white/10 pb-2">
            <span className="font-bold">ACADEMIC PROGRESSION // UNIV. BISKRA</span>
            <span>M.SC. LEVEL</span>
          </div>
          <svg viewBox="0 0 380 110" className="w-full h-auto select-none">
            <line x1="30" y1="55" x2="350" y2="55" stroke="#38bdf8" strokeWidth="3" />
            {[
              { x: 55, lbl: 'L1–L3 B.Sc.', yr: '2022–2025', active: true },
              { x: 190, lbl: 'M1 Hydraulics', yr: '2025', active: true },
              { x: 325, lbl: 'M2 Water & Sanitation', yr: '2025–2026', active: true },
            ].map((st, i) => (
              <g key={i}>
                <circle cx={st.x} cy="55" r="10" fill="#0284c7" stroke="#bae6fd" strokeWidth="2.5" />
                <text x={st.x} y="32" textAnchor="middle" className="fill-white text-[9px] font-bold">
                  {st.lbl}
                </text>
                <text x={st.x} y="82" textAnchor="middle" className="fill-sky-300 text-[8px]">
                  {st.yr}
                </text>
              </g>
            ))}
          </svg>
        </div>
      ),
    },

    // 2. President — Bernoulli Scientific Club (Wide Card: 8 cols x 1 row)
    {
      id: 'bernoulli-club-presidency',
      title: isAr
        ? `${bernoulli.roleAr} — ${bernoulli.organizationAr}`
        : `${bernoulli.role} — ${bernoulli.organization}`,
      subtitle: `${bernoulli.period} // Biskra University`,
      badge: 'SCIENTIFIC LEADERSHIP // 14 MEMBERS',
      summary: isAr ? bernoulli.highlightsAr[0] : bernoulli.highlights[0],
      tags: ['14 Active Members', 'EPANET Workshops', 'Dam & WWTP Field Visits'],
      color: 'amber',
      shape: 'wide',
      icon: <Users className="w-3.5 h-3.5" />,
      detailsList: isAr ? bernoulli.highlightsAr : bernoulli.highlights,
      renderDiagram: () => (
        <div className="p-5 bg-slate-950/90 font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-amber-300 border-b border-white/10 pb-2">
            <span className="font-bold">BERNOULLI CLUB ROSTER // 14 DEDICATED MEMBERS</span>
            <span>2023–2025</span>
          </div>
          <div className="grid grid-cols-7 gap-2 py-2">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className="p-2 rounded-lg bg-amber-500/15 border border-amber-400/40 flex flex-col items-center justify-center text-center"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 mb-1" />
                <span className="text-[9px] text-amber-200 font-bold">M-{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // 3. 1st Place Energy Security Competition — AutOptimus Club (Square Card: 4 cols x 1 row)
    {
      id: 'autoptimus-first-place',
      title: isAr
        ? 'المرتبة 1 في مسابقة الأمن الطاقوي — نادي AutOptimus'
        : '1st Place Winner (Energy Security) — AutOptimus Club',
      subtitle: `${autoptimus.period} // Robotics & Automation`,
      badge: '1ST PLACE AWARD // ENERGY SECURITY',
      summary: isAr ? autoptimus.highlightsAr[0] : autoptimus.highlights[0],
      tags: ['1st Place Winner', 'Energy Security', 'Arduino / ESP32', 'Automation'],
      color: 'emerald',
      shape: 'square',
      icon: <Trophy className="w-3.5 h-3.5" />,
      detailsList: isAr ? autoptimus.highlightsAr : autoptimus.highlights,
      renderDiagram: () => (
        <div className="p-5 bg-slate-950/90 font-mono text-xs flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            <Trophy className="w-8 h-8 text-emerald-300" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-white">
              {isAr ? 'المركز الأول #1 — مجال الأمن الطاقوي' : '1ST PLACE WINNER — ENERGY SECURITY'}
            </div>
            <div className="text-[11px] text-emerald-300 mt-1">
              AutOptimus Robotics & Automation Club (Summer 2023)
            </div>
          </div>
        </div>
      ),
    },

    // 4. B.Sc. Hydraulic Engineering — National Track (Square Card: 4 cols x 1 row)
    {
      id: 'bsc-hydraulic-engineering',
      title: isAr ? eduBsc.degreeAr : eduBsc.degree,
      subtitle: isAr ? eduBsc.institutionAr : eduBsc.institution,
      badge: `${eduBsc.period} // ${isAr ? eduBsc.statusAr : eduBsc.status}`,
      summary: eduBsc.details,
      tags: ['B.Sc. Hydraulics', 'National Track', 'Fluid Mechanics', 'Hydrogeology'],
      color: 'indigo',
      shape: 'square',
      icon: <GraduationCap className="w-3.5 h-3.5" />,
      detailsList: isAr
        ? [
            'شهادة ليسانس أكاديمي في الهيدروليك (تسجيل وطني) من جامعة محمد خيضر بسكرة دفعة 2025.',
            'تكوين متين في ميكانيكا الموائع، الهيدرولوجيا، الهيدروجيولوجيا، الإنشاءات المائية، ومحطات الضخ.',
            'إنجاز دراسات تطبيقية في شبكات مياه الشرب والصرف الصحي.'
          ]
        : [
            'Bachelor of Science in Hydraulic Engineering (National Recruitment Track) graduated in 2025 from Biskra University.',
            'Rigorous grounding in open-channel and pressurized fluid mechanics, hydrology, hydrogeology, and pumping stations.',
            'Completed full design studies in municipal water supply and urban drainage.'
          ],
      renderDiagram: () => (
        <div className="p-5 bg-slate-950/90 font-mono text-xs grid grid-cols-2 gap-2.5">
          {[
            'Fluid Mechanics (P/γ + v²/2g)',
            'Pressurized Networks (EPANET)',
            'Urban Hydrology & Drainage',
            'Pumping Stations & Boreholes',
          ].map((c, i) => (
            <div key={i} className="p-3 rounded-xl bg-indigo-500/15 border border-indigo-400/30 text-indigo-200 font-bold text-[11px]">
              0{i + 1}. {c}
            </div>
          ))}
        </div>
      ),
    },

    // 5. Engineering & GIS Software Stack (Wide Card: 8 cols x 1 row)
    {
      id: 'engineering-software-matrix',
      title: isAr
        ? 'البرامج الهندسية ونظم المعلومات الجغرافية (EPANET, SWMM, AutoCAD, GIS)'
        : 'Hydraulic Modeling, CAD & GIS Toolkit (EPANET, PC-SWMM, AutoCAD, ArcGIS)',
      subtitle: 'Verified Simulation & Drafting Suites',
      badge: 'ENGINEERING SOFTWARE STACK',
      summary: isAr
        ? 'إتقان عملي لبرامج النمذجة المائية والرفع المساحي والرسم الهندسي المستخدمة في مكاتب الدراسات والمشاريع الأكاديمية.'
        : 'Hands-on mastery of industry-standard hydraulic simulation, urban drainage modeling, CAD drafting, and spatial GIS analysis tools.',
      tags: ['EPANET 2.2', 'PC-SWMM', 'AutoCAD', 'ArcGIS', 'QGIS'],
      color: 'violet',
      shape: 'wide',
      icon: <Compass className="w-3.5 h-3.5" />,
      detailsList: [
        ...SKILLS_CATEGORIES[0].skills.map((s) => `${s.name}: ${s.detail}`),
        ...SKILLS_CATEGORIES[1].skills.map((s) => `${s.name}: ${s.detail}`),
      ],
      renderDiagram: () => (
        <div className="p-5 bg-slate-950/90 font-mono text-xs grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {['EPANET 2.2', 'PC-SWMM', 'AutoCAD 2D', 'ArcGIS Desktop', 'QGIS Spatial', 'DEM / Watersheds'].map((tool, i) => (
            <div key={i} className="p-3 rounded-xl bg-purple-500/15 border border-purple-400/35 text-center">
              <div className="text-white font-bold text-xs">{tool}</div>
              <div className="text-[9px] text-purple-300 mt-1">VERIFIED PROFICIENCY</div>
            </div>
          ))}
        </div>
      ),
    },

    // 6. Programming, Huawei ICT IoT & Languages (Square Card: 4 cols x 1 row)
    {
      id: 'coding-iot-languages',
      title: isAr
        ? 'البرمجة، شهادة Huawei IoT، واللغات (English B2)'
        : 'Programming, Huawei IoT Track & Languages (English B2)',
      subtitle: 'Python • Java/Kotlin • Huawei ICT • CEFR B2',
      badge: 'CODING & CERTIFICATIONS',
      summary: isAr
        ? 'تطوير تطبيقات سطح المكتب والهاتف (Python, PyQt, Java/Android)، شهادة أكاديمية هواوي في إنترنت الأشياء (IoT)، ومستوى B2 في الإنجليزية.'
        : 'Software development in Python/PyQt and Java/Kotlin, Huawei ICT Academy IoT coursework, and CEFR Level B2 English proficiency.',
      tags: ['Python & PyQt', 'Java / Android HCE', 'Huawei ICT (IoT)', 'English B2'],
      color: 'rose',
      shape: 'square',
      icon: <Globe2 className="w-3.5 h-3.5" />,
      detailsList: [
        'English: Level B2 (CEFR Upper-Intermediate — Academic & Technical Proficiency)',
        'French: Fluent Technical & Scientific Communication',
        'Arabic: Native Mother Tongue',
        'Certification: Huawei ICT Academy — Internet of Things (IoT Track)',
        ...SKILLS_CATEGORIES[2].skills.map((s) => `${s.name}: ${s.detail}`),
      ],
      renderDiagram: () => (
        <div className="p-5 bg-slate-950/90 font-mono text-xs space-y-2.5">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-400/35">
              <span className="text-[9px] text-rose-300 block">ENGLISH</span>
              <span className="font-bold text-white text-xs">CEFR B2</span>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-400/35">
              <span className="text-[9px] text-rose-300 block">FRENCH</span>
              <span className="font-bold text-white text-xs">FLUENT</span>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-400/35">
              <span className="text-[9px] text-rose-300 block">ARABIC</span>
              <span className="font-bold text-white text-xs">NATIVE</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/15 text-center text-[11px] text-sky-300 font-bold">
            Huawei ICT Academy — Internet of Things (IoT Track)
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="trajectory"
      className="relative min-h-screen w-full py-20 sm:py-28 px-4 sm:px-8 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full bg-purple-500/25 text-purple-200 border border-purple-400/40">
            03 // {isAr ? 'المسار الأكاديمي، القيادة، والمهارات' : 'EDUCATION, LEADERSHIP & SKILLS'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-title text-white tracking-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
            {isAr ? 'مساري الجامعي، الجوائز، والمهارات' : 'MY ACADEMIC TRAJECTORY & SKILLS'}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-purple-200/80">
            {isAr
              ? 'اضغط على أي بطاقة لمعاينة تفاصيل الشهادات والقيادة العلمية والبرامج'
              : 'Click any tile in the gallery to inspect degrees, leadership awards, and technical skills'}
          </p>
        </div>

        {/* 3-Stage Asymmetric Mosaic Gallery */}
        <MosaicStageGrid items={mosaicItems} isAr={isAr} />

      </div>
    </section>
  );
}

export default TrajectorySection;
