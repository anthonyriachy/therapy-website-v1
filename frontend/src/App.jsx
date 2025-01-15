  import { Route, Routes} from 'react-router-dom'
  import './App.css'
  import  Home  from './screens/HomeScreen/Home.jsx'
  import  Error  from './Error.jsx'
  import NavBar from './components/Navbar/NavBar.jsx'
  import Register from './screens/Register/Register.jsx'
import { element } from 'prop-types'

  function App() {
    
   const routes=[{
        path:"/",
        element:<Home/> 
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"*",
        element:<Error/>
      }
    ]
    
    return (
      <>
        <NavBar/>
        <Routes>
          {routes.map(route=>(
            <Route key={route.path} path={route.path} element={route.element}/>
          ))}
        </Routes>
      </>
    )
  }

  export default App
