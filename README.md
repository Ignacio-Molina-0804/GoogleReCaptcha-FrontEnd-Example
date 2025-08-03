# 🚀 Ejemplo de Google reCAPTCHA con Astro

¡Bienvenido! Este proyecto es una demo sencilla de cómo integrar Google reCAPTCHA v2 en un formulario usando [Astro](https://astro.build/). Ideal para aprender a proteger tus formularios de bots y automatizaciones.

---

## 📁 Estructura del Proyecto

```
frontend/
├── .env                   # Variables de entorno (clave pública de reCAPTCHA)
├── astro.config.mjs       # Configuración de Astro
├── package.json           # Dependencias y scripts
├── tsconfig.json          # Configuración de TypeScript
├── public/
│   └── favicon.svg        # Ícono del sitio
└── src/
    ├── env.d.ts           # Tipos globales para reCAPTCHA
    ├── layouts/
    │   └── Layout.astro   # Layout base
    ├── pages/
    │   └── index.astro    # Página principal con el formulario
    └── scripts/
        └── recaptcha.ts   # Lógica de validación reCAPTCHA
```

---

## ✨ Características

- **Astro** como framework principal.
- **Google reCAPTCHA v2** integrado en el formulario.
- Validación del token reCAPTCHA en el frontend y envío a un backend.
- Código limpio y fácil de entender.

---

## ⚙️ Instalación y Uso

1. **Clona el repositorio**
   ```sh
   git clone <url-del-repo>
   cd frontend
   ```

2. **Instala las dependencias**
   ```sh
   npm install
   ```

3. **Configura tu clave pública de reCAPTCHA**
   - Edita el archivo `.env`:
     ```
     PUBLIC_RECAPTCHA_SITE_KEY=TU_SITE_KEY
     ```

4. **Inicia el servidor de desarrollo**
   ```sh
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

---

## 📝 Notas

- El formulario envía el token de reCAPTCHA a `http://localhost:8080/api/verify-captcha`. Debes tener un backend escuchando en esa ruta para validar el token.
- El script de validación está en [`src/scripts/recaptcha.ts`](src/scripts/recaptcha.ts).
- El layout base está en [`src/layouts/Layout.astro`](src/layouts/Layout.astro).
- El formulario principal está en [`src/pages/index.astro`](src/pages/index.astro).

---

## 💡 Personalización

- Cambia los estilos en [`src/pages/index.astro`](src/pages/index.astro) o en el layout.
- Puedes adaptar el endpoint del backend según tus necesidades.

---

## 🛡️ Licencia

MIT

---

¡Listo! Ahora tienes un proyecto Astro con reCAPTCHA listo para usar y