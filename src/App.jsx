import { Outlet } from "react-router-dom";
import {UsuariosContextProvider} from './context/UsuariosContext'
import Header from "./components/Header";

function App() {
  return (
    <UsuariosContextProvider>
      <Header />
      <Outlet />
    </UsuariosContextProvider>
      
    
  );
}

export default App;
