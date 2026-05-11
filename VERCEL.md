# Desplegar esta landing en Vercel

## 1. Preparar el repositorio

- Sube el proyecto a GitHub (puede ser solo la carpeta `german-profile-landing` como raíz del repo, o el monorepo completo).

## 2. Crear proyecto en Vercel

1. Entra en [vercel.com](https://vercel.com) e inicia sesión.
2. **Add New… → Project** e importa el repositorio.
3. Si el repo es el **monorepo** `curriculum-creator`:
   - **Root Directory**: `german-profile-landing`
4. Vercel debería detectar **Vite**. Ajusta si hace falta:
   - **Framework Preset**: Vite  
   - **Build Command**: `npm run build`  
   - **Output Directory**: `dist`  
   - **Install Command**: `npm install`

## 3. Variables de entorno (recomendado)

En el proyecto Vercel → **Settings → Environment Variables**:

| Nombre | Valor ejemplo | Entornos |
|--------|----------------|----------|
| `VITE_PUBLIC_SITE_URL` | `https://tu-dominio.vercel.app` o tu dominio custom | Production (y Preview si quieres) |

Así la canonical y las meta Open Graph usan una URL estable (mejor para compartir en LinkedIn).

Tras el primer despliegue, copia la URL real de producción y vuelve a guardar la variable si la primera vez usaste un placeholder.

## 4. Dominio (opcional)

**Settings → Domains**: añade tu dominio y sigue las instrucciones DNS de Vercel.

## 5. Imagen Open Graph (opcional y recomendable en LinkedIn)

1. Crea una imagen **1200×630** px (PNG o JPG) con tu nombre y propuesta.
2. Súbela a `german-profile-landing/public/` (por ejemplo `og.jpg`).
3. En `src/data/profile.ts`, en `seo.ogImageUrl`, pon la URL absoluta, por ejemplo:  
   `https://tu-dominio.vercel.app/og.jpg`

Sin esto, LinkedIn puede mostrar un preview genérico.

## 6. Desplegar

- Cada **push** a la rama conectada (p. ej. `main`) dispara un despliegue.
- O desde la CLI: `npx vercel` (preview) / `npx vercel --prod` (producción), ejecutando los comandos **dentro de** `german-profile-landing`.

## 7. Probar el despliegue

- Abre la URL de producción en escritorio y en móvil (Chrome/Safari).
- Si vas a compartir el enlace en redes, revisa la tarjeta con el [Inspector de post de LinkedIn](https://www.linkedin.com/post-inspector/) (pega la URL pública).

## 8. Monorepo: solo esta carpeta

Si Vercel construye desde la raíz del monorepo por error, confirma de nuevo **Root Directory** = `german-profile-landing` y que no haya otro `vercel.json` en la raíz que lo sobrescriba.
