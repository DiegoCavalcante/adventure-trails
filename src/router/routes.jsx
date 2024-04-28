
import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import App from '../App.jsx'
import CadastroTrilhas from '../pages/CadastroTrilhas.jsx'
import ListaTrilhas from '../pages/ListaTrilhas.jsx'
const routers = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/cadastro',
                element: <CadastroTrilhas/>
            },
            {
                path: '/',
                element: <ListaTrilhas/>
            }
        ]
    }
    
])

export default routers