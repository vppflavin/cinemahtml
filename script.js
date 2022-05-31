const uri = ``
fetch(uri).then( r=> r.json().then(r => {

    document.getElementById("agendamento").value = r.tipo_logradouro

}))