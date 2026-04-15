
import './App.css'
import List from './List.jsx'


function App() {
  const wishList=[{ "id": 1, "value": "Time" }, 
      { "id": 2, "value": "Coffee"},{"id":3,"value": "Smiles" }]
  

  return (
    <div>
    <h1>Wishlist</h1>
    <List wishlist={wishList}/>
    </div>
  )
}

export default App
