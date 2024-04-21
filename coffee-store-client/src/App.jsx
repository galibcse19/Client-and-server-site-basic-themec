import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
 const coffees= useLoaderData();
  return (
    <> 
      <h1 className='text-3xl text-center text-purple-500 mt-4 '>Available Coffee : {coffees.length}</h1>
      <div  className='grid md:grid-cols-2 gap-4 mt-10 md:mx-40 content-center'>
        {
        coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}> </CoffeeCard>)
      }
      </div>
    </>
  )
}

export default App
