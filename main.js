var typed = new Typed('.typed', {
	strings: ['Desarrollador Web', 'Desarrollador Jr.'],
	startDelay: 1000,
	typeSpeed: 70,
	backSpeed: 65,
	loop: true,
	loopCount: false,
	showCursor: false,
});

window.addEventListener('hashchange', ()=> {
	console.log(window.location.hash);
});

window.onscroll = function() {
	var y = window.scrollY;
	/*console.log(y);*/
	if (y>=200) {
		document.querySelector('.navbar').setAttribute('style', 'visibility: visible; opacity: 1; transition: background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s; background: black;');
	} else{
		document.querySelector('.navbar').setAttribute('style', 'visibility: visible; opacity: 1; transition: background 0.3s ease 0s, opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s; background: transparent;')
	}
};

const contFb = document.querySelector('#fb-cont');
const iconFb = document.querySelector('#fb');
const contJq = document.querySelector('#jq-cont');
const iconJq = document.querySelector('#jq');
const links = document.querySelectorAll(".navbar ul li a");
const btnMenu = document.querySelector(".button_menu");

window.addEventListener('click', function(e){   
  if (document.querySelector('#ul-menu').contains(e.target)){
  }	else if (document.querySelector('.button_menu').contains(e.target)) {
  } else if (document.querySelector('#ul-menu').classList.contains('show')) {
  	document.querySelector('#ul-menu').classList.remove('show')
  }
});

btnMenu.addEventListener('click', ()=> {
	setTimeout(()=> { document.querySelector('#ul-menu').classList.toggle('show'); }, 10);
})

/*const li = document.querySelectorAll('.navbar ul li');
for (const lis of li) {
	lis.addEventListener('click', ()=> {
		document.querySelector('#ul-menu').classList.remove('show');
	});
}*/

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

contFb.addEventListener('mouseover', ()=>{
	iconFb.setAttribute('src', 'img/icons/firebaseV.svg');
});

contFb.addEventListener('mouseout', ()=>{
	iconFb.setAttribute('src', 'img/icons/firebase.svg');
});


contJq.addEventListener('mouseover', ()=>{
	iconJq.setAttribute('src', 'img/icons/jqueryV.svg');
});

contJq.addEventListener('mouseout', ()=>{
	iconJq.setAttribute('src', 'img/icons/jquery.svg');
});

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}