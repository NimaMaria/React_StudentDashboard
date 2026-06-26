
import Header from './Components/Header'
import StudentCard from './Components/StudentCard'
import "./App.css"

function App() {

  return (
    <>
     <Header/>
     <StudentCard name="John" course="MERN Stack"/>
     <StudentCard name="Max" course="JavaScript"/>
     <StudentCard name="Alice" course="Django"/>
    </>
  )
}

export default App
