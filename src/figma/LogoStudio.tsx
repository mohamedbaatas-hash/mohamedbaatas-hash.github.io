import React from "react"
import { toCanvas } from "html-to-image"

type LogoVariant = "dark" | "icon" | "light" | "mono"

type LogoProps = {
  variant: LogoVariant
}

function FluiDevLogo({ variant }: LogoProps) {
  const iconOnly = variant === "icon"
  const dark = variant === "dark" || iconOnly
  const mono = variant === "mono"
  const primary = dark ? "#ffffff" : "#07133f"
  const flow = mono ? "#07133f" : "#00aeea"
  const developer = mono ? "#07133f" : dark ? "#00e5ff" : "#005bff"
  const accent = mono ? "#07133f" : "#f7b500"

  return (
    <svg
      aria-label="FluiDev logo"
      data-logo={variant}
      height={iconOnly ? 200 : 200}
      role="img"
      viewBox={iconOnly ? "0 0 200 200" : "0 0 720 200"}
      width={iconOnly ? 200 : 720}
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconOnly && <rect fill="#001db5" height="200" rx="38" width="200" />}

      <g>
        <path
          d="M48 34h78v22H72v33h45v22H72v57H48Z"
          fill={primary}
        />
        <path
          d="M93 34h19c39 0 63 25 63 66s-24 66-63 66H93"
          fill="none"
          stroke={flow}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="17"
        />
        <circle cx="119" cy="100" fill={accent} r="10" stroke={dark ? "#001db5" : "#ffffff"} strokeWidth="4" />
      </g>

      {!iconOnly && (
        <>
          <text
            fill={primary}
            fontFamily="Alexandria, Arial, sans-serif"
            fontSize="72"
            fontWeight="900"
            x="215"
            y="111"
          >
            Flui
          </text>
          <text
            fill={developer}
            fontFamily="Alexandria, Arial, sans-serif"
            fontSize="72"
            fontWeight="900"
            x="354"
            y="111"
          >
            Dev
          </text>
          <path d="M218 135h43" fill="none" stroke={accent} strokeLinecap="round" strokeWidth="6" />
          <text
            fill={dark ? "#a9b9e7" : "#596682"}
            fontFamily="Barlow Condensed, Arial Narrow, sans-serif"
            fontSize="17"
            fontWeight="700"
            letterSpacing="4"
            x="278"
            y="142"
          >
            HYDROINFORMATICS + SOFTWARE
          </text>
        </>
      )}
    </svg>
  )
}

const variants: Array<{ label: string; name: LogoVariant; subtitle: string }> = [
  { label: "Primary", name: "light", subtitle: "النسخة الأساسية" },
  { label: "Reversed", name: "dark", subtitle: "للخلفيات الداكنة" },
  { label: "Profile Mark", name: "icon", subtitle: "صورة الحساب والأيقونة" },
  { label: "Monochrome", name: "mono", subtitle: "للطباعة والمستندات" },
]

type LogoStudioState = {
  busy: string | null
  error: string | null
  success: string | null
}

export default class LogoStudio extends React.Component<object, LogoStudioState> {
  state: LogoStudioState = { busy: null, error: null, success: null }

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

  private findLogo = (variant: LogoVariant) => {
    const logo = document.querySelector<SVGSVGElement>(`[data-logo="${variant}"]`)
    if (!logo) throw new Error("تعذر العثور على نسخة الشعار")
    return logo
  }

  private exportSvg = (variant: LogoVariant) => {
    this.setState({ busy: `svg-${variant}`, error: null, success: null })
    try {
      const logo = this.findLogo(variant)
      const clone = logo.cloneNode(true) as SVGSVGElement
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg")
      const source = new XMLSerializer().serializeToString(clone)
      this.downloadBlob(new Blob([source], { type: "image/svg+xml;charset=utf-8" }), `fluiddev-logo-${variant}.svg`)
      this.setState({ success: `تم تحميل شعار ${variant} بصيغة SVG.` })
    } catch (error) {
      this.setState({ error: error instanceof Error ? error.message : "فشل تصدير SVG" })
    } finally {
      this.setState({ busy: null })
    }
  }

  private exportPng = async (variant: LogoVariant) => {
    this.setState({ busy: `png-${variant}`, error: null, success: null })
    try {
      const logo = this.findLogo(variant)
      const iconOnly = variant === "icon"
      const width = iconOnly ? 1080 : 2160
      const height = iconOnly ? 1080 : 600
      const rendered = await toCanvas(logo, {
        backgroundColor: variant === "dark" ? "#001db5" : variant === "icon" ? "#001db5" : "#ffffff",
        cacheBust: false,
        pixelRatio: width / logo.getBoundingClientRect().width,
        skipAutoScale: true,
      })
      const output = document.createElement("canvas")
      output.width = width
      output.height = height
      const context = output.getContext("2d")
      if (!context) throw new Error("تعذر تجهيز ملف PNG")
      context.drawImage(rendered, 0, 0, width, height)
      const blob = await new Promise<Blob>((resolve, reject) => {
        output.toBlob(
          (value) => (value ? resolve(value) : reject(new Error("تعذر إنشاء PNG"))),
          "image/png",
        )
      })
      this.downloadBlob(blob, `fluiddev-logo-${variant}.png`)
      this.setState({ success: `تم تحميل شعار ${variant} بصيغة PNG.` })
    } catch (error) {
      this.setState({ error: error instanceof Error ? error.message : "فشل تصدير PNG" })
    } finally {
      this.setState({ busy: null })
    }
  }

  render() {
    const { busy, error, success } = this.state
    return (
      <section className="logo-studio">
        <div className="logo-heading">
          <div>
            <span>BRAND MARK / FLUID × DEVELOPMENT</span>
            <h2>نظام شعار FluiDev</h2>
          </div>
          <p>علامة واحدة قابلة للاستخدام من 16px إلى الطباعة الكبيرة</p>
        </div>

        <div className="logo-variants" dir="ltr">
          {variants.map((variant) => (
            <article className={`logo-card ${variant.name}`} key={variant.name}>
              <div className="logo-canvas">
                <FluiDevLogo variant={variant.name} />
              </div>
              <div className="logo-card-footer" dir="rtl">
                <div>
                  <strong>{variant.label}</strong>
                  <span>{variant.subtitle}</span>
                </div>
                <div className="logo-downloads">
                  <button disabled={busy !== null} onClick={() => this.exportSvg(variant.name)}>
                    SVG
                  </button>
                  <button disabled={busy !== null} onClick={() => this.exportPng(variant.name)}>
                    PNG
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="logo-rationale">
          <span>F</span>
          <p>الكتلة الهندسية تمثل البرمجة والبناء المنطقي.</p>
          <span>D</span>
          <p>المسار المنحني يمثل التدفق، الأنبوب، وقوس الكود.</p>
          <span>•</span>
          <p>العقدة الصفراء هي نقطة التقاء الماء بالبيانات.</p>
        </div>
        {error && <p className="logo-message error">{error}</p>}
        {success && <p className="logo-message success">{success}</p>}
      </section>
    )
  }
}
