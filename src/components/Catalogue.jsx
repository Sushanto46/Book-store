import React from 'react'
import BookCard from './BookCard.jsx';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';

function Catalogue() {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        async function ApiCall() {
            try {
                const bookAPI = (await axios.get('https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1')).data
                console.log(bookAPI.docs);
                setBooks(bookAPI.docs)
                setLoading(false)
            } catch (error) {
                setError(true)
                console.log(error);
                setError(false)
            }
        }
        ApiCall()
    }, [])

    const [search, setSearch] = useState('')

    return (

        <>
            <div className='flex items-center justify-between '>
                <form className='w-[70%]'>
                    <input
                        className='block border border-gray-700 w-full rounded-lg px-2 py-1 my-3'
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search by book title' />
                </form>
                <div className='flex flex-row'>

                    <NavLink
                        to='/'
                        className={({ isActive }) => `block py-2 pr-4 pl-3 mr-3 duration-200 ${isActive ? "text-green-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/mybookshelf'
                        className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-green-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`}
                    >
                        My Bookshelf
                    </NavLink>
                </div>
            </div>
            <div className='flex flex-wrap gap-3 mt-12'>
                {loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <h1>Something went wrong</h1>
                ) : (
                    books
                        .filter
                        ((book) => (search.toLowerCase() === '' ? book : book.title.toLowerCase().includes(search)))
                        .map((item) => (<BookCard key={item.key} book={item} />))
                )
            }
            </div>

        </>
    )
}

export default Catalogue
