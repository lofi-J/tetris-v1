// Redux
import { Provider } from 'react-redux';
import store from './store/Store';

// Components
import Game from './components/Game';
import Particle from "./components/Particle";
import { clgTetris } from './clgModule';



function App() {
	clgTetris();
	return (
		<Provider store={store}>
			<Particle />
			<Game />
		</Provider>
	);
}

export default App;
