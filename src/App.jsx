import './App.css'
import responseMovies from './mocks/with-result.json'
import withoutResults from './mocks/no-result.json'
import { Movies } from './components/Movies'

function App() {
  const movies = responseMovies.Search

  return (
  
  <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className=''>
          <input placeholder='Avengers, Star Wars, The Matrix ...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
