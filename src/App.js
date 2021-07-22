import Header from "./components/header";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import "./css/responsive.css";
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;


