/**
 * Mohammed Baatas (FluiDev) - 100% Verified Domain Portfolio Data
 * Hydraulic & Water Resources Engineer & Technical Software Developer
 */

export const PERSONAL_DATA = {
  fullName: "Mohammed Baatas",
  brand: "FluiDev",
  title: "Hydraulic & Water Resources Engineer",
  titleAr: "مهندس ري وموارد مائية",
  subtitle: "Pressurized Pipe Modeling • Urban Drainage • Hydroinformatics & Technical Tools",
  subtitleAr: "نمذجة الشبكات المضغوطة • الصرف الصحي والأمطار • البرمجيات الهندسية والأدوات التقنية",
  statusBadge: "ACADEMIC STATUS: MASTER 2 (M2) // OPERATIONAL",
  statusBadgeAr: "الوضع الأكاديمي: طالب ماستر 2 // متاح للمشاريع والمنح",
  location: "Biskra / Algiers, Algeria",
  locationAr: "بسكرة / الجزائر العاصمة، الجزائر",
  coordinates: "LAT: 34.85°N / LON: 5.73°E // BISKRA",
  email: "mohamedbaatas@gmail.com",
  academicEmail: "mohamed_baatas@univ-biskra.dz",
  phones: ["+213 655 47 85 13", "+213 555 39 59 34"],
  socials: {
    linkedin: "https://linkedin.com/in/mohamedbaatas",
    github: "https://github.com/mohamedbaatas-hash",
    telegram: "https://t.me/Fluidev",
    portfolio: "https://mohamedbaatas-hash.github.io"
  },
  cvUrl: "/Mohammed_Baatas_CV_ATS.html",
  bio: "Hydraulic & Water Resources Engineer (currently pursuing Master 2) from Université Mohamed Khider Biskra. Specializes in municipal drinking water distribution networks, urban drainage, and hydraulic infrastructure dimensioning, alongside developing specialized engineering computation software (Avant Métré) and hydrochemical water quality platforms (WaterFit). Former President of the Bernoulli Scientific Club for Hydraulics.",
  bioAr: "مهندس ري وموارد مائية (طالب سنة ثانية ماستر حالياً) خريج جامعة محمد خيضر بسكرة. متخصص في دراسة ونمذجة شبكات توزيع مياه الشرب، شبكات التطهير والصرف الصحي ومياه الأمطار، وحساب المنشآت الهيدروليكية، إلى جانب تطوير برمجيات الحساب الهندسي (Avant Métré) ومنصات الجودة الهيدروكيميائية (WaterFit). رئيس سابق للنادي العلمي برنولي للهيدروليك.",
  kpis: [
    { label: "EPANET 2.2", value: "Looped WDN", detail: "Numerical Hydraulic Modeling", labelAr: "نمذجة EPANET", detailAr: "محاكاة هيدروليكية دقيقة" },
    { label: "PC-SWMM", value: "Urban Runoff", detail: "Catchment & Sewer Drainage", labelAr: "نمذجة PC-SWMM", detailAr: "الصرف الصحي ومياه الأمطار" },
    { label: "1st Place Winner", value: "Energy Security", detail: "Summer Engineering Competition", labelAr: "المرتبة الأولى", detailAr: "مسابقة الأمن الطاقوي (AutOptimus)" },
    { label: "President", value: "14 Members", detail: "Bernoulli Scientific Club", labelAr: "رئاسة النادي", detailAr: "النادي العلمي برنولي للهيدروليك" }
  ]
};

export const HYDRAULIC_STUDIES = [
  {
    id: "water-distribution-network",
    badge: "STUDY.01 // EPANET 2.2",
    title: "Municipal Drinking Water Distribution Network Design",
    titleAr: "دراسة وتصميم شبكة توزيع مياه الشرب لمدينة كاملة",
    category: "Pressurized Hydraulics // Looped Network Simulation // WDN Sizing",
    categoryAr: "الهيدروليكا المضغوطة // محاكاة الشبكات الحلقية // تحجيم الأنابيب",
    summary: "Full-scale hydraulic study and numerical modeling of a municipal pressurized drinking water network from initial demographic forecasting to execution drawings.",
    summaryAr: "دراسة هيدروليكية متكاملة ونمذجة رقمية لشبكة توزيع مياه الشرب الحلقية لمدينة كاملة، من تقدير الاحتياجات حتى مخططات التنفيذ.",
    methodology: [
      "Evaluated demographic growth trends and peak consumption factors to project current and future nodal water demands.",
      "Engineered network topology and looped layout in EPANET 2.2 to compute Hazen-Williams friction head loss and flow velocity distributions.",
      "Conducted iterative gradient checks to ensure statutory residual pressures (1.5 to 4.5 bar) across critical urban nodes during peak demand.",
      "Dimensioned transmission mains, feeder loops, gate valves, air valves, and pressure reducing valves (PRVs)."
    ],
    methodologyAr: [
      "تقييم النمو الديموغرافي ومعاملات ذروة الاستهلاك لتقدير وتوزيع الاحتياجات المائية الحالية والمستقبلية على العقد.",
      "بناء طوبولوجيا الشبكة الحلقية في برنامج EPANET 2.2 وحساب فواقد الاحتكاك وفق معادلة Hazen-Williams وتدرج السرعات.",
      "إجراء محاكاة هيدروليكية للتأكد من استقرار الضغوط المتبقية (1.5 إلى 4.5 بار) في العقد الحرجة أثناء ساعات الذروة.",
      "تحجيم خطوط الجلب والتوزيع الرئيسية، الصمامات العازلة، صمامات تنفيس الهواء، ومخفضات الضغط."
    ],
    tools: ["EPANET 2.2", "AutoCAD", "Excel Hydraulic Sheets", "GIS Mapping"],
    parameters: [
      { key: "Method", val: "Hazen-Williams / Gradient" },
      { key: "Target Pressure", val: "1.5 – 4.5 bar" },
      { key: "Velocity Range", val: "0.6 – 1.5 m/s" },
      { key: "Topology", val: "Looped & Branched" }
    ]
  },
  {
    id: "wastewater-stormwater-network",
    badge: "STUDY.02 // PC-SWMM & CAD",
    title: "Urban Wastewater & Stormwater Drainage Network",
    titleAr: "دراسة وتصميم شبكة الصرف الصحي ومياه الأمطار",
    category: "Gravity Flow // Catchment Hydrology // Self-Cleansing Verification",
    categoryAr: "الجريان الحر الثقالي // هيدرولوجيا الأحواض // التحقق من الجريان الذاتي",
    summary: "Comprehensive hydrological and hydraulic study of gravity drainage collectors, slope grading, and manhole placement for wastewater and storm runoff.",
    summaryAr: "دراسة هيدرولوجية وهيدروليكية شاملة لشبكة التطهير الثقالية لتصريف المياه المستعملة ومياه الأمطار وتحديد الميول وأماكن غرف التفتيش.",
    methodology: [
      "Delineated urban sub-catchments and computed peak stormwater hydrographs using the rational formula and rainfall intensity curves.",
      "Determined domestic wastewater discharge rates using discharge coefficients and daily demographic flow peaking curves.",
      "Calculated gravity pipe diameters and longitudinal slopes while enforcing self-cleansing velocities (0.6 to 3.0 m/s) to prevent sediment deposition.",
      "Drafted detailed AutoCAD execution plans showing manhole invert levels, surface grades, drop structures, and outfall discharge points."
    ],
    methodologyAr: [
      "تحديد الأحواض الساكبة الحضرية وحساب تدفقات مياه الأمطار العظمى باستخدام الطريقة العقلانية (Rational Method) ومنحنيات الشدة.",
      "حساب تدفقات المياه المستعملة المنزلية بناءً على معاملات الذروة واستهلاك السكان اليومي.",
      "تحديد أقطار الأنابيب وانحداراتها الطولية مع ضمان شروط الجريان الذاتي (0.6 إلى 3.0 م/ث) لمنع ترسب المواد العالقة.",
      "رسم مخططات التنفيذ في AutoCAD موضحاً مناسيب غرف التفتيش، قيعان الأنابيب، السقاطات، ومنافذ التصريف النهائية."
    ],
    tools: ["PC-SWMM", "AutoCAD", "Surface Hydrology Sheets", "QGIS"],
    parameters: [
      { key: "Self-Cleansing Velocity", val: "≥ 0.6 m/s" },
      { key: "Max Velocity Limit", val: "≤ 3.0 m/s" },
      { key: "Hydrologic Method", val: "Rational Method (Q=C·I·A)" },
      { key: "Flow Regime", val: "Gravity / Open Channel" }
    ]
  },
  {
    id: "water-storage-reservoir",
    badge: "STUDY.03 // RESERVOIR DESIGN",
    title: "Municipal Water Storage Reservoir Dimensioning",
    titleAr: "مشروع دراسة وحساب سعات خزان مائي",
    category: "Storage Volume Sizing // Hydraulic Bellmouth // Scour & Overflow",
    categoryAr: "حساب سعة التخزين // فوهات السحب الهيدروليكية // الفيضان والتفريغ",
    summary: "Storage capacity calculation and hydraulic pipe dimensioning for an elevated/ground municipal water reservoir ensuring operational continuity and fire defense.",
    summaryAr: "حساب السعات التخزينية التنظيمية والاحتياطية والتحجيم الهيدروليكي لأنابيب الدخول والخروج والفيضان والتفريغ لخزان مائي.",
    methodology: [
      "Determined daily hourly consumption curves and pumping schedules to compute optimal balancing storage capacity.",
      "Factored in emergency breakdown reserves and municipal fire-fighting safety storage (2 hours continuous fire flow).",
      "Hydraulically sized inlet conduits, anti-vortex bellmouth suction intakes, surface overflow spillway weirs, and bottom washout scour drains."
    ],
    methodologyAr: [
      "تحليل منحنيات الاستهلاك الساعي اليومي وجدول الضخ لتحديد السعة التنظيمية الموازنة المثلى للخزان.",
      "إضافة سعة الطوارئ لانقطاع التغذية والاحتياطي الأمني لإخماد الحرائق وفق المعايير المعتمدة.",
      "التحجيم الهيدروليكي لأنابيب التغذية، فوهة السحب المضادة للدوامات، مهدر تصريف الفائض، وأنبوب التفريغ السفلي للغسيل."
    ],
    tools: ["AutoCAD", "Hydrodynamic Calculations", "Excel Reservoir Models"],
    parameters: [
      { key: "Balancing Capacity", val: "Consumption Curve Integral" },
      { key: "Safety Factor", val: "Operational + Fire Reserve" },
      { key: "Intake Design", val: "Submerged Bellmouth" },
      { key: "Discharge Protection", val: "Gravity Overflow Weir" }
    ]
  },
  {
    id: "artesian-well-study",
    badge: "STUDY.04 // HYDROGEOLOGY",
    title: "Artesian Well & Hydrogeological Field Investigation",
    titleAr: "دراسة هيدروجيولوجية وميدانية لبئر ارتوازي",
    category: "Aquifer Drawdown // Pumping Tests // Submersible Pump Sizing",
    categoryAr: "هبوط المنسوب المائي // تجارب الضخ // تحديد مواصفات المضخة الغاطسة",
    summary: "Field assessment and analysis of confined groundwater aquifer behavior, borehole drilling data, and pump operating parameters.",
    summaryAr: "دراسة ميدانية وتحليل سلوك المياه الجوفية وتجارب الضخ في بئر ارتوازي لتحديد الخصائص الهيدروديناميكية ومواصفات المضخة.",
    methodology: [
      "Assessed lithological drilling logs, borehole casing integrity, and screen placement within the water-bearing aquifer horizon.",
      "Monitored and interpreted step-drawdown pumping test data to evaluate specific capacity, aquifer yield, and transmissivity.",
      "Calculated total dynamic head (TDH / HMT) and required motor power ratings for optimal submersible pump selection."
    ],
    methodologyAr: [
      "فحص العينات الصخرية لعملية الحفر وعمق المصافي ضمن الطبقة الحاملة للماء (Aquifer).",
      "متابعة وتحليل تجارب الضخ المتدرج ومنحنيات هبوط المنسوب لتحديد الصبيب الاستغلالي الآمن وناقلية الطبقة.",
      "حساب الارتفاع الهندسي الإجمالي (HMT) والفاقد الهيدروليكي لتحديد قدرة ومواصفات المضخة الغاطسة المناسبة."
    ],
    tools: ["Hydrogeological Pumping Data", "TDH Calculation Sheet", "Field Logs"],
    parameters: [
      { key: "Pumping Regime", val: "Step-Drawdown Test" },
      { key: "Aquifer Type", val: "Deep Confined" },
      { key: "Hydraulic Output", val: "Operating TDH & Power" },
      { key: "Analysis", val: "Drawdown vs Discharge Curve" }
    ]
  }
];

export const FLUIDEV_SOFTWARE = [
  {
    id: "avant-metre",
    badge: "FLUIDEV.01 // DESKTOP",
    title: "Avant Métré",
    subtitle: "Civil & Hydraulic Quantity Takeoff Software",
    subtitleAr: "برنامج حساب وتقدير كميات الهندسة المدنية والري",
    stack: ["Python 3", "PyQt6", "SQLite", "ReportLab"],
    description: "Specialized desktop application designed to streamline engineering quantity estimation and takeoffs (Avant-métré & Métré) for water infrastructure and civil works.",
    descriptionAr: "برنامج مكتبي متخصص لتسهيل وتسريع حساب وتقدير كميات الأشغال الهندسية (Métré) لشبكات الري والبنية التحتية والمنشآت المدنية.",
    features: [
      "Automates earthwork trenching, pipe bedding, and backfill volumetric calculations.",
      "Computes reinforced concrete volume takeoffs for chambers, reservoirs, and manholes.",
      "Generates exportable, error-free Bill of Quantities (BOQ) spreadsheets for contractors and design offices."
    ],
    featuresAr: [
      "حساب آلي لحجوم الحفر، طبقات رمل التأسيس، والردم لأنابيب شبكات المياه والصرف.",
      "حساب كميات الخرسانة المسلحة لغرف التفتيش والصمامات والخزانات المائية.",
      "تصدير جداول الكميات التقديرية (DQE/BOQ) الدقيقة لمكاتب الدراسات والمقاولات."
    ],
    impact: "Eliminates repetitive manual calculation discrepancies in civil infrastructure tenders."
  },
  {
    id: "waterfit",
    badge: "FLUIDEV.02 // FULL-STACK",
    title: "WaterFit Ecosystem",
    subtitle: "Drinking Water Quality & Mineral Analysis Platform",
    subtitleAr: "منظومة تحليل ومقارنة جودة ومكونات مياه الشرب",
    stack: ["Preact", "Capacitor", "Python (CustomTkinter)", "Firebase Firestore", "Tesseract.js OCR"],
    description: "Multi-platform ecosystem developed to analyze, compare, and benchmark chemical mineral compositions (pH, TDS, Ca²⁺, Mg²⁺, Na⁺, NO₃⁻) of bottled and tap drinking waters.",
    descriptionAr: "منظومة متكاملة (موبايل + برنامج إدارة مكتبي) لتحليل ومقارنة التركيب الكيميائي ونسب المعادن لمياه الشرب ومطابقتها مع المعايير الصحية.",
    features: [
      "Extracts mineral composition tables from bottle labels using optical character recognition (OCR) and barcode lookup.",
      "Benchmarks hydrochemical profiles against World Health Organization (WHO) and EPA international guidelines.",
      "Includes a Python desktop management portal connected to Firebase Firestore for database curation and mineral analysis."
    ],
    featuresAr: [
      "استخراج جداول المعادن الكيميائية من ملصقات القوارير عبر التعرف الضوئي على النصوص (OCR) وقراءة الباركود.",
      "مقارنة المؤشرات الهيدروكيميائية بمعايير منظمة الصحة العالمية (WHO) ووكالة EPA وتحديد ملاءمتها الصحية.",
      "تطبيق مكتبي بلغة بايثون متصل بقاعدة Firestore السحابية لمراجعة وتوثيق قاعدة البيانات الهيدروكيميائية."
    ],
    impact: "Empowers informed consumer choices and bridges environmental water chemistry with digital health."
  },
  {
    id: "nfc-business-card",
    badge: "FLUIDEV.03 // ANDROID",
    title: "Smart NFC Business Card",
    subtitle: "Samsung HCE Digital Card Broadcaster",
    subtitleAr: "تطبيق بث بطاقة الأعمال الذكية بتقنية NFC HCE",
    stack: ["Android", "Kotlin", "Host Card Emulation (HCE)", "ISO/IEC 7816-4"],
    description: "Native Android application utilizing Host Card Emulation to turn a Samsung Galaxy smartphone into an active NDEF NFC broadcaster transmitting portfolio and contact credentials.",
    descriptionAr: "تطبيق أندرويد يعتمد على تقنية محاكاة البطاقة المضيفة (HCE) لتحويل الهاتف الذكي إلى شريحة NFC تبث بطاقة الأعمال مباشرة عبر التلامس.",
    features: [
      "Transmits digital credentials instantly to any receiver smartphone (iPhone/Android) via standard NFC Type 4 emulation.",
      "Configured for screen-on lock broadcast without needing repetitive fingerprint unlocks.",
      "Integrated dynamic QR code fallback and haptic feedback confirmation on successful tap."
    ],
    featuresAr: [
      "بث فوري لبطاقة الأعمال الرقمية والرابط الهندسي لأي هاتف مستقبل بدون بطاقات خارجية.",
      "يعمل بمجرد إضاءة الشاشة دون الحاجة لفتح القفل بالبصمة في كل مرة لسرعة التواصل.",
      "توليد فوري لرمز QR احتياطي واهتزاز لمسي تأكيدي عند نجاح القراءة."
    ],
    impact: "Modernized engineering networking and eliminated physical paper business cards."
  },
  {
    id: "management-erps",
    badge: "FLUIDEV.04 // ENTERPRISE",
    title: "Practical Management ERPs & POS",
    subtitle: "Custom Offline-First Systems (Al Madrasa ERP & Maktabati POS)",
    subtitleAr: "أنظمة الإدارة التجارية والتعليمية (المدرسة ERP ومكتبتي POS)",
    stack: ["Python", "PyQt", "SQLite", "ESC/POS Protocol"],
    description: "Robust offline-first desktop systems engineered to handle inventory catalogs, school administration, and operational ledgers with sub-second responsiveness.",
    descriptionAr: "أنظمة مكتبية موثوقة تعمل بدون إنترنت (Offline-First) لإدارة المخازن والمبيعات وشؤون المدارس الخاصة باحترافية وسرعة.",
    features: [
      "Sub-second barcode lookup and transaction ledger across 10,000+ SKU retail inventories.",
      "Complete educational institution tracking: tuition fees, student files, and schedule ledgers.",
      "Hardware integration with thermal receipt printers, cash drawers, and automated reports."
    ],
    featuresAr: [
      "فهرسة وبحث فوري بالباركود لأكثر من 10,000 صنف مع إدارة الأرصدة والمبيعات.",
      "تسيير متكامل للمؤسسات التعليمية: ملفات الطلبة، الرسوم الدراسية، وجداول التوقيت.",
      "ربط مباشر مع طابعات الإيصالات الحرارية وأدراج النقدية وتوليد التقارير المالية."
    ],
    impact: "Proven reliability operating continuously in regions with unstable connectivity."
  }
];

export const SKILLS_CATEGORIES = [
  {
    domain: "Hydraulic & Environmental Modeling",
    domainAr: "النمذجة الهيدروليكية والبيئية",
    description: "Computational simulation of pressurized networks, open-channel flow, urban drainage, and hydraulic infrastructure.",
    descriptionAr: "المحاكاة الحسابية لشبكات المياه المضغوطة، الصرف الصحي، وتصميم منشآت الري.",
    skills: [
      { name: "EPANET 2.2 Simulation", detail: "Looped WDN, Hazen-Williams, Darcy-Weisbach, EPS" },
      { name: "PC-SWMM / SWMM", detail: "Urban Catchment Runoff, Gravity Sewer Drainage" },
      { name: "Pressurized Pipe Hydraulics", detail: "Friction Head Losses, Nodal Pressure Optimization" },
      { name: "Open-Channel Flow", detail: "Manning-Strickler, Self-Cleansing Velocity Criteria" },
      { name: "Pumping Stations & Storage", detail: "HMT, NPSH Calculation, Reservoir Sizing & Scour" },
      { name: "Non-Revenue Water (NRW)", detail: "Leakage Assessment, Sectorization & Pressure Control" }
    ]
  },
  {
    domain: "CAD & Geospatial Analysis",
    domainAr: "الرسم الهندسي ونظم المعلومات الجغرافية",
    description: "Spatial terrain analysis, digital elevation models (DEM), and engineering blueprint drafting.",
    descriptionAr: "التحليل الطبوغرافي المكاني، نماذج الارتفاع الرقمية، وإعداد المخططات الهندسية التنفيذية.",
    skills: [
      { name: "AutoCAD (Civil & Hydraulic)", detail: "Pipe Layouts, Alignments, Longitudinal Profiles" },
      { name: "ArcGIS Pro / ArcMap", detail: "Spatial Hydrology, Watershed Delineation, DEM" },
      { name: "QGIS", detail: "Vector Network Mapping, Coordinate Transformations" },
      { name: "Hydraulic Measurement (Métré)", detail: "Earthwork Cut/Fill, Pipe Bedding & Concrete Takeoffs" }
    ]
  },
  {
    domain: "Scientific Programming & Software Tooling",
    domainAr: "البرمجة العلمية وتطوير الحلول البرمجية",
    description: "Automation scripts, desktop GUIs, cross-platform apps, and relational database systems.",
    descriptionAr: "خوارزميات الحساب، برمجيات سطح المكتب، تطبيقات الأجهزة الذكية، وقواعد البيانات.",
    skills: [
      { name: "Python 3.x", detail: "NumPy, Scientific Scripts, Engineering Automation" },
      { name: "PyQt6 / PyQt5", detail: "Desktop GUI Engineering for Technical Tools" },
      { name: "Java & Android (Kotlin)", detail: "Native Hardware Features, NFC Host Card Emulation" },
      { name: "Web Technologies", detail: "React, Preact, Tailwind CSS, HTML5 Canvas / SVG" },
      { name: "Databases & Cloud", detail: "SQLite (Offline-First Local DB), Firebase Firestore" },
      { name: "AI Vibe Coding", detail: "Rapid Prototyping & System Development Acceleration" }
    ]
  },
  {
    domain: "Engineering Productivity & Languages",
    domainAr: "الإنتاجية الهندسية واللغات",
    description: "Mathematical spreadsheets, technical documentation, and accredited language proficiencies.",
    descriptionAr: "الجداول الحسابية المتقدمة، التوثيق الهندسي، والكفاءات اللغوية المعتمدة.",
    skills: [
      { name: "Microsoft Excel (Advanced)", detail: "Automated Hydraulic Spreadsheets & Quantity Takeoffs" },
      { name: "English (Level B2)", detail: "CEFR Upper Intermediate / Working & Academic Proficiency" },
      { name: "French (Fluent Technical)", detail: "Language of Professional Engineering Study in Algeria" },
      { name: "Arabic (Native)", detail: "Mother Tongue / Professional Fluency" },
      { name: "Huawei ICT Academy", detail: "Internet of Things (IoT Track) Accredited Coursework" }
    ]
  }
];

export const EDUCATION_AND_EXPERIENCE = {
  education: [
    {
      degree: "Master of Science (M.S.) — Water & Sanitation Services Engineering",
      degreeAr: "ماستر 2 في تسيير وهندسة خدمات المياه والتطهير (قيد الدراسة)",
      institution: "Université Mohamed Khider — Biskra, Algeria",
      institutionAr: "جامعة محمد خيضر — بسكرة، الجزائر",
      period: "2025 – Present",
      status: "Currently in Master 2 (M2)",
      statusAr: "قيد التحضير (السنة الثانية ماستر)",
      details: "Focus on urban drinking water distribution management, wastewater treatment plant kinetics, pumping energy efficiency, and water loss reduction (NRW)."
    },
    {
      degree: "Bachelor of Science (B.S.) in Hydraulic Engineering — National Recruitment Track",
      degreeAr: "ليسانس في هندسة الري والهيدروليكا (تسجيل وطني)",
      institution: "Université Mohamed Khider — Biskra, Algeria",
      institutionAr: "جامعة محمد خيضر — بسكرة، الجزائر",
      period: "Graduated: 2025",
      status: "Graduated",
      statusAr: "تخرج دفعة 2025",
      details: "Comprehensive engineering curriculum: Fluid Mechanics, Pressurized Hydraulics, Open Channel Flow, Hydrology, Dam Engineering, Soil Mechanics, Reinforced Concrete, and Métré."
    }
  ],
  leadership: [
    {
      role: "President",
      roleAr: "رئيس النادي العلمي",
      organization: "Bernoulli Scientific Club for Hydraulics",
      organizationAr: "النادي العلمي برنولي للهيدروليك — جامعة بسكرة",
      period: "2023 – 2025",
      highlights: [
        "Led a dedicated team of 14 student members, organizing technical peer masterclasses in EPANET 2.2 and GIS mapping.",
        "Organized and coordinated technical engineering field expeditions to regional dams, water treatment facilities, and WWTP stations."
      ],
      highlightsAr: [
        "قيادة فريق طلابي مكوّن من 14 عضواً وتنظيم ورشات تكوينية وتطبيقية للأقران في برمجيات EPANET ونظم المعلومات الجغرافية GIS.",
        "تنظيم وتنسيق زيارات ميدانية علمية لسدود المياه ومحطات معالجة مياه الصرف الصحي والمنشآت المائية الإقليمية."
      ]
    },
    {
      role: "Core Member & 1st Place Winner",
      roleAr: "عضو أساسي وحائز على المرتبة الأولى",
      organization: "AutOptimus Robotics & Automation Club",
      organizationAr: "نادي AutOptimus للروبوتات والأنظمة الآلية",
      period: "2023",
      highlights: [
        "Awarded 1st Place in the Summer Engineering Competition (Energy Security) for developing an automated engineering solution for resource efficiency.",
        "Collaborated on microcontroller projects (Arduino/ESP32), industrial sensor loops, and automated hardware control logic."
      ],
      highlightsAr: [
        "الحصول على المرتبة الأولى في المسابقة الهندسية الصيفية في مجال الأمن الطاقوي (Energy Security) عبر تطوير حل تقني مؤتمت لترشيد الطاقة.",
        "التعامل التطبيقي مع المتحكمات الدقيقة (Arduino/ESP32)، المستشعرات الذكية، وخوارزميات التحكم الآلي."
      ]
    }
  ]
};

export const FLUIDEV_ACADEMIC_SERVICES = [
  {
    id: "theses-formatting",
    title: "PFE & Academic Theses Formatting",
    titleAr: "إعداد وتنسيق مذكرات التخرج والبحوث (PFE)",
    desc: "Rigorous academic typography, mathematical equation typesetting, structural figure numbering, and standard citation management (IEEE, APA, ISO).",
    descAr: "تنسيق أكاديمي احترافي لمذكرات الليسانس والماستر، تدقيق الجداول والمعادلات الرياضية، وفهرسة المراجع بدقة وفق المعايير العالمية."
  },
  {
    id: "defense-presentations",
    title: "Soutenance & Defense Slide Decks",
    titleAr: "تصميم عروض المناقشات والملتقيات (Soutenance)",
    desc: "Architectural, high-clarity presentation slide decks tailored for academic defense juries, featuring technical infographics and system schematics.",
    descAr: "تصميم شرائح PowerPoint راقية ومقنعة للجان المناقشة العلمية، تركز على وضوح المخططات الهندسية والأرقام والمخططات البيانية."
  },
  {
    id: "data-engineering-tools",
    title: "Engineering Tools & Spreadsheets",
    titleAr: "أدوات رقمية ومعالجة البيانات وشيتات إكسل",
    desc: "Bespoke mathematical Excel sheets, automated quantity calculation spreadsheets, and customized Python automation scripts for engineering studies.",
    descAr: "تصميم شيتات إكسل هندسية متطورة، أتمتة حسابات جداول الكميات، وتطوير أدوات برمجية خاصة تسهل الحسابات الروتينية للطلبة والمهندسين."
  }
];
