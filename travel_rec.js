const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const resultDiv = document.getElementById('searchCondition');
const inputPlace = document.getElementById('searchBar');
const input = inputPlace.innerText.toLowerCase();

function searchAndDisplay(){
    searchRecommendation();
    displayRecommendation();
}


async function fetchingData(){
    const response = await fetch('.travel_recommendation.api.json');
    const data = await response.json();
    return data;

}

function searchRecommendation(input){
    fetchingData()
                .then(data => {
                    input;
                    let recommendations = [];

                    if(input === 'country' || input === 'countries'){
                        recommendations = data.country || [];
                    } else if(input === 'temple' || input === 'temples'){
                        recommendations = data.temple || [];
                    } else if(input === 'beach' || input === 'beaches'){
                        recommendations = data.beach || [];
                    } else{
                        resultDiv.innerHTML = 'We apologize, we could not provide you any recommendation';
                        return;
                    }

                    displayRecommendation(recommendations);
                }).catch(error => {
                    console.error('Error: ', error);
                    resultDiv.innerHTML = 'Data could not be fetched, try again later, please';
                });
}

function displayRecommendation(recommendations){
    resultDiv.innerHTML = '';

    recommendations.forEach(recommendation => {
        const result = document.createElement('div');
        result.classList.add('result1');
        result.innerHTML = `
                <img src="${recommendation.imageUrl}" alt="${recommendation.name}">
                <h2>${recommendation.name}</h2>
                <p>${recommendation.description}</p>
                <a href="#book-now" class="book-now-button">Visit</a>`;
                resultDiv.appendChild(result)

        
    });

}

//Assigning event listeners
searchBtn.addEventListener('click', function(event){
    event.preventDefault();
    const userInput = document.getElementById('searchBar').value.trim();
    searchAndDisplay(userInput);
});

//   // Event listener for search button click
//   searchButton.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent form submission
//     const searchInput = document.getElementById('search-input').value.trim();
//     if (searchInput) {
//         handleSearch(searchInput);
//     } else {
//         resultsContainer.innerHTML = '<p>Please enter a keyword.</p>';
//     }
// });