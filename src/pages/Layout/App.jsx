import { Outlet } from 'react-router-dom';
import Header from '../../components/Navigation/Header/Header';
import { GlobalStyle } from '../../styles/GlobalStyle';

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
