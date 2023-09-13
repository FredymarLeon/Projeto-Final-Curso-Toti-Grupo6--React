import ListaDeServicos from "./components/ListaDeServicos";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (

    <div>
      <Navbar />
      <ListaDeServicos />
      <Footer />
    </div>
  );
}

export default App;
