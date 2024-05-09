// URL del archivo XML
const xmlFile = "/hacked/content/resources.xml";

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
		const image =
			items[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
		const title =
			items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
		const description =
			items[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
		const enlace =
			items[i].getElementsByTagName("enlace")[0].childNodes[0].nodeValue;

		// Construir la estructura HTML con los datos del XML
		html += `<div class="col-md-3">
                      <div class="card mb-4 box-shadow align-items-center justify-content-center">
                        <img class="card-img-top image-fluid" src="${image}" alt="descriptive image">
                        <div class="card-body">
                          <h3 class="res-title">${title}</h3>
                          <p class="descText">${description}</p>
                          <div class="d-flex justify-content-center align-items-center">
                            <div class="btn-group align-items-center justify-content-center">
                              <a id="access" target="_blank" href="${enlace}">Acceder</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
	}

	// Insertar la estructura HTML en el div con id="xmlData"
	document.getElementById("xmlData").innerHTML = html;
}

// Cargar y mostrar los datos del XML cuando se cargue la página
window.onload = function() {
	loadXML();
};
