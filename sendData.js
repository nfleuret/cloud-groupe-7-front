function sendData() {
    const formData = document.getElementById('needs-validation');

    const body = JSON.stringify({
        firstname: formData.firstname.value,
        lastname: formData.lastname.value,
        url: formData.url.value
    });

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'POST',
        headers,
        body,
        mode:'cors'
    };
    fetch("https://cloud-groupe-7-api.herokuapp.com/add", requestOptions).then(res =>res.text()).then(res =>console.log(res)).catch(e => console.log(e));
}
