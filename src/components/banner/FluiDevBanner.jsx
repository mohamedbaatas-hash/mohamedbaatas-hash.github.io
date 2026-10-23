import React, { useState, useEffect } from 'react';

function Icon({ name, size = 20 }) {
  const paths = {
    check: <path d="m5 12 4 4L19 6" />,
    chart: (
      <>
        <path d="M4 19V9m6 10V5m6 14v-7m4 7H2" />
        <path d="m3 7 6-4 6 5 6-4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-13-4 16" />,
    github: (
      <path
        d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z"
        fill="currentColor"
        stroke="none"
      />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2c-3.6-1.5-5.5-3.4-7-7l2-2-2-5Z" />
    ),
    research: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m14.5 14.5 6 6M8 8h4M8 11h3" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

function WaveMark() {
  return (
    <svg aria-hidden="true" className="wave-mark" fill="none" viewBox="0 0 95 38">
      <path d="M2 11c8-10 15 10 23 0s15 10 23 0 15 10 23 0 14 9 22 0" />
      <path d="M2 26c8-10 15 10 23 0s15 10 23 0 15 10 23 0 14 9 22 0" />
    </svg>
  );
}

function ContactBar({ icon, text, href }) {
  const content = (
    <div className="contact-bar hover:opacity-90 transition-opacity">
      <span className="contact-icon">
        <Icon name={icon} size={15} />
      </span>
      <span>{text}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="no-underline text-inherit block">
        {content}
      </a>
    );
  }
  return content;
}

function BottomFlowSystem() {
  const wavePath =
    'M0 14C65 0 135 28 200 14S335 0 400 14S535 28 600 14S735 0 800 14S935 28 1000 14S1135 0 1200 14';

  return (
    <svg
      aria-hidden="true"
      className="bottom-flow-system"
      preserveAspectRatio="none"
      viewBox="0 0 1200 60"
    >
      <path d={`${wavePath}V60H0Z`} fill="#f7b500" />
      <path
        d={wavePath}
        fill="none"
        stroke="#001db5"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <path
        d={wavePath}
        fill="none"
        stroke="#00e5ff"
        strokeDasharray="18 12"
        strokeLinecap="round"
        strokeWidth="2"
      />

      <g transform="translate(400 14)">
        <circle fill="#f7b500" r="13" stroke="#001db5" strokeWidth="4" />
        <circle fill="#00e5ff" r="6" stroke="white" strokeWidth="2" />
        <path d="M-19 0H19M0-19V19" fill="none" stroke="#001db5" strokeWidth="3" />
        <circle cx="-9" cy="-9" fill="white" r="1.7" />
        <circle cx="9" cy="-9" fill="white" r="1.7" />
        <circle cx="-9" cy="9" fill="white" r="1.7" />
        <circle cx="9" cy="9" fill="white" r="1.7" />
      </g>

      <g transform="translate(800 14)">
        <circle fill="#f7b500" r="13" stroke="#001db5" strokeWidth="4" />
        <circle fill="#00e5ff" r="6" stroke="white" strokeWidth="2" />
        <path d="M-19 0H19M0-19V19" fill="none" stroke="#001db5" strokeWidth="3" />
        <circle cx="-9" cy="-9" fill="white" r="1.7" />
        <circle cx="9" cy="-9" fill="white" r="1.7" />
        <circle cx="-9" cy="9" fill="white" r="1.7" />
        <circle cx="9" cy="9" fill="white" r="1.7" />
      </g>

      <g fill="#001db5" stroke="white" strokeWidth="1.5">
        <circle cx="200" cy="14" r="4" />
        <circle cx="600" cy="14" r="4" />
        <circle cx="1000" cy="14" r="4" />
      </g>
    </svg>
  );
}

function LeftPanel() {
  const promises = [
    {
      icon: 'research',
      title: 'دقة أكاديمية وضبط المراجع',
      body: 'تنسيق صارم وفق دليل الجامعة ومعايير APA / IEEE',
    },
    {
      icon: 'chart',
      title: 'إخراج بصري يبرز مجهودك',
      body: 'عروض احترافية ومخططات دقيقة تبهر لجنة المناقشة',
    },
    {
      icon: 'clock',
      title: 'التزام ومتابعة مستمرة',
      body: 'تسليم في الموعد مع تعديلات حتى يوم المناقشة',
    },
  ];

  return (
    <section className="panel left-panel" aria-label="الضمانات والتواصل">
      <div className="binder" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="left-content">
        <div className="section-kicker">WHAT TO EXPECT</div>
        <div className="arabic-heading">معايير عمل تضمن الجودة</div>
        <p className="section-intro">
          دقة في التنفيذ، إخراج احترافي، ومتابعة مستمرة من الفكرة إلى التسليم.
        </p>
        <div className="promise-list">
          {promises.map((promise, index) => (
            <div className="promise" key={promise.title}>
              <div className="promise-icon">
                <Icon name={promise.icon} size={21} />
              </div>
              <div>
                <strong>{promise.title}</strong>
                <p>{promise.body}</p>
              </div>
              <span className="promise-number">0{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="availability">
          <div>
            <span>AVAILABILITY &amp; ORDERS</span>
            <strong>متاح لكل الولايات وعن بُعد</strong>
          </div>
          <span className="mini-rule" />
          <div>
            <span>FREE CONSULTATION</span>
            <strong>ناقش تفاصيل مشروعك عبر الخاص</strong>
          </div>
        </div>
        <a href="#contact" className="start-cta no-underline block hover:scale-[1.02] transition-transform">
          <span>READY TO START?</span>
          <strong>ابدأ مشروعك اليوم</strong>
          <span className="arrow">←</span>
        </a>
      </div>
      <ContactBar icon="phone" text="+213 655 74 85 13" href="tel:+213655748513" />
    </section>
  );
}

function MiddlePanel() {
  const services = [
    ['01', 'المذكرات والبحوث', 'صياغة، تنسيق، تدقيق وضبط المراجع', '#academic-hub'],
    ['02', 'عروض المناقشة', 'PowerPoint، Infographics ومخططات', '#academic-hub'],
    ['03', 'تطوير البرامج والتطبيقات', 'تطبيقات سطح المكتب والويب • أنظمة وأتمتة مخصصة', '#selected-works'],
  ];

  return (
    <section className="panel middle-panel" aria-label="الخدمات الأساسية">
      <div className="paperclip" aria-hidden="true" />
      <div className="traffic-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="middle-content">
        <span
          className="brand-eyebrow"
          style={{ background: '#001db5', color: '#ffffff' }}
        >
          FLUIDEV / ACADEMIC &amp; DIGITAL
        </span>
        <div className="hero-title">
          خدمات برمجية
          <br />
          <span>وأكاديمية</span>
        </div>
        <div className="english-title">TURNING IDEAS INTO REALITY</div>
        <a href="#academic-hub" className="tape no-underline block hover:brightness-105 transition-all cursor-pointer">
          مذكرات تخرج • عروض احترافية • حلول برمجية ذكية
        </a>
        <div className="service-list">
          {services.map(([number, title, body, href]) => (
            <a href={href} className="service no-underline block group hover:bg-blue-50/50 p-1.5 rounded transition-colors" key={number}>
              <span className="service-number group-hover:scale-105 transition-transform">{number}</span>
              <div>
                <strong className="group-hover:text-fluid-blue transition-colors">{title}</strong>
                <p>{body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <ContactBar icon="github" text="mohamedbaatas-hash.github.io" href="https://github.com/mohamedbaatas-hash" />
    </section>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="portrait-placeholder" aria-label="موضع الصورة الشخصية">
      <div className="placeholder-head" />
      <div className="placeholder-body" />
      <span>MB</span>
    </div>
  );
}

function RightPanel({ portrait }) {
  const isDefaultPortrait = portrait === '/assets/mohamed-portrait.png';

  return (
    <section className="panel right-panel" aria-label="الهوية والشخصية">
      <div className="blueprint-lines" aria-hidden="true" />
      <div className="identity-grid" aria-hidden="true" />
      <div className="identity-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="identity-number" aria-hidden="true">
        01
      </div>
      <WaveMark />
      <div className="brand-pill">
        <span className="brand-symbol">F</span>
        <span>
          <strong>FluiDev</strong>
          <small>FLUID DEVELOPER</small>
        </span>
      </div>
      <div className="persona-copy">
        <span>ENGINEERING</span>
        <strong>
          SMART
          <br />
          SOLUTIONS.
        </strong>
        <small>نحوّل الأفكار إلى حلول رقمية تعمل</small>
      </div>
      <div className="identity-services">
        <span>APP DEVELOPMENT</span>
        <span>ACADEMIC SUPPORT</span>
        <span>DATA &amp; AUTOMATION</span>
      </div>
      <div className="portrait-wrap">
        {portrait ? (
          <img
            alt="محمد بعتاس"
            className={isDefaultPortrait ? 'default-portrait' : undefined}
            src={portrait}
          />
        ) : (
          <PortraitPlaceholder />
        )}
      </div>
      <div className="name-stack">
        <div>Mohamed | FluiDev</div>
        <span>مهندس مياه وبرمجيات</span>
        <span>خدمات أكاديمية ورقمية</span>
      </div>
      <div className="vertical-label">HYDROINFORMATICS / SOFTWARE</div>
      <ContactBar icon="mail" text="mohamedbaatas@gmail.com" href="mailto:mohamedbaatas@gmail.com" />
    </section>
  );
}

export function FluiDevBanner() {
  const [portrait, setPortrait] = useState('/assets/mohamed-portrait.png');

  useEffect(() => {
    // Process image to remove light background and crop cleanly
    const image = new Image();
    image.src = '/assets/mohamed-portrait.png';
    image.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (!context) return;

        context.drawImage(image, 0, 0);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const { data } = imageData;
        const width = canvas.width;
        const height = canvas.height;
        const visited = new Uint8Array(width * height);
        const queue = new Int32Array(width * height);
        let head = 0;
        let tail = 0;

        const isBackground = (pixel) => {
          const offset = pixel * 4;
          return (
            data[offset] > 215 &&
            data[offset + 1] > 215 &&
            data[offset + 2] > 215
          );
        };

        const enqueue = (pixel) => {
          if (visited[pixel] || !isBackground(pixel)) return;
          visited[pixel] = 1;
          queue[tail++] = pixel;
        };

        for (let x = 0; x < width; x += 1) {
          enqueue(x);
          enqueue((height - 1) * width + x);
        }
        for (let y = 0; y < height; y += 1) {
          enqueue(y * width);
          enqueue(y * width + width - 1);
        }

        while (head < tail) {
          const pixel = queue[head++];
          const x = pixel % width;
          const y = Math.floor(pixel / width);
          data[pixel * 4 + 3] = 0;
          if (x > 0) enqueue(pixel - 1);
          if (x + 1 < width) enqueue(pixel + 1);
          if (y > 0) enqueue(pixel - width);
          if (y + 1 < height) enqueue(pixel + width);
        }

        context.putImageData(imageData, 0, 0);
        let minX = width;
        let minY = height;
        let maxX = 0;
        let maxY = 0;
        for (let pixel = 0; pixel < width * height; pixel += 1) {
          if (data[pixel * 4 + 3] === 0) continue;
          const x = pixel % width;
          const y = Math.floor(pixel / width);
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }

        const padding = 10;
        const cropX = Math.max(0, minX - padding);
        const cropY = Math.max(0, minY - padding);
        const cropWidth = Math.min(width - cropX, maxX - minX + padding * 2);
        const cropHeight = Math.min(height - cropY, maxY - minY + padding * 2);
        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = cropWidth;
        croppedCanvas.height = cropHeight;
        croppedCanvas
          .getContext('2d')
          ?.drawImage(
            canvas,
            cropX,
            cropY,
            cropWidth,
            cropHeight,
            0,
            0,
            cropWidth,
            cropHeight
          );

        croppedCanvas.toBlob((blob) => {
          if (blob) {
            setPortrait(URL.createObjectURL(blob));
          }
        }, 'image/png');
      } catch (err) {
        // Fallback to raw path if canvas operations fail
        setPortrait('/assets/mohamed-portrait.png');
      }
    };
  }, []);

  return (
    <div className="preview-frame rounded-2xl shadow-2xl border border-blue-500/30 overflow-hidden relative">
      <div className="banner">
        <LeftPanel />
        <MiddlePanel />
        <RightPanel portrait={portrait} />

        <div className="blue-crossover" aria-hidden="true" />
        <div className="paper-crossover" aria-hidden="true" />
        <div className="shared-wordmark" aria-hidden="true">
          <span>FLUI</span>
          <strong>DEV</strong>
        </div>

        <svg
          aria-hidden="true"
          className="hydraulic-network"
          preserveAspectRatio="none"
          viewBox="0 0 1200 500"
        >
          <defs>
            <linearGradient
              id="banner-pipe-gradient"
              x1="40"
              x2="1160"
              y1="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#001db5" />
              <stop offset="0.62" stopColor="#005bff" />
              <stop offset="1" stopColor="#00e5ff" />
            </linearGradient>
          </defs>
          <path
            className="pipe-shadow"
            d="M48 410H168V370H274V414H389V350H504V402H622V328H744V392H846V333H947V270H1055V334H1160"
            fill="none"
            opacity="1"
            stroke="rgba(7, 19, 63, 0.12)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="14"
          />
          <path
            className="pipe-main"
            d="M48 410H168V370H274V414H389V350H504V402H622V328H744V392H846V333H947V270H1055V334H1160"
            fill="none"
            opacity="0.34"
            stroke="url(#banner-pipe-gradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="9"
          />
          <path
            className="pipe-highlight"
            d="M48 407H168V367H274M389 347H504V399H622M744 389H846V330H947M1055 331H1160"
            fill="none"
            opacity="0.7"
            stroke="rgba(255, 255, 255, 0.78)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            className="pipe-branch"
            d="M274 414V318H340V285M504 402V445M622 328V252H691M846 333V245H790V204M1055 334V215H1114V174"
            fill="none"
            opacity="0.2"
            stroke="#005bff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <g className="pipe-fitting" fill="#f8f9fa" opacity="0.6" stroke="#001db5" strokeWidth="3" transform="translate(168 370)">
            <circle r="12" />
            <circle r="5" />
            <path d="M-17 0H17M0-17V17" fill="none" />
          </g>
          <g className="pipe-fitting" fill="#f8f9fa" opacity="0.6" stroke="#001db5" strokeWidth="3" transform="translate(389 350)">
            <circle r="12" />
            <circle r="5" />
            <path d="M-17 0H17M0-17V17" fill="none" />
          </g>
          <g className="pipe-fitting" fill="#f8f9fa" opacity="0.6" stroke="#001db5" strokeWidth="3" transform="translate(622 328)">
            <circle r="12" />
            <circle r="5" />
            <path d="M-17 0H17M0-17V17" fill="none" />
          </g>
          <g className="pipe-fitting cyan" fill="#001db5" opacity="0.6" stroke="#00e5ff" strokeWidth="3" transform="translate(846 333)">
            <circle r="12" />
            <circle r="5" />
            <path d="M-17 0H17M0-17V17" fill="none" />
          </g>
          <g className="pipe-fitting cyan" fill="#001db5" opacity="0.6" stroke="#00e5ff" strokeWidth="3" transform="translate(1055 334)">
            <circle r="12" />
            <circle r="5" />
            <path d="M-17 0H17M0-17V17" fill="none" />
          </g>
          <g className="valve" fill="#f8f9fa" opacity="0.7" stroke="#001db5" strokeLinejoin="round" strokeWidth="3" transform="translate(744 392)">
            <path d="M-14-10 0 0l-14 10Zm28 0L0 0l14 10Z" />
            <path d="M0-18V0M-8-18H8" fill="none" />
          </g>
          <g className="valve cyan" fill="#001db5" opacity="0.7" stroke="#00e5ff" strokeLinejoin="round" strokeWidth="3" transform="translate(947 270)">
            <path d="M-14-10 0 0l-14 10Zm28 0L0 0l14 10Z" />
            <path d="M0-18V0M-8-18H8" fill="none" />
          </g>
          <path className="circuit-trace" d="M76 80h82l22 22h91l19-19h84m-298 34h54l18 18h68" fill="none" opacity="0.2" stroke="#001db5" strokeWidth="2" />
          <path className="circuit-trace right" d="M822 82h74l18 18h73l23-23h107m-295 55h48l22 22h83" fill="none" opacity="0.42" stroke="#00e5ff" strokeWidth="2" />
          <g className="circuit-nodes" fill="#f7b500" opacity="0.88" stroke="#001db5" strokeWidth="2">
            <circle cx="76" cy="80" r="5" />
            <circle cx="271" cy="102" r="5" />
            <circle cx="374" cy="83" r="5" />
            <circle cx="822" cy="82" r="5" />
            <circle cx="987" cy="100" r="5" />
            <circle cx="1117" cy="77" r="5" />
          </g>
          <text className="binary-code" fill="#001db5" fontFamily="Barlow Condensed" fontSize="11" fontWeight="800" opacity="0.28" x="83" y="105">01 001 1010</text>
          <text className="binary-code" fill="#001db5" fontFamily="Barlow Condensed" fontSize="11" fontWeight="800" opacity="0.28" x="515" y="443">0101 / FLOW.DATA</text>
          <text className="binary-code light" fill="#00e5ff" fontFamily="Barlow Condensed" fontSize="11" fontWeight="800" opacity="0.65" x="870" y="184">01 · 10 · 11</text>
        </svg>

        <svg
          aria-hidden="true"
          className="fluid-connector"
          preserveAspectRatio="none"
          viewBox="0 0 1200 500"
        >
          <defs>
            <filter id="banner-connector-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur result="blur" stdDeviation="3" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            className="connector-shadow"
            d="M1165 106C1050 84 984 149 901 155C795 163 757 104 671 129C568 159 608 260 492 274C376 288 303 234 218 276C153 308 113 333 42 314"
            fill="none"
            stroke="rgba(0, 29, 181, 0.2)"
            strokeWidth="8"
          />
          <path
            className="connector-main"
            d="M1165 106C1050 84 984 149 901 155C795 163 757 104 671 129C568 159 608 260 492 274C376 288 303 234 218 276C153 308 113 333 42 314"
            fill="none"
            stroke="#00e5ff"
            strokeWidth="3"
          />
          <path
            className="connector-dash"
            d="M1145 122C1037 104 978 165 896 171C782 179 747 124 669 149C581 177 614 277 493 291C369 306 301 252 219 294C158 325 115 350 57 333"
            fill="none"
            stroke="rgba(255, 255, 255, 0.82)"
            strokeDasharray="8 11"
            strokeWidth="1.5"
          />
          <circle cx="904" cy="155" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
          <circle cx="671" cy="129" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
          <circle cx="492" cy="274" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
          <circle cx="218" cy="276" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
        </svg>

        <div className="seam-stitch seam-stitch-center" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <BottomFlowSystem />
        <div className="cut-line cut-one" aria-hidden="true" />
        <div className="cut-line cut-two" aria-hidden="true" />
      </div>
    </div>
  );
}
