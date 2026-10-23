import React from "react"
import { toCanvas } from "html-to-image"

function ServiceIcon({ type }: { type: "format" | "language" | "presentation" | "references" }) {
  const paths = {
    format: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
    language: (
      <>
        <path d="M4 5h10M9 3v2c0 5-2 8-6 10" />
        <path d="M6 10c2 2 4 3 7 4m2-5 4 12m-6-4h8" />
      </>
    ),
    references: (
      <>
        <path d="M6 4h12v16H6zM9 8h6M9 12h6M9 16h4" />
        <path d="M3 7V3h4M21 17v4h-4" />
      </>
    ),
    presentation: (
      <>
        <path d="M3 4h18v12H3zM12 16v5m-4 0h8" />
        <path d="m7 12 3-3 2 2 4-5" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width="24"
    >
      {paths[type]}
    </svg>
  )
}

function AcademicPost() {
  const services = [
    ["format", "تنسيق أكاديمي احترافي", "وفق دليل الجامعة ومتطلبات التسليم"],
    ["language", "مراجعة وتدقيق لغوي", "تحسين الصياغة والوضوح وسلامة النص"],
    ["references", "تنظيم المراجع", "APA / IEEE وتوحيد الإحالات والفهرسة"],
    ["presentation", "عرض المناقشة", "شرائح واضحة ومخططات تبرز مجهودك"],
  ] as const

  return (
    <div className="academic-post" dir="rtl">
      <div className="academic-grid" />
      <div className="academic-blue-field" />
      <div className="academic-pipe">
        <span />
        <span />
        <span />
      </div>

      <div className="academic-brand">
        <span>F</span>
        <div>
          <strong>FluiDev</strong>
          <small>ACADEMIC SUPPORT</small>
        </div>
      </div>

      <div className="academic-index">01 / SERVICE</div>
      <div className="academic-title">
        <span>خدمة مرافقة</span>
        <strong>البحوث والمذكرات</strong>
        <b>متوفرة الآن</b>
      </div>
      <div className="academic-tape">
        من الفكرة إلى تسليم منظم، واضح واحترافي
      </div>

      <div className="academic-services">
        {services.map(([type, title, description], index) => (
          <div className="academic-service" key={type}>
            <span className="academic-service-number">0{index + 1}</span>
            <span className="academic-service-icon">
              <ServiceIcon type={type} />
            </span>
            <div>
              <strong>{title}</strong>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="academic-ethics">
        <span>مرافقة أكاديمية مسؤولة</span>
        <p>مراجعة، تنظيم وتوجيه يدعم عملك ويحافظ على أصالته.</p>
      </div>

      <div className="academic-cta">
        <div>
          <small>READY TO START?</small>
          <strong>أرسل التخصص، نوع العمل والموعد المطلوب</strong>
        </div>
        <span className="academic-arrow">←</span>
      </div>

      <div className="academic-contact">
        <span>WHATSAPP</span>
        <strong>+213 655 74 85 13</strong>
        <i />
        <strong>@mohamed_baatas</strong>
      </div>
    </div>
  )
}

type AcademicStudioState = {
  busy: boolean
  error: string | null
  success: string | null
}

export default class SingleServicePostStudio extends React.Component<object, AcademicStudioState> {
  state: AcademicStudioState = { busy: false, error: null, success: null }

  private exportPost = async () => {
    this.setState({ busy: true, error: null, success: null })
    try {
      const post = document.querySelector<HTMLElement>(".academic-post")
      if (!post) throw new Error("تعذر العثور على المنشور")
      const width = post.getBoundingClientRect().width
      if (width <= 0) throw new Error("أبعاد المنشور غير متاحة")
      const canvas = await toCanvas(post, {
        backgroundColor: "#f8f9fa",
        cacheBust: false,
        pixelRatio: 1080 / width,
        preferredFontFormat: "woff2",
        skipAutoScale: true,
      })
      const output = document.createElement("canvas")
      output.width = 1080
      output.height = 1350
      const context = output.getContext("2d")
      if (!context) throw new Error("تعذر تجهيز ملف PNG")
      context.drawImage(canvas, 0, 0, 1080, 1350)
      const blob = await new Promise<Blob>((resolve, reject) => {
        output.toBlob(
          (value) => (value ? resolve(value) : reject(new Error("تعذر إنشاء PNG"))),
          "image/png",
        )
      })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "fluiddev-academic-support-post-1080x1350.png"
      link.style.display = "none"
      document.body.appendChild(link)
      link.click()
      window.setTimeout(() => {
        link.remove()
        URL.revokeObjectURL(url)
      }, 1500)
      this.setState({ success: "تم تحميل المنشور بدقة 1080 × 1350." })
    } catch (error) {
      this.setState({ error: error instanceof Error ? error.message : "فشل تصدير المنشور" })
    } finally {
      this.setState({ busy: false })
    }
  }

  render() {
    const { busy, error, success } = this.state
    return (
      <section className="academic-studio">
        <div className="academic-studio-heading">
          <div>
            <span>CONTENT TEMPLATE / POST 01</span>
            <h2>منشور خدمة البحوث والمذكرات</h2>
          </div>
          <button disabled={busy} onClick={this.exportPost}>
            {busy ? "جارٍ التصدير..." : "تحميل PNG · 1080 × 1350"}
          </button>
        </div>
        <div className="academic-preview">
          <AcademicPost />
        </div>
        {error && <p className="academic-message error">{error}</p>}
        {success && <p className="academic-message success">{success}</p>}
      </section>
    )
  }
}
