import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUser } from '../Users/UsersSlice'

import { postAdded, } from './PostSlice'



const AddPostForm = () => {


    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [userId, setUsersId] = useState("")

    const users = useSelector(selectAllUser)

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthorChange = e => setUsersId(e.target.value)

    // const onPostSavedChanged = e => setContent(e.target.value)



    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId))

            setTitle("")
            setContent("")
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOption = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))




    return (
        <section>
            <h2>Add a new Post</h2>
            <form >
                <label htmlFor="postTitle" > Post Tile :</label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} />

                <label htmlFor='PostAuthor'>Author :</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                    <option value=""></option>
                    {usersOption}
                </select>

                <label htmlFor='postContent'> Content:</label>
                <textarea id="postContent" name="postContent" value={content} onChange={onContentChange} />

                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm