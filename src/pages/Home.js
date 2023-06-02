import React from 'react';
import ListItems from '../components/ListItems';
import AddItem from '../components/AddItem';


const Home = () => {
return (
   <>
   <div
   style={{
       display: 'flex',
       justifyContent: 'Center',
       alignItems: 'Left',
   }}
   >
       <ListItems />
   </div>
   <div
   style={{
       display: 'flex',
       justifyContent: 'Center',
       alignItems: 'Left',
   }}
   >
       <AddItem />
   </div>
   </>
);
};


export default Home;
