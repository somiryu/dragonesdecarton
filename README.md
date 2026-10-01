# Dragones de Cartón

Sitio estático de la activación multimarca **Dragones de Cartón** para SOFA 2026.
HTML, CSS y JavaScript sin dependencias ni paso de build.

## Páginas

| Archivo | Para quién | Qué tiene |
|---|---|---|
| `index.html` | Visitantes de la feria | Cómo jugar, objetivos de la mecánica activa, participantes, sorteo y preguntas frecuentes |
| `aliados.html` | Negocios participantes | Rol de cada stand, cómo sellar, validar y registrar, opciones de mecánica y kit |

## Editar contenido

Casi todo se edita en **`assets/js/data.js`**:

- `evento`: fechas, hora del sorteo, lugar de validación, cuenta de redes, meta comunal.
- `mecanicaActiva`: `"A"`, `"B"` o `"C"`. La página pública muestra solo esa.
- `mecanicas`: texto de cada opción.
- `carton`: distribución de las 16 casillas por pabellón.
- `participantes`: código, nombre, pabellón y actividad de cada negocio.
- `faq`: preguntas frecuentes. Admite `{horaSorteo}`, `{lugarValidacion}`, `{cuentaRedes}` y `{metaComunal}`.

Los valores entre `[corchetes]` se ven en dorado e itálica en el sitio para que se note que faltan.

## Ver en local

Abre `index.html` en el navegador, o levanta un servidor simple:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## Publicar en Netlify

1. Crea un repositorio en GitHub y sube esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Sitio inicial Dragones de Cartón"
   git branch -M main
   git remote add origin https://github.com/<usuario>/dragones-de-carton.git
   git push -u origin main
   ```
2. En Netlify: **Add new site → Import an existing project → GitHub** y elige el repositorio.
3. Deja el comando de build vacío y el directorio de publicación en `.` (ya está en `netlify.toml`).
4. Cada `git push` a `main` vuelve a publicar el sitio.

## Estructura

```
.
├── index.html
├── aliados.html
├── netlify.toml
├── assets/
│   ├── css/styles.css
│   ├── js/data.js      ← contenido editable
│   ├── js/main.js      ← render del contenido
│   └── img/            ← cartón, imagen para redes, favicon
├── CLAUDE.md           ← contexto para Claude Code
└── README.md
```
