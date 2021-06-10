import {Component} from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'

class CommentArea extends Component {
    state ={
        comments:[]
        // isLoading: true,
        // isError: false
    }

    
    componentDidMount = async () => {
        this.fetchBook()
       
    }
    
    fetchBook = async () =>{
        try{
            let response = await fetch(" https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,  {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNGI5OGNlYWY0ODAwMTVjOTE4ZDciLCJpYXQiOjE2MjI3Mjg3ODUsImV4cCI6MTYyMzkzODM4NX0.j7xkMVQtET6X0k4BbyCJaeEk3bySl-z6kgWar_eyqg8"
            }}) 
            if(response.ok){
            let comments = await response.json()
            console.log(comments)
            this.setState({comments:comments})
           
            }

            
      
    }catch(err){
        console.log("We Have A Problem", err )
    }
    }

    componentDidUpdate(prevProps){
        console.log(prevProps)
        console.log(this.props.asin)
        
        if (prevProps.asin !== this.props.asin) {
            this.fetchBook()
            console.log("fetch")
        }
    }

    getNewComments=(comments)=> {
        console.log(comments)
        this.setState({comments:comments})
    }


    render(){
        return (
            <>

            <div>
                 {/* {this.state.isLoading && <Loading />}
                 {this.state.isError && <Error />} */}
                 <CommentList commentsToShow={this.state.comments} />
                 <AddComment comments={this.state.comments} getComments={this.getNewComments} asin={this.props.asin} />
            </div>
            </>
            
          );
        }
}
export default CommentArea;