import './car.scss';

const Car = () => (
	<div className='card'>
		<h2 className='card__name'>JEEP® WRANGLER RUBICON</h2>
		<img
			className='card__img'
			src='https://s1.1zoom.me/big0/829/Jeep_Wrangler_ADV1_Track_447479.jpg'
			alt='car'
		/>
		<span className='card__price'>Precio: $295.990.000</span>
		<span className='card__year'>Año: 2022</span>
		<p className='card__info'>
			El emblema Trail Rated® se luce con orgullo en cada Jeep® Wrangler. Para tenerla, el
			vehículo debe ser capaz de pasar una serie de pruebas rigurosas para comprobar su
			capacidad de soportar terrenos difíciles, condiciones extremas e inclemencias del
			tiempo.
		</p>
	</div>
);

export default Car;
