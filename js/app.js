(function catNames() {
	var cats_names = ["Miki","Masa"]
	var cats_el = document.querySelectorAll(".cat_name")
	for (var i = 0; i < cats_el.length; i++) {
		cats_el[i].innerHTML = cats_names[i]
		console.log("names")
	}
})();


function counter () {
	var count = document.querySelector('.counter_count')
	var n = parseInt(count.innerHTML)
	n = n+1
	count.innerHTML=n
	console.log(n)
	console.log("counter")
}

var el = document.querySelectorAll(".counter_clicker")
for (var x = 0; x < el.length; x++) {
	el[x].addEventListener("click", function(){counter()}, false)
}