import {useState} from "react";
import {Row, Col, Container,Form,FormControl} from "react-bootstrap";
import SingleBook from './SingleBook'


const BookList = (props)=>{
  const [query, setQuery] = useState("")
//   state = { 
//     query: "",
//  }
    return (
      <Container>
          <Form className="d-flex ms-auto">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={e=> setQuery(e.target.value)}
            />

            </Form>
        <Row xs={1} md={2} lg={4} className="g-4">
          {
         props.books.filter(b => b.title.toLowerCase().includes(query)).map(b => (
          <Col xs={3} key={b.asin}>
              <SingleBook title={b.title} book={b} />
          </Col>
      ))
          }
        </Row>
      </Container>
    );
}

export default BookList;
