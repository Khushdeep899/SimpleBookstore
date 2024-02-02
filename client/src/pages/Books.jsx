import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Books = () => {
    const [books,setBooks] = useState([])


    useEffect(()=>{

        const fetchAllBooks = async ()=>{
            try{
      
                const res = await axios.get("http://localhost:8800/books")

                setBooks(res.data);


            }catch(err){
                console.log(err);
            }
        }
        fetchAllBooks()
    },[])

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()

        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
      <h1> Khusdeep's Bookstore</h1>

      <div className="books">
        {books.map(book => (
          <div className="book" key={book.id}>
          {book.cover && (
            <img src={book.cover} alt={`${book.title} cover`} />
          )}
          <div className="book-content">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-description">{book.desc}</p>
            <p className="book-price">${book.price}</p>
          </div>
          <div className="book-actions">
            <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
            <button className="update">
              <Link to={`/update/${book.id}`} style={{ textDecoration: 'none' }}>Update</Link>
            </button>
          </div>
        </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: 'white', textDecoration: 'none' }}>Add new book</Link>
      </button>
    </div>
  )
}

export default Books