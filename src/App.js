import './App.css';
import MySign from './components/WarningSign'
import MyNav from './components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import fantasy from './fantasy.json'
// import MyJumbo from './components/MyJumbo'
// import {BrowserRouter as Router,Route} from'react-router-dom'

import MyBadge from './components/MyBadge';
import BookList from './components/BookList';

function App() {
  return(
  <>
    <MyNav />
    <MySign   warning={"WARNING MFS! "} msg={"We Dangerous - Carl & Samuel, 2021"}/>
    <MyBadge title = "No. Books" color = "Secondary"/>
    {/* <Book className="mx-auto"book={fantasy[1]}/> */}

    <BookList  books={fantasy}/>
 </> 
 )

  }
export default App;
