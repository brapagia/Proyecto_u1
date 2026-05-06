$(document).ready(function() {
    // Verificar sesión de administrador
    let usuarioActual = JSON.parse(localStorage.getItem("usuarioActual") || "null");
    if (!usuarioActual || usuarioActual.rol !== "admin") {
        alert("Acceso no autorizado. Debes iniciar sesión como administrador.");
        window.location.href = "Iniciosesion.html";
        return;
    }
    $("#adminUser").text(usuarioActual.email);

    // Cargar datos iniciales
    if (!localStorage.getItem("clientes")) localStorage.setItem("clientes", "[]");
    if (!localStorage.getItem("administradores")) {
        let defaultAdmin = [{ email: "admin@hotel.com", password: "admin123" }];
        localStorage.setItem("administradores", JSON.stringify(defaultAdmin));
    }

    // Mostrar sección clientes por defecto
    mostrarClientes();

    // Navegación entre secciones
    $("#btnVerClientes").on("click", function(e) {
        e.preventDefault();
        $(".admin-seccion").removeClass("activa");
        $("#seccionClientes").addClass("activa");
        mostrarClientes();
    });
    $("#btnAltaAdmin").on("click", function(e) {
        e.preventDefault();
        $(".admin-seccion").removeClass("activa");
        $("#seccionAltaAdmin").addClass("activa");
    });

    // Cerrar sesión
    $("#cerrarSesion").on("click", function(e) {
        e.preventDefault();
        localStorage.removeItem("usuarioActual");
        window.location.href = "index.html";
    });

    // Registrar nuevo administrador
    $("#formAltaAdmin").on("submit", function(e) {
        e.preventDefault();
        let email = $("#adminEmail").val().trim();
        let password = $("#adminPass").val().trim();
        if (!email || !password) {
            $("#mensajeAdmin").text("Completa todos los campos.").css("color","red");
            return;
        }
        let admins = JSON.parse(localStorage.getItem("administradores"));
        if (admins.some(a => a.email === email)) {
            $("#mensajeAdmin").text("Este administrador ya existe.").css("color","red");
            return;
        }
        admins.push({ email, password });
        localStorage.setItem("administradores", JSON.stringify(admins));
        $("#mensajeAdmin").text("Administrador creado correctamente.").css("color","green");
        $("#adminEmail").val("");
        $("#adminPass").val("");
    });

    function mostrarClientes() {
        let clientes = JSON.parse(localStorage.getItem("clientes"));
        let tbody = $("#tablaClientes tbody");
        tbody.empty();
        clientes.forEach((cliente, index) => {
            let fila = `<tr>
                <td contenteditable="false" class="editable-nombre">${cliente.nombre}</td>
                <td contenteditable="false" class="editable-apellidos">${cliente.apellidos}</td>
                <td contenteditable="false" class="editable-email">${cliente.email}</td>
                <td>
                    <button class="btn-editar" data-index="${index}">Editar</button>
                    <button class="btn-eliminar" data-index="${index}">Eliminar</button>
                </td>
            </tr>`;
            tbody.append(fila);
        });

        // Botones editar
        $(".btn-editar").off("click").on("click", function() {
            let idx = $(this).data("index");
            let fila = $(this).closest("tr");
            if ($(this).text() === "Editar") {
                fila.find(".editable-nombre, .editable-apellidos, .editable-email").attr("contenteditable", "true");
                fila.find(".editable-nombre, .editable-apellidos, .editable-email").addClass("editando");
                $(this).text("Guardar");
            } else {
                // Guardar cambios
                let nuevoNombre = fila.find(".editable-nombre").text().trim();
                let nuevoApellidos = fila.find(".editable-apellidos").text().trim();
                let nuevoEmail = fila.find(".editable-email").text().trim();
                if (!nuevoNombre || !nuevoApellidos || !nuevoEmail) {
                    alert("Los campos no pueden estar vacíos.");
                    return;
                }
                let clientesActualizados = JSON.parse(localStorage.getItem("clientes"));
                clientesActualizados[idx] = {
                    nombre: nuevoNombre,
                    apellidos: nuevoApellidos,
                    email: nuevoEmail,
                    password: clientesActualizados[idx].password
                };
                localStorage.setItem("clientes", JSON.stringify(clientesActualizados));
                fila.find(".editable-nombre, .editable-apellidos, .editable-email").attr("contenteditable", "false");
                fila.find(".editable-nombre, .editable-apellidos, .editable-email").removeClass("editando");
                $(this).text("Editar");
                mostrarClientes(); // refrescar
            }
        });

        // Botones eliminar
        $(".btn-eliminar").off("click").on("click", function() {
            let idx = $(this).data("index");
            if (confirm("¿Eliminar este cliente?")) {
                let clientesActualizados = JSON.parse(localStorage.getItem("clientes"));
                clientesActualizados.splice(idx, 1);
                localStorage.setItem("clientes", JSON.stringify(clientesActualizados));
                mostrarClientes();
            }
        });
    }
});