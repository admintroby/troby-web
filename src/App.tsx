import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CarFront,
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
  { code: 'cat_1', label: 'REFORMAS, INSTALACIONES y MANTENIMIENTO DEL HOGAR', shortLabel: 'Reformas', icon: House, color: '#274E13' },
  { code: 'cat_2', label: 'CLIMATIZACION, ENERGÍA Y ELECTRODOMESTICOS', shortLabel: 'Climatización', icon: Zap, color: '#C9DAF8' },
  { code: 'cat_3', label: 'SERVICIOS DE LIMPIEZA', shortLabel: 'Limpieza', icon: Sparkles, color: '#E6B8AF' },
  { code: 'cat_4', label: 'JARDINES, EXTERIORES Y PISCINAS', shortLabel: 'Jardines', icon: Leaf, color: '#34A853' },
  { code: 'cat_5', label: 'REPARACIONES, MONTAJE Y ASISTENCIA TÉCNICA', shortLabel: 'Reparaciones', icon: BriefcaseBusiness, color: '#E69138' },
  { code: 'cat_6', label: 'MUDANZAS, TRANSPORTE Y LOGOSTICA', shortLabel: 'Mudanzas', icon: CarFront, color: '#FFFF00' },
  { code: 'cat_7', label: 'AUTOMOCIÓN, VEHÍCULOS Y MOVILIDAD', shortLabel: 'Automoción', icon: CarFront, color: '#0000FF' },
  { code: 'cat_8', label: 'TECNOLOGÍA, INFORMÁTICA Y ELECTRÓNICA', shortLabel: 'Tecnología', icon: Grid2X2, color: '#CCCCCC' },
  { code: 'cat_9', label: 'BELLEZA, ESTÉTICA Y CUIDADO PERSONAL', shortLabel: 'Belleza', icon: Heart, color: '#1C4587' },
  { code: 'cat_10', label: 'SALUD, BIENESTAR Y TERAPIAS PROFESIONALES', shortLabel: 'Salud', icon: HeartPulse, color: '#134F5C' },
  { code: 'cat_11', label: 'DEPORTE, ENTRENAMIENTO Y ACTIVIDADES FÍSICAS', shortLabel: 'Deporte', icon: Users, color: '#93C47D' },
  { code: 'cat_12', label: 'CUIDADO DE PERSONAS, NIÑOS Y ASISTENCIA EN EL HOGAR', shortLabel: 'Cuidados', icon: Users, color: '#D5A6BD' },
  { code: 'cat_13', label: 'MASCOTAS Y SERVICIOS PARA ANIMALES', shortLabel: 'Mascotas', icon: PawPrint, color: '#00FF00' },
  { code: 'cat_14', label: 'PROFESIONALES PARA EMPRESA, AUTÓNOMOS Y NEGOCIOS', shortLabel: 'Empresas', icon: BriefcaseBusiness, color: '#EFEFEF' },
  { code: 'cat_15', label: 'EDUCACIÓN, CLASES PARTICULARES Y FORMACIÓN', shortLabel: 'Educación', icon: GraduationCap, color: '#DD7E6B' },
  { code: 'cat_16', label: 'EVENTOS, CELEBRACIONES Y ENTRETENIMIENTO', shortLabel: 'Eventos', icon: CalendarDays, color: '#FF0000' },
  { code: 'cat_17', label: 'HOSTELERÍA, COCINA Y SERVICIOS GASTRONÓMICOS', shortLabel: 'Hostelería', icon: Building2, color: '#1155CC' },
  { code: 'cat_18', label: 'MODA, COSTURA Y SERVICIOS', shortLabel: 'Moda', icon: UserRound, color: '#B45F06' },
  { code: 'cat_19', label: 'SERVICIOS INMOBILIARIOS Y PROPIEDADES', shortLabel: 'Inmobiliaria', icon: Building2, color: '#FFF2CC' },
  { code: 'cat_20', label: 'DISEÑO, MARKETING, COMUNICACIÓN Y CONTENIDO DIGITAL', shortLabel: 'Diseño', icon: Target, color: '#93C47D' },
  { code: 'cat_21', label: 'SERVICIOS ESPECIALIZADOS Y OTROS PROFESIONALES', shortLabel: 'Otros', icon: MoreHorizontal, color: '#434343' },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Perfiles profesionales verificados',
    text: 'Consulta perfiles con la información y documentación profesional que corresponda revisada por TROBY.',
  },
  {
    icon: Star,
    title: 'Valoraciones de servicios',
    text: 'Consulta opiniones de otros usuarios y valora al profesional cuando el servicio haya finalizado.',
  },
  {
    icon: MessageCircle,
    title: 'Conversación dentro de TROBY',
    text: 'Envía una solicitud y habla con el profesional para concretar el servicio antes de aceptar una oferta.',
  },
  {
    icon: Grid2X2,
    title: 'Servicios para necesidades reales',
    text: 'Explora las mismas categorías y subcategorías disponibles en la aplicación.',
  },
  {
    icon: MapPin,
    title: 'Profesionales de tu zona',
    text: 'Encuentra profesionales y empresas cercanas y elige según el servicio que necesitas.',
  },
  {
    icon: Clock3,
    title: 'Todo el proceso en un mismo sitio',
    text: 'Solicitud, conversación, oferta y seguimiento del pedido sin saltar entre distintas plataformas.',
  },
]

const faqs = [
  {
    question: '¿Cómo funciona TROBY?',
    answer:
      'Busca el servicio que necesitas, elige un profesional y envía una solicitud. Desde ahí podréis hablar, el profesional podrá enviarte una oferta y, si la aceptas, se creará el pedido para gestionar el servicio.',
  },
  {
    question: '¿TROBY es gratis para los clientes?',
    answer:
      'Sí. Los clientes no necesitan una suscripción para buscar profesionales, enviar solicitudes y gestionar sus servicios en TROBY.',
  },
  {
    question: '¿Cómo funcionan los pagos del servicio?',
    answer:
      'TROBY conecta a clientes y profesionales, pero no procesa el pago del trabajo. El precio y la forma de pago del servicio se acuerdan directamente entre ambas partes.',
  },
  {
    question: '¿Cómo se verifican los profesionales?',
    answer:
      'TROBY contempla la revisión de identidad y, cuando corresponda, de la información profesional o empresarial necesaria para utilizar la plataforma como profesional.',
  },
  {
    question: '¿Cómo funcionan las opiniones y valoraciones?',
    answer:
      'Cuando un servicio finaliza, el cliente puede dejar una valoración de forma opcional para ayudar a otros usuarios a elegir con más información.',
  },
  {
    question: '¿TROBY comparte la ubicación del profesional?',
    answer:
      'No de forma continua. La información necesaria para el trayecto se utiliza cuando el profesional inicia el desplazamiento asociado a un pedido.',
  },
  {
    question: '¿Cuándo estará disponible TROBY?',
    answer:
      'Estamos preparando el lanzamiento. Puedes apuntarte a la lista de espera para enterarte cuando la plataforma esté disponible.',
  },
]

function Logo() {
  return (
    <a className="brand" href="#inicio" aria-label="TROBY, inicio">
      <img
        className="brand-logo"
        src={import.meta.env.BASE_URL + 'troby-logo.webp'}
        alt="TROBY"
      />
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
          <a className="mobile-nav-only" href="#lista-espera">Lista de espera</a>
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
          {categories.slice(0, 9).map(({ code, shortLabel, icon: Icon, color }) => (
            <div className="phone-category" key={code}>
              <div
                className="phone-category-icon"
                style={{ backgroundColor: color + '24', borderColor: color + '66' }}
              >
                <Icon size={15} strokeWidth={1.7} />
              </div>
              <span>{shortLabel}</span>
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
              Encuentra el servicio que necesitas, compara perfiles, envía una solicitud y recibe
              una oferta del profesional. Todo el proceso, desde el primer contacto hasta el pedido,
              en un mismo lugar.
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
                <p>Busca profesionales, compara perfiles y envía una solicitud para empezar a concretar el servicio.</p>
                <a href="#lista-espera" className="text-link">
                  Quiero conocer TROBY <ArrowRight size={14} />
                </a>
              </div>
            </article>
            <article className="audience-card">
              <BriefcaseBusiness size={31} strokeWidth={1.5} />
              <div>
                <h3>Para autónomos y empresas</h3>
                <p>Da visibilidad a tus servicios, recibe solicitudes de clientes y envía ofertas desde TROBY.</p>
                <a href="#lista-espera" className="text-link">
                  Quiero ofrecer mis servicios <ArrowRight size={14} />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section split-section" id="como-funciona">
          <div className="section-copy-wide">
            <SectionEyebrow>CÓMO FUNCIONA</SectionEyebrow>
            <h2>De la búsqueda al servicio, con cada paso claro.</h2>
            <p>
              TROBY organiza el proceso para que cliente y profesional sepan en todo momento
              qué están acordando y en qué estado se encuentra el servicio.
            </p>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">1</span>
              <Search size={38} strokeWidth={1.45} />
              <h3>Encuentra el servicio</h3>
              <p>Explora categorías, perfiles y valoraciones para elegir al profesional o empresa que encaje contigo.</p>
            </article>
            <article className="step-card">
              <span className="step-number">2</span>
              <MessageCircle size={38} strokeWidth={1.45} />
              <h3>Envía una solicitud</h3>
              <p>Explica qué necesitas y abre la conversación con el profesional para concretar los detalles.</p>
            </article>
            <article className="step-card">
              <span className="step-number">3</span>
              <BriefcaseBusiness size={38} strokeWidth={1.45} />
              <h3>Recibe y acepta la oferta</h3>
              <p>El profesional te envía su propuesta. Cuando la aceptas, TROBY crea el pedido con el servicio acordado.</p>
            </article>
            <article className="step-card">
              <span className="step-number">4</span>
              <Star size={38} strokeWidth={1.45} />
              <h3>Gestiona y valora</h3>
              <p>Sigue el pedido, confirma la finalización del trabajo y deja una valoración si quieres.</p>
            </article>
          </div>

          <div className="center-action">
            <a className="button button-light" href="#categorias">
              Ver categorías disponibles <ArrowRight size={14} />
            </a>
          </div>

          <div className="info-strip">
            <MessageCircle size={28} />
            <div>
              <strong>La solicitud abre el contacto.</strong>
              <span>Así cada conversación parte de un servicio concreto y no de un mensaje sin contexto.</span>
            </div>
          </div>
        </section>

        <section className="section" id="ventajas">
          <div className="section-heading-row">
            <div>
              <SectionEyebrow>VENTAJAS</SectionEyebrow>
              <h2>Menos vueltas para encontrar y contratar un servicio.</h2>
              <p>
                TROBY reúne la información que necesitas para elegir y mantiene solicitud, conversación,
                oferta y pedido dentro del mismo flujo.
              </p>
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
        </section>

        <section className="section" id="categorias">
          <div className="categories-heading">
            <div>
              <SectionEyebrow>CATEGORÍAS</SectionEyebrow>
              <h2>Los mismos servicios que encontrarás en la app.</h2>
              <p>
                Estas son las 21 categorías principales activas actualmente en TROBY.
                Cada una agrupa sus propias subcategorías de servicios.
              </p>
            </div>
            <div className="categories-meta" aria-label="21 categorías principales">
              <Grid2X2 size={18} />
              <strong>21</strong>
              <span>categorías principales</span>
            </div>
          </div>

          <div className="categories-grid">
            {categories.map(({ code, label, icon: Icon, color }) => (
              <article className="category-card" key={code}>
                <div
                  className="category-icon"
                  style={{ backgroundColor: color + '24', borderColor: color + '66' }}
                >
                  <Icon size={26} strokeWidth={1.6} />
                </div>
                <span>{label}</span>
              </article>
            ))}
          </div>

          <p className="categories-footnote">
            La web utiliza la misma estructura de categorías principales que la aplicación para evitar
            que un usuario encuentre servicios distintos según dónde consulte TROBY.
          </p>
        </section>

        <section className="section faq-section" id="faq">
          <div className="faq-heading">
            <div>
              <SectionEyebrow>PREGUNTAS FRECUENTES</SectionEyebrow>
              <h2>Lo importante, explicado sin rodeos.</h2>
              <p>Resolvemos las dudas principales sobre el funcionamiento de TROBY antes del lanzamiento.</p>
            </div>
            <div className="faq-illustration">
              <CircleHelp size={74} strokeWidth={1.3} />
            </div>
          </div>

          <div className="faq-list">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  <span>{question}</span>
                  <span>+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section about-section" id="sobre-troby">
          <div className="about-top">
            <div>
              <SectionEyebrow>SOBRE TROBY</SectionEyebrow>
              <h2>Conectamos personas con profesionales de confianza.</h2>
              <p>
                TROBY nace con una idea clara: hacer más fácil encontrar, comparar y contratar servicios
                profesionales cercanos. Queremos que el talento local tenga una forma sencilla de llegar
                a nuevos clientes y que cada cliente pueda decidir con más información.
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
              <p>Facilitar el acceso a servicios profesionales y conectar personas con talento local.</p>
            </article>
            <article>
              <Eye size={28} />
              <h3>Nuestra visión</h3>
              <p>Construir una plataforma de referencia para encontrar servicios profesionales de confianza.</p>
            </article>
            <article>
              <Heart size={28} />
              <h3>Nuestros valores</h3>
              <p>Confianza, cercanía, transparencia y una experiencia sencilla para ambas partes.</p>
            </article>
            <article>
              <Users size={28} />
              <h3>Nuestro equipo</h3>
              <p>Un equipo joven desarrollando TROBY desde España con una visión de crecimiento progresivo.</p>
            </article>
          </div>
        </section>

        <section className="section waitlist-section" id="lista-espera">
          <div className="waitlist-heading">
            <SectionEyebrow>LISTA DE ESPERA</SectionEyebrow>
            <h2>Sé de los primeros en descubrir TROBY.</h2>
            <p>
              Apúntate a la lista de espera y entérate cuando la plataforma esté disponible.
              Estamos preparando el siguiente paso de la web para habilitar el registro.
            </p>
          </div>

          <div className="waitlist-grid">
            <article>
              <UserRound size={31} />
              <h3>Soy cliente</h3>
              <p>Quiero encontrar profesionales y empresas para los servicios que necesito.</p>
              <button type="button" className="button button-dark waitlist-button">
                Próximamente <ArrowRight size={14} />
              </button>
            </article>
            <article>
              <BriefcaseBusiness size={31} />
              <h3>Soy autónomo</h3>
              <p>Quiero ofrecer mis servicios, recibir solicitudes y llegar a más clientes.</p>
              <button type="button" className="button button-dark waitlist-button">
                Próximamente <ArrowRight size={14} />
              </button>
            </article>
            <article>
              <Building2 size={31} />
              <h3>Soy empresa</h3>
              <p>Quiero mostrar los servicios de mi empresa y conectar con nuevos clientes.</p>
              <button type="button" className="button button-dark waitlist-button">
                Próximamente <ArrowRight size={14} />
              </button>
            </article>
          </div>

          <div className="info-strip">
            <Mail size={29} />
            <div>
              <strong>La lista de espera será el siguiente paso.</strong>
              <span>El formulario todavía no está activo; estos botones indican el estado real del lanzamiento.</span>
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
