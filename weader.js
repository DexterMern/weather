let citiesData = {
  tehran: {
    city: "tehran",
    temp: 12,
    weather: "sunny",
    humidity: 23,
    windSpeed: 32,
  },
  shiraz: {
    city: "shiraz",
    temp: 9,
    weather: "windy",
    humidity: 12,
    windSpeed: 14,
  },
  tabriz: {
    city: "tabriz",
    temp: 1,
    weather: "rainy",
    humidity: 43,
    windSpeed: 12,
  },
  mashhad: {
    city: "mashhad",
    temp: 16,
    weather: "snow",
    humidity: 7,
    windSpeed: 24,
  },
  esfahan: {
    city: "esfahan",
    temp: 23,
    weather: "sunny",
    humidity: 15,
    windSpeed: 18,
  },
};

let $ = document;
let searchBar = $.getElementById("search-input");
let searchBtn = $.getElementById("btn-search");

searchBtn.addEventListener("click", weatherSearch);
function weatherSearch() {
  let searchBarValue = searchBar.value;
  let mainCityDatas = citiesData[searchBarValue];

  console.log(mainCityDatas);
  if (mainCityDatas) {
    $.querySelector(".name-city").innerHTML = mainCityDatas.city;
    $.querySelector(".degree").innerHTML = mainCityDatas.temp;
    $.querySelector(".feel-weather").innerHTML = mainCityDatas.weather;
    $.querySelector(".number-humidity").innerHTML = mainCityDatas.humidity;
    $.querySelector(".number-windSpeed").innerHTML = mainCityDatas.windSpeed;
    //----------------------------------------------------------
    $.querySelector(".loading").style.display = "none";
    let dis = $.querySelector(".dis");
    dis.classList.remove("dis");
    let dis1 = $.querySelector(".dis");
    dis1.classList.remove("dis");
    let dis2 = $.querySelector(".dis");
    dis2.classList.remove("dis");
    let dis3 = $.querySelector(".dis");
    dis3.classList.remove("dis");
    let dis4 = $.querySelector(".dis");
    dis4.classList.remove("dis");
  } else {
    alert("شهر مورد نظر را به درستی وارد نمایید");
  }
}
