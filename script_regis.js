$(document).ready(function() {           
            $('#nombre').on('input', validarNombre);
            $('#apellidos').on('input', validarApellidos);
            $('#email').on('input', validarEmail);
            $('#password').on('input', validarPassword);
            $('#confirm-password').on('input', validarConfirmacion);

            // Manejo del envío
            $('#registroForm').on('submit', function(e) {
                e.preventDefault();

                let nombreValido = validarNombre();
                let apellidosValido = validarApellidos();
                let emailValido = validarEmail();
                let passValido = validarPassword();
                let confirmValido = validarConfirmacion();

                if (nombreValido && apellidosValido && emailValido && passValido && confirmValido) {
                    let datos = {
                        nombre: $('#nombre').val(),
                        apellidos: $('#apellidos').val(),
                        email: $('#email').val(),
                        password: $('#password').val()
                    };

                    console.log('Datos enviados:', datos);
                    alert('Registro simulado exitoso. Redirigiendo al login.');
                   
                }
            });

            // Funciones de validación
            function validarNombre() {
                let nombre = $('#nombre').val().trim();
                if (nombre === '') {
                    $('#nombreError').text('El nombre es obligatorio.');
                    return false;
                } else if (nombre.length < 2) {
                    $('#nombreError').text('El nombre debe tener al menos 2 caracteres.');
                    return false;
                } else {
                    $('#nombreError').text('');
                    return true;
                }
            }

            function validarApellidos() {
                let apellidos = $('#apellidos').val().trim();
                if (apellidos === '') {
                    $('#apellidosError').text('Los apellidos son obligatorios.');
                    return false;
                } else if (apellidos.length < 2) {
                    $('#apellidosError').text('Los apellidos deben tener al menos 2 caracteres.');
                    return false;
                } else {
                    $('#apellidosError').text('');
                    return true;
                }
            }

            function validarEmail() {
                let email = $('#email').val().trim();
                if (email === '') {
                    $('#emailError').text('El correo es obligatorio.');
                    return false;
                } else if (!validarFormatoEmail(email)) {
                    $('#emailError').text('Ingrese un correo válido (ej: usuario@dominio.com).');
                    return false;
                } else {
                    $('#emailError').text('');
                    return true;
                }
            }

            function validarPassword() {
                let password = $('#password').val();
                if (password === '') {
                    $('#passwordError').text('La contraseña es obligatoria.');
                    return false;
                } else if (password.length < 6) {
                    $('#passwordError').text('La contraseña debe tener al menos 6 caracteres.');
                    return false;
                } else {
                    $('#passwordError').text('');
                    return true;
                }
            }

            function validarConfirmacion() {
                let password = $('#password').val();
                let confirm = $('#confirm-password').val();
                if (confirm === '') {
                    $('#confirmError').text('Confirme su contraseña.');
                    return false;
                } else if (password !== confirm) {
                    $('#confirmError').text('Las contraseñas no coinciden.');
                    return false;
                } else {
                    $('#confirmError').text('');
                    return true;
                }
            }

            function validarFormatoEmail(email) {
                let regex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
                return regex.test(email);
            }

            function mostrarErrorGeneral(mensaje) {
                let errorGeneral = $('#errorGeneral');
                if (errorGeneral.length === 0) {
                    $('.form-registro').prepend('<div id="errorGeneral" class="error-message"></div>');
                    errorGeneral = $('#errorGeneral');
                }
                errorGeneral.text(mensaje).show();
            }
        });