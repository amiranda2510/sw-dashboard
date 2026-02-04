import Dashboard from "./components/Dashboard"
import Filters from "./components/Filters"
import Header from "./components/Header"
import "./style.css"

function App() {

  return (
    <div className="App">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-6 mb-5">
        <Filters />
        <Dashboard />
      </main>
    </div>
  )
}

export default App
