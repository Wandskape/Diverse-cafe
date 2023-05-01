var xmlDoc;
if (typeof window.DOMParser != "undefined") {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "catalog.xml", false);
    if (xmlhttp.overrideMimeType) {
        xmlhttp.overrideMimeType('text/xml');
    }
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    }
else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = "false";
    xmlDoc.load("catalog.xml");
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