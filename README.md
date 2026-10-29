# 🎮 BenjaGames | Buscador & Enciclopedia Técnica de Videojuegos

BenjaGames es una aplicación web moderna, rápida y detallada para descubrir, filtrar, clasificar y comparar videojuegos. Incluye fichas técnicas completas con requisitos de hardware para PC (mínimos y recomendados), duración estimada de juego (HowLongToBeat), galería en alta definición, críticas de Metacritic y enlaces directos a tiendas oficiales.

![BenjaGames Preview](https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80)

---

## ⚡ Características Principales

- 🔍 **Búsqueda en Tiempo Real**: Autocompletado inteligente con coincidencia instantánea por título, desarrollador, motor gráfico, género o etiquetas.
- 📊 **Fichas Técnicas Exhaustivas**:
  - Requisitos del sistema Mínimos y Recomendados (CPU, GPU, RAM, Almacenamiento SSD, DirectX).
  - Horas estimadas de juego (Historia Principal, Extra y 100% Completista).
  - Puntuaciones de Metacritic, User Score y estado de valoraciones en Steam.
  - Galería de capturas en alta definición y sinopsis narrativa profunda.
  - Enlaces oficiales a tiendas: Steam, Epic Games Store, PlayStation Store, Xbox y Nintendo eShop.
- 🎯 **Filtrado & Clasificación Avanzada**:
  - Por Género (Action RPG, Battle Royale, FPS, Soulslike, Roguelike, CRPG, etc.).
  - Por Plataforma (PC, PS5, Xbox Series X/S, Nintendo Switch, Steam Deck, etc.).
  - Slider de Puntuación Metacritic en tiempo real (60+ a 95+).
  - Rango de Precio y Ofertas (Gratis / F2P, En Descuento, <$20, <$40).
  - Clasificación por edades (ESRB: Everyone, Teen, Mature 17+).
  - Modos de juego (Un Jugador, Cooperativo, Multijugador).
- ⚖️ **Comparador Frente a Frente**: Compara especificaciones técnicas, motor, duración y hardware recomendado de hasta 3 juegos simultáneamente.
- 🎲 **Ruleta Aleatoria de Videojuegos**: Generador animado para elegir al azar el próximo juego a jugar según los filtros activos.
- ⭐ **Guardados / Wishlist**: Sistema de favoritos persistente en almacenamiento local (`localStorage`).
- 📱 **Diseño Cyberpunk Glassmorphism**: Interfaz oscura de alto impacto visual, 100% responsiva para escritorio, tablets y móviles.

---

## 🚀 Despliegue en Vercel (1-Click)

La aplicación está lista para desplegarse automáticamente en **Vercel** conectando este repositorio de GitHub:

1. Ingresa a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New..."** -> **"Project"**.
3. Selecciona el repositorio **`RSDsolutions/BenjaGames`**.
4. Vercel detectará automáticamente la configuración definida en `vercel.json`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Haz clic en **"Deploy"** y tu aplicación estará activa globalmente en segundos con HTTPS y CDN.

---

## 💻 Ejecución Local

Para clonar y correr este proyecto en tu entorno local:

```bash
# 1. Clonar el repositorio
git clone https://github.com/RSDsolutions/BenjaGames.git

# 2. Entrar al directorio
cd BenjaGames

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

Para compilar la versión de producción:
```bash
npm run build
```

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 & Vanilla JavaScript Moderno (ES Modules)**
- **CSS3 Moderno** (Variables personalizadas, Flexbox, CSS Grid, Glassmorphism y Micro-animaciones)
- **Vite 6** (Bundler ultrarrápido y Hot Module Replacement)
- **Google Fonts** (Inter y Rajdhani para estética gaming de alta gama)
- **Vercel** (Hosting y Edge Network)

---

Desarrollado con pasión para la comunidad gamer en **BenjaGames**.
