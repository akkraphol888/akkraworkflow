import { useState } from 'react'
import {
  ArrowUpRight, ArrowRight, ShieldCheck, Workflow, FileText, Boxes,
  Menu, X, Globe2, CheckCircle2, Mail, Github, Linkedin, ChevronDown,
  Zap, LockKeyhole, Code2, ClipboardCheck, Sparkles
} from 'lucide-react'

const copy = {
  en: {
    nav: ['Services', 'Products', 'About', 'Contact'],
    eyebrow: 'INDEPENDENT DIGITAL SOLUTIONS STUDIO',
    headlineA: 'Automate the work.',
    headlineB: 'Secure the flow.',
    intro: 'Practical workflow automation and cybersecurity operations support for teams that want to work smarter, safer, and with less friction.',
    primary: 'Explore services',
    secondary: 'Let’s talk',
    proof: ['Practical by design', 'Security-minded', 'Built to scale'],
    sectionLabel: 'WHAT WE DO',
    servicesTitle: 'Make everyday work',
    servicesAccent: 'work better.',
    servicesIntro: 'Small, focused solutions that remove repetitive effort and bring clarity to your digital operations.',
    services: [
      ['Workflow Automation', 'Turn repetitive tasks into dependable workflows using Google Apps Script, Sheets, Gmail, and lightweight integrations.', 'Apps Script · Sheets · Gmail'],
      ['IT & Security Documentation', 'Clear, useful SOPs, troubleshooting guides, checklists, and operational documentation your team can actually follow.', 'SOP · Playbooks · Guides'],
      ['Security Operations Support', 'Organize day-to-day security work with incident tracking, alert reporting, and EDR operational templates.', 'EDR · Incident tracking · Reporting'],
      ['Digital Tools & Templates', 'Ready-to-use resources designed to improve productivity, consistency, and security awareness.', 'Templates · Toolkits · Resources']
    ],
    productsLabel: 'FIRST RELEASE',
    productTitle: 'Tools that give your team',
    productAccent: 'time back.',
    productName: 'Smart Workflow Tracker',
    productDesc: 'A practical Google Sheets-based task tracker concept with due-date reminders, clear ownership, and a simple status dashboard.',
    productFeatures: ['Task and owner tracking', 'Due-date reminder workflow', 'Status overview dashboard', 'Setup guide included'],
    productCta: 'Register interest',
    aboutLabel: 'OUR APPROACH',
    aboutTitle: 'Useful first. Secure always.',
    aboutText: 'akkraworkflow is an independent studio exploring the intersection of workflow automation and practical cybersecurity. We believe good technology should be understandable, maintainable, and designed around real work — not complexity for its own sake.',
    values: [['Practical', 'Solve the actual problem, not the imagined one.'], ['Transparent', 'Clear scope, honest capabilities, and no inflated promises.'], ['Security-minded', 'Consider access, privacy, and safe defaults from the start.']],
    contactLabel: 'HAVE A WORKFLOW IN MIND?',
    contactTitle: 'Let’s make work flow.',
    contactText: 'Tell us what takes too much time, feels too manual, or needs clearer documentation. We’ll start with the problem and find a practical next step.',
    contactCta: 'Email akkraworkflow',
    footer: 'Independent studio · Thailand · Working worldwide',
    note: 'Services and products are currently in an early launch phase. Contact us to discuss scope and availability.',
    menu: 'Open menu'
  },
  th: {
    nav: ['บริการ', 'สินค้า', 'เกี่ยวกับเรา', 'ติดต่อ'],
    eyebrow: 'สตูดิโอดิจิทัลโซลูชันอิสระ',
    headlineA: 'ให้งานเดินอัตโนมัติ',
    headlineB: 'ให้ทุกขั้นตอนปลอดภัย',
    intro: 'ช่วยจัดระบบงานด้วย Workflow Automation และสนับสนุนงาน Cybersecurity ในรูปแบบที่ใช้งานได้จริง ลดงานซ้ำซ้อน และทำให้ทีมทำงานได้คล่องตัวขึ้น',
    primary: 'ดูบริการของเรา',
    secondary: 'พูดคุยกับเรา',
    proof: ['เน้นใช้งานได้จริง', 'คำนึงถึงความปลอดภัย', 'ต่อยอดได้'],
    sectionLabel: 'เราทำอะไร',
    servicesTitle: 'ทำให้งานประจำวัน',
    servicesAccent: 'มีประสิทธิภาพกว่าเดิม',
    servicesIntro: 'โซลูชันขนาดเล็กที่ตรงจุด ช่วยลดงานซ้ำและทำให้การทำงานดิจิทัลเป็นระบบมากขึ้น',
    services: [
      ['Workflow Automation', 'เปลี่ยนงานซ้ำ ๆ ให้เป็นขั้นตอนอัตโนมัติด้วย Google Apps Script, Sheets, Gmail และการเชื่อมต่อระบบขนาดเล็ก', 'Apps Script · Sheets · Gmail'],
      ['เอกสาร IT และ Security', 'จัดทำ SOP, คู่มือแก้ไขปัญหา, Checklist และเอกสารปฏิบัติงานที่ทีมสามารถนำไปใช้ได้จริง', 'SOP · Playbooks · Guides'],
      ['สนับสนุนงาน Security Operations', 'ช่วยจัดระบบงาน Security ประจำวัน เช่น การติดตาม Incident, การรายงาน Alert และ Template สำหรับงาน EDR', 'EDR · Incident tracking · Reporting'],
      ['เครื่องมือและเทมเพลตดิจิทัล', 'ทรัพยากรพร้อมใช้ที่ช่วยเพิ่ม Productivity ความสม่ำเสมอในการทำงาน และความตระหนักด้านความปลอดภัย', 'Templates · Toolkits · Resources']
    ],
    productsLabel: 'สินค้าแนะนำรุ่นแรก',
    productTitle: 'เครื่องมือที่ช่วยคืนเวลา',
    productAccent: 'ให้ทีมของคุณ',
    productName: 'Smart Workflow Tracker',
    productDesc: 'แนวคิดระบบติดตามงานบน Google Sheets พร้อมกำหนดผู้รับผิดชอบ แจ้งเตือนวันครบกำหนด และ Dashboard แสดงสถานะที่เข้าใจง่าย',
    productFeatures: ['ติดตามงานและผู้รับผิดชอบ', 'Workflow แจ้งเตือนวันครบกำหนด', 'Dashboard ดูสถานะงาน', 'มีคู่มือเริ่มต้นใช้งาน'],
    productCta: 'สนใจสินค้านี้',
    aboutLabel: 'แนวทางของเรา',
    aboutTitle: 'ใช้งานได้จริง และคำนึงถึงความปลอดภัยเสมอ',
    aboutText: 'akkraworkflow เป็นสตูดิโออิสระที่สนใจการผสาน Workflow Automation เข้ากับงาน Cybersecurity เราเชื่อว่าเทคโนโลยีที่ดีควรเข้าใจง่าย ดูแลต่อได้ และออกแบบจากปัญหาการทำงานจริง ไม่ใช่เพิ่มความซับซ้อนโดยไม่จำเป็น',
    values: [['ใช้งานได้จริง', 'แก้ปัญหาที่เกิดขึ้นจริง ไม่สร้างความซับซ้อนเกินจำเป็น'], ['โปร่งใส', 'ขอบเขตงานชัดเจน สื่อสารตรงไปตรงมา และไม่กล่าวอ้างเกินความสามารถ'], ['คำนึงถึงความปลอดภัย', 'ใส่ใจสิทธิ์การเข้าถึง ความเป็นส่วนตัว และค่าเริ่มต้นที่ปลอดภัยตั้งแต่ต้น']],
    contactLabel: 'มี Workflow ที่อยากปรับปรุงไหม?',
    contactTitle: 'มาทำให้งานไหลลื่นขึ้นด้วยกัน',
    contactText: 'เล่าให้เราฟังว่างานส่วนไหนใช้เวลามากเกินไป ยังต้องทำด้วยมือ หรือเอกสารส่วนไหนที่ควรจัดระบบ เราจะเริ่มจากการเข้าใจปัญหาและหาแนวทางที่เหมาะสม',
    contactCta: 'ส่งอีเมลหา akkraworkflow',
    footer: 'สตูดิโออิสระ · ประเทศไทย · ให้บริการลูกค้าทั่วโลก',
    note: 'บริการและสินค้าอยู่ในช่วงเริ่มต้นเปิดตัว กรุณาติดต่อเพื่อพูดคุยขอบเขตงานและคิวให้บริการ',
    menu: 'เปิดเมนู'
  }
}

const serviceIcons = [Workflow, FileText, ShieldCheck, Boxes]
const valueIcons = [Zap, ClipboardCheck, LockKeyhole]

function BrandMark() {
  return <div className="brand-mark" aria-hidden="true">
    <svg viewBox="0 0 44 44" fill="none">
      <path d="M22 3.5 38 9.5v12.2c0 10.2-6.1 16.7-16 20.2C12.1 38.4 6 31.9 6 21.7V9.5L22 3.5Z" stroke="url(#markGradient)" strokeWidth="2.8" strokeLinejoin="round"/>
      <path d="m13 19 8-5 10 3M14 25l9 7 8-9" stroke="url(#markGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="13" cy="19" r="2.7" fill="#18E2C0"/><circle cx="21" cy="14" r="2.7" fill="#18E2C0"/><circle cx="31" cy="17" r="2.7" fill="#378BFF"/><circle cx="23" cy="32" r="2.7" fill="#378BFF"/>
      <defs><linearGradient id="markGradient" x1="6" y1="4" x2="39" y2="40"><stop stopColor="#20E6C5"/><stop offset="1" stopColor="#3985FF"/></linearGradient></defs>
    </svg>
  </div>
}

function App() {
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[lang]
  const email = 'hello@akkraworkflow.com' // Replace with your real business email before launch.
  const navIds = ['services', 'products', 'about', 'contact']

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="topbar">
      <a className="brand" href="#home" aria-label="akkraworkflow home">
        <BrandMark /><span>akkra<span className="brand-light">workflow</span></span>
      </a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {t.nav.map((label, i) => <button key={navIds[i]} onClick={() => scrollTo(navIds[i])}>{label}</button>)}
      </nav>
      <div className="header-actions">
        <button className="lang-switch" onClick={() => setLang(lang === 'en' ? 'th' : 'en')} aria-label="Switch language">
          <Globe2 size={15}/><span>{lang === 'en' ? 'TH' : 'EN'}</span>
        </button>
        <button className="header-cta" onClick={() => scrollTo('contact')}>{t.secondary}<ArrowUpRight size={15}/></button>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main id="home">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/>{t.eyebrow}</div>
          <h1>{t.headlineA}<br/><span>{t.headlineB}</span></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('services')}>{t.primary}<ArrowRight size={17}/></button>
            <button className="btn-ghost" onClick={() => scrollTo('contact')}>{t.secondary}<ArrowUpRight size={16}/></button>
          </div>
          <div className="proof-row">{t.proof.map((p, i) => <span key={p}><CheckCircle2 size={15}/>{p}</span>)}</div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
          <div className="visual-grid"/>
          <div className="visual-core"><BrandMark/><div className="core-pulse"/></div>
          <div className="node node-a"><Workflow size={17}/><span>Workflow</span></div>
          <div className="node node-b"><ShieldCheck size={17}/><span>Security</span></div>
          <div className="node node-c"><Zap size={17}/><span>Automation</span></div>
          <div className="visual-caption"><span className="live-dot"/>SYSTEMS IN FLOW <b>01 / 04</b></div>
        </div>
        <div className="hero-bottom"><span>01 — AUTOMATION</span><span>02 — SECURITY</span><span>03 — PRACTICAL SOLUTIONS</span></div>
      </section>

      <section className="services section-wrap" id="services">
        <div className="section-heading">
          <div><div className="eyebrow"><span className="eyebrow-line"/>{t.sectionLabel}</div><h2>{t.servicesTitle}<br/><span>{t.servicesAccent}</span></h2></div>
          <p>{t.servicesIntro}</p>
        </div>
        <div className="service-grid">
          {t.services.map((service, i) => {
            const Icon = serviceIcons[i]
            return <article className="service-card" key={service[0]}>
              <div className="card-top"><span className="service-icon"><Icon size={21}/></span><span className="card-index">0{i+1}</span></div>
              <h3>{service[0]}</h3><p>{service[1]}</p><div className="card-tags">{service[2]}</div>
              <ArrowUpRight className="card-arrow" size={19}/>
            </article>
          })}
        </div>
      </section>

      <section className="product-section section-wrap" id="products">
        <div className="product-panel">
          <div className="product-copy">
            <div className="eyebrow"><span className="eyebrow-line"/>{t.productsLabel}</div>
            <h2>{t.productTitle}<br/><span>{t.productAccent}</span></h2>
            <div className="product-name">{t.productName}</div>
            <p>{t.productDesc}</p>
            <ul>{t.productFeatures.map(f => <li key={f}><CheckCircle2 size={16}/>{f}</li>)}</ul>
            <a className="btn-primary" href={`mailto:${email}?subject=${encodeURIComponent('Smart Workflow Tracker - Interest')}`}>{t.productCta}<ArrowUpRight size={16}/></a>
            <small className="availability">{t.note}</small>
          </div>
          <div className="dashboard-art">
            <div className="dash-window">
              <div className="dash-top"><span className="dash-dots"><i/><i/><i/></span><span>akkraworkflow / workspace</span><span className="dash-status">● LIVE PREVIEW</span></div>
              <div className="dash-body">
                <aside className="dash-side"><BrandMark/><b>Workspace</b><span className="active">Overview</span><span>My tasks</span><span>Reports</span><span>Settings</span></aside>
                <div className="dash-main">
                  <div className="dash-welcome"><span>Good morning, team</span><small>YOUR WORKFLOW AT A GLANCE</small></div>
                  <div className="dash-stats"><div><small>OPEN TASKS</small><b>24</b><em>+4 this week</em></div><div><small>COMPLETED</small><b>86%</b><em>On track</em></div><div><small>UPCOMING</small><b>07</b><em>Next 7 days</em></div></div>
                  <div className="dash-chart"><div className="chart-title">Weekly activity <span>Last 7 days</span></div><div className="chart-bars">{[38,62,48,78,55,91,69].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></div>
                  <div className="dash-task"><span><i/> Review access checklist</span><b>Today</b></div>
                  <div className="dash-task"><span><i/> Prepare monthly report</span><b>Tomorrow</b></div>
                </div>
              </div>
            </div>
            <div className="floating-chip"><ShieldCheck size={16}/> Designed with security in mind</div>
          </div>
        </div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="about-visual"><div className="about-ring ring-one"/><div className="about-ring ring-two"/><div className="about-center"><BrandMark/><span>AKKRA<br/>WORKFLOW</span></div><div className="about-coord">13°45' N<br/>100°30' E</div></div>
        <div className="about-copy">
          <div className="eyebrow"><span className="eyebrow-line"/>{t.aboutLabel}</div>
          <h2>{t.aboutTitle}</h2><p>{t.aboutText}</p>
          <div className="value-list">{t.values.map((v,i)=>{const Icon=valueIcons[i];return <div className="value-item" key={v[0]}><span><Icon size={18}/></span><div><b>{v[0]}</b><small>{v[1]}</small></div></div>})}</div>
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-panel">
          <div className="contact-glow"/>
          <div className="eyebrow"><span className="eyebrow-line"/>{t.contactLabel}</div>
          <h2>{t.contactTitle}</h2><p>{t.contactText}</p>
          <a className="btn-primary" href={`mailto:${email}?subject=${encodeURIComponent('Project inquiry — akkraworkflow')}`}><Mail size={17}/>{t.contactCta}<ArrowUpRight size={16}/></a>
          <div className="contact-meta"><span><span className="live-dot"/> OPEN FOR SELECT PROJECTS</span><span>THAILAND / WORLDWIDE</span></div>
        </div>
      </section>
    </main>

    <footer className="footer section-wrap">
      <a className="brand" href="#home"><BrandMark/><span>akkra<span className="brand-light">workflow</span></span></a>
      <p>{t.footer}</p>
      <div className="footer-right"><span>© {new Date().getFullYear()} akkraworkflow</span><a href={`mailto:${email}`}><Mail size={16}/></a></div>
    </footer>
  </div>
}

export default App
