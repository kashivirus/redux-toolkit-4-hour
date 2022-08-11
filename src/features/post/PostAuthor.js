


import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUser } from '../Users/UsersSlice'

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUser)

    const author = users.find((user) => user.id === userId)
    // console.log(author)
    return (
        <span>by {author ? author.name : "Unknown author"}</span>
    )
}

export default PostAuthor