const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const bookNowBtn = document.getElementById('bookNowBtn');

function searchRecommendation(){

const input = document.getElementById('searchBar').value.toLowerCase();
    const resultDiv1 = document.getElementById('result1');
    resultDiv2.innerHTML = "";
    const resultDiv2 = document.getElementById('result2');
    resultDiv2.innerHTML = "";

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const recommendation = data.countries.find(item => item.name.toLowerCase() === input);

            if(recommendation == 'country' || recommendation =='countries'){
            const name1 = data.countries[0].cities[0].name;
            const description1 = data.countries[0].cities[0].description;

            const name2 = data.countries[0].cities[1].name;
            const description2 = data.countries[0].cities[1].description;

            resultDiv1.innerHTML += `<img src="data.countries[0].cities[0].imageUrl" alt="Recommendation1Pic">`;
            resultDiv1.innerHTML += `<h2>${name1}</h2>`;
            resultDiv1.innerHTML += `<p>${description1}</p>`;
            resultDiv1.innerHTML += `<button id="visit">Visit</button>`;

            resultDiv2.innerHTML += `<img src="data.countries[0].cities[1].imageUrl" alt="Recommendation2Pic">`;
            resultDiv2.innerHTML += `<h2>${name2}</h2>`;
            resultDiv2.innerHTML += `<p>${description2}</p>`;
            resultDiv2.innerHTML += `<button id="visit">Visit</button>`;

            } else if (recommendation == 'temple' || recommendation == 'temples') {
            const name1 = data.temples[0].name;
            const description1 = data.temples[0].description;

            const name2 = data.temples[1].name;
            const description2 = data.temples[1].description;

            resultDiv1.innerHTML += `<img src="data.temples[0].imageUrl" alt="Recommendation1Pic">`;
            resultDiv1.innerHTML += `<h2>${name1}</h2>`;
            resultDiv1.innerHTML += `<p>${description1}</p>`;
            resultDiv1.innerHTML += `<button id="visit">Visit</button>`;

            resultDiv2.innerHTML += `<img src="data.temples[1].imageUrl" alt="Recommendation2Pic">`;
            resultDiv2.innerHTML += `<h2>${name2}</h2>`;
            resultDiv2.innerHTML += `<p>${description2}</p>`;
            resultDiv2.innerHTML += `<button id="visit">Visit</button>`;

        } else if(recommendation == 'beach' || recommendation == 'beaches'){
            const name1 = data.beaches[0].name;
            const description1 = data.beaches[0].description;

            const name2 = data.beaches[1].name;
            const description2 = data.beaches[1].description;

            
            resultDiv1.innerHTML += `<img src="data.beaches[0].imageUrl" alt="Recommendation1Pic">`;
            resultDiv1.innerHTML += `<h2>${name1}</h2>`;
            resultDiv1.innerHTML += `<p>${description1}</p>`;
            resultDiv1.innerHTML += `<button id="visit">Visit</button>`;

            resultDiv2.innerHTML += `<img src="data.beaches[1].imageUrl" alt="Recommendation2Pic">`;
            resultDiv2.innerHTML += `<h2>${name2}</h2>`;
            resultDiv2.innerHTML += `<p>${description2}</p>`;
            resultDiv2.innerHTML += `<button id="visit">Visit</button>`;
        } else {

            resultDiv1.innerHtml = "We apologize, we could not find anything";

        }
    })
        .catch(error => {
        console.error('Error: ', error);
        resultDiv1.innerHMTL = 'An error occurred while fetching the data';
    });
}

//running the searchRecommendation Method when the search btn clicked
searchBtn.addEventListener("click", searchRecommendation);


