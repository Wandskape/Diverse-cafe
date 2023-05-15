var xmlDoc;
if (typeof window.DOMParser != "undefined") {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "data.xml", false);
    if (xmlhttp.overrideMimeType) {
        xmlhttp.overrideMimeType('text/xml');
    }
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    }
else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = "false";
    xmlDoc.load("data.xml");
}


// Получение списка элементов dish из XML документа
const dishes = xmlDoc.getElementsByTagName("dish");
var str = "";
// Перебор элементов dish и заполнение информацией соответствующих элементов HTML
for (let i = 0; i < dishes.length; i++) {
  const dish = dishes[i];
  const imgSrc = dish.getElementsByTagName("img")[0].getAttribute("src");
  const imgAlt = dish.getElementsByTagName("img")[0].getAttribute("alt");
  const name = dish.getElementsByTagName("name")[0].textContent;
  const description = dish.getElementsByTagName("description")[0].textContent;
  str += "<div class=\"dish-card\"><img src=\"" + imgSrc + "\" alt=\"" + imgAlt + "\"><h3>" +
  name +"</h3><p>" + 
  description +"</p></div>";
}
	document.getElementById("coffee").innerHTML += str;

// Получение списка элементов dish из XML документа
const Сdishes = xmlDoc.getElementsByTagName("Сdish");
var str = "";
// Перебор элементов dish и заполнение информацией соответствующих элементов HTML
for (let i = 0; i < Сdishes.length; i++) {
  const dish = Сdishes[i];
  const imgSrc = dish.getElementsByTagName("img")[0].getAttribute("src");
  const imgAlt = dish.getElementsByTagName("img")[0].getAttribute("alt");
  const name = dish.getElementsByTagName("name")[0].textContent;
  const description = dish.getElementsByTagName("description")[0].textContent;
  str += "<div class=\"dish-card\"><img src=\"" + imgSrc + "\" alt=\"" + imgAlt + "\"><h3>" +
  name +"</h3><p>" + 
  description +"</p></div>";
}
	document.getElementById("cold-drinks").innerHTML += str;

// Получение списка элементов dish из XML документа
const Sdishes = xmlDoc.getElementsByTagName("Sdish");
var str = "";
// Перебор элементов dish и заполнение информацией соответствующих элементов HTML
for (let i = 0; i < Sdishes.length; i++) {
  const dish = Sdishes[i];
  const imgSrc = dish.getElementsByTagName("img")[0].getAttribute("src");
  const imgAlt = dish.getElementsByTagName("img")[0].getAttribute("alt");
  const name = dish.getElementsByTagName("name")[0].textContent;
  const description = dish.getElementsByTagName("description")[0].textContent;
  str += "<div class=\"dish-card\"><img src=\"" + imgSrc + "\" alt=\"" + imgAlt + "\"><h3>" +
  name +"</h3><p>" + 
  description +"</p></div>";
}
	document.getElementById("salads").innerHTML += str;

// Получение списка элементов dish из XML документа
const DEdishes = xmlDoc.getElementsByTagName("DEdish");
var str = "";
// Перебор элементов dish и заполнение информацией соответствующих элементов HTML
for (let i = 0; i < DEdishes.length; i++) {
  const dish = DEdishes[i];
  const imgSrc = dish.getElementsByTagName("img")[0].getAttribute("src");
  const imgAlt = dish.getElementsByTagName("img")[0].getAttribute("alt");
  const name = dish.getElementsByTagName("name")[0].textContent;
  const description = dish.getElementsByTagName("description")[0].textContent;
  str += "<div class=\"dish-card\"><img src=\"" + imgSrc + "\" alt=\"" + imgAlt + "\"><h3>" +
  name +"</h3><p>" + 
  description +"</p></div>";
}
	document.getElementById("desserts").innerHTML += str;