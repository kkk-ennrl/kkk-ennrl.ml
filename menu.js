let list = [
	
	{
		"name":"Главная",
		"url":"/",
		"type":"this",
		"hint":"Перейти на главную страницу"
	},
	{
		"name":"Instagram",
		"url":"https://instagram.com/kkk_ennrl",
		"type":"site",
		"name":"Instagram"
	},
	{
		"name":"Новости",
		"url":"/news",
		"type":"this",
		"hint":"Открыть раздел новостей"
	}

]

window.addEventListener("DOMContentLoaded", function(){

	let html  = "";

	for (var i = 0; i < list.length; i++) {

		html += "<li ";
		if (list[i].type == "this") {
			html += "title='" + list[i].hint
		} else if (list[i].type == "site") {
			html += "title='Открыть сторонний сайт: \n" + list[i].name 
		}

		html += "' onclick='document.location.href = \"" + list[i].url + "\"'>" + list[i].name + "</li>"

	}

	document.querySelector(".content .bar .menu").innerHTML = html;

})