import './index.css'
import { usePokemon } from './hooks/usePokemon';
import { useEffect } from 'react';

function App() {

const {pokemon, getPokemon} = usePokemon(); //terima data dari usePokemon dengan jenis data object

useEffect(() => {
  getPokemon()
 }, [])

  return (
    <>
     <h1 className='text-3xl text-center'>click link in below if you wanna free Pokemon!!</h1>
     <div className=''>
      {pokemon.map((results) => (
        <div>
        <p>name: {results.name}</p>
        <a href="">{results.url}</a>
        </div>
      ))}
     </div>
    </>
  )
}

export default App
