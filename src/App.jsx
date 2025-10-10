import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <header className="w-full bg-blue-600 text-white p-4 text-center text-2xl">
        Mon superbe design React 💎
      </header>

      <main className="flex-1 p-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-xl">
          Action
        </button>
      </main>

      <footer className="bg-gray-800 text-white w-full text-center p-4">
        © 2025 MonSite
      </footer>
    </div>
  );
}
