import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import './Page.css'
import { db, auth } from '../firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')
    const postsDiary = collection(db, "diary")
    let navigate = useNavigate()
    const createPost = async () => {
        await addDoc(postsDiary, { title, post, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }, })
        navigate('/')
    }
    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1 >Create a post</h1>
                <div className="input">
                    <label>Title: </label>
                    <input placeholder="Give your title" onChange={(e) => { setTitle(e.target.value); }} />
                </div>
                <br />
                <div className="input">
                    <label>Post: </label>
                    <textarea placeholder="Post your blog" onChange={(e) => { setPost(e.target.value); }} />
                </div>
                <br />
                <button onClick={createPost}>Submit Post</button>
            </div>

        </div>
    )
}

export default CreatePost
