import React from 'react'
import BookCard from './BookCard'
import { ArrowLeft } from 'lucide-react'
import { NavLink} from 'react-router-dom';
import { mybooks } from './../../bookshelf.js';

function MyBookShelf() {

  return (
    <div>
      <div className='flex justify-between items-center'>
      <NavLink
      to='/'>
      <ArrowLeft />
      </NavLink>
      <h1 className='text-xl font-bold'>My BookShelf</h1>
      </div>
      <div className='flex flex-wrap mt-12 gap-3'>

      {mybooks.map((book) => (<BookCard book={book} addVal={true}/>))}
      </div>
      
    </div>
  )
}

export default MyBookShelf
