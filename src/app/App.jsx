//styles
import './App.css';
//components
import Header from '../components/header/Header';
import Search from '../components/search/Search';
import Results from '../components/results/Results';
//dependencies
import { useState, useEffect } from 'react';
//utils
import { request } from '../utils/request';


function App() {
  //dark version state
  const [isDark, setIsDark] = useState(false);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gifsList, setGifsList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  //answer messege after searching state
  const [answer, setAnswer] = useState(false);

  //shows the inicial top trending gifs
  useEffect(() => {
    request("/trending")
      .then(res => res.json())
      .then(data => setGifsList(data.data))
      .catch(err => console.log(err))
  }, [])

  //shows the gifs related to the word that the customer searched
  useEffect(() => {
    if (isSearching && value !== "") {
      setIsLoading(true)
      request("/search", value)
        .then(res => res.json())
        .then(data => setGifsList(data.data))
        .catch(err => console.log(err))
        .finally(() => {
          setIsSearching(false);
          setIsLoading(false);
          setAnswer(true)
          setValue("")
        })
    }
  }, [isSearching, value])

  return (
    // dinamic css for dark and light version
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <hr />
      <div className='screen'>
        <Header
          onClick={() => setIsDark(!isDark)}
          isDark={isDark}
        />
        <Search
          onClick={() => setIsSearching(!isSearching)}
          value={value}
          setValue={setValue}
          btnDisabled={isSearching || value === ''}
          setIsSearching={setIsSearching}
        />
        {!answer ?
          <p>Realiza tu busqueda</p> :
          !gifsList.length ?
            <p>No se encuentran resultados :(</p> :
            <p>Resultado de tu busqueda </p>
        }
        {isLoading ?
          <span>Cargando....</span> :
          <div className='results-grid'>
            <Results
              data={gifsList}
              answer={answer}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
