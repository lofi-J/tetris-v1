import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store/Store';

// Components
import Game from './components/Game';




function App() {
    
    return (
      <Provider store={store}>
          <Game />
      </Provider>
    );
}

export default App;
 