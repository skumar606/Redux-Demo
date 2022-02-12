import { Provider } from 'react-redux';
import store from './redux/store';

import CakeContainer from './components/CakeContainer';
import './App.css';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
