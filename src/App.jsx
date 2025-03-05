//task components
import Header from "./components/Header"
import Main from "./components/Main"

//task context
import { GlobalProvider } from "./context/GlobalContext"


function App() {

  return (
    <>
      <GlobalProvider>

        <Header />
        <Main />

      </GlobalProvider>
    </>
  )
}

export default App
