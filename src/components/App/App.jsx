import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '../Welcome';
import Cars from '../Cars';
import Car from '../Car';
import './app.scss';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Welcome />} />
			<Route path='/car' element={<Car />} />
			<Route path='/cars' element={<Cars />} />
		</Routes>
	</BrowserRouter>
);
export default App;
