const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
const superHeroes = request.response;
populateHeader(superHeroes);
showHeroes(superHeroes);
}

const header = document.querySelector('header');
    const section = document.querySelector('section');

    
    const request = new XMLHttpRequest();
    request.open('GET', "json.xml");
    request.send();


    request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    // showHeroes(superHeroes);
    }

    function populateHeader(jsonObj) {
    // var myH1 = document.createElement('h1');
    // myH1.textContent = jsonObj['squadName'];
    // header.appendChild(myH1);

    const docelem = xmlhttp.responseXML.documentElement;
    const list = docelem.getElementsByTagName("root");
    const myPara = document.createElement('p');
    const townNodes = list.getElementsByTagName("homeTown");

    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
    }

  //   function showHeroes(jsonObj) {
  //   var heroes = jsonObj['members'];
      
  //   for (var i = 0; i < heroes.length; i++) {
  //   var myArticle = document.createElement('article');
  //   var myH2 = document.createElement('h2');
  //   var myPara1 = document.createElement('p');
  //   var myPara2 = document.createElement('p');
  //   var myPara3 = document.createElement('p');
  //   var myList = document.createElement('ul');

  //   myH2.textContent = heroes[i]['name']; //heroes[i].name;
  //   myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
  //   myPara2.textContent = 'Age: ' + heroes[i].age;
  //   myPara3.textContent = 'Superpowers:';
        
  //   var superPowers = heroes[i].powers;
  //   for (var j = 0; j < superPowers.length; j++) {
  //     var listItem = document.createElement('li');
  //     listItem.textContent = superPowers[j];
  //     myList.appendChild(listItem);
  //   }

  //   myArticle.appendChild(myH2);
  //   myArticle.appendChild(myPara1);
  //   myArticle.appendChild(myPara2);
  //   myArticle.appendChild(myPara3);
  //   myArticle.appendChild(myList);

  //   section.appendChild(myArticle);
  //   }
  // }