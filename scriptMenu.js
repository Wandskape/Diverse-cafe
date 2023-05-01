$(function() {
	var pull 		= $('#pull');
		menu 		= $('nav ul');
		menuHeight	= menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
});

$(window).resize(function(){
	var w = $(window).width();
	if(w > 320 && menu.is(':hidden')) {
		menu.removeAttr('style');
	}
});



/* -------------------location--------------------- */
function initMap() {
	const center = { lat: 55.7558, lng: 37.6173 };
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 16,
	  center: center,
	});
  
	const locations = document.querySelectorAll(".locations li a");
	locations.forEach(function (location) {
	  location.addEventListener("click", function (e) {
		e.preventDefault();
  
		const latlngStr = this.getAttribute("data-latlng");
		const latlngArr = latlngStr.split(",");
		const lat = parseFloat(latlngArr[0]);
		const lng = parseFloat(latlngArr[1]);
  
		const marker = new google.maps.Marker({
		  position: { lat: lat, lng: lng },
		  map: map,
		  title: this.innerText,
		});
  
		map.panTo(marker.getPosition());
	  });
	});
  }
  
/* ---------------------------------------- */

/* -------------------menu--------------------- */

// Загрузка XML документа
const xml = new XMLHttpRequest();
xml.open("GET", "data.xml", false);
xml.send();
const xmlDoc = xml.responseXML;

// Получение списка элементов dish из XML документа
const dishes = xmlDoc.getElementsByTagName("dish");

// Перебор элементов dish и заполнение информацией соответствующих элементов HTML
for (let i = 0; i < dishes.length; i++) {
  const dish = dishes[i];
  const imgSrc = dish.getElementsByTagName("img")[0].getAttribute("src");
  const imgAlt = dish.getElementsByTagName("img")[0].getAttribute("alt");
  const title = dish.parentNode.querySelector("h3");
  const description = dish.parentNode.querySelector("p");

  if (title) {
    title.textContent = dish.getElementsByTagName("name")[0].textContent;
  }

  if (description) {
    description.textContent = dish.getElementsByTagName("description")[0].textContent;
  }
}






/* ---------------------------------------- */

