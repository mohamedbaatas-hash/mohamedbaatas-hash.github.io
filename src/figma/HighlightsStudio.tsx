import React from "react"
import { toCanvas } from "html-to-image"

type HighlightKind = "life" | "memory" | "milestones" | "portfolio" | "reviews" | "services"
type Tone = "personal" | "professional"

type Highlight = {
  arabic: string
  index: string
  kind: HighlightKind
  label: string
  tone: Tone
}

const highlights: Highlight[] = [
  { arabic: "خدماتي", index: "01", kind: "services", label: "Services", tone: "professional" },
  { arabic: "أعمالي", index: "02", kind: "portfolio", label: "Portfolio", tone: "professional" },
  { arabic: "إنجازاتي", index: "03", kind: "milestones", label: "Milestones", tone: "professional" },
  { arabic: "الآراء", index: "04", kind: "reviews", label: "Reviews", tone: "professional" },
  { arabic: "حياتي", index: "05", kind: "life", label: "Life", tone: "personal" },
  { arabic: "ذكرى", index: "06", kind: "memory", label: "In Memory", tone: "personal" },
]

function HighlightIcon({ kind, tone }: { kind: HighlightKind; tone: Tone }) {
  const stroke = tone === "professional" ? "#f7b500" : "#001db5"
  const common = {
    fill: "none",
    stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2.8,
  }
  const icons: Record<HighlightKind, React.ReactNode> = {
    services: (
      <>
        <path {...common} d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12" />
        <circle {...common} cx="12" cy="12" r="9" opacity=".35" />
      </>
    ),
    portfolio: (
      <>
        <path {...common} d="M3 7h7l2 2h9v10H3Z" />
        <path {...common} d="m10 12-2 2 2 2m4-4 2 2-2 2" />
      </>
    ),
    milestones: (
      <>
        <path {...common} d="M8 4h8v4a4 4 0 0 1-8 0Zm4 8v5m-4 3h8M9 17h6" />
        <path {...common} d="M8 6H4v2c0 2 1.5 3.5 4 3m8-5h4v2c0 2-1.5 3.5-4 3" />
      </>
    ),
    reviews: (
      <>
        <path {...common} d="M4 5h16v11H9l-5 4Z" />
        <path {...common} d="m12 8 1.1 2.2 2.4.4-1.8 1.7.5 2.4-2.2-1.2-2.2 1.2.5-2.4-1.8-1.7 2.4-.4Z" />
      </>
    ),
    life: (
      <>
        <rect {...common} x="3" y="7" width="18" height="12" rx="2" />
        <circle {...common} cx="12" cy="13" r="3.4" />
        <path {...common} d="M8 7 9.5 4h5L16 7m3-4v3m-1.5-1.5h3" />
      </>
    ),
    memory: (
      <>
        <path {...common} d="M20.2 5.8a5 5 0 0 0-7.1 0L12 6.9l-1.1-1.1a5 5 0 0 0-7.1 7.1L12 21l8.2-8.1a5 5 0 0 0 0-7.1Z" />
        <path {...common} d="M8 13c2-2 6-2 8 0" opacity=".45" />
      </>
    ),
  }

  return (
    <svg aria-hidden="true" className="highlight-glyph" viewBox="0 0 24 24">
      {icons[kind]}
    </svg>
  )
}

function HighlightCover({ highlight }: { highlight: Highlight }) {
  return (
    <div className={`highlight-cover ${highlight.tone}`} data-highlight={highlight.kind}>
      <div className="highlight-diagonals" />
      <div className="highlight-circuit">
        <span />
      </div>
      <div className="highlight-waterline">
        <i />
      </div>
      <div className="highlight-badge">
        <div className="badge-orbit">
          <span />
        </div>
        <div className="badge-core">
          <HighlightIcon kind={highlight.kind} tone={highlight.tone} />
        </div>
      </div>
    </div>
  )
}

type StudioState = {
  busy: string | null
  error: string | null
  success: string | null
}

export default class HighlightsStudio extends React.Component<object, StudioState> {
  state: StudioState = { busy: null, error: null, success: null }

  private downloadBlob = (blob: Blob, filename: string) => {
    return new Promise<void>((resolve) => {
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
        resolve()
      }, 1200)
    })
  }

  private exportCover = async (highlight: Highlight) => {
    this.setState({ busy: highlight.kind, error: null, success: null })
    try {
      const cover = document.querySelector<HTMLElement>(`[data-highlight="${highlight.kind}"]`)
      if (!cover) throw new Error("تعذر العثور على غلاف الهايلايت")
      const width = cover.getBoundingClientRect().width
      if (width <= 0) throw new Error("أبعاد الغلاف غير متاحة")
      const rendered = await toCanvas(cover, {
        backgroundColor: highlight.tone === "professional" ? "#001db5" : "#f8f9fa",
        cacheBust: false,
        pixelRatio: 1080 / width,
        skipAutoScale: true,
        skipFonts: true,
      })
      const output = document.createElement("canvas")
      output.width = 1080
      output.height = 1920
      const context = output.getContext("2d")
      if (!context) throw new Error("تعذر تجهيز ملف الغلاف")
      context.drawImage(rendered, 0, 0, 1080, 1920)
      const blob = await new Promise<Blob>((resolve, reject) => {
        output.toBlob(
          (value) => (value ? resolve(value) : reject(new Error("تعذر إنشاء PNG"))),
          "image/png",
        )
      })
      await this.downloadBlob(blob, `fluiddev-highlight-${highlight.kind}-1080x1920.png`)
      this.setState({ success: `تم تحميل غلاف ${highlight.label}.` })
    } catch (error) {
      this.setState({ error: error instanceof Error ? error.message : "فشل تحميل الغلاف" })
    } finally {
      this.setState({ busy: null })
    }
  }

  render() {
    const { busy, error, success } = this.state
    return (
      <section className="highlights-studio">
        <div className="highlights-heading">
          <div>
            <span>HIGHLIGHT SYSTEM / 06 COVERS</span>
            <h2>أغلفة هايلايتس FluiDev</h2>
          </div>
          <p>1080 × 1920 · الأيقونات داخل منطقة القص الدائري الآمنة</p>
        </div>
        <div className="highlights-grid" dir="ltr">
          {highlights.map((highlight) => (
            <article className="highlight-card" key={highlight.kind}>
              <div className="highlight-preview">
                <HighlightCover highlight={highlight} />
                <div className="highlight-safe-ring" />
              </div>
              <div className="highlight-meta" dir="rtl">
                <div>
                  <strong>{highlight.label}</strong>
                  <span>{highlight.arabic}</span>
                </div>
                <button disabled={busy !== null} onClick={() => this.exportCover(highlight)}>
                  {busy === highlight.kind ? "جارٍ..." : "PNG"}
                </button>
              </div>
            </article>
          ))}
        </div>
        {error && <p className="highlight-message error">{error}</p>}
        {success && <p className="highlight-message success">{success}</p>}
        <p className="highlights-note">الدائرة المتقطعة للمعاينة فقط، ولن تظهر داخل الملف المحمّل.</p>
      </section>
    )
  }
}
