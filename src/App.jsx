import { useState } from 'react'
import {
  ArrowUpRight, ArrowRight, Workflow, Menu, X, Globe2, CheckCircle2,
  Mail, Zap, ClipboardCheck, LockKeyhole, Clock3, FileSpreadsheet,
  BellRing, LayoutDashboard, Check, Sparkles, Send, BadgeCheck
} from 'lucide-react'

const content = {
  en: {
    nav: ['Services', 'Demo work', 'Product', 'About', 'Request a quote'],
    eyebrow: 'GOOGLE WORKSPACE AUTOMATION STUDIO',
    headlineA: 'Less manual work.', headlineB: 'More room to grow.',
    intro: 'We build practical workflow systems with Google Sheets and Apps Script — helping small teams organize tasks, reduce repetitive admin, and stay on top of important work.',
    primary: 'Explore what we do', secondary: 'Request a quote',
    proof: ['Google Sheets first', 'Clear scope', 'Built around your workflow'],
    servicesLabel: 'CURRENTLY AVAILABLE', servicesTitle: 'One clear focus.', servicesAccent: 'Workflows that work.',
    servicesIntro: 'At launch, akkraworkflow is focused on custom workflow automation using Google Sheets, Google Apps Script, and Gmail. No unrelated services are being offered yet.',
    services: [
      { icon: FileSpreadsheet, title: 'Google Sheets workflow systems', desc: 'Turn spreadsheets into practical workspaces for tracking requests, tasks, deadlines, owners, and progress.', tags: 'Google Sheets · Data validation · Dashboards' },
      { icon: BellRing, title: 'Email notifications & reminders', desc: 'Send useful Gmail alerts when tasks are assigned, due dates are approaching, or a status needs attention.', tags: 'Google Apps Script · Gmail · Triggers' },
      { icon: LayoutDashboard, title: 'Simple dashboards & reports', desc: 'Give your team a clear view of workload, overdue items, completion status, and recurring activity.', tags: 'Summary views · Charts · Reports' },
      { icon: Workflow, title: 'Workflow setup & improvement', desc: 'Map an existing manual process, simplify the steps, and automate the parts that make sense.', tags: 'Process mapping · Setup · Handover' }
    ],
    scopeLabel: 'WHAT A TYPICAL PROJECT CAN INCLUDE', scopeTitle: 'A practical delivery,', scopeAccent: 'not a black box.',
    scope: ['A short discovery call to understand the current process', 'A scoped Google Sheets solution with agreed features', 'Apps Script automation and Gmail notifications where needed', 'Basic testing, handover notes, and a walkthrough'],
    notIncluded: 'Not included by default: paid Google Workspace licenses, third-party subscription fees, complex external API integrations, or ongoing support plans. These can be discussed separately if relevant.',
    portfolioLabel: 'ILLUSTRATIVE DEMOS', portfolioTitle: 'Examples of what', portfolioAccent: 'we can build.',
    demoTag: 'DEMO CONCEPT · NOT A CLIENT PROJECT',
    demos: [
      { no: '01', title: 'Smart Workflow Tracker', desc: 'A shared task register with owner, priority, due date, status, and an at-a-glance progress summary.', points: ['Task ownership', 'Due-date visibility', 'Status dashboard'] },
      { no: '02', title: 'Request & Approval Log', desc: 'A lightweight request intake sheet that records submissions, tracks review status, and notifies the right person.', points: ['Request capture', 'Approval stages', 'Email updates'] },
      { no: '03', title: 'Weekly Operations Report', desc: 'A recurring summary that turns spreadsheet activity into a clean weekly email for the team.', points: ['Weekly summary', 'Overdue highlights', 'Less manual reporting'] }
    ],
    productLabel: 'FIRST PRODUCT CONCEPT', productTitle: 'Start with a simple system.', productName: 'Smart Workflow Tracker',
    productDesc: 'A Google Sheets-based task tracker concept for small teams that need a shared view of tasks, owners, due dates, and progress.',
    productFeatures: ['Central task register and ownership', 'Priority, status, and due-date tracking', 'Optional Gmail reminder automation', 'Quick-start guide and setup notes'],
    productStatus: 'DEMO CONCEPT · NOT YET FOR SALE', productCta: 'Ask about this workflow',
    comingSoon: 'Other products and cybersecurity-related services are not open yet.',
    aboutLabel: 'HOW WE WORK', aboutTitle: 'Small, useful, transparent.',
    aboutText: 'akkraworkflow is starting with a focused offer: practical Google Sheets workflow automation. We keep the scope understandable, explain what is automated, and hand over a solution your team can maintain.',
    values: [['Practical delivery', 'Start with the process you already use and improve it step by step.'], ['Clear expectations', 'Agree on features, limits, timeline, and handover before work begins.'], ['Careful access', 'Use the minimum Google account permissions needed and keep ownership clear.']],
    contactLabel: 'TELL US WHAT YOU WANT TO IMPROVE', contactTitle: 'Let’s map your workflow.',
    contactText: 'Share a little about the process you want to simplify. This form opens an email draft with your details so you can review it before sending.',
    form: { name: 'Your name', email: 'Your email', type: 'What do you need?', types: ['Task / project tracker', 'Email notifications / reminders', 'Request & approval workflow', 'Dashboard / weekly report', 'Other Google Sheets automation'], problem: 'What is the current problem or manual process?', outcome: 'What would you like the workflow to do?', budget: 'Estimated budget (optional)', submit: 'Prepare quote request email', privacy: 'Your details are placed in an email draft. Nothing is submitted to a database by this website.' },
    contactCta: 'Or email us directly', footer: 'Google Sheets Workflow Automation · Thailand', open: 'OPEN FOR WORKFLOW INQUIRIES',
    menu: 'Open menu', emailSubject: 'Workflow automation inquiry — akkraworkflow'
  },
  th: {
    nav: ['บริการ', 'ผลงานตัวอย่าง', 'สินค้า', 'เกี่ยวกับเรา', 'ขอใบเสนอราคา'],
    eyebrow: 'GOOGLE WORKSPACE AUTOMATION STUDIO',
    headlineA: 'ลดงานที่ต้องทำมือ', headlineB: 'เพิ่มเวลาให้งานสำคัญ',
    intro: 'เราช่วยสร้างระบบ Workflow ด้วย Google Sheets และ Apps Script เพื่อให้ทีมจัดการงาน ติดตามกำหนดส่ง และลดขั้นตอนซ้ำ ๆ ได้ง่ายขึ้น',
    primary: 'ดูบริการที่เปิดรับ', secondary: 'ขอใบเสนอราคา',
    proof: ['เน้น Google Sheets', 'ขอบเขตงานชัดเจน', 'ออกแบบตามวิธีทำงานจริง'],
    servicesLabel: 'บริการที่เปิดรับในตอนนี้', servicesTitle: 'โฟกัสให้ชัด', servicesAccent: 'ทำ Workflow ให้ใช้งานได้จริง',
    servicesIntro: 'ในช่วงเริ่มต้น akkraworkflow รับทำระบบ Workflow Automation ด้วย Google Sheets, Google Apps Script และ Gmail เป็นหลัก ยังไม่เปิดรับบริการด้านอื่น',
    services: [
      { icon: FileSpreadsheet, title: 'ระบบจัดการงานด้วย Google Sheets', desc: 'เปลี่ยน Spreadsheet ให้เป็นพื้นที่ทำงานสำหรับติดตามคำขอ งาน ผู้รับผิดชอบ กำหนดส่ง และความคืบหน้า', tags: 'Google Sheets · Data validation · Dashboard' },
      { icon: BellRing, title: 'ระบบแจ้งเตือนผ่านอีเมล', desc: 'ส่งอีเมลแจ้งเตือนเมื่อมีงานใหม่ ใกล้ถึงกำหนดส่ง หรือมีสถานะที่ต้องติดตาม', tags: 'Google Apps Script · Gmail · Triggers' },
      { icon: LayoutDashboard, title: 'Dashboard และรายงานสรุป', desc: 'ดูภาพรวมปริมาณงาน งานเกินกำหนด สถานะการดำเนินงาน และกิจกรรมที่เกิดขึ้นเป็นประจำ', tags: 'Summary · Charts · Reports' },
      { icon: Workflow, title: 'วิเคราะห์และปรับปรุง Workflow', desc: 'ช่วยไล่ขั้นตอนการทำงานเดิม ลดขั้นตอนที่ไม่จำเป็น และเลือกส่วนที่เหมาะสมมาทำอัตโนมัติ', tags: 'Process mapping · Setup · Handover' }
    ],
    scopeLabel: 'ขอบเขตงานโดยทั่วไป', scopeTitle: 'ส่งมอบเป็นขั้นตอน', scopeAccent: 'ไม่ใช่กล่องดำ',
    scope: ['พูดคุยเพื่อทำความเข้าใจกระบวนการทำงานปัจจุบัน', 'กำหนดขอบเขตและฟีเจอร์ของ Google Sheets ให้ชัดเจน', 'พัฒนา Apps Script และระบบแจ้งเตือน Gmail ตามความจำเป็น', 'ทดสอบเบื้องต้น พร้อมคู่มือและอธิบายวิธีใช้งาน'],
    notIncluded: 'สิ่งที่ไม่รวมในราคาปกติ: ค่าไลเซนส์ Google Workspace, ค่าบริการระบบภายนอก, การเชื่อมต่อ API ที่ซับซ้อน หรือบริการดูแลต่อเนื่อง สามารถพูดคุยแยกเป็นกรณีได้',
    portfolioLabel: 'ตัวอย่างแนวคิด DEMO', portfolioTitle: 'ตัวอย่างระบบที่', portfolioAccent: 'สามารถพัฒนาได้',
    demoTag: 'DEMO จำลอง · ไม่ใช่ผลงานลูกค้าจริง',
    demos: [
      { no: '01', title: 'Smart Workflow Tracker', desc: 'ตารางติดตามงานส่วนกลาง มีผู้รับผิดชอบ ความสำคัญ วันครบกำหนด สถานะ และภาพรวมความคืบหน้า', points: ['กำหนดผู้รับผิดชอบ', 'ติดตามวันครบกำหนด', 'Dashboard สรุปสถานะ'] },
      { no: '02', title: 'Request & Approval Log', desc: 'ฟอร์มรับคำขอและบันทึกลง Sheet เพื่อติดตามขั้นตอนการตรวจสอบ พร้อมแจ้งผู้เกี่ยวข้อง', points: ['บันทึกคำขอ', 'ขั้นตอนอนุมัติ', 'แจ้งเตือนทางอีเมล'] },
      { no: '03', title: 'Weekly Operations Report', desc: 'สรุปกิจกรรมจาก Spreadsheet เป็นรายงานอีเมลประจำสัปดาห์ ลดเวลารวบรวมข้อมูลด้วยมือ', points: ['สรุปรายสัปดาห์', 'เน้นงานเกินกำหนด', 'ลดงานทำรายงาน'] }
    ],
    productLabel: 'แนวคิดสินค้ารุ่นแรก', productTitle: 'เริ่มจากระบบที่เรียบง่าย', productName: 'Smart Workflow Tracker',
    productDesc: 'แนวคิดระบบติดตามงานบน Google Sheets สำหรับทีมขนาดเล็กที่ต้องการเห็นงาน ผู้รับผิดชอบ วันครบกำหนด และความคืบหน้าในที่เดียว',
    productFeatures: ['ตารางงานส่วนกลางและผู้รับผิดชอบ', 'ติดตามความสำคัญ สถานะ และวันครบกำหนด', 'เลือกเพิ่มระบบแจ้งเตือน Gmail ได้', 'คู่มือเริ่มต้นและคำแนะนำการตั้งค่า'],
    productStatus: 'DEMO จำลอง · ยังไม่เปิดจำหน่าย', productCta: 'สอบถามเกี่ยวกับระบบนี้',
    comingSoon: 'สินค้าอื่นและบริการด้าน Cybersecurity ยังไม่เปิดให้บริการในช่วงนี้',
    aboutLabel: 'วิธีการทำงาน', aboutTitle: 'เริ่มเล็ก ใช้ได้จริง และโปร่งใส',
    aboutText: 'akkraworkflow เริ่มต้นด้วยบริการที่โฟกัสชัดเจน คือการทำ Workflow Automation บน Google Sheets เราจะอธิบายขอบเขตให้เข้าใจง่าย บอกให้ชัดว่าส่วนไหนทำงานอัตโนมัติ และส่งมอบระบบที่ทีมสามารถดูแลต่อได้',
    values: [['เน้นใช้งานได้จริง', 'เริ่มจากกระบวนการที่ใช้อยู่ แล้วค่อยปรับปรุงทีละขั้น'], ['ขอบเขตชัดเจน', 'ตกลงฟีเจอร์ ข้อจำกัด ระยะเวลา และการส่งมอบก่อนเริ่มงาน'], ['คำนึงถึงสิทธิ์เข้าถึง', 'ใช้สิทธิ์บัญชี Google เท่าที่จำเป็น และกำหนดเจ้าของระบบให้ชัดเจน']],
    contactLabel: 'เล่าให้เราฟังว่าต้องการปรับปรุงอะไร', contactTitle: 'มาวาง Workflow ไปด้วยกัน',
    contactText: 'กรอกรายละเอียดเบื้องต้น แบบฟอร์มจะเปิดอีเมลฉบับร่างพร้อมข้อมูลที่กรอก เพื่อให้คุณตรวจสอบก่อนส่ง',
    form: { name: 'ชื่อผู้ติดต่อ', email: 'อีเมลสำหรับติดต่อกลับ', type: 'ต้องการระบบประเภทไหน?', types: ['ระบบติดตามงาน / Project Tracker', 'ระบบแจ้งเตือนทางอีเมล', 'ระบบรับคำขอ / อนุมัติ', 'Dashboard / รายงานประจำสัปดาห์', 'ระบบ Automation อื่นบน Google Sheets'], problem: 'ปัจจุบันติดปัญหาอะไร หรือต้องทำงานแบบไหนด้วยมือ?', outcome: 'อยากให้ระบบช่วยทำอะไรได้บ้าง?', budget: 'งบประมาณโดยประมาณ (ไม่บังคับ)', submit: 'เตรียมอีเมลขอใบเสนอราคา', privacy: 'ข้อมูลจะถูกใส่ในอีเมลฉบับร่างเท่านั้น เว็บไซต์นี้ไม่ได้บันทึกข้อมูลลงฐานข้อมูล' },
    contactCta: 'หรือติดต่อทางอีเมลโดยตรง', footer: 'Google Sheets Workflow Automation · ประเทศไทย', open: 'เปิดรับคำถามเกี่ยวกับ Workflow',
    menu: 'เปิดเมนู', emailSubject: 'สอบถามบริการ Workflow Automation — akkraworkflow'
  }
}

const valueIcons = [Zap, ClipboardCheck, LockKeyhole]
const emailAddress = 'hello@akkraworkflow.com' // TODO: Replace with the real inbox before public launch.

function BrandMark() {
  return <div className="brand-mark" aria-hidden="true"><svg viewBox="0 0 44 44" fill="none"><path d="M22 3.5 38 9.5v12.2c0 10.2-6.1 16.7-16 20.2C12.1 38.4 6 31.9 6 21.7V9.5L22 3.5Z" stroke="url(#markGradient)" strokeWidth="2.8" strokeLinejoin="round"/><path d="m13 19 8-5 10 3M14 25l9 7 8-9" stroke="url(#markGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="13" cy="19" r="2.7" fill="#18E2C0"/><circle cx="21" cy="14" r="2.7" fill="#18E2C0"/><circle cx="31" cy="17" r="2.7" fill="#378BFF"/><circle cx="23" cy="32" r="2.7" fill="#378BFF"/><defs><linearGradient id="markGradient" x1="6" y1="4" x2="39" y2="40"><stop stopColor="#20E6C5"/><stop offset="1" stopColor="#3985FF"/></linearGradient></defs></svg></div>
}

function App() {
  const [lang, setLang] = useState('th')
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', type: '', problem: '', outcome: '', budget: '' })
  const t = content[lang]
  const navIds = ['services', 'portfolio', 'products', 'about', 'contact']
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  const update = (key, value) => setForm(current => ({ ...current, [key]: value }))
  const submitQuote = (event) => {
    event.preventDefault()
    const body = [
      `Name: ${form.name}`, `Reply email: ${form.email}`, `Workflow type: ${form.type}`,
      `Current problem: ${form.problem}`, `Desired outcome: ${form.outcome}`, `Estimated budget: ${form.budget || 'Not specified'}`
    ].join('\n\n')
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(t.emailSubject)}&body=${encodeURIComponent(body)}`
  }

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="topbar">
      <a className="brand" href="#home" aria-label="akkraworkflow home"><BrandMark/><span>akkra<span className="brand-light">workflow</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{t.nav.map((label, i) => <button key={navIds[i]} onClick={() => scrollTo(navIds[i])}>{label}</button>)}</nav>
      <div className="header-actions">
        <button className="lang-switch" onClick={() => setLang(lang === 'en' ? 'th' : 'en')} aria-label="Switch language"><Globe2 size={15}/><span>{lang === 'en' ? 'TH' : 'EN'}</span></button>
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
          <div className="hero-actions"><button className="btn-primary" onClick={() => scrollTo('services')}>{t.primary}<ArrowRight size={17}/></button><button className="btn-ghost" onClick={() => scrollTo('contact')}>{t.secondary}<ArrowUpRight size={16}/></button></div>
          <div className="proof-row">{t.proof.map(p => <span key={p}><CheckCircle2 size={15}/>{p}</span>)}</div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/><div className="visual-grid"/>
          <div className="visual-core"><BrandMark/><div className="core-pulse"/></div>
          <div className="node node-a"><FileSpreadsheet size={17}/><span>Google Sheets</span></div><div className="node node-b"><BellRing size={17}/><span>Gmail Alerts</span></div><div className="node node-c"><Workflow size={17}/><span>Apps Script</span></div>
          <div className="visual-caption"><span className="live-dot"/>WORKFLOW AUTOMATION <b>01 / 01</b></div>
        </div>
        <div className="hero-bottom"><span>01 — GOOGLE SHEETS</span><span>02 — APPS SCRIPT</span><span>03 — GMAIL AUTOMATION</span></div>
      </section>

      <section className="services section-wrap" id="services">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/>{t.servicesLabel}</div><h2>{t.servicesTitle}<br/><span>{t.servicesAccent}</span></h2></div><p>{t.servicesIntro}</p></div>
        <div className="service-grid">{t.services.map((service, i) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="card-top"><span className="service-icon"><Icon size={21}/></span><span className="card-index">0{i+1}</span></div><h3>{service.title}</h3><p>{service.desc}</p><div className="card-tags">{service.tags}</div><ArrowUpRight className="card-arrow" size={19}/></article> })}</div>
      </section>

      <section className="scope-section section-wrap"><div className="scope-panel"><div className="scope-copy"><div className="eyebrow"><span className="eyebrow-line"/>{t.scopeLabel}</div><h2>{t.scopeTitle}<br/><span>{t.scopeAccent}</span></h2><p>{t.notIncluded}</p></div><ul className="scope-list">{t.scope.map((item, i) => <li key={item}><span>0{i+1}</span><Check size={16}/>{item}</li>)}</ul></div></section>

      <section className="portfolio-section section-wrap" id="portfolio"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/>{t.portfolioLabel}</div><h2>{t.portfolioTitle}<br/><span>{t.portfolioAccent}</span></h2></div><p>{lang === 'th' ? 'ส่วนนี้เป็นตัวอย่างจำลองเพื่อให้เห็นภาพแนวทางและขอบเขตงาน ไม่ใช่ผลงานที่ทำให้ลูกค้าจริง' : 'These illustrative concepts show possible directions and scope. They are not presented as completed client projects.'}</p></div>
        <div className="portfolio-grid">{t.demos.map((demo, i) => <article className="portfolio-card" key={demo.no}><div className="portfolio-card-head"><span>{demo.no} / WORKFLOW</span><span className="demo-pill"><Sparkles size={12}/>{t.demoTag}</span></div><div className={`demo-visual demo-visual-${i+1}`}><div className="demo-sheet"><div className="demo-sheet-top"><i/><i/><i/><b>{['TASK TRACKER','REQUEST LOG','WEEKLY REPORT'][i]}</b></div>{i === 0 ? <><div className="demo-kpis"><span><small>OPEN</small><b>12</b></span><span><small>DONE</small><b>08</b></span><span><small>OVERDUE</small><b>02</b></span></div><div className="demo-lines">{['Prepare proposal','Review task list','Send weekly update'].map((x,j)=><div key={x}><i className={`status-dot dot-${j}`}/>{x}<em>{['Today','Tomorrow','Fri'][j]}</em></div>)}</div></> : i === 1 ? <div className="demo-flow"><span>New request</span><b>↓</b><span>Manager review</span><b>↓</b><span className="flow-approved">Email notification</span></div> : <><div className="demo-report-title">Weekly activity summary</div><div className="demo-bars">{[38,70,53,88,64,96,75].map((h,j)=><i key={j} style={{height:`${h}%`}}/>)}</div><div className="demo-report-foot">Completed tasks <b>+18%</b></div></>}</div></div><h3>{demo.title}</h3><p>{demo.desc}</p><div className="demo-points">{demo.points.map(point=><span key={point}><CheckCircle2 size={13}/>{point}</span>)}</div></article>)}</div>
      </section>

      <section className="product-section section-wrap" id="products"><div className="product-panel"><div className="product-copy"><div className="eyebrow"><span className="eyebrow-line"/>{t.productLabel}</div><h2>{t.productTitle}</h2><div className="product-name">{t.productName}</div><p>{t.productDesc}</p><ul>{t.productFeatures.map(f=><li key={f}><CheckCircle2 size={16}/>{f}</li>)}</ul><button className="btn-primary" onClick={() => scrollTo('contact')}>{t.productCta}<ArrowUpRight size={16}/></button><small className="availability">{t.productStatus}</small><small className="coming-soon">{t.comingSoon}</small></div>
        <div className="dashboard-art"><div className="dash-window"><div className="dash-top"><span className="dash-dots"><i/><i/><i/></span><span>akkraworkflow / task workspace</span><span className="dash-status">● DEMO</span></div><div className="dash-body"><aside className="dash-side"><BrandMark/><b>Workspace</b><span className="active">Overview</span><span>My tasks</span><span>Reports</span></aside><div className="dash-main"><div className="dash-welcome"><span>Team overview</span><small>ILLUSTRATIVE SAMPLE DATA</small></div><div className="dash-stats"><div><small>OPEN TASKS</small><b>12</b><em>Sample</em></div><div><small>COMPLETED</small><b>08</b><em>Sample</em></div><div><small>OVERDUE</small><b>02</b><em>Sample</em></div></div><div className="dash-chart"><div className="chart-title">Weekly activity <span>Demo data</span></div><div className="chart-bars">{[38,62,48,78,55,91,69].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></div><div className="dash-task"><span><i/> Prepare quotation</span><b>Today</b></div><div className="dash-task"><span><i/> Update task status</span><b>Tomorrow</b></div></div></div></div><div className="floating-chip"><BadgeCheck size={16}/> Google Sheets workflow demo</div></div></div></section>

      <section className="about section-wrap" id="about"><div className="about-visual"><div className="about-ring ring-one"/><div className="about-ring ring-two"/><div className="about-center"><BrandMark/><span>AKKRA<br/>WORKFLOW</span></div><div className="about-coord">GOOGLE WORKSPACE<br/>AUTOMATION</div></div><div className="about-copy"><div className="eyebrow"><span className="eyebrow-line"/>{t.aboutLabel}</div><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="value-list">{t.values.map((v,i)=>{const Icon=valueIcons[i];return <div className="value-item" key={v[0]}><span><Icon size={18}/></span><div><b>{v[0]}</b><small>{v[1]}</small></div></div>})}</div></div></section>

      <section className="contact section-wrap" id="contact"><div className="contact-panel quote-panel"><div className="contact-glow"/><div className="eyebrow"><span className="eyebrow-line"/>{t.contactLabel}</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p>
        <form className="quote-form" onSubmit={submitQuote}><div className="form-grid"><label>{t.form.name}<input required value={form.name} onChange={e=>update('name',e.target.value)} placeholder={lang==='th'?'ชื่อ-นามสกุล':'Your name'}/></label><label>{t.form.email}<input required type="email" value={form.email} onChange={e=>update('email',e.target.value)} placeholder="name@company.com"/></label><label className="form-full">{t.form.type}<select required value={form.type} onChange={e=>update('type',e.target.value)}><option value="">{lang==='th'?'เลือกประเภทงาน':'Select a workflow'}</option>{t.form.types.map(x=><option key={x}>{x}</option>)}</select></label><label className="form-full">{t.form.problem}<textarea required rows="3" value={form.problem} onChange={e=>update('problem',e.target.value)}/></label><label className="form-full">{t.form.outcome}<textarea rows="3" value={form.outcome} onChange={e=>update('outcome',e.target.value)}/></label><label className="form-full">{t.form.budget}<input value={form.budget} onChange={e=>update('budget',e.target.value)} placeholder={lang==='th'?'เช่น 3,000–5,000 บาท':'e.g. USD 100–200'}/></label></div><button className="btn-primary quote-submit" type="submit"><Send size={16}/>{t.form.submit}<ArrowUpRight size={16}/></button><small className="form-privacy">{t.form.privacy}</small></form>
        <div className="contact-meta"><span><span className="live-dot"/>{t.open}</span><span>THAILAND / REMOTE</span></div><a className="direct-email" href={`mailto:${emailAddress}` }><Mail size={15}/>{t.contactCta} <b>{emailAddress}</b></a>
      </div></section>
    </main>

    <footer className="footer section-wrap"><a className="brand" href="#home"><BrandMark/><span>akkra<span className="brand-light">workflow</span></span></a><p>{t.footer}</p><div className="footer-right"><span>© {new Date().getFullYear()} akkraworkflow</span><a href={`mailto:${emailAddress}`} aria-label="Email"><Mail size={16}/></a></div></footer>
  </div>
}

export default App
