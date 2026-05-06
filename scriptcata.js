const habitaciones = [
    {
        id: "tzintzuntzan",
        nombre: "Habitación Tzintzuntzan",
        descripcion: "Amplia habitación con vista al jardín, cama king size y baño completo.",
        imgCard: "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk",
        precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk",
            "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk",
            "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk"
        ]
    },
    {
        id: "paracho",
        nombre: "Habitación Paracho",
        descripcion: "Espacio acogedor con decoración artesanal, ideal para parejas.",
        imgCard: "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA",
        precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA",
            "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA",
            "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA"
        ]
    },
    {
        id: "yunuen",
        nombre: "Habitación Yunuen",
        descripcion: "Vista al lago, cama matrimonial y balcón privado.",
        imgCard: "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1",
         precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1",
            "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1",
            "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1"
        ]
    },
    {
        id: "patzcuaro",
        nombre: "Habitación Patzcuaro",
        descripcion: "Habitación familiar con dos camas dobles y área de estar.",
        imgCard: "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
         precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL"
        ]
    },
    {
        id: "coeneo",
        nombre: "Habitación Coeneo",
        descripcion: "Rústica y elegante, con chimenea y tina de hidromasaje.",
        imgCard: "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk",
         precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk",
            "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk",
            "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk"
        ]
    },
    {
        id: "janitzio",
        nombre: "Habitación Janitzio",
        descripcion: "Pequeña pero funcional, perfecta para viajes de negocios.",
        imgCard: "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA",
         precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA",
            "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA",
            "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA"
        ]
    },
    {
        id: "queucio",
        nombre: "Suite Queucio",
        descripcion: "Suite de lujo con sala independiente, jacuzzi y terraza.",
        imgCard: "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1",
         precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1",
            "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1",
            "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1"
        ]
    },
    {
        id: "morelia",
        nombre: "Habitación Morelia",
        descripcion: "Estilo colonial, cerca de la alberca, con desayuno incluido.",
        imgCard: "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
         precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL"
        ]
    },
    {
        id: "tacambaro",
        nombre: "Habitación Tacambaro",
        descripcion: "Tranquilidad y naturaleza, con hamaca en el balcón.",
        imgCard: "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
         precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL"
        ]
    },
    {
        id: "uruapan",
        nombre: "Habitación Uruapan",
        descripcion: "Moderna, con Smart TV y café de cortesía.",
        imgCard: "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk",
         precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk",
            "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk",
            "https://drive.google.com/thumbnail?id=1mfKEWNABrUCpDrVGouM8Xgk4Z7pjyeDk"
        ]
    },
    {
        id: "tlalpujahua",
        nombre: "Habitación Tlalpujahua",
        descripcion: "Temática de minas, con detalles en plata y cama king.",
        imgCard: "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA",
         precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA",
            "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA",
            "https://drive.google.com/thumbnail?id=1mfM_N7Ovu_gMUCLNU7C_cZWwoLdEizyA"
        ]
    },
    {
        id: "cuitzeo",
        nombre: "Habitación Cuitzeo",
        descripcion: "Vista a la isla, ideal para fotógrafos.",
        imgCard: "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1",
         precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1",
            "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1",
            "https://drive.google.com/thumbnail?id=1KzVjZfdEfM1wA2Di8MJvWpD6Q_Jy4KM1"
        ]
    },
    {
        id: "cuanajo",
        nombre: "Habitación Cuanajo",
        descripcion: "Artesanal, con textiles típicos y cama queen.",
        imgCard: "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
         precioPorNoche: 90,
        galeria: [
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL",
            "https://drive.google.com/thumbnail?id=1TrFSjkOqsDp7bNnrtG_QUWuG8f8_K_CL"
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const catalogoGrid = document.getElementById("catalogo-grid");
    if (!catalogoGrid) return;

    // Generar tarjetas
    habitaciones.forEach(hab => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <a href="#modal-${hab.id}" class="card-enlace">
                <img src="${hab.imgCard}" alt="${hab.nombre}">
                <div class="card-info">
                    <h3>${hab.nombre}</h3>
                    <p>${hab.descripcion}</p>
                </div>
            </a>
        `;
        catalogoGrid.appendChild(card);
    });

    // Generar modales con carrusel JavaScript
    const main = document.querySelector("main");
    habitaciones.forEach(hab => {
        const modal = document.createElement("div");
        modal.id = `modal-${hab.id}`;
        modal.className = "modal";

        // Construir el contenido del carrusel 
        let imagenesHtml = "";
        hab.galeria.forEach((img, idx) => {
            imagenesHtml += `<div class="carrusel-item" data-index="${idx}"><img src="${img}" alt="${hab.nombre} ${idx+1}"></div>`;
        });

        modal.innerHTML = `
            <div class="modal-contenido">
                <a href="#" class="cerrar-modal">&times;</a>
                <h2>${hab.nombre}</h2>
                <div class="carrusel-js">
                    <button class="carrusel-btn anterior">❮</button>
                    <div class="carrusel-imagenes">
                        ${imagenesHtml}
                    </div>
                    <button class="carrusel-btn siguiente">❯</button>
                </div>
                <div class="carrusel-indicadores-js"></div>
                <p class="modal-descripcion">${hab.descripcion}</p>
            </div>
        `;
        main.appendChild(modal);

        iniciarCarrusel(modal, hab.galeria.length);
    });
});

function iniciarCarrusel(modal, totalImagenes) {
    const contenedorImagenes = modal.querySelector(".carrusel-imagenes");
    const items = modal.querySelectorAll(".carrusel-item");
    const btnAnterior = modal.querySelector(".anterior");
    const btnSiguiente = modal.querySelector(".siguiente");
    const indicadoresContainer = modal.querySelector(".carrusel-indicadores-js");

    if (!contenedorImagenes || items.length === 0) return;

    let indiceActual = 0;

    // Crear indicadores
    for (let i = 0; i < totalImagenes; i++) {
        const indicador = document.createElement("span");
        indicador.classList.add("indicador");
        if (i === 0) indicador.classList.add("activo");
        indicador.addEventListener("click", () => {
            irAlIndice(i);
        });
        indicadoresContainer.appendChild(indicador);
    }
    const indicadores = modal.querySelectorAll(".indicador");

    function actualizarCarrusel() {
        const anchoItem = items[0].clientWidth;
        contenedorImagenes.style.transform = `translateX(-${indiceActual * anchoItem}px)`;
        // Actualizar indicadores
        indicadores.forEach((ind, idx) => {
            if (idx === indiceActual) ind.classList.add("activo");
            else ind.classList.remove("activo");
        });
    }

    function irAlIndice(nuevoIndice) {
        if (nuevoIndice < 0) nuevoIndice = totalImagenes - 1;
        if (nuevoIndice >= totalImagenes) nuevoIndice = 0;
        indiceActual = nuevoIndice;
        actualizarCarrusel();
    }

    btnAnterior.addEventListener("click", () => irAlIndice(indiceActual - 1));
    btnSiguiente.addEventListener("click", () => irAlIndice(indiceActual + 1));

    window.addEventListener("resize", () => actualizarCarrusel());
    modal.addEventListener("click", (e) => {
        if (e.target.closest(".cerrar-modal")) return;
        actualizarCarrusel();
    });
}
// El resto del código (generar tarjetas con precio) permanece igual,
// pero en la tarjeta se muestra el precio:
card.innerHTML = `<a href="#modal-${hab.id}" class="card-enlace">
    <img src="${hab.imgCard}" alt="${hab.nombre}">
    <div class="card-info">
        <h3>${hab.nombre}</h3>
        <p>${hab.descripcion}</p>
        <p class="precio"><strong>$${hab.precioPorNoche} USD / noche</strong></p>
    </div>
</a>`;

// En el modal también se añade el precio.