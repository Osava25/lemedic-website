let form = document.getElementById("form1"); // ID Formulario Header
var token = "";
var ownerUser = "";

form.addEventListener("submit", validationForm)

function validationForm(event) {
    event.preventDefault(); // Previene el evento submit
    const formData = new FormData(event.target) // Datos del formulario
    const dataObject = Object.fromEntries(formData.entries()); // Objeto con data de formulario
    //console.log(dataObject.nombre);

    // validacion de formulario
    if( dataObject.nombre == null || dataObject.nombre.length == 0 || /^\s+$/.test(dataObject.nombre) ) {console.log("Coloca un nombre valido"); return false}
    else if( dataObject.apellidos == null || dataObject.apellidos.length == 0 || /^\s+$/.test(dataObject.apellidos) ) { console.log("Coloca un apellido valido"); return false}
    else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(dataObject.email)) ) { console.log("Coloca un email valido"); return false}
    else if( dataObject.ciudad == null || dataObject.ciudad.length == 0 || /^\s+$/.test(dataObject.ciudad) ) { console.log("Coloca una ciudad valida"); return false}

    sendForm(); // Función para loguearse en clientify y retorno de Token
}

function sendForm() {
    console.log("Se envió el formulario")
    //console.log(asunto);
	
  	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify({
	  "username": "maravalencia@recursoconfiable.com",
	  "password": "R3curso2018#"
	});

	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};

	fetch("https://api.clientify.net/v1/api-auth/obtain_token/", requestOptions)
  	.then(response => response.json())
  	.then(result => {
		sendContacts(result);
        //getUsers(result);
	})
  	.catch(error => console.log('error', error));

}


function sendContacts(e) {
	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Token " + e["token"]);
	myHeaders.append("Content-Type", "application/json");

    // Funcion arbol validación usuarios
    validationUsers();
	
	// Validar true false check noticias
	if (checkNoticias.checked) {
		checkNoticiasStatus = true;
		tagCheckNews = ["acepta-noticias"]
	}
	else {
		checkNoticiasStatus = false
	}

	var raw = JSON.stringify({
	  "owner": ownerUser,	
	  "first_name": fieldName.value,
      "last_name": fieldLastName.value,
	  "phone": fieldPhone.value,
      "status": "in-deal",
	  "emails": [
			{
			  "type": 1,
			  "email": fieldEmail.value
			}
	   ],
      "addresses": [
        {
          "country": fieldPais.options[fieldPais.selectedIndex].text,
          "type": 1
        }
      ],
	  "company": fieldEnterprise.value,
	  "title": fieldPositionCompany.value,
	  "contact_source": "landing-demo",	
      "tags": tagCheckNews,
	  "gdpr_accept": checkNoticiasStatus,
	});

	var requestOptions = {
	  method: 'POST',
      body: raw,
	  headers: myHeaders,
	  redirect: 'follow'
	};

	fetch("https://api.clientify.net/v1/contacts/", requestOptions)
	  .then(response => response.text())
	  .then(result => console.log(result))
	  .catch(error => console.log('error', error));
}

function getUsers(e) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + e["token"]);
    myHeaders.append("Content-Type", "application/json");

    var raw = "";

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

     fetch("https://api.clientify.net/v1/users/", requestOptions)
    .then(response => response.json())
    .then(result => {
		//console.log(result)
        //let userProperity = result["results"].map( e => {
        //    return e.username
        //})
		// console.log(userProperity)
	})  
    .catch(error => console.log('error', error));
}

// Funcion arbol validación usuarios
function validationUsers () {
    pais = fieldPais.options[fieldPais.selectedIndex].text;
    asunto = fieldAsunto.options[fieldAsunto.selectedIndex].text;

	if (pais == "México") {
        //console.log("El pais es Mexico")
        if (asunto == "⁠Investigación y validación de personal") {
             //console.log("La fecha está en el rango")
             ownerUser = "angelicacastaneda@recursoconfiable.com"
             //console.log(ownerUser)
        }
        else if (asunto == "Plataforma de visibilidad logística") {
             ownerUser = "mayrahernandez@recursoconfiable.com"
             //console.log(ownerUser)
        }
    }
    else if (pais != "México") {
        //console.log("El pais NO es Mexico")
        if (asunto == "⁠Investigación y validación de personal") {
            ownerUser = "angelicacastaneda@recursoconfiable.com"
            //console.log(ownerUser)
        }
        else if (asunto == "Plataforma de visibilidad logística") {
            ownerUser = "dianalopez@recursoconfiable.com"
            //console.log(ownerUser)
        }
    }
}