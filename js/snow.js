// const url = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/stations?locationid=FIPS:53&limit=1000';

// const stevensURL = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets?stationid=COOP:458089';

var myHeaders = new Headers();
myHeaders.append('token', 'QFXftmvuvpAaGjHEIyQhOXVyJHkNoWYE');

var myInit = {
    method: 'GET',
    headers: myHeaders
};



function getWeather(zip) {
    var api = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&locationid=ZIP:' + zip + '&startdate=2017-04-01&enddate=2017-04-01&units=standard';
    var request = new Request(api, myInit);
    fetch(request)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
        console.log(data);
        processWeather(data.results, zip);
    });
}

function processWeather(results, zip) {
    var min = 0;
    var max = 0;
    results.forEach((element) => {
        if (element.datatype == 'TMIN') {
            var min = element.value;
            console.log("Min temp is " + min);
        }
        if (element.datatype == 'TMAX') {
            var max = element.value
            console.log("Max temp is " + max);
        }
    });
    createCard(min, max, zip);
}

function createCard(min, max, zip) {
    var weatherCardLocation = $("#weatherCardLocation");
    var weatherCard = document.createElement("div");
    weatherCard.className += "demo-card-wide mdl-card mdl-shadow--2dp";
    weatherCardLocation.append(weatherCard);

    var weatherCardTitleDiv = document.createElement("div");
    weatherCardTitleDiv.className += "mdl-card__title";

    var weatherCardTitle = document.createElement("h2");
    weatherCardTitle.className += "mdl-card__title-text";
    weatherCardTitle.innerText = "Weather in " + zip + " last year";
    weatherCardTitleDiv.appendChild(weatherCardTitle);
    weatherCard.append(weatherCardTitleDiv);
}

/*
<div class="demo-card-wide mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">Welcome</h2>
  </div>
  <div class="mdl-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Get Started
    </a>
  </div>
  <div class="mdl-card__menu">
    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">share</i>
    </button>
  </div>
</div>*/



const stevensURL = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&locationid=ZIP:98115&startdate=2017-04-01&enddate=2017-04-01&units=standard';




// fetch(request)

//     .then((resp) => resp.json()) // Transform the data into json
//     .then(function (data) {
//         var arr = data.results;
//         arr.forEach((element) => {
//             if (element.name.toLowerCase().includes('stevens pass')) {
//                 console.log(element.name);
//                 console.log(element.id);
//                 var newUrl = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets/' + element.id;
//             }
//         })
//     })
    
