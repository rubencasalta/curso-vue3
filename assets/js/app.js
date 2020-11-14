window.addEventListener('load',()=>{

	"use strict";

	// VARIABLE
	let time = 0;
	let p = document.querySelector('p');
	let h = document.querySelector('h1');

	h.classList.add('text-center');
	p.classList.add('text-center');

	message.innerText = 0;
	setInterval( () => {
		message.innerText = ++time;
	}, 1000);


	// ARRAY
	let aWeek = ['Lunes','Martes','Miércoles','Jueves'];
	aWeek.push('Sábado','Domingo');

	week.classList.add('list-unstyled','m-0','pt-3','pb-3','text-center');
	aWeek.forEach( (day) => {
		week.innerHTML += '<li>' + day + '</li>';
	});

	//OBJETO
	const USER = {
		name: 'Rubén Casalta',
		age: 44,
		skills: ['css','html','php','javaScript','git']
	}
	USER.city = 'Badalona';

	let user = document.querySelector('.user');
	user.classList.add('m-0','pt-3','pb-3','text-center');
	user.innerHTML = 'Hola, me llamo <b>' + USER.name + '</b> tengo <b>' + USER.age + '</b> años y vivo en <b>' + USER.city + '</b>.';

	// FUNCIONES
	const sum = document.querySelector('.sum');
	const fArrow = () => {
		return 'Esto es el resultado de una función de flecha';
	}
	sum.classList.add('text-center','m-0','pt-3','pb-3');
	sum.innerText = fArrow();

	// TEMPLATE STRING
	const id_msg_num = document.querySelector('.msg_num');
	id_msg_num.classList.add('text-center','m-0','pt-3','pb-3');
	const fNumber = (num1=3,num2=6) =>
		(`El número introducido a través de un <em><b>template string</b></em> es el <b>${num1 + num2}</b>`);
	id_msg_num.innerHTML = fNumber(79, 67);

	// OBJETOS
	const oPet = {
		name: 'Musca',
		age: 3,
		happy: true,
		breed: ['Labrador','Golden retriver','Pastor alemán'],
		web: {
			link: 'www.trololo.com',
			title: 'Nombre del link'
		}
	}

	const {name, age} = oPet;
	const {link, title} = oPet.web;
	console.log(`Tu mascota se llama ${name} y tiene ${age} años`);
	console.log(`Sacamos los datos de un objeto dentro de un objeto. El link: ${link} y el título: ${title}`);

	// FETCH
	/*
	fetch('https://pokeapi.co/api/v2/pokemon')
		.then( rest => rest.json() )
		.then( data => {
			const id_pokemons = document.querySelector('#pokemons');
			id_pokemons.classList.add('list-unstyled','m-0','pt-5','pb-5','text-center');
			data.results.forEach( element => {
				id_pokemons.innerHTML += `<li>${element.name}</li>`;
			})
		})
		.catch( error => console.log( error ))
	*/

	// ASYNC & AWAIT
	const getPokemon = async() => {
		try {

			const rest = await fetch('https://pokeapi.co/api/v2/pokemon')
			const data = await rest.json()
			const id_pokemons = document.querySelector('#pokemons');
			id_pokemons.classList.add('list-unstyled','m-0','pt-5','pb-5','text-center');
			/*
			data.results.forEach( element => {
				id_pokemons.innerHTML += `<li>${element.name}</li>`;
			})
			*/
			//data.results.map( poke => id_pokemons.innerHTML += `<li>${poke.name}</li>` )
			const oPoke = data.results.filter( poke => poke.name !== 'butterfree' )
			//console.log( oPoke )
			oPoke.forEach( element => {
				id_pokemons.innerHTML += `<li>${element.name}</li>`;
			})

		} catch (error) {
			console.log( error );
		}
	}
	getPokemon();

});