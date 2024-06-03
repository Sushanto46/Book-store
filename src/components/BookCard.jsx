import React from 'react'
import { useState } from 'react'
import { add } from '../../bookshelf'

function BookCard({book,addVal,setBooks}) {
    const [added, setAdded] = useState(false)

    function handleClick(){
        setAdded(!added)
        add(book)
    }
  return (
    <div className='flex flex-col shadow-md h-40 w-[30%] items-center justify-center '>
      <p className='text-2xl font-bold '> {book.title}</p>
      <p className='text-gray-700 mb-5'>Edition count: {book.edition_count}</p>
      <button 
      className={`${added? "bg-white text-green-500":"bg-green-500 text-white"} font-semibold rounded-md py-1 px-2`}
      onClick={handleClick}
      disabled={added || addVal}
      >
        {added || addVal? "Added" : "Add to Bookshelf"}</button>
    </div>
  )
}

export default BookCard