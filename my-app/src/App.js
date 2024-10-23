import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import Food from './Food';
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './props/Student.jsx';
import Demo from './props/Demo.jsx';
import UserStatus from './Render/Status.jsx';
import Counter from './hooks/UseState.jsx';
import Update from './hooks/UseEffects.jsx';
import EventHandler from './EventHandling/onClick.jsx';
import EventObject from './EventHandling/EventObject.jsx';
import ClickButton from './EventHandling/Binding.jsx';
import Component1 from './EventHandling/Binding.jsx';

function App() {
  return (
    <div>
      <Student name="Subhash"  isStudent="true" />
      <Demo items={["Subhash", "Manjunath", "Darshan"]}></Demo>
      <UserStatus isOnline={true} ></UserStatus>
      <EventHandler></EventHandler>
      <Component1></Component1>
    </div>
  );
}

export default App;
