const apikey = "484aa38b5d8121056ef9ccdb3a4bcff0"
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

  
  const searchBox = document.querySelector(".search input")
  const searchBtn = document.querySelector(".search button")


  async function checkWeather(city){
    const response =  await fetch(`${apiUrl}${city}&appid=${apikey}`);
    console.log(response)
    var data = await response.json();



    // console.log(data) 

    
    const far = data.main.temp
    const celsiusTemp = (far - 273.15)|0;
    // const celsiusTemp = (far - 273.15).toFixed(0);
    

    
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =  celsiusTemp + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind1").innerHTML = data.wind.speed + "km/h";
      
      // document.querySelector(".weather").style.display ="block";
  }


  searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
  })
  


  let availableKeywords =[
    'jagtial',
    'karimnagar',
    'hyderabad',
    'ADILABAD',
    'HANUMAKONDA',
    'KAMAREDDY',
    'KHAMMAM',
    'KOMARAM BHEEM ASIFABAD',
    'MAHABUBAD',
    'MAHABUBNAGAR',
    'MANCHERIAL',
    'MEDAK',
    'MEDCHAL-MALKAJGIRI',
    'MULUG',
    'NAGARKARNOOL',
    'NALGONDA',
    'NARAYNPET',
    'NIRMAL',
    'NIZAMABAD',
    'PEDDAPALLI',
    'RAJANNA SIRCILLA',
    'RANGAREDDY',
    'SANGAREDDY',
    'SIDDIPET',
    'SURYAPET',
    'VIKARABAD',
    'WANAPARTHY',
    'WARANGAL',
    'YADADRI BHUVANAGIRI',
    'SRIKAKULAM',
    'VIZIANAGARAM',
    'VISAKHAPATANAM',
    'ANAKAPALLI',
    
  ]

  const resultBox = document.querySelector(".result-box");
  const inputBox =document.getElementById("input-box");

  inputBox.onkeyup = function(){
    let result = [];
        let input = inputBox.value;
        if(input.length){
            result = availableKeywords.filter((keyword)=>{
                 return keyword.toLowerCase().includes(input.toLowerCase());
            });
            console.log(result);
        }
        display(result);

        if(!result.length){
            resultBox.innerHTML = '';
        }
  }

  function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    })
    resultBox.innerHTML = "<ul>" + content.join('') +  "</ul>"

  };


  function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
  }