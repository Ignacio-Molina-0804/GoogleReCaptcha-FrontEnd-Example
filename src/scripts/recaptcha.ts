// src/scripts/recaptcha.ts

export const setupRecaptcha = (formId: string) => {
  const form = document.getElementById(formId) as HTMLFormElement | null; // 1. Cast a HTMLFormElement
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    if (!window.grecaptcha) {
      alert("reCAPTCHA no está cargado. Recarga la página.");
      return;
    }

    const token = window.grecaptcha.getResponse();
    if (!token) {
      alert("Completa el reCAPTCHA");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
      });

      const data = await response.json();
      
      if (data.success) {
        alert("¡Validación exitosa!");
        form.reset(); // 2. Ahora TypeScript sabe que es un formulario
        window.grecaptcha.reset();
      } else {
        throw new Error(data['error-codes']?.join(". ") || "Error desconocido");
      }
    } catch (error) {
      alert(`Error: ${error instanceof Error ? error.message : String(error)}`);
      console.error("Error en reCAPTCHA:", error);
    }
  });
};