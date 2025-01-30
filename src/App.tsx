import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import FormCategoria from './components/categorias/formcategoria/FormCategoria';
import ListaCategorias from './components/categorias/listacategoria/ListarCategorias';
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria';
import ListarProdutos from './components/produtos/listarprodutos/ListarProdutos';
import FormProduto from './components/produtos/formproduto/FormProdutos'; 

function App() {
  
  const atualizarListaCategorias = (novaCategoria: any) => {
    
    console.log("Nova categoria adicionada:", novaCategoria);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route 
              path="/cadastrarcategoria" 
              element={<FormCategoria atualizarListaCategorias={atualizarListaCategorias} />} 
            />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route 
              path="/editarcategoria/:id" 
              element={<FormCategoria atualizarListaCategorias={atualizarListaCategorias} />} 
            />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadastrarproduto" element={<FormProduto />} /> 
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
