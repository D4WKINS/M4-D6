import { Button, ListGroup } from 'react-bootstrap'
// import {useState} from 'react'



const deleteComment = async (id, reload) => {

    try {
        console.log("delete id: " + id)
        let result = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + id, {
            method: "PUT",
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw'
            }
        })
        result = await result.json()

        if (result) {
            await fetch('https://striveschool-api.herokuapp.com/api/comments/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw'
            }})
        
            reload()
        }
            
         else {throw new Error("Id not found")}


        /*let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + commentId, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw'
            }
        })
        if (response.ok) {
            alert('comment deleted!')
    // console.log(asin) We are definetely get asin here
                let commentRes = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`,{
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw'
                    }
                })
            
                let comments = await commentRes.json()
                console.log(comments)
                    // setPrevComments(comments)
                    // prevComments(comments)

        } else {
            alert('comment NOT deleted!')
        }*/
    } catch (error) {
        console.log(error)
    }
}



const SingleComment = (props) => {
    // const {prevComments, setPrevComments} = useState(null)
return(
        <ListGroup.Item>
            {props.comment.comment}
            <Button variant="danger" className="ml-2" onClick={() => deleteComment(props.comment._id, () => props.reload())}>Delete</Button>
        </ListGroup.Item>
    )
}


export default SingleComment