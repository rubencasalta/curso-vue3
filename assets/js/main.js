const app = Vue.createApp({
	data() {
		return {
			title: 'Esto es un hola mundo con Vue.js',
			amount: 10
		}
	}
});

const bank = Vue.createApp({
	data() {
		return {
			title: 'Este es mi Banco',
			amount: 10,
			link: 'https://www.youtube.com/watch?reload=9&reload=9&reload=9&v=4ep6hhofuA0',
			target: '_blank',
			status: true,
			fruits: ['Pera','Manzana','Platano','Naranja','Ciruela']
		}
	}
});