import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
 const loadedCoffees= useLoaderData();
 const [coffees,setCoffees]=useState(loadedCoffees);
  return (
    <> 
      <h1 className='text-3xl text-center md:mx-40 p-4 rounded bg-green-400 text-white mt-4 '>Available Coffee : {coffees.length}</h1>
      <div  className='grid md:grid-cols-2 gap-4 mt-10 md:mx-40 content-center'>
        {
        coffees.map(coffee=> <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}> </CoffeeCard>)
      }
      <Link to={'addCoffee'}>
            <button className="btn join-item w-full mb-4 pr-8 bg-green-400 text-white">Add A Coffee</button>
      </Link>
      </div>
      
    </>
  )
}

export default App
