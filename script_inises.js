$(document).ready(function() {
    $('#email').on('input', function() { validarEmail(); });
    $('#password').on('input', function() { validarPassword(); });

    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        let emailValido = validarEmail();
        let passValido = validarPassword();

        if (emailValido && passValido) {
            let email = $('#email').val().trim();
            let password = $('#password').val();

            // Buscar en administradores
            let admins = JSON.parse(localStorage.getItem("administradores") || "[]");
            let adminEncontrado = admins.find(a => a.email === email && a.password === password);
            if (adminEncontrado) {
                localStorage.setItem("usuarioActual", JSON.stringify({ email: email, rol: "admin" }));
                alert("Bienvenido administrador.");
                window.location.href = "admin.html";
                return;
            }

            // Buscar en clientes
            let clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
            let clienteEncontrado = clientes.find(c => c.email === email && c.password === password);
            if (clienteEncontrado) {
                localStorage.setItem("usuarioActual", JSON.stringify({ email: email, rol: "cliente" }));
                alert("Inicio de sesión exitoso.");
                window.location.href = "index.html";
                return;
            }

            alert("Credenciales incorrectas. ¿No estás registrado?");
        }
    });

    function validarEmail() {
        let email = $('#email').val();
        if (email === '') { $('#emailError').text('El correo es obligatorio.'); return false; }
        else if (!/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email)) { $('#emailError').text('Correo inválido.'); return false; }
        else { $('#emailError').text(''); return true; }
    }
    function validarPassword() {
        let password = $('#password').val();
        if (password === '') { $('#passwordError').text('La contraseña es obligatoria.'); return false; }
        else { $('#passwordError').text(''); return true; }
    }
});