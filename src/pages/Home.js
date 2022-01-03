import React, { useState, useEffect } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import './Page.css'
const Home = () => {
    const [postList, setPostList] = useState([])
    const postsDiary = collection(db, "diary")
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsDiary)
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts()
    })
    const deletePost = async (id) => {
        const postDoc = doc(db, 'diary', id)
        await deleteDoc(postDoc)
    }
    return (
        <div className="homepage">
            {postList.map((post) => {
                return (<div className="post">

                    <div className="postHeader">
                        <div className='title'>
                            <h1>{post.title}</h1>
                        </div>
                        <div className="delete" onClick={() => { deletePost(post.id) }}>
                            <button>&#128465;</button></div>
                        <div className="post-text">{post.post}</div>
                        <h3>@{post.author.name}</h3>
                    </div>

                </div>)

            })}
        </div>
    )
}

export default Home
