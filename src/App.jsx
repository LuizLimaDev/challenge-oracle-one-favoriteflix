import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import Header from './components/Navigation/Header/Header';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
