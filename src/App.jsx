import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import {
  EditorialSurface,
  RevealText,
  ClipRevealImage,
  MagneticButton,
  ScrollProgressBar,
  InteractiveGlobe,
  CounterMetric,
  EditorialAccordion
} from './craft';

// --- VERIFIED DATA SOURCE (100% GROUNDED IN brief.md) ---
const BRAND = {
  name: 'Figs Software',
  tagline: 'Software empresarial ERP y proveedores autorizados de facturación electrónica',
  phoneDisplay: '849-564-4000',
  whatsappUrl:
    'https://wa.me/8495644000?text=Hola%2C%20vi%20el%20portafolio%20web%20de%20Figs%20Software%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.',
  instagramUrl: 'https://www.instagram.com/figs.software/',
  hq: 'Santo Domingo, República Dominicana',
  countries: [
    'Santo Domingo, República Dominicana',
    'Caracas, Venezuela',
    'Colombia',
    'Perú',
    'Panamá'
  ],
  quote:
    'La facturación electrónica no es complicada cuando entiendes el proceso. Se trata de hacerlo en orden, con planificación y acompañamiento.'
};

const CLIENT_LOGOS = [
  { name: 'Empresa cliente', src: './client-logos/client_logo_1.jpg' },
  { name: 'Empresa cliente', src: './client-logos/client_logo_2.jpg' },
  { name: 'Aro y Pedal', src: './client-logos/client_logo_3.png' },
  { name: 'Empresa cliente', src: './client-logos/client_logo_4.jpg' },
  { name: 'Empresa cliente', src: './client-logos/client_logo_5.jpg' },
  { name: 'Couture', src: './client-logos/client_logo_6.jpg' },
  { name: 'Empresa cliente', src: './client-logos/client_logo_7.jpg' },
  { name: 'Disfarmaco', src: './client-logos/client_logo_8.jpg' },
  { name: 'Empresa cliente', src: './client-logos/client_logo_9.jpg' },
  { name: 'Empresa cliente', src: './client-logos/client_logo_10.jpg' },
  { name: 'Delta', src: './client-logos/client_logo_11.png' },
  { name: 'Empresa cliente', src: './client-logos/client_logo_12.jpg' },
  { name: 'Empresa cliente', src: './client-logos/client_logo_13.jpg' },
  { name: 'Empresa cliente', src: './client-logos/client_logo_14.jpg' },
  { name: 'Interdeco', src: './client-logos/client_logo_15.png' },
  { name: 'AHC', src: './client-logos/client_logo_16.png' }
];

const SERVICES = [
  {
    number: '01',
    slug: 'facturacion-electronica',
    title: 'Facturación electrónica DGII',
    shortDesc: 'Certificación e implementación de comprobantes e-CF bajo normativa DGII.',
    fullDesc:
      'Servicio integral de certificación e implementación de facturación electrónica (e-CF) para operar bajo los estándares de la DGII.',
    photo: './media/ai_service_1.webp',
    features: [
      {
        title: 'Certificación DGII',
        desc: 'Alineación total con los requerimientos fiscales vigentes.'
      },
      {
        title: 'Emisión y recepción e-CF',
        desc: 'Comprobantes fiscales electrónicos válidos en cada venta.'
      },
      {
        title: 'Soporte técnico',
        desc: 'Acompañamiento remoto especializado durante todo el proceso.'
      }
    ]
  },
  {
    number: '02',
    slug: 'erp-empresarial',
    title: 'Sistema ERP empresarial',
    shortDesc: 'Control centralizado de ventas, inventario y finanzas en Windows.',
    fullDesc:
      'Aplicaciones de escritorio estables para Microsoft Windows que centralizan ventas, inventario y finanzas empresariales.',
    photo: './media/ai_service_2.webp',
    features: [
      {
        title: 'Ventas e inventario',
        desc: 'Gestión integrada para reducir errores manuales diarios.'
      },
      {
        title: 'Entorno Microsoft Windows',
        desc: 'Interfaz rápida y amigable para operación continua.'
      },
      {
        title: 'Toma de decisiones',
        desc: 'Información financiera consolidada para dirección y gerencia.'
      }
    ]
  },
  {
    number: '03',
    slug: 'automatizacion-sql',
    title: 'Arquitectura SQL Server',
    shortDesc: 'Sincronización local confiable incluso ante fallos de conexión.',
    fullDesc:
      'Infraestructura sobre Microsoft SQL Server con sincronización local que protege la continuidad operativa ante cortes de internet.',
    photo: './media/ai_service_3.webp',
    features: [
      {
        title: 'Motor SQL Server',
        desc: 'Integridad relacional diseñada para alto volumen transaccional.'
      },
      {
        title: 'Continuidad sin internet',
        desc: 'Operación desde red local con sincronización automática.'
      },
      {
        title: 'Automatización de procesos',
        desc: 'Eliminación de tareas repetitivas en caja y administración.'
      }
    ]
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Asesoría inicial',
    desc: 'Evaluamos las necesidades específicas de tu empresa.'
  },
  {
    step: '02',
    title: 'Implementación',
    desc: 'Despliegue del software y configuración de módulos.'
  },
  {
    step: '03',
    title: 'Capacitación y soporte',
    desc: 'Entrenamiento a tu equipo y soporte técnico continuo.'
  }
];

const FAQS = [
  {
    question: '¿Es el sistema ERP solo para empresas grandes?',
    answer:
      'No, Figs Software es una solución escalable diseñada para cualquier empresa que busque organizar sus procesos, sin importar su tamaño.'
  },
  {
    question: '¿Qué pasa si falla el internet?',
    answer:
      'Nuestra aplicación de escritorio permite seguir trabajando desde la red local y sincronizar la información automáticamente al restablecerse la conexión.'
  }
];

const WORKSPACE_TABS = [
  {
    id: 'ecf',
    label: 'e-CF DGII',
    heading: 'Facturación electrónica autorizada',
    subtitle: 'Proveedores autorizados DGII · Emisión y recepción XML',
    rows: [
      { code: 'E31', label: 'Crédito fiscal electrónico', state: 'Validado DGII' },
      { code: 'E32', label: 'Consumo electrónico', state: 'Emitido' },
      { code: 'E34', label: 'Nota de crédito e-CF', state: 'Sincronizado' },
      { code: 'E44', label: 'Regímenes especiales', state: 'Homologado' }
    ]
  },
  {
    id: 'erp',
    label: 'ERP Windows',
    heading: 'Gestión centralizada de operaciones',
    subtitle: 'Microsoft Windows · Ventas, inventario y finanzas',
    rows: [
      { code: 'VNT', label: 'Facturación y punto de venta', state: 'Integrado' },
      { code: 'INV', label: 'Control de inventario y almacén', state: 'Tiempo real' },
      { code: 'FIN', label: 'Cuentas por cobrar y pagar', state: 'Conciliado' },
      { code: 'REP', label: 'Reportes gerenciales', state: 'Disponible' }
    ]
  },
  {
    id: 'sql',
    label: 'SQL Server',
    heading: 'Respaldo y sincronización local',
    subtitle: 'Microsoft SQL Server · Continuidad ante fallos de red',
    rows: [
      { code: 'SQL', label: 'Base de datos relacional', state: 'Local / Red' },
      { code: 'SYN', label: 'Sincronización automática', state: 'Al reconectar' },
      { code: 'WIN', label: 'Terminales de escritorio', state: 'Operación local' },
      { code: 'SOP', label: 'Acompañamiento técnico', state: 'Incluido' }
    ]
  }
];

// --- BESPOKE HERO VISUAL: ENTERPRISE ERP & e-CF WORKSPACE ---
function HeroErpWorkspace() {
  const [activeTab, setActiveTab] = useState('ecf');
  const current = WORKSPACE_TABS.find((t) => t.id === activeTab) || WORKSPACE_TABS[0];

  return (
    <div className="erp-workspace-frame" aria-label="Vista del sistema Figs Software ERP">
      <div className="erp-window-bar">
        <div className="erp-window-brand">
          <img
            src="./media/logo_real.jpg"
            alt="Figs Software"
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '9999px',
              backgroundColor: '#FFFFFF',
              objectFit: 'cover'
            }}
          />
          <span>Figs ERP · Windows / SQL Server</span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)' }}>
          DGII e-CF
        </span>
      </div>

      <div className="erp-window-tabs" role="tablist" aria-label="Módulos del sistema">
        {WORKSPACE_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`erp-tab-btn ${activeTab === tab.id ? 'is-active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="erp-workspace-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              style={{
                fontSize: '1.2rem',
                fontWeight: 500,
                marginBottom: '0.3rem',
                color: 'var(--text-primary)'
              }}
            >
              {current.heading}
            </h2>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              {current.subtitle}
            </p>

            <div>
              {current.rows.map((row) => (
                <div key={row.code} className="erp-ledger-row">
                  <span className="erp-ledger-code">{row.code}</span>
                  <span className="erp-ledger-meta">{row.label}</span>
                  <span className="erp-ledger-status">{row.state}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- NAVIGATION ---
function Navigation({ currentRoute, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Inicio', path: '#/' },
    { label: 'Servicios', path: '#/servicios' },
    { label: 'Casos', path: '#/casos' },
    { label: 'Nosotros', path: '#/nosotros' },
    { label: 'Contacto', path: '#/contacto' }
  ];

  return (
    <nav className="site-nav">
      <div className="container-bespoke nav-inner">
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            onNavigate('#/');
          }}
          className="brand-emblem-wrap"
        >
          <img
            src="./media/logo_real.jpg"
            alt="Logo Figs Software"
            className="brand-logo-emblem"
          />
          <span>{BRAND.name}</span>
        </a>

        <div className="nav-links-desktop">
          {links.map((link) => {
            const isActive =
              link.path === '#/'
                ? currentRoute === '#/' || currentRoute === ''
                : currentRoute.startsWith(link.path);
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.path);
                }}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <MagneticButton
            href={BRAND.whatsappUrl}
            target="_blank"
            variant="primary"
            className="nav-cta-desktop"
            style={{ padding: '11px 22px', minHeight: '44px', fontSize: '0.9rem' }}
          >
            Agendar demo
          </MagneticButton>

          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mobile-nav-drawer"
          >
            {links.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  onNavigate(link.path);
                }}
                className="nav-link-item"
                style={{ fontSize: '1.08rem', padding: '10px 0' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-figs"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              Agendar demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// --- PAGE: HOME (#/) ---
function HomePage({ onNavigate }) {
  return (
    <>
      {/* 1. HERO SECTION (Asymmetric 12-col Split: 7 / 5) */}
      <EditorialSurface variant="architectural" tone="primary">
        <div className="container-bespoke">
          <div className="hero-split-grid">
            <div>
              <RevealText as="h1" className="hero-title" immediate>
                Automatiza tu empresa con precisión
              </RevealText>
              <p className="lead-text" style={{ marginBottom: '2.25rem' }}>
                ERP estable y facturación electrónica DGII con 28 años en Latinoamérica.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <MagneticButton href={BRAND.whatsappUrl} target="_blank" variant="primary">
                  Agendar demo
                </MagneticButton>
                <MagneticButton
                  href="#/servicios"
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/servicios');
                  }}
                >
                  Ver soluciones
                </MagneticButton>
              </div>
            </div>

            <HeroErpWorkspace />
          </div>
        </div>
      </EditorialSurface>

      {/* 2. CONFIANZA EMPRESARIAL: 16 LOGOS REALES + CIFRAS VERIFICADAS */}
      <EditorialSurface variant="grain" tone="secondary">
        <div className="container-bespoke section-spacing">
          <div style={{ marginBottom: '2.5rem', maxWidth: '620px' }}>
            <RevealText as="h2" className="section-title">
              Empresas que confían en Figs Software
            </RevealText>
          </div>

          <div className="client-logos-grid">
            {CLIENT_LOGOS.map((client, idx) => (
              <div key={idx} className="client-logo-card" title={client.name}>
                <img
                  src={client.src}
                  alt={client.name}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="metrics-editorial-row">
            <CounterMetric value="2,574" label="Empresas activas" />
            <CounterMetric value="28" label="Años de experiencia" />
            <CounterMetric value="5" label="Países de operación" />
          </div>
        </div>
      </EditorialSurface>

      {/* 3. SOLUCIONES DE GESTIÓN (3 CARDS CON VISUALES COHESIVOS) */}
      <EditorialSurface variant="mesh" tone="primary">
        <div className="container-bespoke section-spacing">
          <div style={{ maxWidth: '620px' }}>
            <RevealText as="h2" className="section-title">
              Soluciones de gestión empresarial
            </RevealText>
            <p className="lead-text">
              Sistemas robustos sobre Microsoft Windows y SQL Server.
            </p>
          </div>

          <div className="services-bespoke-grid">
            {SERVICES.map((srv) => (
              <article key={srv.slug} className="service-bespoke-card">
                <ClipRevealImage
                  src={srv.photo}
                  alt={srv.title}
                  aspectRatio="16 / 10"
                  radius="0px"
                  parallax
                />
                <div className="service-card-body">
                  <h3 className="card-title" style={{ marginBottom: '0.65rem' }}>
                    {srv.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.94rem',
                      marginBottom: '1.75rem',
                      flexGrow: 1
                    }}
                  >
                    {srv.shortDesc}
                  </p>
                  <a
                    href={`#/servicios/${srv.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`#/servicios/${srv.slug}`);
                    }}
                    className="craft-link-underline"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--text-primary)',
                      fontSize: '0.94rem',
                      fontWeight: 500,
                      width: 'fit-content'
                    }}
                  >
                    <span>Explorar módulo</span>
                    <ArrowUpRight size={17} strokeWidth={1.6} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </EditorialSurface>

      {/* 4. INVERSIÓN INTELIGENTE: PROMOCIÓN DGII RD$30,000 (CONTRAST) */}
      <EditorialSurface variant="contrast" tone="contrast">
        <div className="container-bespoke section-spacing">
          <div className="contrast-promo-card">
            <div>
              <RevealText
                as="h2"
                className="section-title"
                style={{ color: '#07111E', marginBottom: '1rem' }}
              >
                Facturación electrónica DGII
              </RevealText>
              <p
                style={{
                  color: '#334155',
                  fontSize: '1.02rem',
                  lineHeight: 1.55,
                  maxWidth: '500px',
                  marginBottom: '1.75rem'
                }}
              >
                Certificación e implementación e-CF con soporte técnico incluido.
              </p>
              <MagneticButton
                href={BRAND.whatsappUrl}
                target="_blank"
                variant="primary"
                style={{ backgroundColor: '#07111E', color: '#FFFFFF' }}
              >
                Solicitar plan
              </MagneticButton>
            </div>

            <div className="contrast-price-panel">
              <div className="contrast-price-tag" style={{ marginBottom: '0.75rem' }}>
                RD$30,000
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>
                Promoción limitada · Proveedores autorizados DGII
              </p>
            </div>
          </div>
        </div>
      </EditorialSurface>

      {/* 5. COBERTURA MULTIPAÍS (INTERACTIVE GLOBE) & PROCESO */}
      <EditorialSurface variant="ambient" tone="primary">
        <div className="container-bespoke section-spacing">
          <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
            <RevealText as="h2" className="section-title">
              Presencia en 5 países
            </RevealText>
            <p className="lead-text">
              Operación continua en República Dominicana, Venezuela, Colombia, Perú y Panamá.
            </p>
          </div>

          <InteractiveGlobe
            locations={BRAND.countries}
            accentColor="#0096C7"
            themeMode="dark"
            size={460}
          />

          <div className="advantages-grid">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="advantage-item">
                <span className="advantage-index">{item.step}</span>
                <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </EditorialSurface>

      {/* 6. CIERRE & CONTACTO DIRECTO */}
      <EditorialSurface variant="architectural" tone="secondary">
        <div className="container-bespoke section-spacing">
          <div className="cta-closing-panel">
            <div>
              <RevealText as="h2" className="section-title" style={{ marginBottom: '0.75rem' }}>
                Agenda tu diagnóstico técnico
              </RevealText>
              <p className="lead-text">
                Conversa directo con nuestro equipo en Santo Domingo.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <MagneticButton href={BRAND.whatsappUrl} target="_blank" variant="primary">
                WhatsApp
              </MagneticButton>
              <MagneticButton
                href="#/contacto"
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('#/contacto');
                }}
              >
                Ver contacto
              </MagneticButton>
            </div>
          </div>
        </div>
      </EditorialSurface>
    </>
  );
}

// --- PAGE: SERVICIOS (#/servicios) ---
function ServicesPage({ onNavigate }) {
  return (
    <div style={{ paddingTop: '4.25rem' }}>
      <EditorialSurface variant="architectural" tone="primary">
        <div className="container-bespoke subpage-hero">
          <RevealText as="h1" className="hero-title" immediate>
            Módulos para tu empresa
          </RevealText>
          <p className="lead-text">
            Software ERP y facturación electrónica DGII con estabilidad comprobada.
          </p>
        </div>
      </EditorialSurface>

      <EditorialSurface variant="mesh" tone="secondary">
        <div className="container-bespoke section-spacing">
          <div className="services-bespoke-grid" style={{ marginTop: 0 }}>
            {SERVICES.map((srv) => (
              <article key={srv.slug} className="service-bespoke-card">
                <ClipRevealImage
                  src={srv.photo}
                  alt={srv.title}
                  aspectRatio="16 / 10"
                  radius="0px"
                  parallax
                />
                <div className="service-card-body">
                  <h2 className="card-title" style={{ marginBottom: '0.75rem' }}>
                    {srv.title}
                  </h2>
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.94rem',
                      marginBottom: '1.75rem',
                      flexGrow: 1
                    }}
                  >
                    {srv.fullDesc}
                  </p>
                  <MagneticButton
                    href={`#/servicios/${srv.slug}`}
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`#/servicios/${srv.slug}`);
                    }}
                    style={{ width: '100%' }}
                  >
                    Ver detalles
                  </MagneticButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </EditorialSurface>

      <EditorialSurface variant="ambient" tone="primary">
        <div className="container-bespoke section-spacing">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <RevealText as="h2" className="section-title" style={{ marginBottom: '2rem' }}>
              Preguntas frecuentes
            </RevealText>
            <EditorialAccordion items={FAQS} />
          </div>
        </div>
      </EditorialSurface>
    </div>
  );
}

// --- PAGE: DETALLE DE SERVICIO (#/servicios/<slug>) ---
function ServiceDetailPage({ slug, onNavigate }) {
  const service = SERVICES.find((s) => s.slug === slug) || SERVICES[0];

  return (
    <div style={{ paddingTop: '4.25rem' }}>
      <EditorialSurface variant="architectural" tone="primary">
        <div className="container-bespoke subpage-hero">
          <div style={{ marginBottom: '2rem' }}>
            <a
              href="#/servicios"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#/servicios');
              }}
              className="craft-link-underline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                fontSize: '0.92rem'
              }}
            >
              <ArrowLeft size={16} strokeWidth={1.6} />
              <span>Volver a servicios</span>
            </a>
          </div>

          <div className="detail-hero-split">
            <div>
              <RevealText as="h1" className="hero-title" immediate>
                {service.title}
              </RevealText>
              <p className="lead-text" style={{ marginBottom: '2.25rem' }}>
                {service.fullDesc}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <MagneticButton
                  href={`https://wa.me/8495644000?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20${encodeURIComponent(
                    service.title
                  )}%20de%20Figs%20Software.`}
                  target="_blank"
                  variant="primary"
                >
                  Cotizar módulo
                </MagneticButton>
                <MagneticButton
                  href="#/contacto"
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/contacto');
                  }}
                >
                  Ver contacto
                </MagneticButton>
              </div>
            </div>

            <ClipRevealImage
              src={service.photo}
              alt={service.title}
              aspectRatio="4 / 3"
              priority
              parallax
            />
          </div>
        </div>
      </EditorialSurface>

      <EditorialSurface variant="ambient" tone="secondary">
        <div className="container-bespoke section-spacing">
          <RevealText as="h2" className="section-title">
            Capacidades clave
          </RevealText>

          <div className="detail-specs-grid">
            {service.features.map((feat, idx) => (
              <div key={idx} className="spec-item-box">
                <span className="advantage-index">0{idx + 1}</span>
                <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>
                  {feat.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </EditorialSurface>
    </div>
  );
}

// --- PAGE: CASOS (#/casos) ---
function CasesPage() {
  return (
    <div style={{ paddingTop: '4.25rem' }}>
      <EditorialSurface variant="architectural" tone="primary">
        <div className="container-bespoke subpage-hero">
          <RevealText as="h1" className="hero-title" immediate>
            Empresas en operación
          </RevealText>
          <p className="lead-text">
            Más de 2,574 negocios activos respaldan nuestra trayectoria en Latinoamérica.
          </p>
        </div>
      </EditorialSurface>

      <EditorialSurface variant="mesh" tone="secondary">
        <div className="container-bespoke section-spacing">
          <div className="metrics-editorial-row" style={{ marginTop: 0 }}>
            <CounterMetric value="2,574" label="Empresas activas" />
            <CounterMetric value="28" label="Años de experiencia" />
            <CounterMetric value="5" label="Países de operación" />
          </div>
        </div>
      </EditorialSurface>

      <EditorialSurface variant="ambient" tone="primary">
        <div className="container-bespoke section-spacing">
          <RevealText as="h2" className="section-title" style={{ marginBottom: '2.5rem' }}>
            Directorio de clientes
          </RevealText>

          <div className="client-logos-grid">
            {CLIENT_LOGOS.map((client, idx) => (
              <div key={idx} className="client-logo-card" style={{ height: '74px' }} title={client.name}>
                <img
                  src={client.src}
                  alt={client.name}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '4rem',
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderTop: '1px solid var(--border-hairline)',
              borderBottom: '1px solid var(--border-hairline)'
            }}
          >
            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.3vw, 1.85rem)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                lineHeight: 1.35,
                marginBottom: '1rem',
                maxWidth: '820px'
              }}
            >
              “{BRAND.quote}”
            </blockquote>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Figs Software · Santo Domingo
            </span>
          </div>
        </div>
      </EditorialSurface>
    </div>
  );
}

// --- PAGE: NOSOTROS (#/nosotros) ---
function AboutPage() {
  return (
    <div style={{ paddingTop: '4.25rem' }}>
      <EditorialSurface variant="architectural" tone="primary">
        <div className="container-bespoke subpage-hero">
          <RevealText as="h1" className="hero-title" immediate>
            28 años de software confiable
          </RevealText>
          <p className="lead-text">
            Desarrollo y despliegue de soluciones ERP para ventas, inventario y facturación electrónica.
          </p>
        </div>
      </EditorialSurface>

      <EditorialSurface variant="ambient" tone="secondary">
        <div className="container-bespoke section-spacing">
          <div className="about-editorial-split">
            <div>
              <RevealText as="h2" className="section-title" style={{ marginBottom: '1.5rem' }}>
                Continuidad pensada para el negocio real
              </RevealText>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                Figs Software desarrolla aplicaciones estables y amigables para entornos de escritorio con Microsoft Windows y sincronización local sobre SQL Server.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Nuestro enfoque automatiza procesos manuales y garantiza la continuidad operativa incluso ante fallos de conexión.
              </p>
              <MagneticButton href={BRAND.whatsappUrl} target="_blank" variant="primary">
                Hablar con asesor
              </MagneticButton>
            </div>

            <ClipRevealImage
              src="./media/post_20.jpg"
              alt="Figs Software gestión empresarial"
              aspectRatio="4 / 5"
              parallax
            />
          </div>
        </div>
      </EditorialSurface>
    </div>
  );
}

// --- PAGE: CONTACTO (#/contacto) ---
function ContactPage() {
  return (
    <div style={{ paddingTop: '4.25rem' }}>
      <EditorialSurface variant="architectural" tone="primary">
        <div className="container-bespoke subpage-hero">
          <RevealText as="h1" className="hero-title" immediate>
            Conversemos sobre tu empresa
          </RevealText>
          <p className="lead-text">
            Atención directa para demostraciones ERP y certificación e-CF ante la DGII.
          </p>
        </div>
      </EditorialSurface>

      <EditorialSurface variant="mesh" tone="secondary">
        <div className="container-bespoke section-spacing">
          <div className="detail-specs-grid" style={{ marginTop: 0 }}>
            <div className="spec-item-box">
              <h2 className="card-title" style={{ marginBottom: '0.6rem' }}>
                Sede central
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1.5rem' }}>
                {BRAND.hq}
              </p>
              <MagneticButton
                href="https://maps.google.com/?q=Santo+Domingo,+Republica+Dominicana"
                target="_blank"
                variant="secondary"
              >
                Abrir mapa
              </MagneticButton>
            </div>

            <div className="spec-item-box">
              <h2 className="card-title" style={{ marginBottom: '0.6rem' }}>
                WhatsApp oficial
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1.5rem' }}>
                {BRAND.phoneDisplay}
              </p>
              <MagneticButton href={BRAND.whatsappUrl} target="_blank" variant="primary">
                Escribir ahora
              </MagneticButton>
            </div>

            <div className="spec-item-box">
              <h2 className="card-title" style={{ marginBottom: '0.6rem' }}>
                Instagram
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1.5rem' }}>
                @figs.software
              </p>
              <MagneticButton href={BRAND.instagramUrl} target="_blank" variant="secondary">
                Ver perfil
              </MagneticButton>
            </div>
          </div>

          <div style={{ marginTop: '4.5rem' }}>
            <RevealText as="h2" className="section-title" style={{ marginBottom: '2rem' }}>
              Cobertura regional
            </RevealText>
            <InteractiveGlobe
              locations={BRAND.countries}
              accentColor="#0096C7"
              themeMode="dark"
              size={440}
            />
          </div>
        </div>
      </EditorialSurface>
    </div>
  );
}

// --- FOOTER ---
function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="container-bespoke">
        <div className="footer-top-grid">
          <div>
            <div className="brand-emblem-wrap" style={{ marginBottom: '1.1rem' }}>
              <img
                src="./media/logo_real.jpg"
                alt="Figs Software Logo"
                className="brand-logo-emblem"
              />
              <span style={{ fontSize: '1.18rem' }}>{BRAND.name}</span>
            </div>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.92rem',
                maxWidth: '360px',
                lineHeight: 1.55,
                marginBottom: '1rem'
              }}
            >
              {BRAND.tagline}.
            </p>
            <p style={{ color: 'var(--gold-accent)', fontSize: '0.84rem', fontFamily: 'var(--font-mono)' }}>
              Proveedores autorizados DGII
            </p>
          </div>

          <div>
            <span className="footer-heading">Navegación</span>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.7rem',
                fontSize: '0.92rem',
                color: 'var(--text-muted)'
              }}
            >
              <li>
                <a
                  href="#/"
                  className="craft-link-underline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/');
                  }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#/servicios"
                  className="craft-link-underline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/servicios');
                  }}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#/casos"
                  className="craft-link-underline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/casos');
                  }}
                >
                  Casos
                </a>
              </li>
              <li>
                <a
                  href="#/nosotros"
                  className="craft-link-underline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/nosotros');
                  }}
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#/contacto"
                  className="craft-link-underline"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/contacto');
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="footer-heading">Contacto</span>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '0.45rem' }}>
              {BRAND.hq}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              {BRAND.phoneDisplay}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-figs"
                style={{ padding: '12px 22px', minHeight: '44px', fontSize: '0.88rem' }}
              >
                WhatsApp
              </a>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-figs"
                style={{ padding: '12px 22px', minHeight: '44px', fontSize: '0.88rem' }}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>© {new Date().getFullYear()} {BRAND.name}</div>
          <div>Microsoft Windows · SQL Server · DGII</div>
        </div>
      </div>
    </footer>
  );
}

// --- MAIN APP & HASH ROUTER ---
export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const h = window.location.hash || '#/';
      setCurrentRoute(h);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentView = () => {
    if (currentRoute === '#/' || currentRoute === '') {
      return <HomePage onNavigate={navigate} />;
    }
    if (currentRoute === '#/servicios') {
      return <ServicesPage onNavigate={navigate} />;
    }
    if (currentRoute.startsWith('#/servicios/')) {
      const slug = currentRoute.replace('#/servicios/', '');
      return <ServiceDetailPage slug={slug} onNavigate={navigate} />;
    }
    if (currentRoute === '#/casos') {
      return <CasesPage />;
    }
    if (currentRoute === '#/nosotros') {
      return <AboutPage />;
    }
    if (currentRoute === '#/contacto') {
      return <ContactPage />;
    }
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollProgressBar color="#0096C7" />
      <Navigation currentRoute={currentRoute} onNavigate={navigate} />

      <main style={{ flexGrow: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
