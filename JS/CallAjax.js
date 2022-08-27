llamadaDemo();
let id = '';

function Editar(id, nombre, apellido, mensaje) {
    //alert(id);
    //https://getbootstrap.com/docs/5.0/components/modal/#options
    document.getElementById("txtIDU").value = id;
    document.getElementById("txtNombreU").value = nombre;
    document.getElementById("txtApellidoU").value = apellido;
    document.getElementById("txtMensajeU").value = mensaje;

    var myModal = new bootstrap.Modal(document.getElementById('exampleModalEditar'), {
        keyboard: false
    })

    myModal.show()
}

function llamadaDemo() {
    //alert("Hola con JavaScript");
    /*Creating an HTML table dynamically
   https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#creating_an_html_table_dynamically*/
    //uso de Fetch https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

    fetch('https://movie.azurewebsites.net/api/cartelera?title=&ubication=')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var tbodyUser = document.getElementById('tbodyUser');
            for (let index = 0; index < data.length; index++) {

                const row = document.createElement("tr");

                // row.setAttribute("id", data.message[index].id);
                // row.setAttribute("onclick", "Editar('" + data.message[index].id + "','" + data.message[index].nombre + "','" + data.message[index].apellido + "','" + data.message[index].mensaje + "');");

                //ID
                const cell = document.createElement("td");
                const cellText = document.createTextNode(data[index].imdbID);
                cell.appendChild(cellText);
                row.appendChild(cell);

                //Titulo
                const cell1 = document.createElement("td");
                const cellText1 = document.createTextNode(data[index].Title);
                cell1.appendChild(cellText1);
                row.appendChild(cell1);

                //Tipo
                const cell2 = document.createElement("td");
                const cellText2 = document.createTextNode(data[index].Type);
                cell2.appendChild(cellText2);
                row.appendChild(cell2);
                //Poster
                const cell3 = document.createElement("td");
                const cellText3 = document.createTextNode(data[index].Poster);
                cell3.appendChild(cellText3);
                row.appendChild(cell3);
                //descripcion
                const cell4 = document.createElement("td");
                const cellText4 = document.createTextNode(data[index].description);
                cell4.appendChild(cellText4);
                row.appendChild(cell4);

                //Año
                const cell5 = document.createElement("td");
                const cellText5 = document.createTextNode(data[index].Year);
                cell5.appendChild(cellText5);
                row.appendChild(cell5);

                //Ubicacion
                const cell6 = document.createElement("td");
                const cellText6 = document.createTextNode(data[index].Ubication);
                cell6.appendChild(cellText6);
                row.appendChild(cell6);

                //Estado
                const cell7 = document.createElement("td");
                const cellText7 = document.createTextNode(data[index].Estado);
                cell7.appendChild(cellText7);
                row.appendChild(cell7);

                const cell8 = document.createElement("td");
                let button = document.createElement("button");

                button.className = "btn btn-danger";
                //button.setAttribute("data-bs-toggle", "modal");
                // button.setAttribute("data-bs-target", "#exampleModal");
                button.style.width = "70px";
                button.style.height = "30px";
                //button.style.color = "red";
                button.style.fontSize = "10px";
                button.style.textAlign = "center";
                // button.id = "enviar";

                //button.addEventListener("click", delet(id), false);
                button.innerHTML = "Eliminar";
                // var body = document.getElementsByTagName("body")[0];
                //body.appendChild(button);
                cell8.style.textAlign = "center";


                cell8.appendChild(button);
                button.addEventListener("click", (event) => {

                    cade = event.target.parentNode.parentNode.innerHTML;
                    var cadena = cade.slice(4, -2);
                    var cadena2 = cadena.split("<");
                    console.log(cadena2[0]);
                    id = cadena2[0];
                    delet(id);
                })
                row.appendChild(cell8);
                tbodyUser.appendChild(row);
            }

        });

}

function delet(id) {

    fetch('https://movie.azurewebsites.net/api/cartelera?imdbID=' + id, {
            method: 'delete'
        })
        .then(response => response.json());
    console.log(response);
    location.href = "index.html";
}

function ActualizarDatos() {
    var id = document.getElementById("txtIDU").value;
    var vnombre = document.getElementById("txtNombreU").value
    var vapellido = document.getElementById("txtApellidoU").value
    var vmensaje = document.getElementById("txtMensajeU").value

    if (vnombre == "" || vapellido == "" || vmensaje == "") {
        //alert("complete los campos requeridos");
        Swal.fire({
            title: 'Error!',
            text: 'complete los campos requeridos',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    } else {
        fetch('/PHP/actualizarReg.php?id=' + id + '&nombre=' + vnombre + '&apellido=' + vapellido + '&mensaje=' + vmensaje)
        alert("Registro Actualizado");
        location.href = "index.html";
    }
}

function GuardarDatos() {
    //alert('Guardando Datos');
    //https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch#enviando_datos_json
    //https://www.w3schools.com/jsref/prop_text_value.asp
    var url = 'https://movie.azurewebsites.net/api/cartelera';
    var vId = document.getElementById("txtId").value
    var vTitulo = document.getElementById("txtTitulo").value
    var vTipo = document.getElementById("txtTipo").value
    var vPoster = document.getElementById("txtPoster").value
    var vAño = document.getElementById("txtAño").value
    var vUbicacion = document.getElementById("txtUbicacion").value
    var vDescripcion = document.getElementById("txtMensaje").value



    if (vId == "" || vTitulo == "" || vTipo == "" || vPoster == "" || vAño == "" || vUbicacion == "" || vDescripcion == "") {
        alert("complete los campos requeridos");
    } else {
        //var data = { nombre: vnombre, apellido: vapellido, mensaje: vmensaje };

        try {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // your expected POST request payload goes here
                    imdbID: vId,
                    Title: vTitulo,
                    Year: vAño,
                    Type: vTipo,
                    Poster: vPoster,
                    description: vDescripcion,
                    Ubication: vUbicacion,
                    Estado: true
                })
            })

            llamadaDemo();
            document.getElementById("alerta").style.visibility = 'visible';
        } catch (error) {
            // enter your logic for when there is an error (ex. error toast)

            console.log(error)
        }
    }


    // fetch(url, {
    //         method: 'POST', // or 'PUT'
    //         body: JSON.stringify(data), // data can be `string` or {object}!
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => res.json())
    //     .catch(error => {
    //         alert(error.message)
    //         console.error('Error:', error)
    //     })
    //     .then(response => {
    //         document.getElementById("txtNombre").value = '';
    //         document.getElementById("txtApellido").value = '';
    //         document.getElementById("txtMensaje").value = '';
    //         llamadaDemo();
    //         Swal.fire(
    //                 'Bien Hecho!',
    //                 'Registro Guardado',
    //                 'Realizado'
    //             )
    //             //alert(response.message)
    //         console.log('Success:', response)
    //     });




}

function cerraralert() {
    document.getElementById("alerta").style.visibility = 'hidden';
}