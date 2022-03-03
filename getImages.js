const headers = new Headers();
const getInit = {
    method: 'GET',
    headers,
};

const bodyElement = document.body;
const dataDiv = document.createElement('div');
dataDiv.className = 'row text-center';

fetch('https://cloud-groupe-7-api.herokuapp.com/images', getInit)
    .then((response) => {
        return response.json();
    })
    .then((res) => {
        for (let i = 0; i < res.length; i++) {
            const leftDiv = document.createElement('div');
            leftDiv.className = "col-2";
            leftDiv.textContent = 'Commentaire poster par: \"' + res[i]["lastname"] + ' ' + res[i]["firstname"] + '\"'

            const middleDiv = document.createElement('div');
            middleDiv.className = "col-8"
            middleDiv.style.background = 'pink';

            const image = document.createElement('span');
            image.textContent = res[i]["url"];
            middleDiv.appendChild(image);

            const rightDiv = document.createElement('div');
            rightDiv.className = "col-2";

            dataDiv.appendChild(leftDiv);
            dataDiv.appendChild(middleDiv);
            dataDiv.appendChild(rightDiv);
            bodyElement.appendChild(dataDiv);
        }
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
        const leftDiv = document.createElement('div');
        leftDiv.className = "col-2";
        leftDiv.style.background = 'aqua';

        const middleDiv = document.createElement('div');
        middleDiv.className = "col-8"
        middleDiv.style.background = 'red';
        middleDiv.textContent = 'Error: ' + e

        const rightDiv = document.createElement('div');
        rightDiv.className = "col-2";
        rightDiv.style.background = 'aqua';

        dataDiv.appendChild(leftDiv);
        dataDiv.appendChild(middleDiv);
        dataDiv.appendChild(rightDiv);
        bodyElement.appendChild(dataDiv);
    });


/*.then(function(myBlob) {
                              var objectURL = URL.createObjectURL(myBlob);
                              myImage.src = objectURL;
                          });*/

