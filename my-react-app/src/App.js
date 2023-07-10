import {useEffect} from "react";
//6bf109c7
const API_URL = 'http://www.omdbapi.com/?apikey=6bf109c7';

const App = () => {
  const searchMOvie =async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }
  useEffect(()=>{
    searchMOvie('Spiderman')

    },[])

  return (
  <h1>App</h1>
  )
};

export default App;
