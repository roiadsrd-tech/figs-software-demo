import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Database,
  Monitor,
  Smartphone,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  ShieldCheck,
  ExternalLink,
  Cpu,
  Layers,
  FileCheck,
  Building2,
  Clock
} from 'lucide-react';
import {
  EditorialSurface,
  RevealText,
  ClipRevealImage,
  MagneticButton,
  ScrollProgressBar,
  EditorialAccordion,
  CounterMetric,
  InteractiveGlobe
} from './craft';

const WHATSAPP_URL =
  'https://wa.me/18495644000?text=Hola%2C%20vi%20el%20sitio%20web%20de%20Figs%20Software%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20la%20implementaci%C3%B3n%20de%20facturaci%C3%B3n%20electr%C3%B3nica%20y%20ERP.';
const WHATSAPP_PACKAGE_URL =
  'https://wa.me/18495644000?text=Hola%2C%20me%20interesa%20adquirir%20el%20Paquete%20de%20Facturaci%C3%B3n%20Electr%C3%B3nica%20DGII%20por%20RD%2430%2C000.';
const INSTAGRAM_URL = 'https://www.instagram.com/figs.software/';

const CLIENT_LOGOS = [
  { id: 1, src: './client-logos/client_logo_1.jpg', name: 'Empresa Cliente' },
  { id: 2, src: './client-logos/client_logo_2.jpg', name: 'Empresa Cliente' },
  { id: 3, src: './client-logos/client_logo_3.png', name: 'AroyPedal' },
  { id: 4, src: './client-logos/client_logo_4.jpg', name: 'Empresa Cliente' },
  { id: 5, src: './client-logos/client_logo_5.jpg', name: 'Empresa Cliente' },
  { id: 6, src: './client-logos/client_logo_6.jpg', name: 'Couture' },
  { id: 7, src: './client-logos/client_logo_7.jpg', name: 'Empresa Cliente' },
  { id: 8, src: './client-logos/client_logo_8.jpg', name: 'Disfármaco' },
  { id: 9, src: './client-logos/client_logo_9.jpg', name: 'Empresa Cliente' },
  { id: 10, src: './client-logos/client_logo_10.jpg', name: 'Empresa Cliente' },
  { id: 11, src: './client-logos/client_logo_11.png', name: 'Delta' },
  { id: 12, src: './client-logos/client_logo_12.jpg', name: 'Empresa Cliente' },
  { id: 13, src: './client-logos/client_logo_13.jpg', name: 'Empresa Cliente' },
  { id: 14, src: './client-logos/client_logo_14.jpg', name: 'Empresa Cliente' },
  { id: 15, src: './client-logos/client_logo_15.png', name: 'Interdeco' },
  { id: 16, src: './client-logos/client_logo_16.png', name: 'AHC' }
];

const DGII_STATUS_MODES = [
  {
    id: 'ecf',
    label: 'Emisión e-CF',
    title: 'Proveedor Autorizado DGII',
    detail: 'Emisión y recepción directa de comprobantes fiscales electrónicos.'
  },
  {
    id: 'offline',
    label: 'Red Local',
    title: 'Operación continua sin internet',
    detail: 'Facturación en red local con sincronización automática al reconectar.'
  },
  {
    id: 'sql',
    label: 'SQL Server',
    title: 'Base de datos corporativa',
    detail: 'Compatible con Windows, Mac, tablets y smartphones en tiempo real.'
  }
];

const CORPORATE_STATS = [
  { value: '+28', label: 'Años de experiencia' },
  { value: '5', label: 'Países en LATAM' },
  { value: '+2,574', label: 'Empresas activas' }
];

const SERVICES_DATA = [
  {
    number: '01',
    title: 'Facturación Electrónica DGII',
    slug: 'facturacion-electronica-dgii',
    kicker: 'Cumplimiento fiscal autorizado',
    shortDescription:
      'Emisión y recepción de comprobantes e-CF certificados ante la DGII.',
    description:
      'Te guiamos paso a paso para que implementes la emisión y recepción de comprobantes fiscales electrónicos (e-CF) sin detener tu operación y cumpliendo con las normativas de la DGII.',
    photo: './media/ai_service_2.webp',
    features: [
      {
        title: 'Certificación e implementación',
        desc: 'Proceso guiado de configuración de e-CF ante la DGII.'
      },
      {
        title: 'Emisión y recepción',
        desc: 'Capacidad para procesar comprobantes fiscales electrónicos de forma segura.'
      },
      {
        title: 'Acompañamiento experto',
        desc: 'Soporte técnico y asesoría continua para tu equipo.'
      }
    ],
    waMessage: 'Hola, deseo más información sobre Facturación Electrónica DGII con Figs Software.'
  },
  {
    number: '02',
    title: 'Sistema ERP y Gestión Empresarial',
    slug: 'sistema-erp-gestion',
    kicker: 'Control total de operaciones',
    shortDescription:
      'Inventario, nómina automática y operación continua incluso sin internet.',
    description:
      'Una aplicación estable y amigable con más de 20 años de evolución en el mercado, instalada en tu computador con Microsoft Windows y accesible desde múltiples dispositivos.',
    photo: './media/post_20.jpg',
    features: [
      {
        title: 'Control de Inventario',
        desc: 'Gestión de productos en múltiples almacenes, lotes, seriales y alertas de stock.'
      },
      {
        title: 'Módulo de Nómina y Personal',
        desc: 'Cálculo automático de ISR, TSS, horas extras, bonificaciones y sueldo de Navidad.'
      },
      {
        title: 'Aplicación de Escritorio y Red Local',
        desc: 'Sigue trabajando y operando incluso cuando el internet falla, sincronizando al reconectar.'
      }
    ],
    waMessage: 'Hola, me gustaría agendar una demo del Sistema ERP y Gestión Empresarial de Figs Software.'
  },
  {
    number: '03',
    title: 'POS Retail & Wholesale',
    slug: 'pos-retail-wholesale',
    kicker: 'Puntos de venta especializados',
    shortDescription:
      'Ventas, promociones, cierres de caja y control multisucursal integrado.',
    description:
      'Solución especializada para comercios minoristas y mayoristas que permite administrar ventas, inventario, promociones, múltiples sucursales y cierres de caja desde un solo lugar.',
    photo: './media/post_21.jpg',
    features: [
      {
        title: 'Control de Caja',
        desc: 'Registro detallado de ingresos, salidas y cierres de caja diarios.'
      },
      {
        title: 'Promociones y Descuentos',
        desc: 'Administración flexible de campañas comerciales y programas de fidelización.'
      },
      {
        title: 'Multi-sucursal',
        desc: 'Monitoreo centralizado de operaciones en distintas ubicaciones.'
      }
    ],
    waMessage: 'Hola, quisiera información sobre el sistema POS Retail & Wholesale de Figs Software.'
  }
];

const FAQS_DATA = [
  {
    question: '¿Cuándo debo implementar la facturación electrónica en mi empresa?',
    answer:
      'La fecha límite para contribuyentes pequeños, micros y no clasificados según la DGII es el 15 de noviembre de 2026. Te recomendamos prepararte con anticipación para realizar una transición sin estrés.'
  },
  {
    question: '¿Puedo seguir trabajando si falla el internet?',
    answer:
      'Sí. Con la aplicación de escritorio de Figs puedes continuar operando desde tu red local y la información se sincronizará automáticamente al restablecerse la conexión.'
  },
  {
    question: '¿Qué incluye la solución de facturación electrónica de Figs?',
    answer:
      'Incluye certificación e implementación ante la DGII, licencia de por vida de Figs® POS Retail o POS Restaurante, emisión y recepción de 5,000 comprobantes, 2 horas de instalación y capacitación, y 1 año de soporte técnico remoto.'
  }
];

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dgiiModeIndex, setDgiiModeIndex] = useState(0);
  const activeDgiiMode = DGII_STATUS_MODES[dgiiModeIndex];

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || '#/';
      setCurrentHash(newHash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (hash) => {
    window.location.hash = hash;
  };

  // Router parsing
  const isHome = currentHash === '#/' || currentHash === '';
  const isServices = currentHash === '#/servicios';
  const isServiceDetail = currentHash.startsWith('#/servicios/');
  const serviceSlug = isServiceDetail ? currentHash.replace('#/servicios/', '') : null;
  const currentService = SERVICES_DATA.find((s) => s.slug === serviceSlug);

  const isCases = currentHash === '#/casos';
  const isAbout = currentHash === '#/nosotros';
  const isContact = currentHash === '#/contacto';

  return (
    <div className="site-wrapper">
      <ScrollProgressBar color="var(--accent)" />

      {/* Main Fixed Navbar */}
      <header className="header-nav">
        <div className="container header-nav-inner">
          <a
            href="#/"
            className="brand-emblem-wrap"
            onClick={(e) => {
              e.preventDefault();
              navigate('#/');
            }}
          >
            <img
              src="./media/logo_real.jpg"
              alt="Figs Software Logo"
              className="brand-emblem-logo"
            />
            <div>
              <div className="brand-name">Figs Software</div>
              <div className="brand-subtext">ERP & Facturación DGII</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav-links-desktop">
            <a
              href="#/"
              className={`nav-link-item ${isHome ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('#/');
              }}
            >
              Inicio
            </a>
            <a
              href="#/servicios"
              className={`nav-link-item ${isServices || isServiceDetail ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('#/servicios');
              }}
            >
              Servicios
            </a>
            <a
              href="#/casos"
              className={`nav-link-item ${isCases ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('#/casos');
              }}
            >
              Casos Reales
            </a>
            <a
              href="#/nosotros"
              className={`nav-link-item ${isAbout ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('#/nosotros');
              }}
            >
              Nosotros
            </a>
            <a
              href="#/contacto"
              className={`nav-link-item ${isContact ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('#/contacto');
              }}
            >
              Contacto
            </a>
          </nav>

          {/* Nav Action CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn"
            >
              Agendar demo
            </a>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-nav-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <a
                href="#/"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('#/');
                }}
              >
                Inicio
              </a>
              <a
                href="#/servicios"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('#/servicios');
                }}
              >
                Servicios
              </a>
              <a
                href="#/casos"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('#/casos');
                }}
              >
                Casos Reales
              </a>
              <a
                href="#/nosotros"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('#/nosotros');
                }}
              >
                Nosotros
              </a>
              <a
                href="#/contacto"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('#/contacto');
                }}
              >
                Contacto
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta-btn"
                style={{ marginTop: '10px', textAlign: 'center' }}
              >
                Agendar demo WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Routing Views with AnimatePresence */}
      <AnimatePresence mode="wait">
        {/* VIEW: HOME (#/) */}
        {isHome && (
          <motion.main
            key="page-home"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* 1. HERO SECTION (Split 55/45) */}
            <EditorialSurface variant="mesh" tone="primary" className="hero-section">
              <div className="container">
                <div className="hero-grid">
                  <div className="hero-content">
                    <RevealText as="h1" immediate className="hero-title">
                      Automatiza con software especializado
                    </RevealText>
                    <p className="hero-subtitle">
                      Cumple con la DGII de forma rápida, económica y sin detener tu empresa.
                    </p>
                    <div className="hero-actions">
                      <MagneticButton
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                      >
                        Agendar demo
                      </MagneticButton>
                      <MagneticButton
                        onClick={() => navigate('#/servicios')}
                        variant="secondary"
                      >
                        Ver soluciones
                      </MagneticButton>
                    </div>
                  </div>

                  <div className="hero-visual-frame">
                    <img
                      src="./media/ai_service_2.webp"
                      alt="Figs Software Plataforma ERP y DGII"
                      className="hero-visual-img"
                    />
                    <div className="hero-floating-card">
                      <div className="hero-status-top">
                        <div>
                          <div className="hero-badge-title">{activeDgiiMode.title}</div>
                          <div className="hero-badge-sub">{activeDgiiMode.detail}</div>
                        </div>
                        <ShieldCheck size={22} color="var(--accent-hover)" style={{ flexShrink: 0 }} />
                      </div>
                      <div className="hero-status-tabs" role="tablist" aria-label="Capacidades de la plataforma">
                        {DGII_STATUS_MODES.map((mode, idx) => (
                          <button
                            key={mode.id}
                            type="button"
                            role="tab"
                            aria-selected={dgiiModeIndex === idx}
                            className={`hero-status-tab ${dgiiModeIndex === idx ? 'is-active' : ''}`}
                            onClick={() => setDgiiModeIndex(idx)}
                          >
                            {mode.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </EditorialSurface>

            {/* 2. SOCIAL PROOF — LOGOS REALES DE CLIENTES */}
            <section className="logos-section">
              <div className="container">
                <div className="logos-heading-wrap">
                  <span className="logos-label">Empresas que confían en Figs Software</span>
                </div>
                <div className="logos-grid">
                  {CLIENT_LOGOS.map((client) => (
                    <div key={client.id} className="client-logo-pill" title={client.name}>
                      <img
                        src={client.src}
                        alt={client.name}
                        className="client-logo-img"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. SERVICIOS / SOLUCIONES INTEGRALES */}
            <EditorialSurface variant="ambient" tone="secondary" style={{ paddingBlock: 'clamp(56px, 9vh, 90px)' }}>
              <div className="container">
                <div className="section-head centered">
                  <RevealText as="h2">Soluciones integrales de gestión</RevealText>
                  <p className="section-sub">
                    Plataformas estables para optimizar operaciones y cumplir con la DGII.
                  </p>
                </div>

                <div className="services-grid">
                  {SERVICES_DATA.map((service) => (
                    <div key={service.slug} className="service-card">
                      <div className="service-card-media">
                        <img
                          src={service.photo}
                          alt={service.title}
                          className="service-card-img"
                          loading="lazy"
                        />
                      </div>
                      <div className="service-card-body">
                        <h3 className="service-card-title">{service.title}</h3>
                        <p className="service-card-desc">{service.shortDescription}</p>
                        <a
                          href={`#/servicios/${service.slug}`}
                          className="service-card-link craft-link-underline"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`#/servicios/${service.slug}`);
                          }}
                        >
                          Conocer detalles <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </EditorialSurface>

            {/* 4. IMPLEMENTACIÓN INMEDIATA / PAQUETE DESTACADO (HIGH CONTRAST) */}
            <EditorialSurface variant="contrast" tone="contrast" style={{ paddingBlock: 'clamp(56px, 9vh, 90px)' }}>
              <div className="container">
                <div className="package-box">
                  <div className="package-left">
                    <h2 className="package-title">Facturación electrónica integral</h2>
                    <p className="package-desc">
                      Implementación autorizada por la DGII, configurada para tu negocio con soporte directo.
                    </p>

                    <div className="package-features-list">
                      <div className="package-feat-item">
                        <CheckCircle2 size={18} color="#008EE6" />
                        <span>Certificación ante la DGII</span>
                      </div>
                      <div className="package-feat-item">
                        <CheckCircle2 size={18} color="#008EE6" />
                        <span>Licencia de por vida Figs® POS</span>
                      </div>
                      <div className="package-feat-item">
                        <CheckCircle2 size={18} color="#008EE6" />
                        <span>5,000 comprobantes fiscales</span>
                      </div>
                      <div className="package-feat-item">
                        <CheckCircle2 size={18} color="#008EE6" />
                        <span>2 horas de instalación y capacitación</span>
                      </div>
                      <div className="package-feat-item">
                        <CheckCircle2 size={18} color="#008EE6" />
                        <span>1 año de soporte técnico remoto</span>
                      </div>
                      <div className="package-feat-item">
                        <CheckCircle2 size={18} color="#008EE6" />
                        <span>POS Retail o POS Restaurante</span>
                      </div>
                    </div>
                  </div>

                  <div className="package-right">
                    <div className="package-price-tag">RD$30,000</div>
                    <div className="package-price-note">Pago único · Sin cargos ocultos</div>
                    <a
                      href={WHATSAPP_PACKAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="package-cta-btn"
                    >
                      Adquirir paquete
                    </a>
                  </div>
                </div>
              </div>
            </EditorialSurface>

            {/* 5. PRESENCIA LATAM CON GLOBO 3D Y MÉTRICAS */}
            <EditorialSurface variant="architectural" tone="primary" style={{ paddingBlock: 'clamp(56px, 9vh, 90px)' }}>
              <div className="container">
                <div className="coverage-grid">
                  <div className="coverage-stats-col">
                    <RevealText as="h2">Trayectoria y cobertura regional</RevealText>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                      Fundados en 1997 para auditorías globales. Hoy operamos en cinco países de Latinoamérica.
                    </p>

                    <div className="coverage-stats-row">
                      {CORPORATE_STATS.map((stat, idx) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 'some' }}
                          transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <CounterMetric value={stat.value} label={stat.label} />
                        </motion.div>
                      ))}
                    </div>

                    <div style={{ marginTop: '12px' }}>
                      <MagneticButton onClick={() => navigate('#/nosotros')} variant="secondary">
                        Nuestra historia
                      </MagneticButton>
                    </div>
                  </div>

                  <div className="coverage-globe-col">
                    <InteractiveGlobe
                      locations={[
                        'República Dominicana',
                        'Colombia',
                        'Venezuela',
                        'Perú',
                        'Panamá'
                      ]}
                      accentColor="#008EE6"
                      themeMode="dark"
                    />
                  </div>
                </div>
              </div>
            </EditorialSurface>

            {/* 6. PREGUNTAS FRECUENTES & CIERRE */}
            <EditorialSurface variant="grain" tone="secondary" style={{ paddingBlock: 'clamp(56px, 9vh, 90px)' }}>
              <div className="container" style={{ maxWidth: '860px' }}>
                <div className="section-head centered">
                  <RevealText as="h2">Preguntas frecuentes</RevealText>
                  <p className="section-sub">
                    Respuestas directas sobre facturación electrónica DGII y operación local.
                  </p>
                </div>

                <EditorialAccordion items={FAQS_DATA} />

                <div className="home-closing-cta">
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                      Empieza tu implementación hoy
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginTop: '6px' }}>
                      Agenda un diagnóstico técnico o demo guiada con nuestro equipo.
                    </p>
                  </div>
                  <div className="home-closing-cta-actions">
                    <MagneticButton
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                    >
                      Agendar demo
                    </MagneticButton>
                    <MagneticButton onClick={() => navigate('#/contacto')} variant="secondary">
                      Contacto
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </EditorialSurface>
          </motion.main>
        )}

        {/* VIEW: SERVICIOS CATÁLOGO (#/servicios) */}
        {isServices && (
          <motion.main
            key="page-services"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="page-header-banner">
              <div className="container">
                <a
                  href="#/"
                  className="breadcrumb-back-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('#/');
                  }}
                >
                  <ArrowLeft size={16} /> Volver al inicio
                </a>
                <RevealText as="h1">Catálogo de soluciones</RevealText>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '12px', maxWidth: '640px' }}>
                  Plataformas modulares y autorizadas para la gestión administrativa, ventas y cumplimiento tributario.
                </p>
              </div>
            </div>

            <EditorialSurface variant="ambient" tone="secondary" style={{ paddingBlock: 'clamp(48px, 8vh, 80px)' }}>
              <div className="container">
                <div className="services-grid">
                  {SERVICES_DATA.map((service) => (
                    <div key={service.slug} className="service-card">
                      <div className="service-card-media">
                        <img
                          src={service.photo}
                          alt={service.title}
                          className="service-card-img"
                        />
                      </div>
                      <div className="service-card-body">
                        <h2 style={{ fontSize: '1.35rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                          {service.title}
                        </h2>
                        <p className="service-card-desc">{service.shortDescription}</p>
                        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {service.features.map((feat, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                              <CheckCircle2 size={14} color="var(--accent)" />
                              <span>{feat.title}</span>
                            </div>
                          ))}
                        </div>
                        <a
                          href={`#/servicios/${service.slug}`}
                          className="service-card-link craft-link-underline"
                          style={{ marginTop: '16px' }}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`#/servicios/${service.slug}`);
                          }}
                        >
                          Ver especificaciones <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </EditorialSurface>
          </motion.main>
        )}

        {/* VIEW: SUBPÁGINA DEDICADA DE SERVICIO (#/servicios/<slug>) */}
        {isServiceDetail && currentService && (
          <motion.main
            key={`page-service-${currentService.slug}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="page-header-banner">
              <div className="container">
                <a
                  href="#/servicios"
                  className="breadcrumb-back-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('#/servicios');
                  }}
                >
                  <ArrowLeft size={16} /> Volver a servicios
                </a>
                <RevealText as="h1" immediate>
                  {currentService.title}
                </RevealText>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '14px', maxWidth: '720px' }}>
                  {currentService.description}
                </p>
              </div>
            </div>

            <EditorialSurface variant="ambient" tone="primary">
              <div className="container">
                <div className="service-detail-grid">
                  <div className="service-detail-content">
                    <ClipRevealImage
                      src={currentService.photo}
                      alt={currentService.title}
                      aspectRatio="16/9"
                      parallax
                    />

                    <h2 style={{ fontSize: '1.6rem', fontWeight: 500, marginTop: '16px' }}>
                      Beneficios clave del módulo
                    </h2>

                    <div className="service-features-deep">
                      {currentService.features.map((feat, idx) => (
                        <div key={idx} className="service-feature-card">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                            <CheckCircle2 size={18} color="var(--accent-hover)" />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                              {feat.title}
                            </h3>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', paddingLeft: '28px', lineHeight: 1.5 }}>
                            {feat.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <aside className="service-detail-sidebar">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                      Solicitar demostración
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Conversemos con un especialista técnico para revisar el alcance de este módulo en tu empresa.
                    </p>
                    <a
                      href={`https://wa.me/18495644000?text=${encodeURIComponent(currentService.waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="package-cta-btn"
                    >
                      Consultar por WhatsApp
                    </a>

                    <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={15} color="var(--accent-hover)" />
                        <span>Instalación asistida y capacitación</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={15} color="var(--accent-hover)" />
                        <span>Soporte técnico remoto directo</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={15} color="var(--accent-hover)" />
                        <span>Cumplimiento certificado DGII</span>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </EditorialSurface>
          </motion.main>
        )}

        {/* VIEW: CASOS REALES (#/casos) */}
        {isCases && (
          <motion.main
            key="page-cases"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="page-header-banner">
              <div className="container">
                <a
                  href="#/"
                  className="breadcrumb-back-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('#/');
                  }}
                >
                  <ArrowLeft size={16} /> Volver al inicio
                </a>
                <RevealText as="h1">Casos y resultados reales</RevealText>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '12px', maxWidth: '640px' }}>
                  Implementaciones verificadas en empresas comerciales, de servicios y distribución en República Dominicana.
                </p>
              </div>
            </div>

            <EditorialSurface variant="ambient" tone="secondary" style={{ paddingBlock: 'clamp(56px, 9vh, 90px)' }}>
              <div className="container">
                <div className="case-card-split" style={{ marginBottom: '48px' }}>
                  <div className="case-card-media">
                    <img
                      src="./media/post_21.jpg"
                      alt="Caso Retail & Wholesale"
                      className="case-card-img"
                    />
                  </div>
                  <div className="case-card-content">
                    <h2 style={{ fontSize: '1.6rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                      Gestión Integral Retail & Wholesale
                    </h2>
                    <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      <strong>Desafío:</strong> Negocios con información dispersa en múltiples herramientas, cierres de caja tardíos y procesos manuales lentos que dificultaban la expansión.
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      <strong>Solución:</strong> Centralización de ventas, inventario por sucursales y facturación electrónica autorizada DGII mediante la plataforma Figs Software.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px 16px', borderRadius: '8px' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--accent-hover)' }}>DGII</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Proveedor autorizado</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px 16px', borderRadius: '8px' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--accent-hover)' }}>-90%</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Trabajo manual</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px 16px', borderRadius: '8px' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--accent-hover)' }}>Red Local</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Operación continua</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Visual Showcase */}
                <div className="case-card-split">
                  <div className="case-card-content">
                    <h2 style={{ fontSize: '1.6rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                      Estabilidad en alta demanda comercial
                    </h2>
                    <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      Con Figs® POS Retail o POS Restaurante puedes cobrar, emitir comprobantes fiscales electrónicos e-CF y mantener tu inventario sincronizado incluso ante interrupciones de internet.
                    </p>
                    <div style={{ marginTop: '16px' }}>
                      <MagneticButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="primary">
                        Solicitar asesoría
                      </MagneticButton>
                    </div>
                  </div>
                  <div className="case-card-media">
                    <img
                      src="./media/ai_service_2.webp"
                      alt="Infraestructura de punto de venta Figs Software"
                      className="case-card-img"
                    />
                  </div>
                </div>
              </div>
            </EditorialSurface>
          </motion.main>
        )}

        {/* VIEW: NOSOTROS (#/nosotros) */}
        {isAbout && (
          <motion.main
            key="page-about"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="page-header-banner">
              <div className="container">
                <a
                  href="#/"
                  className="breadcrumb-back-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('#/');
                  }}
                >
                  <ArrowLeft size={16} /> Volver al inicio
                </a>
                <RevealText as="h1">Más de 28 años de solidez</RevealText>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '12px', maxWidth: '640px' }}>
                  Ingeniería de software nacida para cumplir los más altos estándares corporativos internacionales.
                </p>
              </div>
            </div>

            <EditorialSurface variant="ambient" tone="primary" style={{ paddingBlock: 'clamp(56px, 9vh, 90px)' }}>
              <div className="container">
                <div className="benefits-grid">
                  <div className="benefits-content">
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 500 }}>Nuestra trayectoria</h2>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: 1.65 }}>
                      Nuestra empresa de software nace en Caracas, Venezuela en 1997 en base a contratos para el desarrollo de aplicaciones con empresas corporativas y firmas de auditoría de nivel mundial, definiendo altos estándares de calidad.
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: 1.65 }}>
                      En 2004 iniciamos proyectos en Colombia y República Dominicana, expandiéndonos en 2019 a Perú y Panamá. Ofrecemos una solución estable y amigable para la gestión de recursos empresariales (ERP), conectando ventas, inventario, operaciones, finanzas, contabilidad y facturación electrónica autorizada por la DGII.
                    </p>

                    <blockquote
                      style={{
                        borderLeft: '2px solid var(--accent)',
                        paddingLeft: '18px',
                        fontStyle: 'italic',
                        color: 'var(--text-muted)',
                        marginBlock: '12px',
                        lineHeight: 1.5
                      }}
                    >
                      "La facturación electrónica no es complicada cuando entiendes el proceso. Se trata de hacerlo en orden, con planificación y acompañamiento."
                    </blockquote>

                    <div style={{ marginTop: '16px' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '12px' }}>
                        Tecnologías verificadas
                      </h3>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {['SQL Server', 'Microsoft Windows', 'Mac', 'Tablets', 'Smartphones'].map((tech) => (
                          <span
                            key={tech}
                            style={{
                              background: 'rgba(255, 255, 255, 0.06)',
                              border: '1px solid var(--border-hairline)',
                              borderRadius: '6px',
                              padding: '6px 14px',
                              fontSize: '0.85rem',
                              color: 'var(--text-primary)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="benefits-media-wrap">
                    <ClipRevealImage
                      src="./media/post_20.jpg"
                      alt="Equipo y filosofía Figs Software"
                      aspectRatio="4/5"
                      parallax
                    />
                  </div>
                </div>
              </div>
            </EditorialSurface>
          </motion.main>
        )}

        {/* VIEW: CONTACTO (#/contacto) */}
        {isContact && (
          <motion.main
            key="page-contact"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="page-header-banner">
              <div className="container">
                <a
                  href="#/"
                  className="breadcrumb-back-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('#/');
                  }}
                >
                  <ArrowLeft size={16} /> Volver al inicio
                </a>
                <RevealText as="h1">Contacto y asesoría directa</RevealText>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '12px', maxWidth: '640px' }}>
                  Atención personalizada para empresas en Santo Domingo, San Pedro de Macorís y toda la República Dominicana.
                </p>
              </div>
            </div>

            <EditorialSurface variant="ambient" tone="secondary">
              <div className="container">
                <div className="contact-grid">
                  <div className="contact-card-info">
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 500 }}>Información verificada</h2>

                    <div className="contact-item-row">
                      <div className="contact-item-icon">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
                          Ubicación y Cobertura
                        </div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                          Santo Domingo, República Dominicana · Cobertura en San Pedro de Macorís y a nivel nacional.
                        </div>
                      </div>
                    </div>

                    <div className="contact-item-row">
                      <div className="contact-item-icon">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
                          Línea Directa y WhatsApp
                        </div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                          849-564-4000
                        </div>
                      </div>
                    </div>

                    <div className="contact-item-row">
                      <div className="contact-item-icon">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
                          Certificación Oficial
                        </div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                          Proveedores autorizados de facturación electrónica e-CF ante la DGII.
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: '12px' }}>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="package-cta-btn"
                        style={{ display: 'inline-flex', width: 'auto' }}
                      >
                        Iniciar conversación en WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="contact-card-info">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                      Cobertura y compatibilidad
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '10px', fontSize: '0.92rem' }}>
                        <span>República Dominicana</span>
                        <span style={{ color: 'var(--accent-hover)', textAlign: 'right' }}>Santo Domingo y San Pedro de Macorís</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '10px', fontSize: '0.92rem' }}>
                        <span>Presencia LATAM</span>
                        <span style={{ color: 'var(--accent-hover)', textAlign: 'right' }}>RD, Colombia, Venezuela, Perú y Panamá</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '10px', fontSize: '0.92rem' }}>
                        <span>Plataformas</span>
                        <span style={{ color: 'var(--text-muted)', textAlign: 'right' }}>SQL Server · Windows · Mac · Tablets · Smartphones</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', fontSize: '0.92rem' }}>
                        <span>Paquete DGII e-CF</span>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 500, textAlign: 'right' }}>RD$30,000 (pago único)</span>
                      </div>
                    </div>

                    <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px' }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        Incluye certificación ante la DGII, licencia de por vida Figs® POS Retail o Restaurante, 5,000 comprobantes, 2 horas de instalación y capacitación, y 1 año de soporte técnico remoto.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </EditorialSurface>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Corporate Footer */}
      <footer className="footer-corp">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <div className="brand-emblem-wrap">
                <img
                  src="./media/logo_real.jpg"
                  alt="Figs Software Logo"
                  className="brand-emblem-logo"
                />
                <div>
                  <div className="brand-name">Figs Software</div>
                  <div className="brand-subtext">ERP & Facturación DGII</div>
                </div>
              </div>
              <p className="footer-desc">
                Software empresarial ERP y proveedores autorizados de facturación electrónica ante la DGII en República Dominicana.
              </p>
            </div>

            <div>
              <div className="footer-col-title">Navegación</div>
              <ul className="footer-links-list">
                <li>
                  <a href="#/" className="footer-link-a" onClick={(e) => { e.preventDefault(); navigate('#/'); }}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#/servicios" className="footer-link-a" onClick={(e) => { e.preventDefault(); navigate('#/servicios'); }}>
                    Soluciones ERP
                  </a>
                </li>
                <li>
                  <a href="#/casos" className="footer-link-a" onClick={(e) => { e.preventDefault(); navigate('#/casos'); }}>
                    Casos Reales
                  </a>
                </li>
                <li>
                  <a href="#/nosotros" className="footer-link-a" onClick={(e) => { e.preventDefault(); navigate('#/nosotros'); }}>
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#/contacto" className="footer-link-a" onClick={(e) => { e.preventDefault(); navigate('#/contacto'); }}>
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Soluciones</div>
              <ul className="footer-links-list">
                <li>
                  <a href="#/servicios/facturacion-electronica-dgii" className="footer-link-a" onClick={(e) => { e.preventDefault(); navigate('#/servicios/facturacion-electronica-dgii'); }}>
                    Facturación DGII (e-CF)
                  </a>
                </li>
                <li>
                  <a href="#/servicios/sistema-erp-gestion" className="footer-link-a" onClick={(e) => { e.preventDefault(); navigate('#/servicios/sistema-erp-gestion'); }}>
                    Gestión Empresarial
                  </a>
                </li>
                <li>
                  <a href="#/servicios/pos-retail-wholesale" className="footer-link-a" onClick={(e) => { e.preventDefault(); navigate('#/servicios/pos-retail-wholesale'); }}>
                    POS Retail & Wholesale
                  </a>
                </li>
                <li>
                  <a href="#/contacto" className="footer-link-a" onClick={(e) => { e.preventDefault(); navigate('#/contacto'); }}>
                    Paquete DGII RD$30,000
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Contacto</div>
              <ul className="footer-links-list">
                <li style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.88rem' }}>
                  Santo Domingo, RD
                </li>
                <li>
                  <a href="tel:8495644000" className="footer-link-a">
                    849-564-4000
                  </a>
                </li>
                <li>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-link-a">
                    Instagram @figs.software
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-link-a">
                    WhatsApp Directo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>© {new Date().getFullYear()} Figs Software. Todos los derechos reservados.</div>
            <div>Proveedor autorizado de Facturación Electrónica · República Dominicana</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
