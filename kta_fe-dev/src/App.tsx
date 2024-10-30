import { useRoutes } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Router';

function App() {
  const elem = useRoutes(routes);
  return <div className='App'>{elem}</div>;
}

export default App;
