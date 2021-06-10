import { Button, ListGroup } from 'react-bootstrap'
import {useState} from 'react'

const {prevComments, setPrevComments} = useState(null)

const deleteComment = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw'
            }
        })
        if (response.ok) {
            alert('comment deleted!')
    
                let commentRes = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,{
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw'
                    }
                })
            
                let comments = await commentRes.json()
                    setPrevComments(comments)
                    getComments

        } else {
            alert('comment NOT deleted!')
        }
    } catch (error) {
        alert('comment NOT deleted!')
    }
}



const SingleComment = ({ comment ,getComments }) => {
    getComments(prevComments)
    
    return(<ListGroup.Item>
        {comment.comment}
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>Delete</Button>
    </ListGroup.Item>)
}


export default SingleComment