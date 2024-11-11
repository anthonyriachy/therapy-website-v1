  import { Route, Routes} from 'react-router-dom'
  import './App.css'
  import  Home  from './screens/Home.jsx'
  import  Error  from './Error.jsx'
  import NavBar from './components/NavBar/NavBar.jsx'
  
  import TherapistPage from './screens/TherapistsDev/TherapistsDev.jsx'
  import Therapist from './screens/Therapist.jsx'
  import AuthPage from './screens/Register.tsx'
  import Schedule from './screens/Appointment/Appointment.tsx'
  function App() {
    
   
    return (
      <>
      {location.pathname!=="/register" && <NavBar/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<AuthPage/>} />
          <Route path="/appointment" element={<Schedule/>} />


          <Route path="/therapist/:id" element={<Therapist/>} />

          <Route path="/therapistsdev" element={<TherapistPage/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </>
    )
  }

  export default App
