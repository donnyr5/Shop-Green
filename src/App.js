import './App.css';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
import React, {useState} from 'react';

function App() {

  const [isPosting, setIsPosting] = useState(false)

  //changes the boolean to the opposite.
  function toggleIsPosting(){
    setIsPosting(!isPosting)
  }

  function Marketplace(props){
    return (
      <div className='App'>
        <main>
          <ListItems />
          <button onClick={props.toggleIsPosting}>Sell an Item</button>
        </main>
      </div>
    )
  }

  function PostingItem(props){
    return (
      <div className='App'>
        <main>
          <button onClick={props.toggleIsPosting}>Go Back</button>
          <AddItem />
        </main>
      </div>
    )
  }

  //this is if the user is logged in.
  return (
    isPosting ? <PostingItem toggleIsPosting={toggleIsPosting} /> : <Marketplace toggleIsPosting={toggleIsPosting} />
  )
}

export default App;


