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
alert(body);
    fetch("https://cloud-groupe-7-api.herokuapp.com/add", requestOptions)
        .then(res =>res.text())
        .then(res =>alert(res))
        .catch(e => alert(e));
}
