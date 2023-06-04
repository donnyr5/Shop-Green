import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React from 'react';
import styled from "styled-components";

firebase.initializeApp({
    apiKey: "AIzaSyAZU3vY4jE4w1jZw4MmERT2styneahJVsU",
    authDomain: "shop-green-a3ae3.firebaseapp.com",
    projectId: "shop-green-a3ae3",
    storageBucket: "shop-green-a3ae3.appspot.com",
    messagingSenderId: "714877199071",
    appId: "1:714877199071:web:980b9b82017b86e5513f6a"
  })

  export const auth = firebase.auth();


  const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Button2 = styled.button`
  background-color: black;
  color: white;
  font-size: 12px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;


    //need to style this to look better. it will be the login page of the application.
  export function GoogleSignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)}
      
    return (
      <>
        <Button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</Button>
      </>
    )
  }


  export function GoogleSignOut() {
    return auth.currentUser && (
      <Button2 className="sign-out" onClick={() => auth.signOut()}>Sign Out</Button2>
    )
  }


