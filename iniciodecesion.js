// Funcionalidad para cambiar entre "Alumno" y "Tutor"
document.addEventListener('DOMContentLoaded', function() {

  const btnAlumno = document.getElementById('btn-alumno');
  const btnTutor = document.getElementById('btn-tutor');
  const registerForm = document.getElementById('registerForm');

  // Inicialmente, "Alumno" está activo
  btnAlumno.classList.add('active');

  btnAlumno.addEventListener('click', function() {
    btnAlumno.classList.add('active');
    btnTutor.classList.remove('active');
    console.log('Rol seleccionado: Alumno');
  });

  btnTutor.addEventListener('click', function() {
    btnTutor.classList.add('active');
    btnAlumno.classList.remove('active');
    console.log('Rol seleccionado: Tutor');
  });

  // Validación y envío del formulario
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const edad = document.getElementById('edad').value;
    const especializacion = document.getElementById('especializacion').value.trim();

    // Validaciones simples
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

    // Simular envío
    alert(`¡Registro exitoso!\nRol: ${btnTutor.classList.contains('active') ? 'Tutor' : 'Alumno'}\nCorreo: ${email}\nNombre: ${nombre} ${apellido}`);
    
    // Aquí podrías redirigir a otra página
    // window.location.href = 'dashboard.html';
  });

});

// Función auxiliar para validar email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}