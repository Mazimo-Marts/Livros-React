import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar navbar-expand-lg bg-dark p-2'>
        <div className='container-fluid'>
          <div className='navbar-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item pr-4'>
                <Link className='nav-link text-light' to='/'>Catálogo</Link>
              </li>
              <li className='nav-item pr-4'>
                <Link className='nav-link text-light' to='/dados'>Novo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;