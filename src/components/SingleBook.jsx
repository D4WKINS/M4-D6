import  { Component} from 'react'
import {Col , Card} from 'react-bootstrap'
// import CommentArea from './CommentArea'
import CommentModal from './CommentModal'


class SingleBook extends Component{


  // state={// Used with classes
  //   selected:false // The state of each <Card> component is set to a key of selected with the value false
  // }                // The state and all of all keys within the state is applied to every component

  // // constructor(props){ Used to be utiliised back in the day to create a state
  // //   super(props)

  // }
  state = { 
    selected:false
  }
  render(){
        return (
        <>
          <Col className="mx-auto"> {/*This returns a single card/book, when one these books are clicked only the state of the card we clicked will change*/}
            <Card  onClick={() => this.setState({ selected: !this.state.selected})} // !this.state.selected means if false return true, if true return false
                    style={{ border: this.state.selected ? '3px solid red' : 'none' }}> {/*When a card has been clicked if the state of the card that was clicked has a selected valie of false*/}
              <Card.Img className="book-cover img-fluid"variant="top" src={this.props.book.img} />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          {this.state.selected && <CommentModal title={this.props.title} asin={this.props.book.asin}/>}
       </>
       )
        }
}
export default SingleBook