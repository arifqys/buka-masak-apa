import React, {useState, useEffect} from 'react';
import {FiSearch} from 'react-icons/fi'
import './App.css';
import Illustration from './illustration.png';

import Spinner from './components/Spinner/Spinner';
import Modal from './components/Modal/Modal';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEYS}`)
      .then(res => res.json())
      .then(res => {
        setRecipes(res.hits);
        setIsLoading(false);
      })
  }, [query]);

  const onSubmitHandler = e => {
    setIsLoading(true);
    e.preventDefault();
    if (!value) return;
    setQuery(value);
  }

  let content = (
    <div className="flex">
      {recipes.map((recipe) => {
        let trigger = (
          <div className="box">
            <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
            <div><h2>{recipe.recipe.label}</h2></div>
          </div>
        )
        return (
          <Modal trigger={trigger} data={recipe} key={recipe.recipe.url}/>
        )
      })}
    </div>
  )

  if (isLoading === true)
  content = <Spinner />

  return (
    <div className="container">
      <img className="illustration" src={Illustration} alt="illustration"></img>
      <h1>buka <span className="text-bold">masak</span> apa</h1>
      <form onSubmit={onSubmitHandler}>
        <input placeholder="Masukkan kata kunci" value={value} onChange={e => setValue(e.target.value)}></input>
        <button type="submit"><span className="icon"><FiSearch /> </span><span className="text">Cari</span></button>
      </form>
      {content}
    </div>
  )
}

export default App;
