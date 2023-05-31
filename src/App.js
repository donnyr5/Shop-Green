import './App.css';
import Header from './components/Header';

function sayHello() {
  alert('You clicked me!');
}

function App() {
  return (
    <div className="App">
      <Header/>
      hello world! wehf ouqbvwhbqd
      <div><button onClick={sayHello}>Default</button></div>
    </div>
  )
}

export default App;

/*

main page will look like amazon:
- displays items (grid of articles perhaps)
- options at bottom page to hit "next" to display more itmes for sale
- search bar at the top, will search for "name" field of item.
- can be "squares" like in tic tac toe.


when a post is made, request sent to the sever with the information. stored in a file. 

will be a function that calculates green score?? 

//buy item --> search for an item OR browse
//sell item  --? user will fill in fields and send request to client side, where item info will be stored and displayed in the browse or search.
//start with just item_name, item_description, and itme_price. store these in a text file with each in a new line?  put these in an item_inventory folder?
    //add 


USE MATERIAL UI to get react components to make the webpages more visually appealing. Express to 
Express is server framework


*/