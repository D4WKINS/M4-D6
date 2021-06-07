import CommentArea from './CommentArea'
import {Component} from 'react'
import {Modal,Button} from 'react-bootstrap'

class CommentModal extends Component {

  state = {
    selected:this.props.asin,
    show:false
  }
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
componentDidMount = () =>{
    this.setState({show:true})
}
  onClose =()=>{
    this.setState({show:false})
  }
  onHide = () =>{
    this.setState({show:false})
  }
  
  render(){
    return (
     <>
        <Modal style={{backgroundColor:"rgba(0, 0, 0, .8)"}} show={this.state.show} onHide={this.onHide}>
          <Modal.Header style={{backgroundColor:"rgba(0, 0, 0)"}}  closeButton>
            <Modal.Title style={{color:"rgb(255,255,255)"}}> {this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <CommentArea asin={this.props.asin} />
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={this.onClose}>
              Close
            </Button> */}
          </Modal.Footer>
        </Modal>
        </>
    )
  }
  

  }
  
export default CommentModal