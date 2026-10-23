import React from "react"
import { toCanvas } from "html-to-image"

type SlideKind = "intro" | "presentations" | "writing"

type Slide = {
  description: string
  index: string
  items: string[]
  kind: SlideKind
  label: string
  title: string
}

const slides: Slide[] = [
  {
    description: "مرافقة أكاديمية للطلبة والباحثين من المراجعة إلى المناقشة",
    index: "01",
    items: ["مراجعة وتنظيم", "وضوح في المحتوى", "تنسيق وفق دليل الجامعة", "متابعة مستمرة", "تسليم منظم"],
    kind: "intro",
    label: "ACADEMIC SUPPORT",
    title: "تحتاج إخراجًا احترافيًا لمذكرتك؟",
  },
  {
    description: "تنظيم أكاديمي واضح يحافظ على أصالة عملك",
    index: "02",
    items: ["تنسيق أكاديمي", "تدقيق لغوي", "تنظيم المراجع", "فهرسة المحتوى", "إخراج النسخة النهائية"],
    kind: "writing",
    label: "WRITING & RESEARCH",
    title: "المذكرات والبحوث",
  },
  {
    description: "عرض واضح ومنظم يبرز مجهودك أمام لجنة المناقشة",
    index: "03",
    items: ["PowerPoint احترافي", "تنظيم المحتوى", "مخططات وبيانات", "Infographics", "تصميم جاهز للمناقشة"],
    kind: "presentations",
    label: "PRESENTATION DESIGN",
    title: "عروض المناقشة",
  },
]

function SlideIcon({ kind }: { kind: SlideKind }) {
  const paths = {
    intro: (
      <>
        <path d="M12 3 5 6v5c0 4.7 3 8.2 7 10 4-1.8 7-5.3 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    writing: (
      <>
        <path d="M5 3h11l3 3v15H5Z" />
        <path d="M15 3v4h4M8 11h8M8 15h6" />
      </>
    ),
    presentations: (
      <>
        <path d="M3 4h18v12H3zM12 16v5m-4 0h8" />
        <path d="m7 12 3-3 2 2 4-5" />
      </>
    ),
    coding: (
      <>
        <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-13-4 16" />
        <circle cx="12" cy="12" r="9" opacity=".25" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="30"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
      viewBox="0 0 24 24"
      width="30"
    >
      {paths[kind]}
    </svg>
  )
}

function FlowSegment({ index }: { index: number }) {
  const paths = [
    "M-10 352C82 330 164 382 250 360C320 342 351 322 410 350",
    "M-10 350C74 378 144 321 223 337C303 353 337 337 410 320",
    "M-10 320C74 296 135 351 215 329C294 307 337 342 410 326",
  ]
  return (
    <svg
      aria-hidden="true"
      className="carousel-flow"
      preserveAspectRatio="none"
      viewBox="0 0 400 500"
    >
      <path d={paths[index]} fill="none" stroke="rgba(0,29,181,.18)" strokeWidth="11" />
      <path d={paths[index]} fill="none" stroke="#00e5ff" strokeWidth="4" />
      <path d={paths[index]} fill="none" stroke="rgba(255,255,255,.85)" strokeDasharray="8 11" strokeWidth="1.4" />
      <circle cx="395" cy={index === 0 ? 346 : index === 1 ? 322 : 327} fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
    </svg>
  )
}

function CarouselSlide({ slide, position }: { slide: Slide; position: number }) {
  const dark = slide.kind === "presentations"
  return (
    <article
      className={`carousel-slide ${dark ? "dark" : "light"} ${slide.kind}`}
      data-carousel-slide={slide.kind}
      dir="rtl"
    >
      <div className="carousel-grid-bg" />
      <div className="carousel-corner" />
      <FlowSegment index={position} />

      <div className="carousel-brand">
        <span>F</span>
        <div>
          <strong>FluiDev</strong>
          <small>TURNING IDEAS INTO REALITY</small>
        </div>
      </div>

      <div className="carousel-slide-index">{slide.index} / 03</div>
      <div className="carousel-heading">
        <span>{slide.label}</span>
        <div className="carousel-title-row">
          <strong>{slide.title}</strong>
          <i>
            <SlideIcon kind={slide.kind} />
          </i>
        </div>
        <p>{slide.description}</p>
      </div>

      <div className="carousel-items">
        {slide.items.map((item, index) => (
          <div className="carousel-item" key={item}>
            <b>0{index + 1}</b>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="carousel-swipe">
        <span>{position < 2 ? "اسحب لاكتشاف التفاصيل" : "جاهز للمناقشة؟"}</span>
        <strong>{position < 2 ? "←" : "أرسل تخصصك والموعد عبر الخاص"}</strong>
      </div>

      <div className="carousel-bottom">
        <span>{slide.index}</span>
        <strong>@mohamed_baatas</strong>
        <i />
        <strong>+213 655 74 85 13</strong>
      </div>
    </article>
  )
}

type StudioState = {
  busy: string | null
  error: string | null
  success: string | null
}

export default class ConnectedCarouselStudio extends React.Component<object, StudioState> {
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

  private exportSlide = async (slide: Slide) => {
    this.setState({ busy: slide.kind, error: null, success: null })
    try {
      const element = document.querySelector<HTMLElement>(`[data-carousel-slide="${slide.kind}"]`)
      if (!element) throw new Error("تعذر العثور على شريحة المنشور")
      const width = element.getBoundingClientRect().width
      if (width <= 0) throw new Error("أبعاد الشريحة غير متاحة")
      const rendered = await toCanvas(element, {
        backgroundColor: slide.kind === "coding" ? "#001db5" : "#f8f9fa",
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
      this.downloadBlob(blob, `fluiddev-carousel-${slide.index}-${slide.kind}-1080x1350.png`)
      this.setState({ success: `تم تحميل الشريحة ${slide.index}.` })
    } catch (error) {
      this.setState({ error: error instanceof Error ? error.message : "فشل تصدير الشريحة" })
    } finally {
      this.setState({ busy: null })
    }
  }

  render() {
    const { busy, error, success } = this.state
    return (
      <section className="carousel-studio">
        <div className="carousel-studio-heading">
          <div>
            <span>INSTAGRAM CAROUSEL / 03 SLIDES</span>
            <h2>منشور خدمات FluiDev المتصل</h2>
          </div>
          <p>منشور واحد بالسحب · ثلاث خدمات · 1080 × 1350 لكل شريحة</p>
        </div>

        <div className="carousel-window">
          <div className="carousel-panorama">
            {slides.map((slide, index) => (
              <CarouselSlide key={slide.kind} position={index} slide={slide} />
            ))}
          </div>
        </div>

        <div className="carousel-downloads">
          {slides.map((slide) => (
            <button disabled={busy !== null} key={slide.kind} onClick={() => this.exportSlide(slide)}>
              <span>{slide.index}</span>
              {busy === slide.kind ? "جارٍ التصدير..." : `تحميل ${slide.title}`}
            </button>
          ))}
        </div>
        {error && <p className="carousel-message error">{error}</p>}
        {success && <p className="carousel-message success">{success}</p>}
        <p className="carousel-order">ترتيب الرفع داخل Instagram: الغلاف أولًا، ثم المذكرات والبحوث، ثم عروض المناقشة.</p>
      </section>
    )
  }
}
