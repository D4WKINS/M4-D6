import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'
import {useState} from 'react'

const CommentList = (props) => {


    // const [comments, setComments] = useState(null)


    const handleData = (data) => {
        console.log(data)
    }

    const reload = () => {
        console.log("callback");
    }

   return( <ListGroup style={{ color: 'black' }}>
        {
            props.comments && props.comments.map(comment => (
                // <SingleComment getComments={commentsToShow} comment={comment} key={comment._id} />
                <SingleComment /*---->*/ reload={() => props.reload()} /*<----*/ comment={comment} key={comment._id} />
            ))
        }
    </ListGroup>
)
}

export default CommentList