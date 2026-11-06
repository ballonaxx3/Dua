// ─────────────────────────────────────────────────────────────
//  DUA MARKETING — Configuración y contenido del sitio
//  Edita este archivo para actualizar textos, servicios,
//  proyectos, metas y testimonios. No necesitas tocar el HTML.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Dua Marketing',
  legalName: 'Dua Marketing Strategy',
  tagline: 'Marketing digital & estrategia de marca',
  description:
    'Dua Marketing: estrategia de contenidos, gestión de redes sociales, branding, diseño y publicidad digital para marcas que quieren crecer. Agenda una consulta gratuita.',
  email: 'Dayannalaiza@gmail.com',
  instagram: 'https://www.instagram.com/dua_marketing_',
  handle: '@dua_marketing_',
  hours: 'Lun – Vie · 9:00 – 18:00',
  responseTime: 'Menos de 24h',
  formspreeEndpoint: 'https://formspree.io/f/mzdkbjjq',
};

export const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Mis Trabajos', href: '/trabajos' },
  { label: 'Contacto', href: '/contacto' },
];

export const goals = [
  { value: '10K+', label: 'Seguidores en Instagram' },
  { value: '50+', label: 'Marcas colaboradoras' },
  { value: '1M', label: 'Impresiones mensuales' },
  { value: '100%', label: 'Clientes satisfechos' },
];

export type Service = {
  id: string;
  number: string;
  icon: string;
  title: string;
  desc: string;
  features: string[];
  tag?: string;
};

export const services: Service[] = [
  {
    id: 'social-media',
    number: '01',
    icon: 'megaphone',
    title: 'Gestión de Redes Sociales',
    desc: 'Estrategia, calendario editorial, creación de contenido y publicación en Instagram, TikTok y Facebook. Tu presencia online, profesional y constante.',
    features: ['Calendario de contenidos mensual', 'Diseño de posts y carruseles', 'Copywriting que convierte', 'Reportes mensuales de métricas'],
    tag: 'Más solicitado',
  },
  {
    id: 'branding',
    number: '02',
    icon: 'sparkles',
    title: 'Branding & Identidad Visual',
    desc: 'Logo, paleta de color, tipografías y manual de marca. Una identidad que te diferencia y se recuerda.',
    features: ['Logo principal y variantes', 'Manual de identidad de marca', 'Paleta cromática y tipográfica', 'Aplicaciones en redes y papelería'],
  },
  {
    id: 'estrategia',
    number: '03',
    icon: 'target',
    title: 'Estrategia de Contenidos',
    desc: 'Pilares de contenido, análisis de audiencia y embudos de conversión para que cada publicación tenga un propósito.',
    features: ['Auditoría de redes actual', 'Pilares y línea editorial', 'Análisis de competencia', 'Plan trimestral de crecimiento'],
  },
  {
    id: 'diseno',
    number: '04',
    icon: 'palette',
    title: 'Diseño Gráfico',
    desc: 'Creatividades para redes, publicidad y web: anuncios, banners, menús, flyers y piezas de campaña.',
    features: ['Posts y anuncios para campañas', 'Diseño para imprenta', 'Plantillas editables para tu equipo', 'Entregas en alta resolución'],
  },
  {
    id: 'publicidad',
    number: '05',
    icon: 'chart',
    title: 'Publicidad Digital (Meta Ads)',
    desc: 'Campañas en Instagram y Facebook Ads orientadas a mensajes, ventas o seguidores, con optimización semanal.',
    features: ['Configuración de Business Manager', 'Audiencias y segmentación', 'A/B testing de creatividades', 'Optimización y escalado de campañas'],
  },
  {
    id: 'consultoria',
    number: '06',
    icon: 'users',
    title: 'Consultoría 1:1',
    desc: 'Sesión enfocada para resolver un problema concreto: alcance, ventas, contenido o publicidad. Sales con un plan accionable.',
    features: ['Diagnóstico de tu cuenta', 'Plan de acción en 60 minutos', 'Grabación de la sesión', '30 días de soporte por mensaje'],
  },
];

export type ProjectCategory = 'Redes Sociales' | 'Branding' | 'Diseño' | 'Publicidad';

export type Project = {
  title: string;
  client: string;
  category: ProjectCategory;
  image: string;
  alt: string;
  result: string;
  year: string;
  summary: string;
};

export const projects: Project[] = [
  {
    title: 'Café Aroma — Lanzamiento digital',
    client: 'Café Aroma',
    category: 'Redes Sociales',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    alt: 'Interior acogedor de una cafetería de especialidad',
    result: '+320% engagement',
    year: '2026',
    summary: 'Estrategia de contenidos, fotografía y lanzamiento en Instagram para una cafetería de especialidad en su apertura.',
  },
  {
    title: 'Botanica Studio — Identidad visual',
    client: 'Botanica Studio',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Taller de plantas y branding botánico',
    result: 'Identidad completa en 3 semanas',
    year: '2026',
    summary: 'Naming visual, logo, paleta y manual de marca para un estudio de paisajismo y diseño botánico.',
  },
  {
    title: 'La Trattoria — Campaña Meta Ads',
    client: 'La Trattoria',
    category: 'Publicidad',
    image: 'https://images.unsplash.com/photo-1414238497428-b8f173d66c64?auto=format&fit=crop&w=1200&q=80',
    alt: 'Interior elegante de un restaurante italiano',
    result: 'ROAS 4.2x en 45 días',
    year: '2026',
    summary: 'Campaña de reservas en Instagram y Facebook con segmentación por ubicación y retargeting.',
  },
  {
    title: 'FitLab — Feed & contenido mensual',
    client: 'FitLab Training',
    category: 'Redes Sociales',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    alt: 'Persona entrenando en un gimnasio con equipo',
    result: '+1,200 seguidores en 2 meses',
    year: '2025',
    summary: 'Calendario editorial, carruseles educativos y reels de entrenamiento para un gimnasio boutique.',
  },
  {
    title: 'Núcleo Yoga — Rebranding',
    client: 'Núcleo Yoga',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clase de yoga al amanecer en un estudio',
    result: 'Reposicionamiento completo',
    year: '2025',
    summary: 'Rediseño de identidad: logo, sistema visual y tono de voz para un estudio de yoga en crecimiento.',
  },
  {
    title: 'Velvet Moda — Campaña de temporada',
    client: 'Velvet Moda',
    category: 'Publicidad',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Editorial de moda femenina en exteriores',
    result: '+58% ventas en temporada',
    year: '2025',
    summary: 'Estrategia full-funnel: awareness en reels, retargeting de catálogo y colección destacada.',
  },
  {
    title: 'Atlas Inmobiliaria — Piezas gráficas',
    client: 'Atlas Inmobiliaria',
    category: 'Diseño',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fachada moderna de un edificio residencial',
    result: 'Set de 40 piezas para lanzamiento',
    year: '2025',
    summary: 'Sistema gráfico para campaña de lanzamiento: anuncios, banners, fichas y señalética.',
  },
  {
    title: 'Lumina Skin — Contenido UGC',
    client: 'Lumina Skin',
    category: 'Redes Sociales',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03a3d97f6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Productos de cuidado de la piel sobre fondo neutro',
    result: '+210% alcance con UGC',
    year: '2026',
    summary: 'Estrategia de contenido generado por usuarios y micro-influencers para una marca de skincare.',
  },
  {
    title: 'Northpeak Studio — Brandbook',
    client: 'Northpeak Studio',
    category: 'Diseño',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    alt: 'Equipo creativo en una reunión de estrategia',
    result: 'Brandbook de 32 páginas',
    year: '2026',
    summary: 'Brandbook completo: logo, retícula, usos incorrectos, aplicaciones y guía de tono.',
  },
];

export const testimonials = [
  {
    quote: 'Dua transformó nuestro Instagram: pasamos de publicar sin rumbo a una estrategia con resultados reales. Las ventas del local subieron un 40%.',
    name: 'María Fernanda R.',
    role: 'Dueña, Café Aroma',
    initials: 'MF',
  },
  {
    quote: 'El rebranding fue un antes y un después. Ahora nuestra marca se ve profesional en todo: redes, local y publicidad. Increíble ojo para el detalle.',
    name: 'Diego Salazar',
    role: 'Fundador, Núcleo Yoga',
    initials: 'DS',
  },
  {
    quote: 'Profesional, directo y con ideas que funcionan. La campaña de Meta Ads se pagó sola en la primera semana. 100% recomendada.',
    name: 'Camila Torres',
    role: 'Marketing, La Trattoria',
    initials: 'CT',
  },
];

export const processSteps = [
  { step: '01', title: 'Diagnóstico', desc: 'Analizamos tu marca, audiencia y objetivos en una llamada gratuita.' },
  { step: '02', title: 'Estrategia', desc: 'Plan de contenidos y publicidad con metas medibles a 90 días.' },
  { step: '03', title: 'Ejecución', desc: 'Creamos, publicamos y gestionamos tu presencia mes a mes.' },
  { step: '04', title: 'Optimización', desc: 'Medimos resultados y ajustamos para crecer de forma sostenida.' },
];

export const faqs = [
  {
    q: '¿Cuánto cuesta trabajar con Dua Marketing?',
    a: 'Cada marca es distinta, por eso cotizamos a medida según alcance y servicios. Agenda una consulta gratuita y recibes una propuesta detallada en menos de 48h, sin compromiso.',
  },
  {
    q: '¿En cuánto tiempo veré resultados?',
    a: 'Depende del objetivo: con publicidad pagada puedes ver resultados en días; con crecimiento orgánico en redes, el impacto sostenido llega entre los 60 y 90 días.',
  },
  {
    q: '¿Trabajas con marcas fuera de mi ciudad?',
    a: 'Sí. Todo el proceso es remoto: videollamadas, tableros de contenido compartidos y reportes mensuales por correo o WhatsApp.',
  },
  {
    q: '¿Qué incluye el servicio de gestión de redes?',
    a: 'Calendario mensual, diseño de posts y carruseles, copys, publicaciones, interacción con la comunidad y un reporte mensual de métricas y aprendizajes.',
  },
  {
    q: '¿Puedo contratar solo un servicio, por ejemplo branding?',
    a: 'Claro. Puedes empezar con un servicio puntual (branding, consultoría o publicidad) y escalar después a un plan completo.',
  },
];
