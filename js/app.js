function counter () {
	var count = document.querySelector('.counter_count')
	var n = parseInt(count.innerHTML)
	n = n+1
	count.innerHTML=n
	console.log(n)
	console.log("counter")
}

var el = document.getElementById("counted_id")
el.addEventListener("click", function(){counter()}, false)