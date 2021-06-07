import {Component} from 'react';
import {Alert} from 'react-bootstrap'


class MySign extends Component {
    
    render() { 
        return (
            <>
            {[
                'dark'
              ].map((variant, idx) => (
                <Alert className="text-danger" style={{fontWeight:"Bolder"}} key={idx} variant={variant}>
                 <h2>{this.props.warning }</h2>
                <p>{this.props.msg}</p>
                </Alert>
              ))
              }</>
          );
    }
}
 
export default MySign;