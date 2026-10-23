import React from "react"
import { toCanvas } from "html-to-image"

type ExportPanelProps = {
  alternateHref?: string
  alternateLabel?: string
  versionLabel: string
}

type ExportPanelState = {
  busy: string | null
  error: string | null
  success: string | null
}

const slices = [
  { index: 2, key: "post-1", label: "المنشور 1 · الهوية" },
  { index: 1, key: "post-2", label: "المنشور 2 · الخدمات" },
  { index: 0, key: "post-3", label: "المنشور 3 · التواصل" },
]

export default class ExportPanel extends React.Component<ExportPanelProps, ExportPanelState> {
  state: ExportPanelState = {
    busy: null,
    error: null,
    success: null,
  }

  private renderMaster = async () => {
    const banner = document.querySelector<HTMLElement>(".banner")
    if (!banner) throw new Error("لم يتم العثور على البانر")

    await Promise.race([
      document.fonts.ready,
      new Promise<void>((resolve) => window.setTimeout(resolve, 5000)),
    ])
    await Promise.all(
      Array.from(banner.querySelectorAll("img")).map(async (image) => {
        if (!image.complete) {
          await new Promise<void>((resolve) => {
            image.addEventListener("load", () => resolve(), { once: true })
            image.addEventListener("error", () => resolve(), { once: true })
          })
        }
        if (image.decode) {
          await image.decode().catch(() => undefined)
        }
      }),
    )

    const bannerWidth = banner.getBoundingClientRect().width
    if (bannerWidth <= 0) throw new Error("أبعاد البانر غير متاحة")

    const pixelRatio = 3240 / bannerWidth
    const rendered = await Promise.race([
      toCanvas(banner, {
      backgroundColor: "#f7f9fc",
      cacheBust: false,
        filter: (node) => !(node instanceof Element && node.classList.contains("cut-line")),
      pixelRatio,
      preferredFontFormat: "woff2",
      skipAutoScale: true,
      }),
      new Promise<never>((_, reject) => {
        window.setTimeout(
          () => reject(new Error("استغرق التصدير وقتًا طويلًا. أعد المحاولة بعد تحديث الصفحة.")),
          45000,
        )
      }),
    ])

    const master = document.createElement("canvas")
    master.width = 3240
    master.height = 1350
    const context = master.getContext("2d")
    if (!context) throw new Error("تعذر تجهيز لوحة التصدير")
    context.drawImage(rendered, 0, 0, 3240, 1350)
    return master
  }

  private downloadCanvas = (canvas: HTMLCanvasElement, filename: string) => {
    return new Promise<void>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("تعذر إنشاء ملف PNG"))
          return
        }
        this.downloadBlob(blob, filename).then(resolve).catch(reject)
      }, "image/png")
    })
  }

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
      }, 1500)
    })
  }

  private exportFull = async () => {
    this.setState({ busy: "full", error: null, success: null })
    try {
      const canvas = await this.renderMaster()
      await this.downloadCanvas(canvas, `${this.props.versionLabel}-full-3240x1350.png`)
      this.setState({ success: "تم تحميل البانر الكامل بدقة 3240 × 1350." })
    } catch (error) {
      this.setState({ error: error instanceof Error ? error.message : "فشل التصدير" })
    } finally {
      this.setState({ busy: null })
    }
  }

  private exportPdf = async () => {
    this.setState({ busy: "pdf", error: null, success: null })
    try {
      const canvas = await this.renderMaster()
      const { jsPDF } = await import("jspdf")
      const pdf = new jsPDF({
        compress: true,
        format: [3240, 1350],
        hotfixes: ["px_scaling"],
        orientation: "landscape",
        unit: "px",
      })
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      pdf.addImage(canvas, "PNG", 0, 0, pageWidth, pageHeight, undefined, "FAST")
      await this.downloadBlob(
        pdf.output("blob"),
        `${this.props.versionLabel}-editable-import-3240x1350.pdf`,
      )
      this.setState({ success: "تم تحميل PDF كامل، جاهز للاستيراد في Canva أو Photoshop." })
    } catch (error) {
      this.setState({ error: error instanceof Error ? error.message : "فشل تصدير PDF" })
    } finally {
      this.setState({ busy: null })
    }
  }

  private exportSlice = async (sliceIndex: number, key: string) => {
    this.setState({ busy: key, error: null, success: null })
    try {
      const master = await this.renderMaster()
      const slice = document.createElement("canvas")
      slice.width = 1080
      slice.height = 1350
      const context = slice.getContext("2d")
      if (!context) throw new Error("تعذر تجهيز مساحة القص")
      const sourceWidth = master.width / 3
      context.drawImage(
        master,
        sourceWidth * sliceIndex,
        0,
        sourceWidth,
        master.height,
        0,
        0,
        1080,
        1350,
      )
      await this.downloadCanvas(slice, `${this.props.versionLabel}-${key}-1080x1350.png`)
      this.setState({ success: `تم تحميل ${key.replace("post-", "المنشور ")} بدقة 1080 × 1350.` })
    } catch (error) {
      this.setState({ error: error instanceof Error ? error.message : "فشل التصدير" })
    } finally {
      this.setState({ busy: null })
    }
  }

  render() {
    const { alternateHref, alternateLabel, versionLabel } = this.props
    const { busy, error, success } = this.state

    return (
      <section className="export-panel" dir="rtl">
        <div className="export-heading">
          <div>
            <span>PNG EXPORT / 300% SCALE</span>
            <strong>تنزيل {versionLabel === "fluiddev-blueprint" ? "النسخة الجديدة" : "النسخة السابقة"}</strong>
          </div>
          {alternateHref && (
            <a className="version-link" href={alternateHref}>
              {alternateLabel}
            </a>
          )}
        </div>
        <div className="export-actions">
          <button disabled={busy !== null} onClick={this.exportFull}>
            <span>3240 × 1350</span>
            {busy === "full" ? "جارٍ التجهيز..." : "تحميل البانر كاملًا"}
          </button>
          <button disabled={busy !== null} onClick={this.exportPdf}>
            <span>PDF · 12:5</span>
            {busy === "pdf" ? "جارٍ إنشاء PDF..." : "تحميل PDF كامل"}
          </button>
          {slices.map((slice) => (
            <button
              disabled={busy !== null}
              key={slice.key}
              onClick={() => this.exportSlice(slice.index, slice.key)}
            >
              <span>1080 × 1350</span>
              {busy === slice.key ? "جارٍ التجهيز..." : slice.label}
            </button>
          ))}
        </div>
        {error && <p className="export-error">{error}</p>}
        {success && <p className="export-success">{success}</p>}
        <p className="export-help">ترتيب النشر على إنستغرام: المنشور 3 أولًا، ثم 2، ثم 1.</p>
        <p className="export-help">
          ملاحظة: يفتح PDF في Canva وPhotoshop كصفحة واحدة مسطّحة للحفاظ على شكل التصميم، وليس كطبقات منفصلة.
        </p>
      </section>
    )
  }
}
