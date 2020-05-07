const header = document.querySelector('header');
const section = document.querySelector('section');
const request = new XMLHttpRequest();
request.open('GET', "json.xml");
request.send();

request.onload = () => {
const heroesGeneralInfo = request.responseXML.documentElement;
debugger
populateHeader(heroesGeneralInfo);
// showHeroes(superHeroes);
}

const populateHeader = (heroesGeneralInfo) => {
const myH1 = document.createElement('h1');
const squadName = heroesGeneralInfo.getElementsByTagName("squadName");
myH1.textContent = squadName[0].firstChild.nodeValue // myH1.textContent = squadName[0].textContent
header.appendChild(myH1);
const myPara = document.createElement('p');
const homeTownNodes = heroesGeneralInfo.getElementsByTagName("homeTown");
const formedNodes = heroesGeneralInfo.getElementsByTagName("formed");
myPara.textContent = 'Hometown: ' + homeTownNodes[0].firstChild.nodeValue + ' // Formed: ' + formedNodes[0].firstChild.nodeValue;
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
  //   var myheroesGeneralInfo = document.createElement('ul');

  //   myH2.textContent = heroes[i]['name']; //heroes[i].name;
  //   myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
  //   myPara2.textContent = 'Age: ' + heroes[i].age;
  //   myPara3.textContent = 'Superpowers:';
        
  //   var superPowers = heroes[i].powers;
  //   for (var j = 0; j < superPowers.length; j++) {
  //     var heroesGeneralInfoItem = document.createElement('li');
  //     heroesGeneralInfoItem.textContent = superPowers[j];
  //     myheroesGeneralInfo.appendChild(heroesGeneralInfoItem);
  //   }

  //   myArticle.appendChild(myH2);
  //   myArticle.appendChild(myPara1);
  //   myArticle.appendChild(myPara2);
  //   myArticle.appendChild(myPara3);
  //   myArticle.appendChild(myheroesGeneralInfo);

  //   section.appendChild(myArticle);
  //   }
  // }