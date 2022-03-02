function test(){
    const body = JSON.stringify({
        "from": "Sender Name <kbervin@myges.fr>",
        "to": [
            "Recipient <ljehanno@myges.fr>"
        ],
        "test_mode": false,
        "subject": "Hello from CloudMailin 😃",
        "tags": [
            "api-tag",
            "cloudmailin-tag"
        ],
        "plain": "Hello Plain Text",
        "html": "<h1>Hello Html</h1>",
        "headers": {
            "x-api-test": "Test",
            "x-additional-header": "Value"
        },
    });

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append('Authorization','Bearer kG74gM8yXAhu64JTPArFsSZB')

    const requestOptions = {
        method: 'POST',
        headers,
        body,
    };

    fetch('https://api.cloudmailin.com/api/v0.1/4d8731b2f948c506/messages',requestOptions)
        .then( (res)=> {
            return res.json();
        } )
        .then( (res) => {console.log(res);
        })
        .catch( (e) => console.log(e) );
}
