import './App.css';
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState("");

  const arr = ["Avocado", "Banana", "Apple", "Mango", "Kiwi", "Orange", "Pineapple", "Watermelon", "Lemon", "Apricot", "Blueberry", "Plum", "Cherry", "Fig", "Papaya", "Grapefruit", "Strawberry"]
  function handleChange(e) {
    setSearch(e.target.value);
  }
  let filtered = arr.filter((item) => item.toLowerCase().includes(search.toLowerCase()));
  if (filtered.length === 0) {
    filtered = ["No Results Found"];
  }
  return (
    <div className="main">
      <div className='container'>
        <label htmlFor="input">Search Bar : </label>
        <input
          type="text"
          placeholder='Search here...'
          id="input"
          onChange={handleChange}
        />
        <ul>
          {filtered.map((element, ind) => (
            <li key={ind}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;