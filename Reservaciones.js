$(document).ready(function() {
    let usuario = JSON.parse(localStorage.getItem("usuarioActual"));
    if (!usuario) {
        $("#avisoSesion").show();
        $(".form-reserva :input").prop("disabled", true);
        $(".btn-pagar").prop("disabled", true);
        return;
    }

    // Calcular cuando cambien checkboxes o fechas
    function calcularTotal() {
        let fechaLlegada = new Date($("#fecha-llegada").val());
        let fechaSalida = new Date($("#fecha-salida").val());
        if (isNaN(fechaLlegada) || isNaN(fechaSalida) || fechaSalida <= fechaLlegada) {
            $("#totalNoches").text("0");
            $("#totalPrecio").text("0.00");
            return;
        }
        let noches = (fechaSalida - fechaLlegada) / (1000 * 3600 * 24);
        $("#totalNoches").text(noches);

        let total = 0;
        $("input[name='habitacion[]']:checked").each(function() {
            total += parseFloat($(this).data("precio")) * noches;
        });
        $("#totalPrecio").text(total.toFixed(2));
    }

    $("input[name='habitacion[]'], #fecha-llegada, #fecha-salida").on("change", calcularTotal);

    $(".btn-pagar").on("click", function(e) {
        e.preventDefault();
        let total = $("#totalPrecio").text();
        if (total === "0.00") {
            alert("Selecciona al menos una habitación y fechas válidas.");
            return;
        }
        alert(`Reserva simulada exitosa.\nTotal a pagar: $${total} USD\n(Se ha enviado un comprobante a tu correo.)`);
        // Aquí se podría guardar la reserva en localStorage si se desea.
    });
});
