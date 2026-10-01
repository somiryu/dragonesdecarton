# Contexto del proyecto para Claude Code

## Qué es
Sitio estático de **Dragones de Cartón**, una activación multimarca de Azahar Juegos en la feria SOFA 2026 (Bogotá).
Los visitantes piden un cartón en cualquier negocio participante, ganan **sellos** (no stickers) haciendo actividades en los stands
y, al cumplir objetivos en el cartón, reciben **boletas** para un **sorteo diario al cierre**, con varios ganadores por día.

## Reglas de la dinámica (decisiones ya tomadas)
- Sellos de caucho, uno por negocio por cartón. No hay premios instantáneos.
- Los premios se entregan todos los días al cierre, por sorteo. No se premia a todos ni cada hora.
- Cumplir objetivos desbloquea la participación en el sorteo. Se pueden pensar metas comunales.
- Los cartones se entregan en cualquier negocio participante, no solo en Azahar.
- No usar códigos QR.
- Siempre debe existir una forma gratuita de ganar cada sello.

## El cartón impreso
- Lado izquierdo: título, mapa de la feria con pabellones P1 (rojo), P3 (crema), P6 (dorado), P8 (verde).
- Centro: dragón rojo coral.
- Derecha: cuadrícula de 16 casillas en 3 filas (6, 4 y 6). El color de cada casilla corresponde a un pabellón.
- La distribución de colores en `data.js > carton` es una suposición: **confirmar con el diseño final**.

## Mecánicas en decisión
A · Las tres filas del dragón, B · Vuela por los pabellones, C · Despierta al dragón.
Están en `data.js > mecanicas`. `mecanicaActiva` controla cuál ve el público.

## Participantes (16)
VM VelaMar · JSM Los Juegos Sobre la Mesa · RC Las Reglas de la Casa · SG Son Geniales · CJ Carlos Reyes (posible marca "Creo mi Juego") ·
AD Gemu AD AD164 · TK Comunidad Torrikku · BBG · AZ Azahar Juegos · TI Tablero Infinito · FFF Friz Froz Fruz · WM Woodmood ·
RO Ronda · DV Devir · RT Rudoteka · C3D Concepto 3D.
El registro de boletas vive en un Google Sheet con una pestaña por participante (Código | Nombre participante | Cel | Email | Boletas).

## Convenciones técnicas
- Vanilla: HTML + CSS + JS sin frameworks, sin npm, sin build. Mantenerlo así salvo que se pida lo contrario.
- El contenido vive en `assets/js/data.js` (objeto global `window.DC`); `main.js` lo pinta usando atributos `data-*`.
  Se usa un script clásico (no `type="module"`) para que el sitio también funcione abriendo el HTML directo desde el disco.
- Estilos en `assets/css/styles.css` con variables en `:root`. Diseño oscuro tomado del cartón.
- Tipografías de Google Fonts: Grenze Gotisch (títulos) e Instrument Sans (texto). Reemplazables si hay tipografía de marca.
- Todo el texto del sitio en español de Colombia, tono cercano y claro.
- Despliegue: GitHub → Netlify, configurado en `netlify.toml` (publica la raíz).

## Pendientes conocidos
- Fechas de la feria, hora del sorteo, lugar de validación y cuenta de redes (valores entre corchetes en `data.js`).
- Pabellón y actividad de cada participante.
- Elegir la mecánica final.
- Revisar si el sorteo requiere autorización de Coljuegos.
- Logos de los participantes (hoy se muestran círculos con el código).
