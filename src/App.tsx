import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CarFront,
  Check,
  CircleHelp,
  Clock3,
  Eye,
  GraduationCap,
  Grid2X2,
  Heart,
  HeartPulse,
  House,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  PawPrint,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UserRound,
  Users,
  Zap,
} from 'lucide-react'

const categories = [
  { label: 'Salud y belleza', icon: HeartPulse, tone: 'pink' },
  { label: 'Hogar y reformas', icon: House, tone: 'sand' },
  { label: 'Limpieza', icon: Sparkles, tone: 'blue' },
  { label: 'Mascotas', icon: PawPrint, tone: 'green' },
  { label: 'Clases y formación', icon: GraduationCap, tone: 'violet' },
  { label: 'Transporte', icon: CarFront, tone: 'coral' },
  { label: 'Jardinería', icon: Leaf, tone: 'mint' },
  { label: 'Eventos', icon: CalendarDays, tone: 'purple' },
  { label: 'Otros servicios', icon: MoreHorizontal, tone: 'slate' },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Profesionales verificados',
    text: 'Todos los autónomos y empresas pasan un proceso de verificación de identidad y calidad.',
  },
  {
    icon: Star,
    title: 'Opiniones reales',
    text: 'Lee valoraciones y reseñas de otros usuarios antes de contactar.',
  },
  {
    icon: MessageCircle,
    title: 'Contacto directo',
    text: 'Habla con el profesional o empresa de forma rápida y sencilla.',
  },
  {
    icon: Grid2X2,
    title: 'Amplia variedad',
    text: 'Encuentra servicios de múltiples categorías, todo en un mismo lugar.',
  },
  {
    icon: MapPin,
    title: 'Cercanía y confianza',
    text: 'Profesionales y empresas de tu zona, con valoraciones reales.',
  },
  {
    icon: Clock3,
    title: 'Ahorro de tiempo',
    text: 'Olvídate de buscar en mil sitios. En TROBY lo tienes todo al alcance de un clic.',
  },
]

const faqs = [
  '¿Cómo funciona TROBY?',
  'Pagos y precios',
  'Perfiles y verificación',
  'Servicios y categorías',
  'Seguridad y confianza',
  'Opiniones y valoraciones',
  'Contacto',
]

function Logo() {
  return (
    <a className="brand" href="#inicio" aria-label="TROBY, inicio">
      <span className="brand-word">TROBY</span>
      <span className="brand-mark" aria-hidden="true">✦</span>
    </a>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#ventajas">Ventajas</a>
          <a href="#categorias">Categorías</a>
          <a href="#faq">FAQ</a>
          <a href="#sobre-troby">Sobre TROBY</a>
        </nav>
        <a className="button button-dark button-small" href="#lista-espera">
          Únete a la lista de espera
          <ArrowRight size={14} />
        </a>
      </div>
    </header>
  )
}

function PhonePreview() {
  return (
    <div className="phone-shell" aria-label="Vista previa conceptual de la app TROBY">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="phone-logo">TROBY</div>
        <div className="phone-search">
          <Search size={13} />
          <span>¿Qué servicio necesitas?</span>
        </div>
        <div className="phone-grid">
          {categories.slice(0, 9).map(({ label, icon: Icon, tone }) => (
            <div className="phone-category" key={label}>
              <div className={`phone-category-icon tone-${tone}`}>
                <Icon size={15} strokeWidth={1.7} />
              </div>
              <span>{label.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

function App() {
  return (
    <>
      <Header />

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <SectionEyebrow>TU SERVICIO, MÁS CERCA</SectionEyebrow>
            <h1>TROBY conecta clientes con profesionales autónomos y empresas de confianza.</h1>
            <p className="hero-lead">
              Encuentra el servicio que necesitas, compara perfiles y reseñas, y contacta directamente
              con el profesional o empresa, de forma rápida y segura.
            </p>
            <div className="button-row">
              <a className="button button-dark" href="#lista-espera">
                Únete a la lista de espera
                <ArrowRight size={15} />
              </a>
              <a className="button button-light" href="#como-funciona">
                Descubre cómo funciona
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow" />
            <PhonePreview />
          </div>

          <div className="audience-panel">
            <article className="audience-card">
              <UserRound size={31} strokeWidth={1.5} />
              <div>
                <h3>Para clientes</h3>
                <p>Encuentra profesionales y empresas verificadas cerca de ti. Lee valoraciones, compara y contacta.</p>
                <a href="#lista-espera" className="text-link">
                  Únete a la lista de espera <ArrowRight size={14} />
                </a>
              </div>
            </article>
            <article className="audience-card">
              <BriefcaseBusiness size={31} strokeWidth={1.5} />
              <div>
                <h3>Para autónomos y empresas</h3>
                <p>Da visibilidad a tu servicio, recibe contactos de clientes y haz crecer tu negocio.</p>
                <a href="#lista-espera" className="text-link">
                  Únete a la lista de espera <ArrowRight size={14} />
                </a>
              </div>
            </article>
          </div>

          <a className="hero-bottom-strip" href="#como-funciona">
            <span>
              <strong>¿Cómo funciona?</strong>
              <small>En 3 pasos, es muy fácil. Solo tienes que seguir unos simples pasos.</small>
            </span>
            <span className="button button-light button-small">
              Descubrir cómo funciona <ArrowRight size={14} />
            </span>
          </a>
        </section>

        <section className="section split-section" id="como-funciona">
          <div className="section-copy-wide">
            <SectionEyebrow>CÓMO FUNCIONA</SectionEyebrow>
            <h2>En 3 pasos, conecta con el servicio que necesitas.</h2>
            <p>
              Buscar, elegir y contactar. Así de fácil. En TROBY te ponemos en contacto con profesionales
              y empresas de confianza, de forma rápida y segura.
            </p>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">1</span>
              <UserRound size={38} strokeWidth={1.45} />
              <h3>Elige el servicio</h3>
              <p>Busca entre cientos de categorías y encuentra al profesional o empresa que necesitas.</p>
            </article>
            <article className="step-card">
              <span className="step-number">2</span>
              <MessageCircle size={38} strokeWidth={1.45} />
              <h3>Contacta directamente</h3>
              <p>Escribe desde el chat de TROBY o llama. Sin intermediarios.</p>
            </article>
            <article className="step-card">
              <span className="step-number">3</span>
              <Star size={38} strokeWidth={1.45} />
              <h3>Disfruta del servicio</h3>
              <p>Conoce al profesional, consulta reseñas y habla con total libertad.</p>
            </article>
          </div>

          <div className="center-action">
            <a className="button button-light" href="#categorias">
              Explorar categorías <ArrowRight size={14} />
            </a>
          </div>

          <div className="info-strip">
            <Mail size={28} />
            <div>
              <strong>Rápido, seguro y sin complicaciones.</strong>
              <span>TROBY facilita el contacto, tú eliges.</span>
            </div>
          </div>
        </section>

        <section className="section" id="ventajas">
          <div className="section-heading-row">
            <div>
              <SectionEyebrow>VENTAJAS</SectionEyebrow>
              <h2>Más que un servicio,<br />una ventaja.</h2>
              <p>En TROBY verás un servicio cercano, seguro y eficiente. Descubrirás todo lo que nos hace diferentes.</p>
            </div>
            <div className="benefit-orbit" aria-hidden="true">
              {[ShieldCheck, Star, MessageCircle, Users, Zap, Clock3].map((Icon, index) => (
                <span key={index}><Icon size={24} /></span>
              ))}
            </div>
          </div>

          <div className="benefits-grid">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article className="benefit-card" key={title}>
                <Icon size={28} strokeWidth={1.6} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="info-strip">
            <Clock3 size={30} />
            <div>
              <strong>Tu tiempo vale. Nosotros lo hacemos más fácil.</strong>
              <span>Conecta, compara y elige con confianza.</span>
            </div>
          </div>
        </section>

        <section className="section" id="categorias">
          <div className="categories-heading">
            <div>
              <SectionEyebrow>CATEGORÍAS</SectionEyebrow>
              <h2>Encuentra el servicio<br />que necesitas.</h2>
              <p>Explora todas las categorías y encuentra el profesional o la empresa ideal para ti.</p>
            </div>
            <div className="category-search">
              <Search size={17} />
              <span>¿Qué servicio necesitas?</span>
            </div>
          </div>

          <div className="categories-grid">
            {categories.map(({ label, icon: Icon, tone }) => (
              <article className="category-card" key={label}>
                <div className={`category-icon tone-${tone}`}>
                  <Icon size={28} strokeWidth={1.6} />
                </div>
                <span>{label}</span>
              </article>
            ))}
            <article className="category-card category-card-cta">
              <div className="category-icon tone-rose">
                <Mail size={27} strokeWidth={1.6} />
              </div>
              <span>Ver todas las categorías</span>
            </article>
          </div>

          <div className="info-strip categories-strip">
            <MapPin size={28} />
            <div>
              <strong>¿No encuentras lo que buscas?</strong>
              <span>También puedes contactar directamente a profesionales y empresas a través de nuestro buscador.</span>
            </div>
            <a href="#lista-espera" className="button button-dark button-small">
              Ver todas las categorías <ArrowRight size={14} />
            </a>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="faq-heading">
            <div>
              <SectionEyebrow>PREGUNTAS FRECUENTES</SectionEyebrow>
              <h2>Resuelve tus dudas.</h2>
              <p>Aquí encontrarás las preguntas más comunes sobre TROBY y cómo funciona nuestra plataforma.</p>
            </div>
            <div className="faq-illustration">
              <CircleHelp size={74} strokeWidth={1.3} />
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq}>
                <summary>
                  <span>{faq}</span>
                  <span>+</span>
                </summary>
                <p>
                  Estamos preparando esta información para el lanzamiento. Queremos que cada respuesta sea clara,
                  útil y refleje exactamente cómo funcionará TROBY.
                </p>
              </details>
            ))}
          </div>

          <div className="info-strip">
            <Mail size={29} />
            <div>
              <strong>¿Tienes alguna duda?</strong>
              <span>Muy pronto habilitaremos un canal de contacto directo para ayudarte.</span>
            </div>
          </div>
        </section>

        <section className="section about-section" id="sobre-troby">
          <div className="about-top">
            <div>
              <SectionEyebrow>SOBRE TROBY</SectionEyebrow>
              <h2>Conectamos personas<br />con profesionales de confianza.</h2>
              <p>
                TROBY nace con una idea clara: hacer más fácil el acceso a servicios de calidad, de forma rápida,
                segura y cercana. Creemos en el talento local, en el trabajo bien hecho y en la importancia de la confianza.
              </p>
            </div>
            <div className="about-logo-card">
              <Logo />
              <span>Servicios reales.<br />Personas reales.</span>
            </div>
          </div>

          <div className="values-grid">
            <article>
              <Target size={28} />
              <h3>Nuestra misión</h3>
              <p>Facilitar el acceso a servicios profesionales y de calidad, conectando personas y talento local.</p>
            </article>
            <article>
              <Eye size={28} />
              <h3>Nuestra visión</h3>
              <p>Ser la plataforma de referencia en servicios profesionales de confianza en toda España y más allá.</p>
            </article>
            <article>
              <Heart size={28} />
              <h3>Nuestros valores</h3>
              <p>Confianza, cercanía, transparencia y compromiso con nuestra comunidad.</p>
            </article>
            <article>
              <Users size={28} />
              <h3>Nuestro equipo</h3>
              <p>Un equipo joven y motivado, con muchas ganas de hacer crecer TROBY.</p>
            </article>
          </div>

          <div className="info-strip">
            <MessageCircle size={28} />
            <div>
              <strong>Juntos hacemos posible</strong>
              <span>una comunidad de profesionales y clientes más conectada.</span>
            </div>
          </div>
        </section>

        <section className="section waitlist-section" id="lista-espera">
          <div className="waitlist-heading">
            <SectionEyebrow>LISTA DE ESPERA</SectionEyebrow>
            <h2>Sé de los primeros en<br />descubrir TROBY.</h2>
            <p>
              Regístrate en nuestra lista de espera y sé el primero en enterarte cuando la plataforma esté disponible.
              Solo te llevará un minuto.
            </p>
          </div>

          <div className="waitlist-grid">
            <article>
              <UserRound size={31} />
              <h3>Soy cliente</h3>
              <p>Quiero encontrar profesionales y empresas de confianza.</p>
              <button type="button" className="button button-dark waitlist-button">
                Próximamente <ArrowRight size={14} />
              </button>
            </article>
            <article>
              <BriefcaseBusiness size={31} />
              <h3>Soy autónomo</h3>
              <p>Quiero ofrecer mis servicios y llegar a más clientes.</p>
              <button type="button" className="button button-dark waitlist-button">
                Próximamente <ArrowRight size={14} />
              </button>
            </article>
            <article>
              <Building2 size={31} />
              <h3>Soy empresa</h3>
              <p>Quiero publicar mis servicios y crecer con TROBY.</p>
              <button type="button" className="button button-dark waitlist-button">
                Próximamente <ArrowRight size={14} />
              </button>
            </article>
          </div>

          <div className="info-strip">
            <Mail size={29} />
            <div>
              <strong>¿Tienes alguna duda?</strong>
              <span>El formulario de contacto llegará en la siguiente fase de la web.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-line" />
        <Logo />
        <div className="footer-line" />
      </footer>
    </>
  )
}

export default App
