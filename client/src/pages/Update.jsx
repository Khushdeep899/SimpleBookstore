import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate, useLocation} from "react-router-dom"



const Update = () => {
    const [book,setBook] = useState({
        title:"",
        desc:"",
        price: null,
        cover: "",
    });

    const navigate = useNavigate()
    const location = useLocation()

    console.log(location.pathname.split("/")[2])

    const bookId = location.pathname.split("/")[2]


    const handleChange = (e) => {
        setBook((prev) =>  ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/books/"+bookId, book)
            navigate("/")

        }catch(err){
            console.log(err)

        }
    }

    console.log(book)


  return (
    <form className='form' onSubmit={handleClick}>
      <h1> Update the Book</h1>
      <input type="text" placeholder='Title' onChange={handleChange} name="title" />
      <input type="text" placeholder='Description' onChange={handleChange} name="desc" />
      <input type="number" placeholder='Price' onChange={handleChange} name="price" />
      <input type="text" placeholder='Cover URL' onChange={handleChange} name="cover" />
      <button type="submit" className="formButton">Update</button>
    </form>
  )
}

export default Update