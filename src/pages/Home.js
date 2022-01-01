import React, { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
const Home = () => {
    const [post, setPost] = useState([])
    const postsDiary = collection(db, "diary")
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsDiary)
            setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts()
    })
    return (
        <div className="home">

        </div>
    )
}

export default Home
