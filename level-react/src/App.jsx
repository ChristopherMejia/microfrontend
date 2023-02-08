import { lazy, Suspense } from 'react';
// import Users from './components/Users'
import Counter from './components/Counter'

const Users = lazy( () => import("./components/Users"));



import './App.css'

function App() {
  return (
    <div className="App">
      <Counter/>
      <Suspense fallback={<div> Loading ... </div>}>
        <Users/>
      </Suspense>
    </div>
  )
}

export default App
