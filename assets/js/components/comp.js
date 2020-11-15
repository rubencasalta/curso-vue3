app.component('comp-a', {
	props: ['amount','date'],
	template:	`
					<div class="container p-3 mt-5 bg-light text-center">
						<p class="m-0"><span>Fecha: {{ date }} <br> Cantidad: {{ amount }} <br> {{ title }}</span></p>
					</div>
	`,
	data() {
		return {
			title: 'Esto es un componente introducido dinámicamente.'
		}
	}

});