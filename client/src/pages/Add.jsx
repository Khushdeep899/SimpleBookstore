import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"



const Add = () => {
    const [book,setBook] = useState({
        title:"",
        desc:"",
        price: null,
        cover: "",
    });

    const navigate = useNavigate()


    const handleChange = (e) => {
        setBook((prev) =>  ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/books", book)
            navigate("/")

        }catch(err){
            console.log(err)

        }
    }

    console.log(book)


    return (
        <form className='form' onSubmit={handleClick}>
          <h1> Add New Book</h1>
          <input type="text" placeholder='Title' onChange={handleChange} name="title" />
          <input type="text" placeholder='Description' onChange={handleChange} name="desc" />
          <input type="number" placeholder='Price' onChange={handleChange} name="price" />
          <input type="text" placeholder='Cover URL' onChange={handleChange} name="cover" />
          <button type="submit">Add</button>
        </form>
      )
}

export default Add