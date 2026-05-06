$(document).ready(function() {
    $('#nombre').on('input', validarNombre);
    $('#apellidos').on('input', validarApellidos);
    $('#email').on('input', validarEmail);
    $('#password').on('input', validarPassword);
    $('#confirm-password').on('input', validarConfirmacion);

    $('#registroForm').on('submit', function(e) {
        e.preventDefault();
        let nombreValido = validarNombre();
        let apellidosValido = validarApellidos();
        let emailValido = validarEmail();
        let passValido = validarPassword();
        let confirmValido = validarConfirmacion();

        if (nombreValido && apellidosValido && emailValido && passValido && confirmValido) {
            let email = $('#email').val().trim();
            // Obtener clientes existentes
            let clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
            if (clientes.some(c => c.email === email)) {
                alert("Este correo ya está registrado. Inicia sesión.");
                return;
            }
            let nuevoCliente = {
                nombre: $('#nombre').val().trim(),
                apellidos: $('#apellidos').val().trim(),
                email: email,
                password: $('#password').val()
            };
            clientes.push(nuevoCliente);
            localStorage.setItem("clientes", JSON.stringify(clientes));
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "Iniciosesion.html";
        }
    });

    // Validaciones iguales que antes...
    function validarNombre() { /* mismo código */ }
    function validarApellidos() { /* mismo código */ }
    function validarEmail() {
        let email = $('#email').val().trim();
        if (email === '') { $('#emailError').text('El correo es obligatorio.'); return false; }
        else if (!validarFormatoEmail(email)) { $('#emailError').text('Correo inválido.'); return false; }
        else { $('#emailError').text(''); return true; }
    }
    function validarPassword() {
        let password = $('#password').val();
        if (password === '') { $('#passwordError').text('La contraseña es obligatoria.'); return false; }
        else if (password.length < 6) { $('#passwordError').text('Mínimo 6 caracteres.'); return false; }
        else { $('#passwordError').text(''); return true; }
    }
    function validarConfirmacion() {
        let pass = $('#password').val();
        let conf = $('#confirm-password').val();
        if (conf === '') { $('#confirmError').text('Confirma tu contraseña.'); return false; }
        else if (pass !== conf) { $('#confirmError').text('No coinciden.'); return false; }
        else { $('#confirmError').text(''); return true; }
    }
    function validarFormatoEmail(email) {
        return /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email);
    }
});