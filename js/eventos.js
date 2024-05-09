// URL del archivo XML
const xmlFile = "/content/eventos.xml";

// Función para cargar y procesar el archivo XML
function loadXML() {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			displayXML(this);
		}
	};
	xhttp.open("GET", xmlFile, true);
	xhttp.send();
}

// Función para mostrar los datos del XML en la estructura proporcionada
function displayXML(xml) {
	const xmlDoc = xml.responseXML;
	const items = xmlDoc.getElementsByTagName("element");
	let html = "";

	for (let i = 0; i < items.length; i++) {
		const titulo =
			items[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
		const descripcion =
			items[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;
		const imagen =
			items[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue;
		const fecha =
			items[i].getElementsByTagName("fecha")[0].childNodes[0].nodeValue;

		// Construir la estructura HTML con los datos del XML
		html += `<<div class="col-md-8">
                    <div class="card flex-md-row mb-4 box-shadow h-md-250">
                      <img class="card-img-right flex-auto d-none d-md-block img-desc" src="${imagen}" alt="Card image">
                      <div class="card-body d-flex flex-column align-items-center">
                        <h3 class="mb-0 res-title">
                          ${titulo}
                        </h3></br>
                        <p class="card-text mb-auto descText">${descripcion}</p></br>
                        <h5>${fecha}</h>
                      </div>
                    </div>
                  </div>`;
	}

	// Insertar la estructura HTML en el div con id="events-content"
	document.getElementById("events-content").innerHTML = html;
}

// Cargar y mostrar los datos del XML cuando se cargue la página
window.onload = function() {
	loadXML();
};
