// ================
// FUNCIONALIDAD PARA LA PÁGINA DE LOGIN
// ================

document.addEventListener('DOMContentLoaded', function () {
  
  // 1. Detectar si estamos en la página de login
  if (document.body.classList.contains('login-page')) {
    const loginButton = document.querySelector('.primary-login');
    const socialButtons = {
      linkedin: document.querySelector('.linkedin'),
      google: document.querySelector('.google'),
      apple: document.querySelector('.apple')
    };

    // Botón principal "Iniciar sesión"
    if (loginButton) {
      loginButton.addEventListener('click', function () {
        // Aquí puedes simular una verificación o ir directo al registro
        alert('Iniciando sesión... (simulado)');
        
        // Redirigir a la página de registro (como en tu flujo)
        window.location.href = 'registro.html';
      });
    }

    // Botones sociales (opcionales)
    if (socialButtons.linkedin) {
      socialButtons.linkedin.addEventListener('click', function () {
        alert('Iniciando sesión con LinkedIn... (simulado)');
        // window.location.href = 'https://linkedin.com/oauth/...';
      });
    }

    if (socialButtons.google) {
      socialButtons.google.addEventListener('click', function () {
        alert('Iniciando sesión con Google... (simulado)');
      });
    }

    if (socialButtons.apple) {
      socialButtons.apple.addEventListener('click', function () {
        alert('Iniciando sesión con Apple... (simulado)');
      });
    }
  }

  // ================
  // FUNCIONALIDAD PARA LA PÁGINA DE REGISTRO
  // ================

  // Si estamos en la página de registro
  if (document.body.classList.contains('register-page')) {
    const btnAlumno = document.getElementById('btn-alumno');
    const btnTutor = document.getElementById('btn-tutor');
    const registerForm = document.getElementById('registerForm');

    if (btnAlumno && btnTutor) {
      btnAlumno.classList.add('active');

      btnAlumno.addEventListener('click', function () {
        btnAlumno.classList.add('active');
        btnTutor.classList.remove('active');
      });

      btnTutor.addEventListener('click', function () {
        btnTutor.classList.add('active');
        btnAlumno.classList.remove('active');
      });
    }

    if (registerForm) {
      registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email')?.value.trim();
        const nombre = document.getElementById('nombre')?.value.trim();
        const apellido = document.getElementById('apellido')?.value.trim();
        const edad = document.getElementById('edad')?.value;
        const especializacion = document.getElementById('especializacion')?.value.trim();

        if (!email || !nombre || !apellido || !edad || !especializacion) {
          alert('Por favor, complete todos los campos.');
          return;
        }

        if (!validateEmail(email)) {
          alert('Por favor, ingrese un correo válido.');
          return;
        }

        if (edad < 18 || edad > 100) {
          alert('La edad debe estar entre 18 y 100 años.');
          return;
        }

        const rol = btnTutor.classList.contains('active') ? 'Tutor' : 'Alumno';
        alert(`¡Registro exitoso!\nRol: ${rol}\nCorreo: ${email}`);
        // window.location.href = 'dashboard.html'; // Redirección futura
      });
    }
  }
});

// Validación de email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}