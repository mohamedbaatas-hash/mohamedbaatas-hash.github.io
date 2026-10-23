import React from "react"
import { toCanvas } from "html-to-image"

type SlideId = "cover" | "presentation" | "thesis"

function EditorialBrand({ index }: { index: string }) {
  return (
    <div className="editorial-brand">
      <div className="editorial-mark">
        <span>F</span>
        <i />
      </div>
      <div>
        <strong>FluiDev</strong>
        <small>ACADEMIC TRANSFORMATION</small>
      </div>
      <b>{index} / 03</b>
    </div>
  )
}

function EditorialConnector({ variant }: { variant: 0 | 1 | 2 }) {
  const paths = [
    "M-15 401C76 374 150 414 237 384C310 359 346 335 415 348",
    "M-15 348C73 361 128 322 211 344C290 365 342 377 415 350",
    "M-15 350C79 322 141 374 226 346C310 318 354 352 415 331",
  ]
  return (
    <svg
      aria-hidden="true"
      className="editorial-connector"
      preserveAspectRatio="none"
      viewBox="0 0 400 500"
    >
      <path d={paths[variant]} fill="none" stroke="#00e5ff" strokeLinecap="round" strokeWidth="4" />
      <circle cx={variant === 0 ? 393 : variant === 1 ? 398 : 371} cy={variant === 0 ? 347 : variant === 1 ? 354 : 336} fill="#f5c84b" r="6" stroke="#fff" strokeWidth="2" />
    </svg>
  )
}

function RawDocument() {
  return (
    <div className="raw-document">
      <span>BEFORE</span>
      <div className="raw-title" />
      <i />
      <i />
      <i />
      <i />
      <i />
      <b />
    </div>
  )
}

function FinishedDocument({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "finished-document compact" : "finished-document"}>
      <span>{compact ? "THESIS / 2026" : "AFTER"}</span>
      <div className="finished-title" />
      <div className="finished-rule" />
      <strong>01</strong>
      <i />
      <i />
      <i />
      <div className="finished-foot">
        <b />
        <b />
        <b />
      </div>
    </div>
  )
}

function CoverSlide() {
  return (
    <article className="editorial-slide cover-slide" data-editorial-slide="cover" dir="rtl">
      <div className="paper-noise" />
      <div className="editorial-brand-field" />
      <EditorialBrand index="01" />
      <div className="editorial-kicker">ACADEMIC MAKEOVER</div>
      <h3>
        مذكرتك تستحق إخراجًا
        <span>يليق بمجهودك.</span>
      </h3>
      <p className="cover-description">
        نحوّل الملف الخام إلى عمل منظم، واضح وجاهز للتسليم والمناقشة.
      </p>

      <div className="transformation-stage">
        <RawDocument />
        <div className="transform-arrow">
          <span>تنظيم</span>
          <strong>←</strong>
        </div>
        <FinishedDocument />
      </div>

      <EditorialConnector variant={0} />
      <div className="editorial-swipe">
        <span>اسحب وشاهد التحول</span>
        <strong>←</strong>
      </div>
      <div className="editorial-folio">FLUIDEV / ACADEMIC SUPPORT</div>
    </article>
  )
}

function ThesisSlide() {
  return (
    <article className="editorial-slide thesis-slide" data-editorial-slide="thesis" dir="rtl">
      <div className="paper-noise" />
      <div className="editorial-brand-field" />
      <EditorialBrand index="02" />
      <div className="editorial-kicker">THESIS FORMATTING</div>
      <h3>
        من ملف خام
        <span>إلى مذكرة جاهزة للتسليم</span>
      </h3>

      <div className="thesis-stage">
        <FinishedDocument compact />
        <div className="annotation annotation-one">
          <span />
          تنسيق العناوين
        </div>
        <div className="annotation annotation-two">
          <span />
          فهرسة وترقيم
        </div>
        <div className="annotation annotation-three">
          <span />
          مراجع APA / IEEE
        </div>
        <div className="annotation annotation-four">
          <span />
          مراجعة لغوية
        </div>
      </div>

      <EditorialConnector variant={1} />
      <div className="editorial-swipe">
        <span>والآن، ماذا عن المناقشة؟</span>
        <strong>←</strong>
      </div>
      <div className="editorial-folio">STRUCTURE / REFERENCES / CLARITY</div>
    </article>
  )
}

function PresentationSlide() {
  return (
    <article className="editorial-slide presentation-slide" data-editorial-slide="presentation" dir="rtl">
      <div className="paper-noise" />
      <div className="editorial-brand-field" />
      <EditorialBrand index="03" />
      <div className="editorial-kicker">PRESENTATION DESIGN</div>
      <h3>
        ومن المذكرة
        <span>إلى عرض واضح ومقنع</span>
      </h3>

      <div className="laptop">
        <div className="laptop-screen">
          <span>RESEARCH FINDINGS</span>
          <strong>نتائج الدراسة</strong>
          <div className="slide-chart">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="slide-caption">
            <b />
            <b />
            <b />
          </div>
        </div>
        <div className="laptop-base" />
      </div>

      <div className="presentation-points">
        <span>محتوى منظم</span>
        <span>مخططات واضحة</span>
        <span>تصميم يبرز النتائج</span>
      </div>

      <EditorialConnector variant={2} />
      <div className="editorial-cta">
        <small>READY FOR YOUR SOUTENANCE?</small>
        <strong>أرسل تخصصك، نوع العمل والموعد عبر الخاص</strong>
        <span>@mohamed_baatas</span>
      </div>
      <div className="editorial-folio">POWERPOINT / INFOGRAPHICS / STORYTELLING</div>
    </article>
  )
}

const exportLabels: Array<{ id: SlideId; label: string }> = [
  { id: "cover", label: "تحميل الغلاف" },
  { id: "thesis", label: "تحميل شريحة المذكرة" },
  { id: "presentation", label: "تحميل شريحة العرض" },
]

type StudioState = {
  busy: SlideId | null
  error: string | null
  success: string | null
}

export default class AcademicPostStudio extends React.Component<object, StudioState> {
  state: StudioState = { busy: null, error: null, success: null }

  private downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    window.setTimeout(() => {
      link.remove()
      URL.revokeObjectURL(url)
    }, 1500)
  }

  private exportSlide = async (id: SlideId) => {
    this.setState({ busy: id, error: null, success: null })
    try {
      const element = document.querySelector<HTMLElement>(`[data-editorial-slide="${id}"]`)
      if (!element) throw new Error("تعذر العثور على الشريحة")
      const width = element.getBoundingClientRect().width
      if (width <= 0) throw new Error("أبعاد الشريحة غير متاحة")
      const rendered = await toCanvas(element, {
        backgroundColor: "#f3efe7",
        cacheBust: false,
        pixelRatio: 1080 / width,
        preferredFontFormat: "woff2",
        skipAutoScale: true,
      })
      const output = document.createElement("canvas")
      output.width = 1080
      output.height = 1350
      const context = output.getContext("2d")
      if (!context) throw new Error("تعذر تجهيز ملف الشريحة")
      context.drawImage(rendered, 0, 0, 1080, 1350)
      const blob = await new Promise<Blob>((resolve, reject) => {
        output.toBlob(
          (value) => (value ? resolve(value) : reject(new Error("تعذر إنشاء PNG"))),
          "image/png",
        )
      })
      this.downloadBlob(blob, `fluiddev-academic-${id}-1080x1350.png`)
      this.setState({ success: "تم تحميل الشريحة بدقة 1080 × 1350." })
    } catch (error) {
      this.setState({ error: error instanceof Error ? error.message : "فشل تصدير الشريحة" })
    } finally {
      this.setState({ busy: null })
    }
  }

  render() {
    const { busy, error, success } = this.state
    return (
      <section className="editorial-studio">
        <div className="editorial-studio-heading">
          <div>
            <span>CAMPAIGN 01 / ACADEMIC TRANSFORMATION</span>
            <h2>منشور ممول: من الملف الخام إلى المناقشة</h2>
          </div>
          <p>Carousel مستقلة بصريًا عن البانر · ثلاث شرائح مترابطة</p>
        </div>

        <div className="editorial-window">
          <div className="editorial-panorama">
            <CoverSlide />
            <ThesisSlide />
            <PresentationSlide />
          </div>
        </div>

        <div className="editorial-downloads">
          {exportLabels.map((item, index) => (
            <button disabled={busy !== null} key={item.id} onClick={() => this.exportSlide(item.id)}>
              <span>0{index + 1}</span>
              {busy === item.id ? "جارٍ التصدير..." : item.label}
            </button>
          ))}
        </div>
        {error && <p className="editorial-message error">{error}</p>}
        {success && <p className="editorial-message success">{success}</p>}
      </section>
    )
  }
}
