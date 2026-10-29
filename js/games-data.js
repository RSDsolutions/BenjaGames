// Base de Datos Detallada de Videojuegos - BenjaGames
export const GAMES_DATA = [
  {
    id: "elden-ring",
    title: "Elden Ring: Shadow of the Erdtree",
    shortTitle: "Elden Ring",
    tagline: "Álzate, Sinluz, y déjate guiar por la gracia para portar el poder del Círculo de Elden.",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Action RPG", "Mundo Abierto", "Soulslike", "Fantasía Oscura"],
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One", "Steam Deck"],
    releaseDate: "2024-06-21",
    year: 2024,
    developer: "FromSoftware Inc.",
    publisher: "Bandai Namco Entertainment",
    engine: "FromSoftware Proprietary Engine",
    rating: 96,
    userScore: 8.4,
    steamReviews: "Extremadamente Positivas (92%)",
    price: 59.99,
    originalPrice: 59.99,
    discount: 0,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia intensa, Sangre y mutilaciones, Temas sugerentes"
    },
    playtime: {
      mainStory: "58h",
      extra: "103h",
      completionist: "138h"
    },
    synopsis: "Las Tierras Intermedias yacen fracturadas tras la destrucción del Círculo de Elden. En la expansión Shadow of the Erdtree, los Sinluz viajan a la misteriosa Tierra Sombría siguiendo los pasos de Miquella, explorando fortalezas colosales, valles brumosos y horrores ancestrales en busca de un destino que desafía a los mismísimos dioses.",
    features: [
      "Vasto mundo interconectado sin pantallas de carga entre regiones",
      "Más de 100 armas y hechizos con movimientos y cenizas de guerra personalizables",
      "Combate riguroso contra jefes legendarios de múltiples fases",
      "Montura espectral 'Torrentera' para combate dinámico y verticalidad",
      "Modo cooperativo e invasiones multijugador asíncronas"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
        gpu: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB",
        ram: "12 GB RAM",
        storage: "60 GB SSD recomendado",
        directx: "Versión 12"
      },
      recommended: {
        os: "Windows 11 / 10 (64-bit)",
        cpu: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
        gpu: "NVIDIA GeForce RTX 2060 6GB / AMD Radeon RX 5700 XT 8GB",
        ram: "16 GB RAM",
        storage: "60 GB NVMe SSD",
        directx: "Versión 12"
      }
    },
    modes: ["Un Jugador", "Cooperativo Online", "PvP Multijugador"],
    tags: ["Obra Maestra", "Mundo Abierto", "Difícil", "Fantasía Oscura", "Exploración", "Lore Profundo"],
    languages: {
      audio: ["Inglés"],
      subtitles: ["Español (Latinoamérica)", "Español (España)", "Inglés", "Francés", "Alemán", "Japonés"]
    },
    controllerSupport: "Soporte completo para mandos DualSense, Xbox Wireless y Steam Deck Verified",
    isFeatured: true,
    isGameOfWeek: true,
    isTrending: true,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
      playstation: "https://store.playstation.com/concept/10000333",
      xbox: "https://www.xbox.com/games/store/elden-ring/9p3j32ctxlr7"
    }
  },
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077: Phantom Liberty",
    shortTitle: "Cyberpunk 2077",
    tagline: "Night City puede consumirte o convertirte en una leyenda viva.",
    cover: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Action RPG", "Sci-Fi", "Cyberpunk", "Mundo Abierto", "Shooter"],
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "GeForce NOW"],
    releaseDate: "2023-09-26",
    year: 2023,
    developer: "CD PROJEKT RED",
    publisher: "CD PROJEKT RED",
    engine: "REDengine 4 (Ray Tracing Overdrive)",
    rating: 89,
    userScore: 8.7,
    steamReviews: "Muy Positivas (89%)",
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    discountedPrice: 41.49,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia extrema, Desnudez explícita, Contenido sexual, Uso de drogas"
    },
    playtime: {
      mainStory: "30h",
      extra: "65h",
      completionist: "105h"
    },
    synopsis: "Como V, un mercenario mejorado cibernéticamente en la despiadada megalópolis de Night City, te adentras en el enclave peligroso de Dogtown para una tensa misión de espionaje y supervivencia junto al agente encubierto Solomon Reed (Idris Elba). Salvar la vida de la presidenta de los Nuevos Estados Unidos te ofrecerá una cura para el biochip que carcome tu mente.",
    features: [
      "Revolución visual con Path Tracing y NVIDIA DLSS 3.5 / AMD FSR 3",
      "Sistema de habilidades 2.0 completamente rediseñado con ciberware letal",
      "Combate sobre vehículos con ametralladoras y lanzamisiles integrados",
      "IA policial avanzada con persecuciones dinámicas de alta tensión",
      "Narrativa ramificada con múltiples finales emocionales y consecuencias"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 (64-bit)",
        cpu: "Core i7-6700 / Ryzen 5 1600",
        gpu: "GeForce GTX 1060 6GB / Radeon RX 580 8GB",
        ram: "12 GB RAM",
        storage: "70 GB SSD",
        directx: "Versión 12"
      },
      recommended: {
        os: "Windows 10/11 (64-bit)",
        cpu: "Core i7-12700 / Ryzen 7 7800X3D",
        gpu: "GeForce RTX 3070 / Radeon RX 6800 XT",
        ram: "16 GB RAM",
        storage: "70 GB NVMe SSD",
        directx: "Versión 12"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Cyberpunk", "Distopía", "Historia Enriquecida", "Ray Tracing", "FPS", "RPG de Acción"],
    languages: {
      audio: ["Español (España)", "Inglés", "Japonés", "Francés", "Alemán"],
      subtitles: ["Español (Latinoamérica)", "Español (España)", "Inglés", "Portugués", "Italiano"]
    },
    controllerSupport: "Compatibilidad total con gatillos adaptativos DualSense y mando Xbox",
    isFeatured: true,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
      gog: "https://www.gog.com/game/cyberpunk_2077",
      epic: "https://store.epicgames.com/p/cyberpunk-2077"
    }
  },
  {
    id: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    shortTitle: "Baldur's Gate 3",
    tagline: "Reúne a tu grupo y regresa a los Reinos Olvidados en una historia de compañerismo y traición.",
    cover: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["CRPG", "Estrategia por Turnos", "Fantasía", "Aventura"],
    platforms: ["PC", "Mac", "PlayStation 5", "Xbox Series X/S", "Steam Deck"],
    releaseDate: "2023-08-03",
    year: 2023,
    developer: "Larian Studios",
    publisher: "Larian Studios",
    engine: "Divinity 4.0 Engine",
    rating: 96,
    userScore: 8.9,
    steamReviews: "Abrumadoramente Positivas (96%)",
    price: 59.99,
    originalPrice: 59.99,
    discount: 0,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia de sangre, Desnudez parcial/total, Temas sexuales maduros"
    },
    playtime: {
      mainStory: "65h",
      extra: "110h",
      completionist: "160h"
    },
    synopsis: "Secuestrado, infectado por un parásito azotamentes en tu cerebro y perdido en la costa, comienzas a desarrollar misteriosas y oscuras facultades. Puedes resistirte a la corrupción o sucumbir al poder siniestro mientras forjas alianzas, inicias romances y cambias el destino del mundo entero con cada tirada de dados de D&D 5ª edición.",
    features: [
      "Libertad de resolución de problemas sin precedentes basada en Dungeons & Dragons",
      "Más de 174 horas de cinemáticas y 2 millones de palabras de guión",
      "Cooperativo en línea y pantalla dividida local para hasta 4 jugadores",
      "12 clases y 46 subclases con cientos de hechizos interactivos con el entorno",
      "Compañeros con personalidad profunda, lealtades cambiantes y misiones complejas"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel I5 4690 / AMD FX 8350",
        gpu: "Nvidia GTX 970 / RX 480 (4GB+ VRAM)",
        ram: "8 GB RAM",
        storage: "150 GB SSD disponible",
        directx: "Versión 11 / Vulkan"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel i7 8700K / AMD r5 3600",
        gpu: "Nvidia 2060 Super / RX 5700 XT (8GB+ VRAM)",
        ram: "16 GB RAM",
        storage: "150 GB SSD disponible",
        directx: "Versión 11 / Vulkan"
      }
    },
    modes: ["Un Jugador", "Cooperativo", "Multijugador"],
    tags: ["Juego del Año", "Elecciones Importan", "D&D", "Táctico", "Fantasía", "Multijugador"],
    languages: {
      audio: ["Inglés"],
      subtitles: ["Español (España/Latinoamérica)", "Inglés", "Francés", "Alemán", "Italiano", "Chino"]
    },
    controllerSupport: "Interfaz adaptativa completa para teclado/ratón y mandos",
    isFeatured: true,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
      gog: "https://www.gog.com/game/baldurs_gate_iii",
      playstation: "https://store.playstation.com/concept/10006399"
    }
  },
  {
    id: "the-witcher-3",
    title: "The Witcher 3: Wild Hunt - Complete Edition",
    shortTitle: "The Witcher 3",
    tagline: "Eres Geralt de Rivia, cazador de monstruos. En un mundo devastado por la guerra, tu contrato más importante te espera.",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Action RPG", "Mundo Abierto", "Fantasía Oscura", "Historia"],
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One", "Nintendo Switch", "Steam Deck"],
    releaseDate: "2015-05-18",
    year: 2015,
    developer: "CD PROJEKT RED",
    publisher: "CD PROJEKT RED",
    engine: "REDengine 3 (Actualizado con Ray Tracing)",
    rating: 93,
    userScore: 9.1,
    steamReviews: "Abrumadoramente Positivas (96%)",
    price: 49.99,
    originalPrice: 49.99,
    discount: 75,
    discountedPrice: 12.49,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia intensa, Sangre y desmembramiento, Desnudez y sexo, Lenguaje"
    },
    playtime: {
      mainStory: "51h",
      extra: "103h",
      completionist: "173h"
    },
    synopsis: "En un continente desgarrado por la invasión nilfgaardiana, Geralt busca desesperadamente a su hija adoptiva Ciri, una joven de sangre ancestral perseguida por la terrorífica Cacería Salvaje. Incluye las dos expansiones colosales 'Hearts of Stone' y 'Blood and Wine'.",
    features: [
      "Uno de los mundos abiertos más laureados de la historia con narrativa moralmente gris",
      "Actualización Next-Gen con Ray Tracing, texturas 4K y modo foto integrado",
      "El minijuego de cartas GWENT completo con barajas y torneos regionales",
      "Sistema de alquimia, aceites, bombas y señales mágicas de brujo",
      "Más de 250 premios al Juego del Año recibidos globalmente"
    ],
    requirements: {
      minimum: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i5-2500K 3.3GHz / AMD FX-8320",
        gpu: "Nvidia GeForce GTX 960 / AMD Radeon RX 560",
        ram: "8 GB RAM",
        storage: "50 GB SSD",
        directx: "Versión 11 / 12"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i7-7700 / AMD Ryzen 5 3600",
        gpu: "Nvidia RTX 2060 / AMD RX 5700 XT",
        ram: "16 GB RAM",
        storage: "50 GB NVMe SSD",
        directx: "Versión 12 (RTX ON)"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Obra Maestra", "Brujo", "Fantasía Oscura", "Historia Extraordinaria", "Mundo Abierto"],
    languages: {
      audio: ["Inglés", "Polaco", "Alemán", "Francés", "Japonés"],
      subtitles: ["Español (Latinoamérica/España)", "Inglés", "Portugués", "Italiano", "Ruso"]
    },
    controllerSupport: "Compatibilidad nativa con mandos de PC, PS5 y Xbox",
    isFeatured: true,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
      gog: "https://www.gog.com/game/the_witcher_3_wild_hunt_game_of_the_year_edition"
    }
  },
  {
    id: "black-myth-wukong",
    title: "Black Myth: Wukong",
    shortTitle: "Black Myth",
    tagline: "Destino ineludible. Enfréntate a deidades y demonios como el Predestinado.",
    cover: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Action RPG", "Mitología", "Soulslike", "Acción y Aventura"],
    platforms: ["PC", "PlayStation 5"],
    releaseDate: "2024-08-20",
    year: 2024,
    developer: "Game Science",
    publisher: "Game Science",
    engine: "Unreal Engine 5",
    rating: 81,
    userScore: 8.5,
    steamReviews: "Abrumadoramente Positivas (96%)",
    price: 59.99,
    originalPrice: 59.99,
    discount: 0,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia estilizada, Sangre, Lenguaje fuerte"
    },
    playtime: {
      mainStory: "35h",
      extra: "50h",
      completionist: "80h"
    },
    synopsis: "Inspirado en la gran epopeya clásica china 'Viaje al Oeste', asumes el papel del Predestinado que se embarca en un viaje colosal para desentrañar la verdad tras la gloria del legendario Rey Mono. Con el báculo sagrado Ruyi Jingu Bang dominarás hechizos milenarios, transformaciones y duelos de agilidad extrema contra espíritus y deidades.",
    features: [
      "Tecnología Unreal Engine 5 con Nanite y Lumen fotorrealista",
      "Sistema de 72 transformaciones y absorción de almas de enemigos",
      "Posturas de combate con báculo dinámicas (Choque, Empuje y Movilidad)",
      "Más de 80 jefes únicos inspirados en el folclore asiático",
      "Banda sonora orquestal épica con instrumentos tradicionales chinos"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Core i5-8400 / Ryzen 5 1600",
        gpu: "GeForce GTX 1060 6GB / Radeon RX 580 8GB",
        ram: "16 GB RAM",
        storage: "130 GB SSD disponible",
        directx: "Versión 12"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Core i7-9700 / Ryzen 5 5500",
        gpu: "GeForce RTX 2060 / Radeon RX 5700 XT",
        ram: "16 GB RAM",
        storage: "130 GB NVMe SSD",
        directx: "Versión 12"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Mitología", "Combate Fluido", "Boss Rush", "Gráficos Épicos", "Artes Marciales"],
    languages: {
      audio: ["Chino simplificado", "Inglés"],
      subtitles: ["Español (Latinoamérica/España)", "Inglés", "Francés", "Alemán", "Italiano"]
    },
    controllerSupport: "Excelente soporte para mandos con retroalimentación háptica",
    isFeatured: true,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: false,
    storeUrls: {
      steam: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
      epic: "https://store.epicgames.com/p/black-myth-wukong-87a72b"
    }
  },
  {
    id: "ghost-of-tsushima",
    title: "Ghost of Tsushima Director's Cut",
    shortTitle: "Ghost of Tsushima",
    tagline: "El honor murió en la playa. Conviértete en el Fantasma para liberar Tsushima.",
    cover: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Acción y Aventura", "Mundo Abierto", "Japón Feudal", "Sigilo"],
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Steam Deck"],
    releaseDate: "2024-05-16",
    year: 2024,
    developer: "Sucker Punch Productions / Nixxes",
    publisher: "PlayStation Publishing LLC",
    engine: "Sucker Punch Proprietary Engine",
    rating: 87,
    userScore: 9.1,
    steamReviews: "Muy Positivas (93%)",
    price: 59.99,
    originalPrice: 59.99,
    discount: 20,
    discountedPrice: 47.99,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia intensa de katanas, Sangre, Desmembramiento"
    },
    playtime: {
      mainStory: "25h",
      extra: "45h",
      completionist: "62h"
    },
    synopsis: "A finales del siglo XIII, el imperio mongol arrasa naciones enteras. La isla de Tsushima es la última barrera entre el Japón continental y la masiva flota invasora liderada por Khotun Khan. Como Jin Sakai, uno de los últimos supervivientes de su clan samurái, deberás forjar una nueva senda y desatar la guerra no convencional del Fantasma.",
    features: [
      "Sistema de navegación inmersivo guiado por el viento y la fauna sin marcadores en pantalla",
      "Cuatro posturas de combate con katana de precisión letal (Piedra, Agua, Viento y Luna)",
      "Incluye la expansión 'Isla de Iki' y el modo cooperativo multijugador 'Leyendas'",
      "Modo Kurosawa en blanco y negro con grano cinematográfico y audio japonés clásico",
      "Soporte completo para monitores ultrawide (21:9 y 32:9) en PC"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i3-7100 / AMD Ryzen 3 1200",
        gpu: "NVIDIA GeForce GTX 960 4GB / AMD Radeon RX 5500 XT",
        ram: "8 GB RAM",
        storage: "75 GB HDD/SSD",
        directx: "Versión 12"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i5-8600 / AMD Ryzen 5 3600",
        gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5600 XT",
        ram: "16 GB RAM",
        storage: "75 GB SSD",
        directx: "Versión 12"
      }
    },
    modes: ["Un Jugador", "Cooperativo Online (Modo Leyendas)"],
    tags: ["Samuráis", "Japón Feudal", "Paisajes Espectaculares", "Katanas", "Mundo Abierto"],
    languages: {
      audio: ["Japonés", "Español (Latinoamérica/España)", "Inglés", "Francés", "Alemán"],
      subtitles: ["Español (Latinoamérica/España)", "Inglés", "Portugués", "Italiano"]
    },
    controllerSupport: "Respuesta háptica y gatillos adaptativos DualSense nativos en PC",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_DIRECTORS_CUT/",
      playstation: "https://store.playstation.com/concept/10001099"
    }
  },
  {
    id: "balatro",
    title: "Balatro",
    shortTitle: "Balatro",
    tagline: "Un roguelike de póker hipnóticamente adictivo donde rompes las reglas del juego.",
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Roguelike", "Cartas / Deckbuilder", "Indie", "Estrategia", "Puzles"],
    platforms: ["PC", "Nintendo Switch", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "iOS", "Android", "Steam Deck"],
    releaseDate: "2024-02-20",
    year: 2024,
    developer: "LocalThunk",
    publisher: "Playstack",
    engine: "LÖVE 2D (Lua)",
    rating: 90,
    userScore: 8.8,
    steamReviews: "Abrumadoramente Positivas (98%)",
    price: 14.99,
    originalPrice: 14.99,
    discount: 10,
    discountedPrice: 13.49,
    esrb: {
      rating: "E10+ (Everyone 10+)",
      reasons: "Temática de cartas y azar simulado"
    },
    playtime: {
      mainStory: "5h (Primera victoria)",
      extra: "40h",
      completionist: "100h+"
    },
    synopsis: "Combina manos de póker válidas con cartas de comodín (Jokers) únicas para desencadenar sinergias y multiplicadores astronómicos. Gana las fichas suficientes para superar las ciegas crecientes, descubre barajas secretas y cartas del tarot en una experiencia roguelite que redefine el género de cartas.",
    features: [
      "150 comodines (Jokers) diferentes con habilidades que alteran las matemáticas",
      "15 barajas distintas con modificadores de inicio únicos",
      "Cartas de Tarot, Planetarias y Espectrales para mejorar manos permanentemente",
      "Estética CRT retro hipnótica con música psicodélica lo-fi",
      "Cero microtransacciones: diseño puro centrado 100% en diversión y reto mental"
    ],
    requirements: {
      minimum: {
        os: "Windows 7, 8, 10, 11",
        cpu: "Intel Core i3 o equivalente",
        gpu: "Tarjeta compatible con OpenGL 2.1",
        ram: "1 GB RAM",
        storage: "150 MB libres",
        directx: "OpenGL"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Cualquier procesador moderno",
        gpu: "Gráficos integrados modernos",
        ram: "2 GB RAM",
        storage: "150 MB SSD",
        directx: "OpenGL"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Adictivo", "Deckbuilder", "Póker", "Indie Revolucionario", "Estrategia"],
    languages: {
      audio: ["Efectos"],
      subtitles: ["Español (España/Latam)", "Inglés", "Francés", "Alemán", "Italiano", "Japonés"]
    },
    controllerSupport: "Excelente con mando, pantalla táctil y ratón",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/2379780/Balatro/",
      switch: "https://www.nintendo.com/store/products/balatro-switch/"
    }
  },
  {
    id: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    shortTitle: "RDR 2",
    tagline: "América, 1899. El ocaso del salvaje oeste ha comenzado.",
    cover: "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Mundo Abierto", "Acción y Aventura", "Western", "Historia"],
    platforms: ["PC", "PlayStation 4", "Xbox One", "PlayStation 5 (Retro)", "Xbox Series X/S"],
    releaseDate: "2018-10-26",
    year: 2018,
    developer: "Rockstar Studios",
    publisher: "Rockstar Games",
    engine: "RAGE (Rockstar Advanced Game Engine)",
    rating: 97,
    userScore: 8.8,
    steamReviews: "Extremadamente Positivas (91%)",
    price: 59.99,
    originalPrice: 59.99,
    discount: 60,
    discountedPrice: 23.99,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia intensa, Sangre y desmembramiento, Contenido sexual, Lenguaje fuerte"
    },
    playtime: {
      mainStory: "50h",
      extra: "82h",
      completionist: "180h"
    },
    synopsis: "Arthur Morgan y la banda de Van der Linde son forajidos en fuga. Con agentes federales y los mejores cazarrecompensas de la nación pisándoles los talones, la banda debe asaltar, robar y luchar por su supervivencia en el inhóspito territorio del corazón de América mientras las divisiones internas amenazan con desgarrarlos.",
    features: [
      "El ecosistema y comportamiento de vida salvaje e IA más detallado de la historia",
      "Mecánica Dead Eye con precisión quirúrgica y efectos de cámara lenta cinemáticos",
      "Sistema de honor moral que altera diálogos, encuentros y reacciones de los NPC",
      "Física Euphoria para impactos, caídas y reacciones anatómicas verosímiles",
      "Incluye Red Dead Online con profesiones como Cazarrecompensas, Comerciante y Licorero"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i5-2500K / AMD FX-6300",
        gpu: "Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB",
        ram: "8 GB RAM",
        storage: "150 GB HDD/SSD",
        directx: "Versión 11 / Vulkan"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
        gpu: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
        ram: "12 GB RAM",
        storage: "150 GB SSD",
        directx: "Vulkan recomendado"
      }
    },
    modes: ["Un Jugador", "Multijugador"],
    tags: ["Obra de Arte", "Narrativa Inolvidable", "Western", "Inmersión Total", "Mundo Vivo"],
    languages: {
      audio: ["Inglés"],
      subtitles: ["Español (Latinoamérica)", "Español (España)", "Inglés", "Francés", "Alemán", "Italiano"]
    },
    controllerSupport: "Soporte completo y calibración de apuntado para mandos",
    isFeatured: true,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
      epic: "https://store.epicgames.com/p/red-dead-redemption-2"
    }
  },
  {
    id: "gta-v",
    title: "Grand Theft Auto V",
    shortTitle: "GTA V",
    tagline: "Bienvenidos a Los Santos. Una ciudad de sol, estrellas de cine y criminales calculadores.",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Mundo Abierto", "Acción", "Shooter en 3ª Persona", "Crimen"],
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One"],
    releaseDate: "2015-04-14",
    year: 2015,
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    engine: "RAGE",
    rating: 96,
    userScore: 8.0,
    steamReviews: "Muy Positivas (90%)",
    price: 29.99,
    originalPrice: 29.99,
    discount: 50,
    discountedPrice: 14.99,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Sangre y gore, Violencia intensa, Desnudez, Uso de drogas"
    },
    playtime: {
      mainStory: "32h",
      extra: "48h",
      completionist: "82h"
    },
    synopsis: "Cuando un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor del submundo criminal, el gobierno de los EE. UU. y la industria del espectáculo, deberán realizar una serie de peligrosos golpes para sobrevivir en una ciudad implacable.",
    features: [
      "Campaña con 3 protagonistas intercambiables en tiempo real (Michael, Franklin y Trevor)",
      "Golpes a gran escala con planificación táctica y elección de equipo",
      "Mundo gigantesco de Los Santos y el condado de Blaine con océano navegable",
      "Incluye GTA Online con cientos de misiones, negocios y vehículos",
      "Vista en primera persona y compatibilidad con mods en PC"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64 Bit",
        cpu: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz / AMD Phenom 9850 Quad-Core",
        gpu: "NVIDIA 9800 GT 1GB / AMD HD 4870 1GB",
        ram: "4 GB RAM",
        storage: "72 GB libres",
        directx: "Versión 10"
      },
      recommended: {
        os: "Windows 10/11 64 Bit",
        cpu: "Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350 @ 4GHz",
        gpu: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
        ram: "8 GB RAM",
        storage: "72 GB SSD",
        directx: "Versión 11"
      }
    },
    modes: ["Un Jugador", "Multijugador"],
    tags: ["Mundo Abierto Masivo", "Crimen", "Coches", "Clásico Moderno", "Multijugador"],
    languages: {
      audio: ["Inglés"],
      subtitles: ["Español (España/Latam)", "Inglés", "Francés", "Alemán", "Italiano"]
    },
    controllerSupport: "Compatibilidad total con mandos de Xbox y PlayStation",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
      epic: "https://store.epicgames.com/p/grand-theft-auto-v"
    }
  },
  {
    id: "doom-eternal",
    title: "DOOM Eternal",
    shortTitle: "DOOM Eternal",
    tagline: "Lo único que temen los demonios... eres tú. Arrasa con el Infierno.",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["FPS", "Acción Rápida", "Shooter", "Sci-Fi / Infierno"],
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One", "Nintendo Switch"],
    releaseDate: "2020-03-20",
    year: 2020,
    developer: "id Software",
    publisher: "Bethesda Softworks",
    engine: "id Tech 7 (Vulkan Puro)",
    rating: 88,
    userScore: 8.4,
    steamReviews: "Muy Positivas (91%)",
    price: 39.99,
    originalPrice: 39.99,
    discount: 75,
    discountedPrice: 9.99,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Sangre y gore extremos, Violencia intensa"
    },
    playtime: {
      mainStory: "14h",
      extra: "20h",
      completionist: "28h"
    },
    synopsis: "Los ejércitos del Infierno han invadido la Tierra. Como el Slayer, regresa a través de dimensiones arrasando a las hordas demoníacas con un arsenal apocalíptico y velocidad vertiginosa para evitar la destrucción total de la humanidad.",
    features: [
      "Bucle de combate de alta velocidad: motosierra para munición, lanzallamas para armadura y ejecuciones para salud",
      "Gancho de carne en la súper escopeta para propulsarte hacia los titanes",
      "Motor id Tech 7 capaz de alcanzar cientos de FPS con optimización impecable",
      "Banda sonora de Metal Industrial demoledora compuesta por Mick Gordon",
      "Modo Battlemode asimétrico: 1 Slayer completamente armado contra 2 demonios controlados por jugadores"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i5 @ 3.3 GHz / AMD Ryzen 3 @ 3.1 GHz",
        gpu: "NVIDIA GeForce GTX 1050Ti (4GB) / AMD Radeon R9 280 (3GB)",
        ram: "8 GB RAM",
        storage: "50 GB libres",
        directx: "Vulkan API"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i7-6700K / AMD Ryzen 7 1800X",
        gpu: "NVIDIA GeForce GTX 1060 (6GB) / AMD Radeon RX 480 (8GB)",
        ram: "16 GB RAM",
        storage: "50 GB SSD",
        directx: "Vulkan API"
      }
    },
    modes: ["Un Jugador", "Multijugador"],
    tags: ["Acción Rápida", "Gore", "Metal Pesado", "Optimización Perfecta", "FPS Épico"],
    languages: {
      audio: ["Español (España/Latam)", "Inglés", "Francés", "Alemán", "Italiano", "Ruso"],
      subtitles: ["Español (España/Latam)", "Inglés", "Portugués", "Japonés", "Chino"]
    },
    controllerSupport: "Control nativo con configuraciones rápidas y giroscopio",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/782330/DOOM_Eternal/",
      xbox: "https://www.xbox.com/games/store/doom-eternal-standard-edition/9p5s262ckzx0"
    }
  },
  {
    id: "hollow-knight",
    title: "Hollow Knight",
    shortTitle: "Hollow Knight",
    tagline: "Desciende a la oscuridad y forja tu propio camino a través de Hallownest.",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Metroidvania", "Indie", "Plataformas", "Souls-like 2D"],
    platforms: ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One", "macOS", "Linux", "Steam Deck"],
    releaseDate: "2017-02-24",
    year: 2017,
    developer: "Team Cherry",
    publisher: "Team Cherry",
    engine: "Unity",
    rating: 90,
    userScore: 9.0,
    steamReviews: "Abrumadoramente Positivas (97%)",
    price: 14.99,
    originalPrice: 14.99,
    discount: 50,
    discountedPrice: 7.49,
    esrb: {
      rating: "E10+ (Everyone 10+)",
      reasons: "Violencia de fantasía, Sangre leve animada"
    },
    playtime: {
      mainStory: "27h",
      extra: "42h",
      completionist: "62h"
    },
    synopsis: "Bajo la desvaneciente ciudad de Bocasucia duerme un antiguo reino en ruinas llamado Hallownest. Atraído por sus riquezas o buscando respuestas a antiguos secretos, empuñas tu aguijón y te adentras en cavernas laberínticas infectadas por una plaga misteriosa, encontrando bichos entrañables y horrores ancestrales.",
    features: [
      "Arte tradicional 2D dibujado y animado cuadro a cuadro a mano",
      "Control acrobático milimétrico y combate rápido con espada y hechizos",
      "Sistema de amuletos con más de 40 opciones para personalizar tu estilo",
      "Más de 150 enemigos comunes y 40 épicos jefes desafiantes",
      "Banda sonora atmosférica y melancólica compuesta por Christopher Larkin"
    ],
    requirements: {
      minimum: {
        os: "Windows 7 (64-bit)",
        cpu: "Intel Core 2 Duo E5200",
        gpu: "GeForce 9800GTX+ (1GB)",
        ram: "4 GB RAM",
        storage: "9 GB libres",
        directx: "Versión 10"
      },
      recommended: {
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i5",
        gpu: "GeForce GTX 560",
        ram: "8 GB RAM",
        storage: "9 GB SSD",
        directx: "Versión 11"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Metroidvania", "Indie", "Difícil", "Atmósfera Sublime", "Música Increíble", "2D"],
    languages: {
      audio: ["Idioma ficticio de insectos"],
      subtitles: ["Español (España)", "Inglés", "Francés", "Alemán", "Italiano", "Japonés"]
    },
    controllerSupport: "Recomendado jugar con mando; excelente soporte para todos los controles",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/367520/Hollow_Knight/",
      switch: "https://www.nintendo.com/store/products/hollow-knight-switch/"
    }
  },
  {
    id: "hades-2",
    title: "Hades II",
    shortTitle: "Hades II",
    tagline: "Lucha más allá del Inframundo con magia oscura para enfrentarte al Titán del Tiempo.",
    cover: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Roguelike", "Acción", "Indie", "Mitología Griega", "Hack and Slash"],
    platforms: ["PC", "Steam Deck", "Mac"],
    releaseDate: "2024-05-06",
    year: 2024,
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    engine: "The Forge Engine (Supergiant Custom)",
    rating: 94,
    userScore: 9.2,
    steamReviews: "Abrumadoramente Positivas (98%)",
    price: 29.99,
    originalPrice: 29.99,
    discount: 0,
    esrb: {
      rating: "T (Teen)",
      reasons: "Violencia de fantasía, Sangre, Temas sugerentes"
    },
    playtime: {
      mainStory: "32h",
      extra: "60h",
      completionist: "100h+"
    },
    synopsis: "La primera secuela de Supergiant Games toma lo mejor de su galardonado dungeon crawler y lo expande con brujería ancestral. Como Melínoe, la Princesa del Inframundo y hermana de Zagreus, explorarás un mundo mitológico más profundo y oscuro, doblegando las fuerzas del tiempo con la ayuda de todo el panteón del Olimpo.",
    features: [
      "Magia arcana y brujería con el Altar de las Sombras y caldero de encantamientos",
      "Decenas de bendiciones divinas de Apolo, Hécate, Zeus, Poseidón y Némesis",
      "Combate de respuesta instantánea con dash fluido y canalización de maná omega",
      "Rica progresión narrativa donde cada derrota y victoria desata nuevos diálogos",
      "Banda sonora explosiva mediterránea-metal compuesta por Darren Korb"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Dual Core 2.4 GHz",
        gpu: "GeForce GTX 950 / Radeon R7 360",
        ram: "8 GB RAM",
        storage: "10 GB SSD",
        directx: "Versión 12"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Quad Core 3.0 GHz",
        gpu: "GeForce RTX 2060 / Radeon RX 5600 XT",
        ram: "16 GB RAM",
        storage: "10 GB NVMe SSD",
        directx: "Versión 12"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Roguelite", "Acción Rápida", "Mitología", "Rejugabilidad Infinita", "Diseño Visual de Arte"],
    languages: {
      audio: ["Inglés"],
      subtitles: ["Español (Latinoamérica/España)", "Inglés", "Francés", "Alemán", "Italiano", "Chino"]
    },
    controllerSupport: "Compatibilidad nativa con vibración avanzada en Steam Deck y controles",
    isFeatured: true,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/1145350/Hades_II/",
      epic: "https://store.epicgames.com/p/hades-ii"
    }
  },
  {
    id: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    shortTitle: "GoW Ragnarök",
    tagline: "El Fimbulvetr arrecia. Kratos y Atreus deben decidir si se dejan atar por el destino o escriben el suyo.",
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Acción y Aventura", "Hack and Slash", "Mitología Nórdica", "Narrativa Cinematográfica"],
    platforms: ["PC", "PlayStation 5", "PlayStation 4"],
    releaseDate: "2024-09-19",
    year: 2024,
    developer: "Santa Monica Studio / Jetpack Interactive",
    publisher: "PlayStation Publishing LLC",
    engine: "Santa Monica Engine",
    rating: 94,
    userScore: 8.6,
    steamReviews: "Muy Positivas (84%)",
    price: 59.99,
    originalPrice: 59.99,
    discount: 0,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia sangrienta intensa, Desmembramiento, Lenguaje soez"
    },
    playtime: {
      mainStory: "26h",
      extra: "43h",
      completionist: "60h"
    },
    synopsis: "Tres años después de los eventos del juego anterior, los nueve reinos se preparan para la batalla profetizada que acabará con el mundo. Kratos lucha por guiar y proteger a Atreus, quien busca desesperadamente desentrañar las pistas sobre su papel como 'Loki' mientras el mismísimo Odín y el furioso Thor buscan venganza contra ellos.",
    features: [
      "Plano secuencia continuo cinematográfico sin cortes de cámara",
      "Tres armas legendarias: Hacha Leviatán, Espadas del Caos y Lanza de Draupnir",
      "Incluye el modo Roguelike gratuito 'Valhalla' centrado en combate puro",
      "Sensación táctil inigualable con gatillos adaptativos DualSense en PC y PS5",
      "Opciones de accesibilidad galardonadas a nivel mundial"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i5-6600K / AMD Ryzen 5 2400 G",
        gpu: "Nvidia GeForce GTX 1060 6GB / AMD RX 5500 XT 8GB",
        ram: "8 GB RAM",
        storage: "190 GB SSD disponible",
        directx: "Versión 12"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i5-8600 / AMD Ryzen 5 3600",
        gpu: "Nvidia GeForce RTX 2060 Super / AMD RX 5700",
        ram: "16 GB RAM",
        storage: "190 GB NVMe SSD",
        directx: "Versión 12"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Mitología", "Combate Brutal", "Historia Profunda", "Padre e Hijo", "Cinematográfico"],
    languages: {
      audio: ["Español (Latinoamérica)", "Español (España)", "Inglés", "Francés", "Alemán"],
      subtitles: ["Español (Latinoamérica)", "Español (España)", "Inglés", "Portugués", "Italiano"]
    },
    controllerSupport: "Compatibilidad oficial DualSense con retroalimentación háptica y gatillos",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/2322010/God_of_War_Ragnark/",
      playstation: "https://store.playstation.com/concept/10001099"
    }
  },
  {
    id: "zelda-tears-of-the-kingdom",
    title: "The Legend of Zelda: Tears of the Kingdom",
    shortTitle: "Zelda TotK",
    tagline: "El cielo y las profundidades son tu lienzo. Imagina, crea y explora Hyrule.",
    cover: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Aventura", "Mundo Abierto", "Puzles", "Fantasía", "Sandbox"],
    platforms: ["Nintendo Switch"],
    releaseDate: "2023-05-12",
    year: 2023,
    developer: "Nintendo EPD",
    publisher: "Nintendo",
    engine: "Nintendo EPD Proprietary Engine",
    rating: 96,
    userScore: 8.5,
    steamReviews: "Exclusivo de Plataforma (Aclamación Universal)",
    price: 69.99,
    originalPrice: 69.99,
    discount: 0,
    esrb: {
      rating: "E10+ (Everyone 10+)",
      reasons: "Violencia de fantasía, Temas sugerentes moderados"
    },
    playtime: {
      mainStory: "59h",
      extra: "110h",
      completionist: "230h"
    },
    synopsis: "Tras un cataclismo subterráneo provocado por el despertar de Ganondorf, el castillo de Hyrule se eleva y misteriosas islas flotantes aparecen en el firmamento. Link, provisto de un brazo ancestral cargado de habilidades de construcción física, debe desvelar el paradero de Zelda y salvar el reino en tres niveles de exploración: el cielo, la superficie y el abismo.",
    features: [
      "Habilidad 'Ultramano' para crear vehículos, robots y puentes usando física real",
      "Mecánica 'Combinación' para fusionar cualquier objeto con tus armas y flechas",
      "Exploración en 3 estratos: Archipiélagos Celestes, Superficie y el terrorífico Subsuelo",
      "Física de fluidos, aerodinámica y gravedad completamente interactiva",
      "Más de 152 Santuarios con puzles de lógica y libertad infinita"
    ],
    requirements: {
      minimum: {
        os: "Nintendo Switch OS",
        cpu: "NVIDIA Tegra X1 personalizada",
        gpu: "Maxwell 256 cores",
        ram: "4 GB LPDDR4",
        storage: "18.2 GB memoria de almacenamiento",
        directx: "NVN API"
      },
      recommended: {
        os: "Nintendo Switch (Modo TV Dock)",
        cpu: "NVIDIA Tegra X1",
        gpu: "Clock Boosted Dock Mode",
        ram: "4 GB LPDDR4",
        storage: "MicroSD Express recomendada",
        directx: "NVN API"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Física Increíble", "Creatividad Total", "Exploración Pura", "Obra Maestra", "Puzles"],
    languages: {
      audio: ["Español (Latinoamérica)", "Español (España)", "Inglés", "Japonés"],
      subtitles: ["Español (Latinoamérica)", "Español (España)", "Inglés", "Francés", "Alemán"]
    },
    controllerSupport: "Control Pro de Nintendo Switch y Joy-Con con giroscopio de precisión",
    isFeatured: true,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      nintendo: "https://www.nintendo.com/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/"
    }
  },
  {
    id: "resident-evil-4-remake",
    title: "Resident Evil 4 Remake",
    shortTitle: "RE4 Remake",
    tagline: "El terror y la supervivencia nunca fueron tan viscerales.",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Survival Horror", "Acción", "Shooter en 3ª Persona", "Zombis / Mutantes"],
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "macOS", "iOS"],
    releaseDate: "2023-03-24",
    year: 2023,
    developer: "Capcom",
    publisher: "Capcom",
    engine: "RE Engine",
    rating: 93,
    userScore: 8.7,
    steamReviews: "Abrumadoramente Positivas (97%)",
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    discountedPrice: 39.99,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Sangre y gore grotescos, Violencia intensa, Lenguaje ofensivo"
    },
    playtime: {
      mainStory: "16h",
      extra: "28h",
      completionist: "56h"
    },
    synopsis: "Seis años después del desastre biológico de Raccoon City, el agente Leon S. Kennedy es enviado a un aislado pueblo rural europeo para rescatar a la hija secuestrada del presidente de los Estados Unidos. Pronto descubre que los aldeanos están dominados por el espantoso parásito de Las Plagas.",
    features: [
      "Parry con cuchillo en tiempo real (incluso contra motosierras y hachas)",
      "Gestión icónica del maletín inventario con crafteo de munición y amuletos",
      "Motor RE Engine con iluminación volumétrica y fidelidad anatómica aterradora",
      "Buhonero carismático con mejoras profundas para cada arma de fuego",
      "Modo Los Mercenarios de alto rendimiento frenético incluido gratuitamente"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "AMD Ryzen 3 1200 / Intel Core i5-7500",
        gpu: "AMD Radeon RX 560 4GB / NVIDIA GeForce GTX 1050 Ti 4GB",
        ram: "8 GB RAM",
        storage: "67 GB SSD",
        directx: "Versión 12"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "AMD Ryzen 5 3600 / Intel Core i7 8700",
        gpu: "AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070",
        ram: "16 GB RAM",
        storage: "67 GB SSD",
        directx: "Versión 12"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Survival Horror", "Remake Ejemplar", "Acción Trepidante", "Gore", "Clásico Moderno"],
    languages: {
      audio: ["Español (España)", "Inglés", "Japonés", "Francés", "Alemán"],
      subtitles: ["Español (Latinoamérica)", "Español (España)", "Inglés", "Portugués", "Italiano"]
    },
    controllerSupport: "Soporte completo para mandos y soporte para realidad virtual en PS VR2",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/2050650/Resident_Evil_4/",
      playstation: "https://store.playstation.com/concept/10004473"
    }
  },
  {
    id: "helldivers-2",
    title: "Helldivers 2",
    shortTitle: "Helldivers 2",
    tagline: "Únete a los Helldivers y lucha por la Libertad y la Democracia Gestionada.",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Shooter Cooperativo", "Acción en 3ª Persona", "Sci-Fi", "Extracción"],
    platforms: ["PC", "PlayStation 5"],
    releaseDate: "2024-02-08",
    year: 2024,
    developer: "Arrowhead Game Studios",
    publisher: "PlayStation Publishing LLC",
    engine: "Autodesk Stingray (Modificado)",
    rating: 82,
    userScore: 8.2,
    steamReviews: "Muy Positivas (85%)",
    price: 39.99,
    originalPrice: 39.99,
    discount: 0,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia intensa, Sangre y desmembramiento alienígena, Humor negro"
    },
    playtime: {
      mainStory: "Partidas ilimitadas",
      extra: "80h+",
      completionist: "200h+"
    },
    synopsis: "La Supertierra está bajo asedio de dos amenazas mortales: los enjambres voraces de Termínidos y las legiones mecánicas implacables de Autómatas. Conviértete en la punta de lanza de la galaxia en escuadrones de hasta cuatro soldados, solicitando bombardeos orbitales y torretas pesadas para esparcir la paz a tiro limpio.",
    features: [
      "Guerra Galáctica en vivo guiada por un Dungeon Master humano (Joel)",
      "Fuego amigo siempre activo: el caos cómico y táctico es inevitable",
      "Llamada de estratagemas mediante combinaciones rápidas de la cruceta",
      "Física de penetración de armadura realista y destrucción balística",
      "Juego cruzado total (Crossplay) fluido entre usuarios de PC y PS5"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i7-4790K / AMD Ryzen 5 1500X",
        gpu: "NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 470",
        ram: "8 GB RAM",
        storage: "100 GB libres (SSD requerido)",
        directx: "Versión 12"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i7-9700K / AMD Ryzen 7 3700X",
        gpu: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600XT",
        ram: "16 GB RAM",
        storage: "100 GB NVMe SSD",
        directx: "Versión 12"
      }
    },
    modes: ["Cooperativo", "Multijugador"],
    tags: ["Cooperativo PVE", "Acción Caótica", "Sci-Fi", "Disparos en Equipo", "Humor Sátira"],
    languages: {
      audio: ["Español (Latinoamérica)", "Español (España)", "Inglés", "Francés", "Alemán"],
      subtitles: ["Español (Latinoamérica)", "Español (España)", "Inglés", "Portugués", "Italiano"]
    },
    controllerSupport: "Soporte completo para mandos y funciones avanzadas DualSense",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: false,
    storeUrls: {
      steam: "https://store.steampowered.com/app/553850/HELLDIVERS_2/",
      playstation: "https://store.playstation.com/concept/10006757"
    }
  },
  {
    id: "stardew-valley",
    title: "Stardew Valley (Update 1.6)",
    shortTitle: "Stardew Valley",
    tagline: "Heredaste la vieja parcela de tu abuelo. ¿Podrás devolverle la vida al valle?",
    cover: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Simulación de Granja", "RPG Relajante", "Indie", "Pixel Art", "Cozy Game"],
    platforms: ["PC", "Nintendo Switch", "PlayStation 4/5", "Xbox One", "iOS", "Android", "Steam Deck"],
    releaseDate: "2016-02-26",
    year: 2016,
    developer: "ConcernedApe",
    publisher: "ConcernedApe",
    engine: "C# / Monogame",
    rating: 89,
    userScore: 8.8,
    steamReviews: "Abrumadoramente Positivas (98%)",
    price: 14.99,
    originalPrice: 14.99,
    discount: 20,
    discountedPrice: 11.99,
    esrb: {
      rating: "E10+ (Everyone 10+)",
      reasons: "Violencia de fantasía leve, Uso de alcohol, Temas sugerentes leves"
    },
    playtime: {
      mainStory: "53h",
      extra: "95h",
      completionist: "155h"
    },
    synopsis: "Cansado de la asfixiante vida de oficina en Joja Corp, abres la carta sellada de tu abuelo y te mudas a Pelican Town. Con unas cuantas monedas y herramientas oxidadas, aprenderás a vivir de la tierra, criar animales, explorar minas peligrosas, entablar amistad con más de 30 vecinos y tal vez formar una familia.",
    features: [
      "Creado íntegramente por una sola persona (arte, código, música y diseño)",
      "Cooperativo en línea hasta para 8 jugadores en PC con granjas compartidas",
      "Ciclo de 4 estaciones con cultivos únicos, festivales y eventos especiales",
      "Pesca profunda, cocina con más de 80 recetas y mazmorras con monstruos",
      "Actualización 1.6 masiva con nuevos festivales, mascotas y maestría"
    ],
    requirements: {
      minimum: {
        os: "Windows Vista o posterior",
        cpu: "2 Ghz",
        gpu: "Tarjeta gráfica de 256 mb con Shader Model 3.0+",
        ram: "2 GB RAM",
        storage: "500 MB libres",
        directx: "Versión 10"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel Core i3",
        gpu: "Tarjeta gráfica integrada moderna",
        ram: "4 GB RAM",
        storage: "1 GB SSD",
        directx: "Versión 11"
      }
    },
    modes: ["Un Jugador", "Cooperativo"],
    tags: ["Acogedor / Cozy", "Pixel Art", "Relajante", "Vida de Granja", "Adictivo", "Amor"],
    languages: {
      audio: ["Efectos de sonido"],
      subtitles: ["Español (España/Latinoamérica)", "Inglés", "Francés", "Alemán", "Portugués", "Japonés"]
    },
    controllerSupport: "Totalmente compatible con mandos y pantalla táctil en dispositivos móviles",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/413150/Stardew_Valley/",
      switch: "https://www.nintendo.com/store/products/stardew-valley-switch/"
    }
  },
  {
    id: "forza-horizon-5",
    title: "Forza Horizon 5",
    shortTitle: "FH5",
    tagline: "Tu aventura Horizon definitiva te espera en los vibrantes paisajes de México.",
    cover: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Carreras / Conducción", "Mundo Abierto", "Simulación Arcade", "Deportes"],
    platforms: ["PC", "Xbox Series X/S", "Xbox One", "Xbox Cloud Gaming"],
    releaseDate: "2021-11-09",
    year: 2021,
    developer: "Playground Games",
    publisher: "Xbox Game Studios",
    engine: "ForzaTech",
    rating: 92,
    userScore: 8.2,
    steamReviews: "Muy Positivas (88%)",
    price: 59.99,
    originalPrice: 59.99,
    discount: 50,
    discountedPrice: 29.99,
    esrb: {
      rating: "E (Everyone)",
      reasons: "Apto para todo público"
    },
    playtime: {
      mainStory: "20h",
      extra: "48h",
      completionist: "115h+"
    },
    synopsis: "Recorre selvas vivientes, desiertos ondulantes, ciudades históricas como Guanajuato, playas paradisíacas y un volcán nevado activo. Lidera expediciones increíbles al volante de cientos de los mejores vehículos del planeta con condiciones climáticas dinámicas extremas como tormentas de polvo y aguaceros tropicales.",
    features: [
      "Más de 750 coches licenciados modelados con fidelidad milimétrica",
      "Clima estacional dinámico que cambia cada semana en todo el mapa",
      "EventLab: editor integral para crear tus propias carreras, acrobacias y modos",
      "Sonido de motor grabado en pistas reales para cada modelo específico",
      "Modo multijugador masivo continuo 'Horizon Open' y 'Eliminator' Battle Royale"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 versión 15063.0 o superior",
        cpu: "Intel i5-4460 o AMD Ryzen 3 1200",
        gpu: "NVidia GTX 970 O AMD Radeon RX 470 (4GB VRAM)",
        ram: "8 GB RAM",
        storage: "110 GB libres",
        directx: "Versión 12"
      },
      recommended: {
        os: "Windows 10/11",
        cpu: "Intel i7-10700K o AMD Ryzen 7 3800XT",
        gpu: "NVidia RTX 3070 o AMD Radeon RX 6800 XT (8GB+ VRAM)",
        ram: "16 GB RAM",
        storage: "110 GB NVMe SSD",
        directx: "Versión 12"
      }
    },
    modes: ["Un Jugador", "Multijugador", "Cooperativo"],
    tags: ["Carreras", "Coches", "Mundo Abierto", "Gráficos Hiperrealistas", "México", "Física Divertida"],
    languages: {
      audio: ["Español (México)", "Español (España)", "Inglés", "Portugués", "Francés"],
      subtitles: ["Español (Latinoamérica/España)", "Inglés", "Alemán", "Italiano", "Japonés"]
    },
    controllerSupport: "Compatibilidad total con mandos, vibración de impulsos y volantes de carreras",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/1551360/Forza_Horizon_5/",
      xbox: "https://www.xbox.com/games/store/forza-horizon-5-standard-edition/9nkx70bbcdrn"
    }
  },
  {
    id: "alan-wake-2",
    title: "Alan Wake 2",
    shortTitle: "Alan Wake 2",
    tagline: "El terror tiene dos caras. Un escritor atrapado en una pesadilla, una agente del FBI resolviendo un misterio.",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Survival Horror", "Thriller Psicológico", "Misterio", "Acción en 3ª Persona"],
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    releaseDate: "2023-10-27",
    year: 2023,
    developer: "Remedy Entertainment",
    publisher: "Epic Games Publishing",
    engine: "Northlight Engine",
    rating: 89,
    userScore: 8.6,
    steamReviews: "Exclusivo Epic Games Store (Aclamación de la Crítica)",
    price: 49.99,
    originalPrice: 49.99,
    discount: 20,
    discountedPrice: 39.99,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia intensa, Gore visceral, Desnudez, Lenguaje fuerte"
    },
    playtime: {
      mainStory: "19h",
      extra: "25h",
      completionist: "32h"
    },
    synopsis: "Una cadena de asesinatos rituales amenaza la pequeña localidad de Bright Falls. La consumada agente del FBI Saga Anderson llega para investigar, mientras que el escritor de terror Alan Wake lleva 13 años atrapado en el Lugar Oscuro, una pesadilla que él mismo moldea con su máquina de escribir para intentar escapar.",
    features: [
      "Doble campaña entrelazada con Saga Anderson y Alan Wake",
      "El 'Palacio Mental' y tablero de pistas deductivo de investigación",
      "Iluminación con Path Tracing y Mesh Shaders de vanguardia",
      "Integración de secuencias Live-Action reales con música de Poets of the Fall",
      "Mecánica de combate tensa basada en luz de linterna y munición escasa"
    ],
    requirements: {
      minimum: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel i5-7600K o equivalente AMD",
        gpu: "GeForce RTX 2060 / Radeon RX 6600 (6GB VRAM)",
        ram: "16 GB RAM",
        storage: "90 GB SSD necesario",
        directx: "Versión 12"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Ryzen 7 3700X o equivalente Intel",
        gpu: "GeForce RTX 3070 / Radeon RX 6700 XT (8GB VRAM)",
        ram: "16 GB RAM",
        storage: "90 GB NVMe SSD",
        directx: "Versión 12"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Terror Psicológico", "Misterio", "Historia Enigmática", "Ray Tracing", "Cinematográfico"],
    languages: {
      audio: ["Español (España)", "Inglés", "Alemán", "Japonés"],
      subtitles: ["Español (Latinoamérica/España)", "Inglés", "Francés", "Italiano", "Polaco"]
    },
    controllerSupport: "Soporte completo para mando con vibración y gatillos adaptativos",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      epic: "https://store.epicgames.com/p/alan-wake-2",
      playstation: "https://store.playstation.com/concept/10003554"
    }
  },
  {
    id: "persona-5-royal",
    title: "Persona 5 Royal",
    shortTitle: "P5 Royal",
    tagline: "Ponte la máscara, despierta a tu Persona y roba los corazones corruptos.",
    cover: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["JRPG", "Simulador Social", "Por Turnos", "Anime"],
    platforms: ["PC", "Nintendo Switch", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One", "Steam Deck"],
    releaseDate: "2020-03-31",
    year: 2020,
    developer: "ATLUS / P-Studio",
    publisher: "SEGA",
    engine: "Internal Atlus Engine",
    rating: 95,
    userScore: 8.7,
    steamReviews: "Abrumadoramente Positivas (97%)",
    price: 59.99,
    originalPrice: 59.99,
    discount: 50,
    discountedPrice: 29.99,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia, Sangre, Temas sexuales, Uso de drogas y alcohol"
    },
    playtime: {
      mainStory: "101h",
      extra: "125h",
      completionist: "144h"
    },
    synopsis: "Tras ser condenado injustamente por defender a una mujer, el protagonista es enviado a Tokio bajo libertad condicional. Allí descubre el Metaverso, una dimensión cognitiva formada por los deseos distorsionados de los adultos. Junto a sus compañeros de clase funda los 'Ladrones Fantasma de Corazones' para reformar la sociedad.",
    features: [
      "Doble vida: estudiante de día (clases, trabajos, citas) y justiciero de noche",
      "Dirección de arte y diseño de menús estilizados más alabados del medio",
      "Combate táctico por turnos con relevos 'Baton Pass' y ataques totales 'All-Out Attack'",
      "Más de 40 horas de contenido inédito respecto a la versión original, incluido el 3er semestre",
      "Banda sonora de Jazz y Acid-Soul legendaria compuesta por Shoji Meguro"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel Core i7-4790, 3.4 GHz / AMD FX-8350, 4.0 GHz",
        gpu: "Nvidia GeForce GTX 650 Ti (2 GB) / AMD Radeon R7 360 (2 GB)",
        ram: "8 GB RAM",
        storage: "41 GB libres",
        directx: "Versión 11"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i7-4790 / AMD Ryzen 5 1500X",
        gpu: "Nvidia GeForce GTX 760 (2 GB) / AMD Radeon HD 7870 (2 GB)",
        ram: "8 GB RAM",
        storage: "41 GB SSD",
        directx: "Versión 11"
      }
    },
    modes: ["Un Jugador"],
    tags: ["JRPG", "Anime", "Historia Extraordinaria", "Música Increíble", "Por Turnos", "Estilo Visual"],
    languages: {
      audio: ["Japonés", "Inglés"],
      subtitles: ["Español (España)", "Inglés", "Francés", "Alemán", "Italiano"]
    },
    controllerSupport: "Compatibilidad nativa total con mandos y atajos de teclado",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/1687950/Persona_5_Royal/",
      playstation: "https://store.playstation.com/concept/233068"
    }
  },
  {
    id: "sekiro-shadows-die-twice",
    title: "Sekiro: Shadows Die Twice - GOTY Edition",
    shortTitle: "Sekiro",
    tagline: "El honor es un camino forjado en sangre y acero.",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Acción", "Sigilo", "Soulslike", "Japón Feudal"],
    platforms: ["PC", "PlayStation 4", "Xbox One", "PlayStation 5 (Retro)", "Xbox Series X/S"],
    releaseDate: "2019-03-22",
    year: 2019,
    developer: "FromSoftware Inc.",
    publisher: "Activision",
    engine: "FromSoftware Engine",
    rating: 91,
    userScore: 8.5,
    steamReviews: "Abrumadoramente Positivas (95%)",
    price: 59.99,
    originalPrice: 59.99,
    discount: 50,
    discountedPrice: 29.99,
    esrb: {
      rating: "M (Mature 17+)",
      reasons: "Violencia intensa, Sangre y desmembramiento"
    },
    playtime: {
      mainStory: "30h",
      extra: "44h",
      completionist: "71h"
    },
    synopsis: "Japón, finales del siglo XVI en la convulsa era Sengoku. Eres el 'Lobo de un solo brazo', un guerrero desfigurado y al borde de la muerte rescatado para proteger a un joven señor que desciende de un antiguo linaje sagrado. Cuando es capturado, te embarcas en una implacable venganza armada con una prótesis shinobi letal.",
    features: [
      "El sistema de combate de espadas y desvíos (parry/deflection) más rítmico y preciso jamás creado",
      "Prótesis shinobi multifunción con shurikens, hacha rompe-escudos, lanza y petardos",
      "Gancho de agarre para una movilidad vertical rápida y ejecuciones de sigilo desde tejados",
      "Mecánica de 'Resurrección' para sorprender a los enemigos en el momento culminante",
      "Ganador del premio 'Juego del Año' (GOTY) en The Game Awards 2019"
    ],
    requirements: {
      minimum: {
        os: "Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit",
        cpu: "Intel Core i3-2100 | AMD FX-6300",
        gpu: "NVIDIA GeForce GTX 760 | AMD Radeon HD 7950",
        ram: "4 GB RAM",
        storage: "25 GB de espacio libre",
        directx: "Versión 11"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i5-6600K | AMD Ryzen 5 1600",
        gpu: "NVIDIA GeForce GTX 970 | AMD Radeon RX 580",
        ram: "8 GB RAM",
        storage: "25 GB SSD",
        directx: "Versión 11"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Japón Feudal", "Ninja / Shinobi", "Desafiante", "Espadachines", "GOTY"],
    languages: {
      audio: ["Japonés", "Español (España)", "Inglés", "Francés", "Alemán"],
      subtitles: ["Español (Latinoamérica/España)", "Inglés", "Francés", "Italiano", "Chino"]
    },
    controllerSupport: "Controlador altamente recomendado para sincronización de parry",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/",
      playstation: "https://store.playstation.com/concept/234731"
    }
  },
  {
    id: "celeste",
    title: "Celeste",
    shortTitle: "Celeste",
    tagline: "Ayuda a Madeline a sobrevivir a sus demonios internos en su viaje a la cima de la montaña Celeste.",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Plataformas de Precisión", "Indie", "Pixel Art", "Narrativo Emocional"],
    platforms: ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One", "Linux", "macOS", "Steam Deck"],
    releaseDate: "2018-01-25",
    year: 2018,
    developer: "Maddy Makes Games",
    publisher: "Maddy Makes Games",
    engine: "Monogame / C#",
    rating: 94,
    userScore: 8.9,
    steamReviews: "Abrumadoramente Positivas (97%)",
    price: 19.99,
    originalPrice: 19.99,
    discount: 75,
    discountedPrice: 4.99,
    esrb: {
      rating: "E10+ (Everyone 10+)",
      reasons: "Violencia de fantasía leve, Temas de ansiedad y salud mental"
    },
    playtime: {
      mainStory: "8h",
      extra: "14h",
      completionist: "38h"
    },
    synopsis: "Un juego de plataformas sobre superación personal. Madeline lucha contra su ansiedad y depresión mientras asciende una misteriosa montaña mágica llena de peligros. Cada muerte es una lección instantánea que te acerca al triunfo personal a través de cientos de pantallas diseñadas con milimétrica perfección.",
    features: [
      "Controles ultra precisos: salto, dash aéreo en 8 direcciones y escalada",
      "Más de 700 pantallas de desafíos plataformeros intensos y salas secretas",
      "Caras B y C brutales para los jugadores que buscan el máximo reto",
      "Modo de Asistencia revolucionario que permite adaptar la dificultad a cualquiera",
      "Banda sonora de sintetizadores emotiva y dinámica compuesta por Lena Raine"
    ],
    requirements: {
      minimum: {
        os: "Windows 7 o posterior",
        cpu: "Intel Core i3 M380",
        gpu: "Intel HD 4000",
        ram: "2 GB RAM",
        storage: "1.2 GB de espacio libre",
        directx: "Versión 10"
      },
      recommended: {
        os: "Windows 10",
        cpu: "Intel Core i5",
        gpu: "Tarjeta gráfica dedicada básica",
        ram: "4 GB RAM",
        storage: "2 GB SSD",
        directx: "Versión 11"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Plataformas Duro", "Pixel Art", "Salud Mental", "Música Memorable", "Indie Clásico"],
    languages: {
      audio: ["Efectos melódicos sintetizados"],
      subtitles: ["Español (España/Latinoamérica)", "Inglés", "Francés", "Alemán", "Italiano", "Portugués"]
    },
    controllerSupport: "Compatibilidad ideal con crucetas de mandos (D-Pad)",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/504230/Celeste/",
      switch: "https://www.nintendo.com/store/products/celeste-switch/"
    }
  },
  {
    id: "subnautica",
    title: "Subnautica",
    shortTitle: "Subnautica",
    tagline: "Desciende a las profundidades de un mundo oceánico alienígena.",
    cover: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Supervivencia", "Mundo Abierto Submarino", "Aventura", "Ciencia Ficción"],
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One", "Nintendo Switch"],
    releaseDate: "2018-01-23",
    year: 2018,
    developer: "Unknown Worlds Entertainment",
    publisher: "Unknown Worlds Entertainment",
    engine: "Unity",
    rating: 87,
    userScore: 8.6,
    steamReviews: "Abrumadoramente Positivas (96%)",
    price: 29.99,
    originalPrice: 29.99,
    discount: 50,
    discountedPrice: 14.99,
    esrb: {
      rating: "E10+ (Everyone 10+)",
      reasons: "Violencia animada, Sangre leve, Suspenso submarino intenso"
    },
    playtime: {
      mainStory: "29h",
      extra: "44h",
      completionist: "57h"
    },
    synopsis: "Tras estrellarte en el planeta alienígena 4546B cubierto por un vasto océano, la única dirección posible es hacia abajo. Gestiona tu suministro de oxígeno mientras exploras arrecifes de coral bañados por el sol, fosas abisales bioluminiscentes y ríos submarinos volcánicos infestados por titánicos Leviatanes Segadores.",
    features: [
      "Construcción modular de bases submarinas con reactores nucleares y observatorios",
      "Fabricación de submarinos emblemáticos: Seamoth, PRAWN Suit y el colosal Cyclops",
      "Ciclo de día y noche que transforma la fauna marina en depredadores nocturnos",
      "Misterio de una civilización alienígena extinta y una bacteria bacteriana letal",
      "Modo Realidad Virtual (VR) inmersivo y modos de juego relajado sin hambre"
    ],
    requirements: {
      minimum: {
        os: "Windows Vista SP2 o posterior, 64-bit",
        cpu: "Intel Haswell 2 cores / 4 threads @ 2.5Ghz o equivalente",
        gpu: "Intel HD 4600 o equivalente",
        ram: "4 GB RAM",
        storage: "20 GB libres",
        directx: "Versión 11"
      },
      recommended: {
        os: "Windows 10 64-bit",
        cpu: "Intel Haswell 4 cores / 4 threads @ 3.2Ghz o equivalente",
        gpu: "Nvidia GTX 550 Ti o equivalente, 2GB VRAM",
        ram: "8 GB RAM",
        storage: "20 GB SSD",
        directx: "Versión 11"
      }
    },
    modes: ["Un Jugador"],
    tags: ["Supervivencia Marina", "Exploración", "Crafteo", "Misterio Sci-Fi", "Talassofobia"],
    languages: {
      audio: ["Inglés"],
      subtitles: ["Español (Latinoamérica/España)", "Inglés", "Francés", "Alemán", "Italiano", "Ruso"]
    },
    controllerSupport: "Totalmente compatible con mandos de Xbox y PlayStation",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/264710/Subnautica/",
      epic: "https://store.epicgames.com/p/subnautica"
    }
  },
  {
    id: "it-takes-two",
    title: "It Takes Two",
    shortTitle: "It Takes Two",
    tagline: "Embarcaos en el viaje más alocado de vuestras vidas, diseñado exclusivamente para dos.",
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Cooperativo", "Plataformas 3D", "Puzles", "Comedia Romántica", "Aventura"],
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One", "Nintendo Switch"],
    releaseDate: "2021-03-26",
    year: 2021,
    developer: "Hazelight Studios",
    publisher: "Electronic Arts",
    engine: "Unreal Engine 4",
    rating: 89,
    userScore: 8.9,
    steamReviews: "Abrumadoramente Positivas (96%)",
    price: 39.99,
    originalPrice: 39.99,
    discount: 65,
    discountedPrice: 13.99,
    esrb: {
      rating: "T (Teen)",
      reasons: "Violencia animada, Lenguaje sugerente, Humor para adultos"
    },
    playtime: {
      mainStory: "14h",
      extra: "16h",
      completionist: "18h"
    },
    synopsis: "Cody y May, una pareja distanciada al borde del divorcio, se transforman por un hechizo en dos muñecos de trapo y arcilla hechos por su hija Rose. Guiados por el extravagante libro del amor Dr. Hakim, deberán aprender a colaborar de nuevo para superar los disparatados obstáculos de su hogar y reconectar sentimentalmente.",
    features: [
      "Juego 100% cooperativo diseñado desde cero para dos personas (no se puede jugar solo)",
      "Pase de Amigo gratuito (Friend's Pass): con una sola copia juegan dos personas en línea",
      "Mecánicas completamente nuevas en cada nivel: imanes, gravedad, clones y cañones",
      "Decenas de divertidos minijuegos competitivos repartidos por el mundo",
      "Ganador del codiciado 'Juego del Año' (GOTY) en The Game Awards 2021"
    ],
    requirements: {
      minimum: {
        os: "Windows 8.1 64-bit o Windows 10 64-bit",
        cpu: "Intel Core i3-2100T o AMD FX-6100",
        gpu: "Nvidia GeForce GTX 660 o AMD R7 260x",
        ram: "8 GB RAM",
        storage: "50 GB libres",
        directx: "Versión 11"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        cpu: "Intel Core i5 3570K o AMD Ryzen 3 1300x",
        gpu: "Nvidia GeForce GTX 980 o AMD R9 290X",
        ram: "16 GB RAM",
        storage: "50 GB SSD",
        directx: "Versión 11"
      }
    },
    modes: ["Cooperativo"],
    tags: ["Cooperativo para 2", "Diversión Pura", "GOTY", "Para Parejas / Amigos", "Variedad Infinita"],
    languages: {
      audio: ["Español (España)", "Inglés", "Francés", "Alemán", "Japonés"],
      subtitles: ["Español (Latinoamérica/España)", "Inglés", "Italiano", "Portugués", "Chino"]
    },
    controllerSupport: "Compatibilidad total con mandos para ambos jugadores simultáneamente",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: false,
    isEditorChoice: true,
    storeUrls: {
      steam: "https://store.steampowered.com/app/1426210/It_Takes_Two/",
      playstation: "https://store.playstation.com/concept/10001088"
    }
  },
  {
    id: "genshin-impact",
    title: "Genshin Impact",
    shortTitle: "Genshin Impact",
    tagline: "Adéntrate en Teyvat, un vasto mundo lleno de vida y energía elemental.",
    cover: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Action RPG", "Mundo Abierto", "Free-to-Play", "Fantasía Anime"],
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "iOS", "Android", "GeForce NOW"],
    releaseDate: "2020-09-28",
    year: 2020,
    developer: "miHoYo / HoYoverse",
    publisher: "HoYoverse",
    engine: "Unity Custom Engine",
    rating: 84,
    userScore: 7.8,
    steamReviews: "Gratuito / Free to Play (Millones de Jugadores Activos)",
    price: 0,
    originalPrice: 0,
    discount: 0,
    esrb: {
      rating: "T (Teen)",
      reasons: "Violencia de fantasía, Compras dentro del juego"
    },
    playtime: {
      mainStory: "80h+",
      extra: "150h+",
      completionist: "400h+"
    },
    synopsis: "Dos hermanos gemelos viajan entre mundos hasta que una deidad desconocida les arrebata sus poderes y los separa. Despiertas en el continente de Teyvat, donde los siete elementos fluyen y convergen. Con la compañía de la pequeña Paimon, recorrerás siete naciones con sus propios Arcontes divinos para reencontrarte con tu gemelo perdido.",
    features: [
      "Sistema de combate basado en reacciones elementales (Vaporizado, Derretido, Sobrecarga, Torbellino)",
      "Mundo abierto monumental con escalada y planeador libre",
      "Más de 80 personajes jugables con animaciones y talentos de combate únicos",
      "Actualizaciones continuas de contenido con nuevas regiones y misiones cada 6 semanas",
      "Banda sonora orquestal grabada con la Orquesta Filarmónica de Londres y Orquesta Sinfónica de Shanghái"
    ],
    requirements: {
      minimum: {
        os: "Windows 7 SP1 64-bit, Windows 8.1 64-bit o Windows 10 64-bit",
        cpu: "Intel Core i5 o equivalente",
        gpu: "NVIDIA GeForce GT 1030 o superior",
        ram: "8 GB RAM",
        storage: "100 GB libres",
        directx: "Versión 11"
      },
      recommended: {
        os: "Windows 10 64-bit o Windows 11 64-bit",
        cpu: "Intel Core i7 o equivalente",
        gpu: "NVIDIA GeForce GTX 1060 6 GB o superior",
        ram: "16 GB RAM",
        storage: "100 GB SSD",
        directx: "Versión 11"
      }
    },
    modes: ["Un Jugador", "Cooperativo"],
    tags: ["Gratis / Free to Play", "Anime", "Mundo Abierto Masivo", "Exploración", "Combate Elemental"],
    languages: {
      audio: ["Japonés", "Chino", "Inglés", "Coreano"],
      subtitles: ["Español (Latinoamérica/España)", "Inglés", "Francés", "Alemán", "Portugués", "Ruso"]
    },
    controllerSupport: "Soporte nativo para controles DualSense y mandos de Xbox en PC",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: false,
    storeUrls: {
      epic: "https://store.epicgames.com/p/genshin-impact",
      playstation: "https://store.playstation.com/concept/10001019"
    }
  },
  {
    id: "fortnite",
    title: "Fortnite",
    shortTitle: "Fortnite",
    tagline: "Salta del autobús de batalla, construye, dispara y sé el último en pie en una isla en constante evolución.",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
    ],
    genre: ["Battle Royale", "Shooter", "Free-to-Play", "Construcción", "Multijugador"],
    platforms: ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X/S", "Xbox One", "Nintendo Switch", "Android", "GeForce NOW"],
    releaseDate: "2017-07-21",
    year: 2017,
    developer: "Epic Games",
    publisher: "Epic Games",
    engine: "Unreal Engine 5.5 (con Nanite, Lumen y Chaos Physics)",
    rating: 85,
    userScore: 8.0,
    steamReviews: "Gratuito / Free to Play (Más de 500M de Jugadores Registrados)",
    price: 0,
    originalPrice: 0,
    discount: 0,
    esrb: {
      rating: "T (Teen)",
      reasons: "Violencia animada, Compras dentro del juego, Interacción entre usuarios"
    },
    playtime: {
      mainStory: "Partidas ilimitadas",
      extra: "120h+",
      completionist: "500h+"
    },
    synopsis: "Fortnite es el fenómeno global multijugador gratuito desarrollado por Epic Games. En su modo Battle Royale, 100 jugadores se lanzan en paracaídas sobre una isla donde deben buscar armas, recolectar recursos, construir fortalezas y combatir en una tormenta letal hasta que solo quede uno. También incluye el aclamado modo 'Cero Construcción', Fortnite Festival, LEGO Fortnite y Rocket Racing.",
    features: [
      "Ecosistema visual puntero impulsado por Unreal Engine 5 con geometría Nanite y reflejos Lumen",
      "Modo 'Cero Construcción' centrado en táctica de combate puro, movilidad y puntería",
      "Eventos interactivos en vivo con conciertos masivos y finales de temporada cinematográficos",
      "Unreal Editor para Fortnite (UEFN) con millones de mapas, minijuegos y modos creados por fans",
      "Juego cruzado total (Crossplay) y progresión compartida entre consolas, PC y móviles"
    ],
    requirements: {
      minimum: {
        os: "Windows 10 (64-bit)",
        cpu: "Core i3-3225 3.3 GHz",
        gpu: "Intel HD 4000 en PC / Intel Iris Pro 5200",
        ram: "8 GB RAM",
        storage: "30 GB SSD",
        directx: "Versión 11"
      },
      recommended: {
        os: "Windows 10/11 (64-bit)",
        cpu: "Core i5-7300U 3.5 GHz / AMD Ryzen 3 3300X",
        gpu: "Nvidia GeForce GTX 960 / AMD Radeon R9 280 (ó RTX 3060 para Lumen)",
        ram: "16 GB RAM",
        storage: "30 GB NVMe SSD",
        directx: "Versión 12"
      }
    },
    modes: ["Multijugador", "Cooperativo", "PvP Battle Royale"],
    tags: ["Battle Royale", "Gratis / Free to Play", "Unreal Engine 5", "Crossplay", "Disparos", "Eventos en Vivo"],
    languages: {
      audio: ["Español (Latinoamérica/España)", "Inglés", "Francés", "Alemán", "Japonés", "Portugués"],
      subtitles: ["Español (Latinoamérica/España)", "Inglés", "Francés", "Alemán", "Italiano", "Portugués", "Japonés", "Coreano"]
    },
    controllerSupport: "Compatibilidad total con mandos DualSense, Xbox, giroscopio y ratón",
    isFeatured: false,
    isGameOfWeek: false,
    isTrending: true,
    isEditorChoice: false,
    storeUrls: {
      epic: "https://store.epicgames.com/p/fortnite",
      playstation: "https://store.playstation.com/concept/223793",
      xbox: "https://www.xbox.com/games/store/fortnite/bt5p2x999vh2",
      nintendo: "https://www.nintendo.com/store/products/fortnite-switch/"
    }
  }
];

export const GENRES_LIST = [
  "Todos",
  "Action RPG",
  "Battle Royale",
  "Mundo Abierto",
  "Soulslike",
  "Roguelike",
  "CRPG",
  "Survival Horror",
  "FPS",
  "Shooter Cooperativo",
  "Metroidvania",
  "Plataformas de Precisión",
  "Simulación de Granja",
  "Carreras / Conducción",
  "JRPG",
  "Cartas / Deckbuilder",
  "Free-to-Play"
];

export const PLATFORMS_LIST = [
  "Todas",
  "PC",
  "PlayStation 5",
  "Xbox Series X/S",
  "Nintendo Switch",
  "Steam Deck",
  "PlayStation 4",
  "Xbox One"
];

export const ESRB_RATINGS = [
  "Todas",
  "E (Everyone)",
  "E10+ (Everyone 10+)",
  "T (Teen)",
  "M (Mature 17+)"
];
