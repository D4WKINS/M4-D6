import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'



const CommentList = ({ commentsToShow }) => (
  

    <ListGroup style={{ color: 'black' }}>
        {
            console.log(commentsToShow),
            commentsToShow.map(comment => (
                <SingleComment getComments={commentsToShow} comment={comment} key={comment._id} />
            ))
        }
    </ListGroup>
)

export default CommentList