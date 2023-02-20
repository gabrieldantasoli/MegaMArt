import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Header } from './components';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={4000} />
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
