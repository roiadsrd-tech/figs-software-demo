import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Database,
  Monitor,
  Smartphone,
  CheckCircle2,
  ArrowLeft,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  Phone,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import {
  EditorialSurface,
  RevealText,
  ClipRevealImage,
  MagneticButton,
  ScrollProgressBar,
  EditorialAccordion,
  CounterMetric
} from './craft';

const WHATSAPP_BASE_URL = 'https://wa.me/18495644000?text=';
const INSTAGRAM_URL = 'https://www.instagram.com/figs.software/';

const SERVICES_DATA = [
  {
    number: '01',
    title: 'Sistema ERP y Gestión Empresarial',
    slug: 'sistema-erp-gestion-empresarial',
    shortDesc: 'Ventas, inventario, compras y contabilidad centralizados en tiempo real.',
    description:
      'Integra ventas, inventario, compras, finanzas y contabilidad en un sistema centralizado para tomar decisiones en tiempo real.',
    photo: './media/ai_studio_space.webp',
    features: [
      {
        title: 'Control de Inventario',
        desc: 'Manejo de múltiples almacenes, lotes, seriales y alertas de stock.'
      },
      {
        title: 'Punto de Venta (POS)',
        desc: 'Soluciones especializadas para Retail & Wholesale y Restaurantes.'
      },
      {
        title: 'Gestión de Nómina',
        desc: 'Cálculo automático de ISR, TSS, horas extras y prestaciones.'
      }
    ]
  },
  {
    number: '02',
    title: 'Facturación Electrónica (DGII)',
    slug: 'facturacion-electronica-dgii',
    shortDesc: 'Certificación y emisión de comprobantes fiscales e-CF autorizados.',
    description:
      'Proveedores autorizados de facturación electrónica en República Dominicana con acompañamiento completo ante la DGII.',
    photo: './media/ai_service_2.webp',
    features: [
      {
        title: 'Emisión y Recepción',
        desc: 'Generación ágil de e-CF y procesamiento de comprobantes electrónicos.'
      },
      {
        title: 'Actualización de Retenciones',
        desc: 'Adecuación automática a los cambios en el tratamiento del ITBIS.'
      },
      {
        title: 'Soporte y Asesoría',
        desc: 'Guía experta durante todo el proceso de implementación.'
      }
    ]
  },
  {
    number: '03',
    title: 'Chatbot Integrado con I.A.',
    slug: 'chatbot-ia-soporte',
    shortDesc: 'Atención automatizada 24/7 con inteligencia artificial para tu empresa.',
    description:
      'Herramienta de interacción automatizada 24/7 integrada con inteligencia artificial para optimizar la atención a usuarios.',
    photo: './media/ai_service_3.webp',
    features: [
      {
        title: 'Atención 24/7',
        desc: 'Interacción continua con clientes y proveedores.'
      },
      {
        title: 'Integración I.A.',
        desc: 'Respuestas precisas y adaptadas a las necesidades de tu empresa.'
      },
      {
        title: 'Optimización del Tiempo',
        desc: 'Reduce la carga de trabajo manual en soporte y atención.'
      }
    ]
  }
];

const FAQS_DATA = [
  {
    question: '¿Qué incluye la solución de facturación electrónica?',
    answer:
      'Incluye certificación e implementación en facturación electrónica, licencia de por vida de Figs® POS Retail o POS Restaurante, 5,000 comprobantes, 2 horas de instalación y capacitación, y 1 año de soporte técnico remoto.'
  },
  {
    question: '¿Puedo usar el software si falla el internet?',
    answer:
      'Sí. Con la aplicación de escritorio de Figs puedes seguir trabajando desde tu red local y sincronizar la información automáticamente cuando se restablezca la conexión.'
  },
  {
    question: '¿Cuál es la compatibilidad técnica del sistema?',
    answer:
      'Opera sobre Microsoft SQL Server con compatibilidad nativa en Microsoft Windows®, Mac®, tablets y smartphones.'
  }
];

const BRANCHES = [
  { country: 'República Dominicana', city: 'Santo Domingo · San Pedro de Macorís' },
  { country: 'Venezuela', city: 'Caracas' },
  { country: 'Colombia', city: 'Colombia' },
  { country: 'Perú', city: 'Perú' },
  { country: 'Panamá', city: 'Panamá' }
];

const NODE_CONFIGS = {
  local: {
    mode: 'Operación autónoma sin internet',
    baseLatency: 0.8,
    jitter: 0.1,
    unit: 'ms (LAN)',
    status: 'Red local activa'
  },
  cloud: {
    mode: 'Espejo SQL Server centralizado',
    baseLatency: 16.2,
    jitter: 1.4,
    unit: 'ms (Cloud)',
    status: 'Sincronización continua'
  },
  dgii: {
    mode: 'Emisión de comprobantes e-CF',
    baseLatency: 44.0,
    jitter: 3.2,
    unit: 'ms (DGII)',
    status: 'Emisor autorizado'
  }
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // The Moment: Interactive Cluster & Live Latency Monitor
  const [activeNode, setActiveNode] = useState('local');
  const [liveLatency, setLiveLatency] = useState('0.8');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentRoute(hash);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const cfg = NODE_CONFIGS[activeNode];
    setLiveLatency(cfg.baseLatency.toFixed(1));
    const timer = setInterval(() => {
      const delta = (Math.random() * 2 - 1) * cfg.jitter;
      setLiveLatency(Math.max(0.4, cfg.baseLatency + delta).toFixed(1));
    }, 1800);
    return () => clearInterval(timer);
  }, [activeNode]);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    if (window.location.hash === hash) {
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = hash;
    }
  };

  // Parsing current route
  const isHome = currentRoute === '#/' || currentRoute === '';
  const isServices = currentRoute === '#/servicios';
  const isServiceDetail = currentRoute.startsWith('#/servicios/');
  const isCases = currentRoute === '#/casos';
  const isAbout = currentRoute === '#/nosotros';
  const isContact = currentRoute === '#/contacto';

  const serviceSlug = isServiceDetail ? currentRoute.replace('#/servicios/', '') : null;
  const currentService = serviceSlug
    ? SERVICES_DATA.find((s) => s.slug === serviceSlug)
    : null;

  const activeNodeCfg = NODE_CONFIGS[activeNode];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollProgressBar color="var(--accent)" />

      {/* Floating Header */}
      <header className="header-nav">
        <div className="container">
          <div className="header-inner">
            <a
              href="#/"
              onClick={(e) => handleNavClick(e, '#/')}
              className="brand-emblem-link"
            >
              <div className="brand-emblem-frame">
                <img
                  src="./media/logo_real.jpg"
                  alt="figs.software logo"
                  className="brand-emblem-img"
                />
              </div>
              <span className="brand-name">figs.software</span>
            </a>

            <nav className="nav-links-desktop" aria-label="Navegación principal">
              <a
                href="#/"
                className={`nav-link-item ${isHome ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#/')}
              >
                Inicio
              </a>
              <a
                href="#/servicios"
                className={`nav-link-item ${isServices || isServiceDetail ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#/servicios')}
              >
                Soluciones ERP
              </a>
              <a
                href="#/casos"
                className={`nav-link-item ${isCases ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#/casos')}
              >
                Casos
              </a>
              <a
                href="#/nosotros"
                className={`nav-link-item ${isAbout ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#/nosotros')}
              >
                Nosotros
              </a>
              <a
                href="#/contacto"
                className={`nav-link-item ${isContact ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, '#/contacto')}
              >
                Contacto
              </a>
              <MagneticButton
                variant="primary"
                href={`${WHATSAPP_BASE_URL}Hola%2C%20vi%20el%20portafolio%20web%20de%20figs.software%20y%20me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n.`}
                target="_blank"
                style={{ padding: '12px 24px', minHeight: '44px', fontSize: '0.88rem' }}
              >
                Agendar demo
              </MagneticButton>
            </nav>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Alternar menú"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mobile-nav-drawer"
            aria-label="Navegación móvil"
          >
            <a
              href="#/"
              className={`mobile-nav-link ${isHome ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#/')}
            >
              Inicio
            </a>
            <a
              href="#/servicios"
              className={`mobile-nav-link ${isServices || isServiceDetail ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#/servicios')}
            >
              Soluciones ERP
            </a>
            <a
              href="#/casos"
              className={`mobile-nav-link ${isCases ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#/casos')}
            >
              Casos
            </a>
            <a
              href="#/nosotros"
              className={`mobile-nav-link ${isAbout ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#/nosotros')}
            >
              Nosotros
            </a>
            <a
              href="#/contacto"
              className={`mobile-nav-link ${isContact ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#/contacto')}
            >
              Contacto
            </a>
            <div style={{ marginTop: 'auto', paddingTop: 20 }}>
              <MagneticButton
                variant="primary"
                href={`${WHATSAPP_BASE_URL}Hola%2C%20vi%20el%20portafolio%20web%20de%20figs.software%20y%20me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n.`}
                target="_blank"
                style={{ width: '100%' }}
              >
                Agendar demo
              </MagneticButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          {/* 1. HOME VIEW */}
          {isHome && (
            <motion.div
              key="page-home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Section 1: Hero */}
              <EditorialSurface as="section" variant="mesh" tone="primary" className="hero-section" id="hero">
                <div className="container">
                  <div className="hero-grid">
                    <div className="hero-content">
                      <RevealText as="h1" immediate>
                        El internet falla. Tu operación no.
                      </RevealText>
                      <p className="hero-subtitle">
                        ERP híbrido local y nube con facturación electrónica DGII.
                      </p>
                      <div className="hero-actions">
                        <MagneticButton
                          variant="primary"
                          href={`${WHATSAPP_BASE_URL}Hola%2C%20deseo%20agendar%20un%20diagn%C3%B3stico%20t%C3%A9cnico%20con%20figs.software.`}
                          target="_blank"
                        >
                          Agendar demo
                        </MagneticButton>
                        <MagneticButton
                          variant="secondary"
                          href="#/servicios"
                          onClick={(e) => handleNavClick(e, '#/servicios')}
                        >
                          Ver soluciones
                        </MagneticButton>
                      </div>

                      {/* The Moment: Interactive Cluster & Live Latency Monitor */}
                      <div className="node-switcher-card">
                        <div className="node-switcher-header">
                          <span className="node-switcher-title">Monitor de continuidad</span>
                          <span className="node-switcher-status">
                            <span className="signal-bars" aria-hidden="true">
                              <span className="signal-bar" />
                              <span className="signal-bar" />
                              <span className="signal-bar" />
                              <span className="signal-bar" />
                            </span>
                            {activeNodeCfg.status}
                          </span>
                        </div>

                        <div className="node-pills">
                          <button
                            type="button"
                            className={`node-pill-btn ${activeNode === 'local' ? 'active' : ''}`}
                            onClick={() => setActiveNode('local')}
                          >
                            <span className="node-pill-label">Instancia local</span>
                            <span className="node-pill-val">Nodo Local POS</span>
                          </button>
                          <button
                            type="button"
                            className={`node-pill-btn ${activeNode === 'cloud' ? 'active' : ''}`}
                            onClick={() => setActiveNode('cloud')}
                          >
                            <span className="node-pill-label">Espejo central</span>
                            <span className="node-pill-val">Cloud Gateway</span>
                          </button>
                          <button
                            type="button"
                            className={`node-pill-btn ${activeNode === 'dgii' ? 'active' : ''}`}
                            onClick={() => setActiveNode('dgii')}
                          >
                            <span className="node-pill-label">Protocolo fiscal</span>
                            <span className="node-pill-val">Túnel DGII e-CF</span>
                          </button>
                        </div>

                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeNode}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="node-telemetry"
                          >
                            <span>{activeNodeCfg.mode}</span>
                            <span className="node-telemetry-metric">
                              Latencia: {liveLatency}{activeNodeCfg.unit}
                            </span>
                          </motion.div>
                        </AnimatePresence>

                        <div className="telemetry-wave-track" aria-hidden="true">
                          <div className="telemetry-wave-fill" />
                        </div>
                      </div>
                    </div>

                    <div className="hero-visual-frame">
                      <ClipRevealImage
                        src="./media/ai_hero.webp"
                        alt="figs.software plataforma empresarial ERP"
                        aspectRatio="16 / 10"
                        parallax
                        priority
                      />
                    </div>
                  </div>
                </div>
              </EditorialSurface>

              {/* Section 2: Soluciones ERP Integrales */}
              <EditorialSurface as="section" variant="ambient" tone="secondary" className="section-padding" id="oferta-principal">
                <div className="container">
                  <div className="section-header">
                    <RevealText as="h2">Soluciones ERP integrales</RevealText>
                    <p className="section-lead">
                      Ventas, inventario, cumplimiento fiscal DGII y atención automatizada.
                    </p>
                  </div>

                  <div className="services-bespoke-grid">
                    {SERVICES_DATA.map((service) => (
                      <motion.article
                        key={service.slug}
                        className="service-bespoke-card"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 'some' }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="service-card-media">
                          <img
                            src={service.photo}
                            alt={service.title}
                            loading="lazy"
                          />
                        </div>
                        <div className="service-card-body">
                          <h3 className="service-title">{service.title}</h3>
                          <p className="service-desc">{service.shortDesc}</p>
                          <div className="service-card-action">
                            <a
                              href={`#/servicios/${service.slug}`}
                              className="craft-link-underline service-card-link"
                              onClick={(e) => handleNavClick(e, `#/servicios/${service.slug}`)}
                            >
                              <span>Explorar módulo</span>
                              <ArrowUpRight size={16} />
                            </a>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </EditorialSurface>

              {/* Section 3: Cumplimiento DGII Garantizado */}
              <EditorialSurface as="section" variant="contrast" tone="primary" className="section-padding" id="facturacion-electronica">
                <div className="container">
                  <div className="dgii-highlight-box">
                    <div>
                      <RevealText as="h2">Certificación DGII inmediata</RevealText>
                      <div className="dgii-price-tag">RD$30,000</div>
                      <p className="dgii-price-sub">
                        Paquete llave en mano para emitir comprobantes fiscales electrónicos e-CF.
                      </p>
                      <MagneticButton
                        variant="primary"
                        href={`${WHATSAPP_BASE_URL}Hola%2C%20deseo%20adquirir%20el%20paquete%20de%20facturaci%C3%B3n%20electr%C3%B3nica%20DGII%20por%20RD%2430%2C000.`}
                        target="_blank"
                      >
                        Contratar paquete
                      </MagneticButton>
                    </div>

                    <div className="dgii-specs-grid">
                      <div className="dgii-spec-item">
                        <CheckCircle2 size={18} className="dgii-spec-check" />
                        <span className="dgii-spec-text">Licencia de por vida Figs® POS Retail o Restaurante.</span>
                      </div>
                      <div className="dgii-spec-item">
                        <CheckCircle2 size={18} className="dgii-spec-check" />
                        <span className="dgii-spec-text">5,000 comprobantes fiscales electrónicos incluidos.</span>
                      </div>
                      <div className="dgii-spec-item">
                        <CheckCircle2 size={18} className="dgii-spec-check" />
                        <span className="dgii-spec-text">Certificación y homologación asistida ante la DGII.</span>
                      </div>
                      <div className="dgii-spec-item">
                        <CheckCircle2 size={18} className="dgii-spec-check" />
                        <span className="dgii-spec-text">2 horas de instalación remota y capacitación.</span>
                      </div>
                      <div className="dgii-spec-item">
                        <CheckCircle2 size={18} className="dgii-spec-check" />
                        <span className="dgii-spec-text">1 año de soporte técnico remoto especializado.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </EditorialSurface>

              {/* Section 4: Plataforma Robusta & Compatibilidad */}
              <EditorialSurface
                as="section"
                variant="architectural"
                tone="secondary"
                className="section-padding tech-architecture-section"
                id="tecnologia"
              >
                <div className="cyber-grid-layer" aria-hidden="true">
                  <div className="cyber-grid-scanline" />
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <defs>
                      <pattern id="figs-cyber-nodes" width="96" height="96" patternUnits="userSpaceOnUse">
                        <path
                          d="M 96 0 L 0 0 0 96"
                          fill="none"
                          stroke="rgba(0, 153, 255, 0.1)"
                          strokeWidth="0.75"
                        />
                        <path
                          d="M -3 0 L 3 0 M 0 -3 L 0 3"
                          stroke="rgba(0, 229, 255, 0.24)"
                          strokeWidth="0.9"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#figs-cyber-nodes)" />
                  </svg>
                </div>

                <div className="container">
                  <div className="section-header">
                    <RevealText as="h2">Arquitectura tolerante a fallos</RevealText>
                    <p className="section-lead">
                      Motores locales de alta velocidad sincronizados con bases de datos corporativas.
                    </p>
                  </div>

                  <div className="tech-strip-grid">
                    <div className="tech-item-card">
                      <div className="tech-item-icon" aria-hidden="true">
                        <Database size={20} />
                      </div>
                      <h3 className="tech-item-name">Microsoft SQL Server</h3>
                      <p className="tech-item-desc">
                        Integridad transaccional corporativa y respaldo estructurado de registros.
                      </p>
                    </div>
                    <div className="tech-item-card">
                      <div className="tech-item-icon" aria-hidden="true">
                        <Monitor size={20} />
                      </div>
                      <h3 className="tech-item-name">Windows® & Mac®</h3>
                      <p className="tech-item-desc">
                        Aplicaciones nativas para cajas, terminales POS y estaciones administrativas.
                      </p>
                    </div>
                    <div className="tech-item-card">
                      <div className="tech-item-icon" aria-hidden="true">
                        <Smartphone size={20} />
                      </div>
                      <h3 className="tech-item-name">Tablets & Smartphones</h3>
                      <p className="tech-item-desc">
                        Toma de pedidos, conteo de inventario y supervisión desde cualquier dispositivo.
                      </p>
                    </div>
                    <div className="tech-item-card">
                      <div className="tech-item-icon" aria-hidden="true">
                        <Server size={20} />
                      </div>
                      <h3 className="tech-item-name">Red Local Resiliente</h3>
                      <p className="tech-item-desc">
                        Facturación continua sin internet con sincronización automática al reconectar.
                      </p>
                    </div>
                  </div>
                </div>
              </EditorialSurface>

              {/* Section 5: Destacado de Métricas & Casos */}
              <EditorialSurface as="section" variant="mesh" tone="primary" className="section-padding" id="casos">
                <div className="container">
                  <div className="section-header">
                    <RevealText as="h2">28 años de respaldo</RevealText>
                    <p className="section-lead">
                      Software probado en empresas comerciales, distribución y restaurantes en LATAM.
                    </p>
                  </div>

                  <div className="stats-editorial-grid">
                    <CounterMetric value="+28" label="Años de experiencia" note="Trayectoria corporativa en LATAM" />
                    <CounterMetric value="5" label="Países en LATAM" note="RD, Venezuela, Colombia, Perú y Panamá" />
                    <CounterMetric value="+2,574" label="Empresas activas" note="Operación diaria y facturación" />
                  </div>

                  <div style={{ marginTop: 40, textAlign: 'center' }}>
                    <MagneticButton
                      variant="secondary"
                      href="#/casos"
                      onClick={(e) => handleNavClick(e, '#/casos')}
                    >
                      Ver casos
                    </MagneticButton>
                  </div>
                </div>
              </EditorialSurface>

              {/* Section 6: Sucursales & Conversión Directa */}
              <EditorialSurface as="section" variant="grain" tone="secondary" className="section-padding" id="contacto">
                <div className="container">
                  <div className="section-header">
                    <RevealText as="h2">Cobertura en 5 países</RevealText>
                    <p className="section-lead">
                      Soporte remoto y consultoría directa para tu operación.
                    </p>
                  </div>

                  <div className="branches-grid">
                    {BRANCHES.map((b, i) => (
                      <div key={i} className="branch-badge">
                        <span className="branch-country">{b.country}</span>
                        <span className="branch-detail">{b.city}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                    <MagneticButton
                      variant="primary"
                      href={`${WHATSAPP_BASE_URL}Hola%2C%20deseo%20conversar%20con%20un%20consultor%20de%20figs.software.`}
                      target="_blank"
                    >
                      Hablar por WhatsApp
                    </MagneticButton>
                    <MagneticButton
                      variant="secondary"
                      href="#/contacto"
                      onClick={(e) => handleNavClick(e, '#/contacto')}
                    >
                      Ir a contacto
                    </MagneticButton>
                  </div>
                </div>
              </EditorialSurface>
            </motion.div>
          )}

          {/* 2. SERVICES CATALOG VIEW */}
          {isServices && (
            <motion.div
              key="page-services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EditorialSurface as="section" variant="mesh" tone="primary" className="page-hero">
                <div className="container">
                  <a
                    href="#/"
                    className="breadcrumb-nav"
                    onClick={(e) => handleNavClick(e, '#/')}
                  >
                    <ArrowLeft size={16} />
                    <span>Volver al inicio</span>
                  </a>
                  <RevealText as="h1" immediate>Catálogo de soluciones</RevealText>
                  <p className="hero-subtitle">
                    Sistemas ERP, facturación electrónica DGII y automatización con I.A.
                  </p>
                </div>
              </EditorialSurface>

              <EditorialSurface as="section" variant="ambient" tone="secondary" className="section-padding">
                <div className="container">
                  <div className="services-bespoke-grid">
                    {SERVICES_DATA.map((service) => (
                      <div key={service.slug} className="service-bespoke-card">
                        <div className="service-card-media">
                          <img
                            src={service.photo}
                            alt={service.title}
                            loading="lazy"
                          />
                        </div>
                        <div className="service-card-body">
                          <h3 className="service-title">{service.title}</h3>
                          <p className="service-desc">{service.description}</p>
                          <ul className="service-features-list">
                            {service.features.map((f, i) => (
                              <li key={i} className="service-feature-row">
                                <span className="service-feature-bullet">■</span>
                                <span><strong>{f.title}:</strong> {f.desc}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="service-card-action">
                            <MagneticButton
                              variant="secondary"
                              href={`#/servicios/${service.slug}`}
                              onClick={(e) => handleNavClick(e, `#/servicios/${service.slug}`)}
                              style={{ width: '100%' }}
                            >
                              Ver ficha
                            </MagneticButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Implementation Process */}
                  <div style={{ marginTop: 80 }}>
                    <div className="section-header">
                      <RevealText as="h2">Implementación en 3 pasos</RevealText>
                    </div>

                    <div className="tech-strip-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                      <div className="tech-item-card">
                        <h3 className="tech-item-name">Asesoría Gratuita</h3>
                        <p className="tech-item-desc">
                          Evaluamos las necesidades de tu empresa para recomendarte la solución ideal.
                        </p>
                      </div>
                      <div className="tech-item-card">
                        <h3 className="tech-item-name">Instalación y Configuración</h3>
                        <p className="tech-item-desc">
                          Implementamos el ERP y la facturación electrónica con capacitación incluida.
                        </p>
                      </div>
                      <div className="tech-item-card">
                        <h3 className="tech-item-name">Soporte y Operación</h3>
                        <p className="tech-item-desc">
                          Acompañamiento técnico continuo y respaldo de datos seguro.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQs Section */}
                  <div style={{ marginTop: 80, maxWidth: 800, marginInline: 'auto' }}>
                    <div className="section-header" style={{ textAlign: 'center', marginInline: 'auto' }}>
                      <RevealText as="h2">Preguntas frecuentes</RevealText>
                    </div>
                    <EditorialAccordion items={FAQS_DATA} />
                  </div>
                </div>
              </EditorialSurface>
            </motion.div>
          )}

          {/* 3. DEDICATED SERVICE SUBPAGE (#/servicios/:slug) */}
          {isServiceDetail && currentService && (
            <motion.div
              key={`page-service-${currentService.slug}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EditorialSurface as="section" variant="mesh" tone="primary" className="page-hero">
                <div className="container">
                  <a
                    href="#/servicios"
                    className="breadcrumb-nav"
                    onClick={(e) => handleNavClick(e, '#/servicios')}
                  >
                    <ArrowLeft size={16} />
                    <span>Volver a soluciones</span>
                  </a>
                  <RevealText as="h1" immediate>{currentService.title}</RevealText>
                  <p className="hero-subtitle">
                    {currentService.description}
                  </p>
                  <div style={{ marginTop: 24 }}>
                    <MagneticButton
                      variant="primary"
                      href={`${WHATSAPP_BASE_URL}Hola%2C%20me%20interesa%20solicitar%20informaci%C3%B3n%20sobre%20${encodeURIComponent(currentService.title)}.`}
                      target="_blank"
                    >
                      Cotizar módulo
                    </MagneticButton>
                  </div>
                </div>
              </EditorialSurface>

              <EditorialSurface as="section" variant="ambient" tone="secondary" className="section-padding">
                <div className="container">
                  <div className="service-detail-grid">
                    <div>
                      <h2 style={{ marginBottom: 24 }}>Funcionalidades clave</h2>
                      {currentService.features.map((feature, idx) => (
                        <div key={idx} className="feature-deep-box">
                          <h3 className="feature-deep-title">{feature.title}</h3>
                          <p className="feature-deep-desc">{feature.desc}</p>
                        </div>
                      ))}

                      <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                        <MagneticButton
                          variant="primary"
                          href={`${WHATSAPP_BASE_URL}Hola%2C%20deseo%20agendar%20una%20demostraci%C3%B3n%20de%20${encodeURIComponent(currentService.title)}.`}
                          target="_blank"
                        >
                          Agendar demo
                        </MagneticButton>
                        <MagneticButton
                          variant="secondary"
                          href="#/servicios"
                          onClick={(e) => handleNavClick(e, '#/servicios')}
                        >
                          Otros módulos
                        </MagneticButton>
                      </div>
                    </div>

                    <div>
                      <div className="hero-visual-frame">
                        <ClipRevealImage
                          src={currentService.photo}
                          alt={currentService.title}
                          aspectRatio="4 / 3"
                          priority
                        />
                      </div>
                      <div
                        style={{
                          marginTop: 20,
                          padding: 20,
                          background: 'rgba(5, 11, 20, 0.45)',
                          borderRadius: 'var(--radius-card)',
                          border: '1px solid var(--border-hairline)'
                        }}
                      >
                        <h4 style={{ fontSize: '1.05rem', marginBottom: 8 }}>Respaldo Figs®</h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                          Base de datos Microsoft SQL Server, operación local resiliente y cumplimiento fiscal DGII.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </EditorialSurface>
            </motion.div>
          )}

          {/* 4. REAL CASES & PORTFOLIO (#/casos) */}
          {isCases && (
            <motion.div
              key="page-cases"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EditorialSurface as="section" variant="mesh" tone="primary" className="page-hero">
                <div className="container">
                  <a
                    href="#/"
                    className="breadcrumb-nav"
                    onClick={(e) => handleNavClick(e, '#/')}
                  >
                    <ArrowLeft size={16} />
                    <span>Volver al inicio</span>
                  </a>
                  <RevealText as="h1" immediate>Sectores e implementaciones</RevealText>
                  <p className="hero-subtitle">
                    Más de 2,574 empresas activas en 5 países de América Latina.
                  </p>
                </div>
              </EditorialSurface>

              <EditorialSurface as="section" variant="ambient" tone="secondary" className="section-padding">
                <div className="container">
                  <div className="section-header">
                    <RevealText as="h2">Especialización por industria</RevealText>
                  </div>

                  <div className="services-bespoke-grid">
                    <div className="service-bespoke-card">
                      <div className="service-card-media">
                        <img src="./media/ai_hero.webp" alt="Retail y Punto de Venta" loading="lazy" />
                      </div>
                      <div className="service-card-body">
                        <h3 className="service-title">Retail & Restaurantes</h3>
                        <p className="service-desc">
                          Figs® POS Retail y POS Restaurante con operación continua desde red local.
                        </p>
                        <p style={{ fontSize: '0.82rem', color: 'var(--gold-accent)', fontFamily: 'var(--font-mono)', marginTop: 'auto' }}>
                          Continuidad local sin internet
                        </p>
                      </div>
                    </div>

                    <div className="service-bespoke-card">
                      <div className="service-card-media">
                        <img src="./media/ai_service_2.webp" alt="Facturación Electrónica DGII" loading="lazy" />
                      </div>
                      <div className="service-card-body">
                        <h3 className="service-title">Cumplimiento DGII</h3>
                        <p className="service-desc">
                          Certificación, emisión y recepción de comprobantes e-CF y control de ITBIS.
                        </p>
                        <p style={{ fontSize: '0.82rem', color: 'var(--gold-accent)', fontFamily: 'var(--font-mono)', marginTop: 'auto' }}>
                          Proveedor autorizado DGII
                        </p>
                      </div>
                    </div>

                    <div className="service-bespoke-card">
                      <div className="service-card-media">
                        <img src="./media/ai_studio_space.webp" alt="Mayoristas y Distribución" loading="lazy" />
                      </div>
                      <div className="service-card-body">
                        <h3 className="service-title">Distribución y Almacenes</h3>
                        <p className="service-desc">
                          Control multi-almacén, lotes, seriales y alertas automáticas de stock.
                        </p>
                        <p style={{ fontSize: '0.82rem', color: 'var(--gold-accent)', fontFamily: 'var(--font-mono)', marginTop: 'auto' }}>
                          Microsoft SQL Server
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 56, textAlign: 'center' }}>
                    <MagneticButton
                      variant="primary"
                      href={`${WHATSAPP_BASE_URL}Hola%2C%20quisiera%20evaluar%20una%20soluci%C3%B3n%20para%20mi%20empresa.`}
                      target="_blank"
                    >
                      Consultar caso
                    </MagneticButton>
                  </div>
                </div>
              </EditorialSurface>
            </motion.div>
          )}

          {/* 5. ABOUT US (#/nosotros) */}
          {isAbout && (
            <motion.div
              key="page-about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EditorialSurface as="section" variant="mesh" tone="primary" className="page-hero">
                <div className="container">
                  <a
                    href="#/"
                    className="breadcrumb-nav"
                    onClick={(e) => handleNavClick(e, '#/')}
                  >
                    <ArrowLeft size={16} />
                    <span>Volver al inicio</span>
                  </a>
                  <RevealText as="h1" immediate>Nuestra trayectoria</RevealText>
                  <p className="hero-subtitle">
                    Más de 28 años desarrollando software ERP para empresas en América Latina.
                  </p>
                </div>
              </EditorialSurface>

              <EditorialSurface as="section" variant="ambient" tone="secondary" className="section-padding">
                <div className="container">
                  <div className="service-detail-grid">
                    <div>
                      <h2 style={{ marginBottom: 20 }}>Software confiable y cercano</h2>
                      <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: 20 }}>
                        Nuestra empresa de software nace con una sólida trayectoria internacional basada en el desarrollo de aplicaciones para empresas corporativas y firmas de auditoría de nivel mundial, definiendo altos estándares de calidad y atención.
                      </p>
                      <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: 28 }}>
                        Ofrecemos una aplicación estable y amigable respaldada por más de 28 años de evolución en el mercado, diseñada para optimizar la gestión de recursos empresariales, ventas, inventario, operaciones y facturación electrónica.
                      </p>

                      <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 20, marginBlock: 32 }}>
                        <p style={{ fontStyle: 'italic', fontSize: '1.06rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                          "La facturación electrónica no es complicada cuando entiendes el proceso. Se trata de hacerlo en orden, con planificación y acompañamiento."
                        </p>
                      </div>

                      <div style={{ marginTop: 32 }}>
                        <MagneticButton
                          variant="primary"
                          href={`${WHATSAPP_BASE_URL}Hola%2C%20le%C3%AD%20sobre%20su%20trayectoria%20y%20me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n.`}
                          target="_blank"
                        >
                          Hablar con equipo
                        </MagneticButton>
                      </div>
                    </div>

                    <div>
                      <div className="hero-visual-frame">
                        <ClipRevealImage
                          src="./media/ai_studio_space.webp"
                          alt="Espacio tecnológico de figs.software"
                          aspectRatio="4 / 3"
                          priority
                        />
                      </div>
                      <div style={{ marginTop: 24 }}>
                        <div className="stats-editorial-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                          <CounterMetric value="+28" label="Años de experiencia" />
                          <CounterMetric value="5" label="Países en LATAM" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </EditorialSurface>
            </motion.div>
          )}

          {/* 6. CONTACT & LOCATIONS (#/contacto) */}
          {isContact && (
            <motion.div
              key="page-contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EditorialSurface as="section" variant="mesh" tone="primary" className="page-hero">
                <div className="container">
                  <a
                    href="#/"
                    className="breadcrumb-nav"
                    onClick={(e) => handleNavClick(e, '#/')}
                  >
                    <ArrowLeft size={16} />
                    <span>Volver al inicio</span>
                  </a>
                  <RevealText as="h1" immediate>Contacto y cobertura</RevealText>
                  <p className="hero-subtitle">
                    Diagnóstico técnico directo para República Dominicana y LATAM.
                  </p>
                </div>
              </EditorialSurface>

              <EditorialSurface as="section" variant="ambient" tone="secondary" className="section-padding">
                <div className="container">
                  <div className="contact-grid">
                    <div>
                      <h2 style={{ marginBottom: 20 }}>Hablemos de tu operación</h2>
                      <p style={{ color: 'var(--text-muted)', marginBottom: 32, lineHeight: 1.6 }}>
                        Solicita asesoría gratuita o agenda una demostración de nuestro ERP y facturación electrónica.
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                          <Phone size={20} color="var(--accent)" style={{ marginTop: 2 }} />
                          <div>
                            <strong style={{ display: 'block', fontSize: '0.96rem' }}>WhatsApp & Teléfono</strong>
                            <a
                              href="tel:8495644000"
                              style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}
                            >
                              849-564-4000
                            </a>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                          <MapPin size={20} color="var(--accent)" style={{ marginTop: 2 }} />
                          <div>
                            <strong style={{ display: 'block', fontSize: '0.96rem' }}>República Dominicana</strong>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                              Santo Domingo · San Pedro de Macorís
                            </span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                          <ShieldCheck size={20} color="var(--accent)" style={{ marginTop: 2 }} />
                          <div>
                            <strong style={{ display: 'block', fontSize: '0.96rem' }}>Soporte Técnico</strong>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                              Soporte técnico remoto y acompañamiento continuo en 5 países
                            </span>
                          </div>
                        </div>
                      </div>

                      <MagneticButton
                        variant="primary"
                        href={`${WHATSAPP_BASE_URL}Hola%2C%20quisiera%20coordinar%20una%20reuni%C3%B3n%20con%20figs.software.`}
                        target="_blank"
                      >
                        Abrir WhatsApp
                      </MagneticButton>
                    </div>

                    <div className="contact-card">
                      <h3 style={{ marginBottom: 20 }}>Solicitud de diagnóstico</h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const form = e.target;
                          const name = form.name.value;
                          const company = form.company.value;
                          const service = form.service.value;
                          const text = encodeURIComponent(
                            `Hola, mi nombre es ${name} de la empresa ${company}. Deseo cotizar o agendar demo sobre: ${service}.`
                          );
                          window.open(`${WHATSAPP_BASE_URL}${text}`, '_blank');
                        }}
                      >
                        <div className="contact-field-group">
                          <label className="contact-label" htmlFor="contact-name">Nombre y Apellido</label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            required
                            placeholder="Ej. Carlos Mendoza"
                            className="contact-input"
                          />
                        </div>
                        <div className="contact-field-group">
                          <label className="contact-label" htmlFor="contact-company">Empresa</label>
                          <input
                            id="contact-company"
                            type="text"
                            name="company"
                            required
                            placeholder="Ej. Distribuidora del Caribe"
                            className="contact-input"
                          />
                        </div>
                        <div className="contact-field-group">
                          <label className="contact-label" htmlFor="contact-service">Solución de Interés</label>
                          <select
                            id="contact-service"
                            name="service"
                            className="contact-input"
                            defaultValue="Facturación Electrónica DGII"
                          >
                            <option value="Facturación Electrónica DGII">Facturación Electrónica DGII (RD$30,000)</option>
                            <option value="Sistema ERP y Gestión Empresarial">Sistema ERP y Gestión Empresarial</option>
                            <option value="Chatbot Integrado con I.A.">Chatbot Integrado con I.A.</option>
                          </select>
                        </div>
                        <MagneticButton
                          type="submit"
                          variant="primary"
                          style={{ width: '100%', marginTop: 12 }}
                        >
                          Enviar solicitud
                        </MagneticButton>
                      </form>
                    </div>
                  </div>
                </div>
              </EditorialSurface>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Bespoke */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-grid">
            <div>
              <a
                href="#/"
                onClick={(e) => handleNavClick(e, '#/')}
                className="brand-emblem-link"
                style={{ marginBottom: 12 }}
              >
                <div className="brand-emblem-frame">
                  <img
                    src="./media/logo_real.jpg"
                    alt="figs.software logo"
                    className="brand-emblem-img"
                  />
                </div>
                <span className="brand-name">figs.software</span>
              </a>
              <p className="footer-brand-bio">
                Software empresarial ERP y proveedores autorizados de facturación electrónica. Más de 28 años de trayectoria en LATAM.
              </p>
            </div>

            <div>
              <h4 className="footer-col-title">Navegación</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#/" className="footer-link-item" onClick={(e) => handleNavClick(e, '#/')}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#/servicios" className="footer-link-item" onClick={(e) => handleNavClick(e, '#/servicios')}>
                    Soluciones ERP
                  </a>
                </li>
                <li>
                  <a href="#/casos" className="footer-link-item" onClick={(e) => handleNavClick(e, '#/casos')}>
                    Casos
                  </a>
                </li>
                <li>
                  <a href="#/nosotros" className="footer-link-item" onClick={(e) => handleNavClick(e, '#/nosotros')}>
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#/contacto" className="footer-link-item" onClick={(e) => handleNavClick(e, '#/contacto')}>
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Módulos ERP</h4>
              <ul className="footer-links-list">
                {SERVICES_DATA.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={`#/servicios/${s.slug}`}
                      className="footer-link-item"
                      onClick={(e) => handleNavClick(e, `#/servicios/${s.slug}`)}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Presencia Regional</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 12 }}>
                República Dominicana · Venezuela · Colombia · Perú · Panamá
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="craft-link-underline"
                  style={{ fontSize: '0.86rem', color: 'var(--accent)' }}
                >
                  Instagram Oficial
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>© {new Date().getFullYear()} figs.software. Todos los derechos reservados.</span>
            <span>Proveedor Autorizado Facturación Electrónica DGII</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
