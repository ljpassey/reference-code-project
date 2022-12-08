import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const DetailScreen = () => {
    const [data, setData] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {

        })
    }, [id])
  return (
    <div className="card">
        <h1>The number you entered: {id}</h1>
        <h1>That Pokemon's name: {data.name}</h1>
    </div>
  )
}

export default DetailScreen