import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import initializeStore from './src/store';

export default function App() {
  const store = initializeStore()

  return (
    <Provider store={store}>
      <Navigation />
      </Provider>
  );
}
