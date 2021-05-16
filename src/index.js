import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const year = new Date().getFullYear();
const fName = "Jeff";
const lName = "Goldblum";
const reactRoot = document.getElementById('root');

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false">
      JS Expressions in JSX
    </h1>
    <h3>Created by {`${fName} ${lName}`}</h3>
    <p>
      Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates
      don’t eat the tourists. Remind me to thank John for a lovely weekend. Life
      finds a way. Do you have any idea how long it takes those cups to
      decompose. Is this my espresso machine? Wh-what is-h-how did you get my
      espresso machine?
    </p>
    <p>
      Did he just throw my cat out of the window? Forget the fat lady! You're
      obsessed with the fat lady! Drive us out of here! You're a very talented
      young man, with your own clever thoughts and ideas. Do you need a manager?
      Just my luck, no ice. Hey, you know how I'm, like, always trying to save
      the planet? Here's my chance.
    </p>
    <div>
      <h3>LOREM PICSUM!</h3>
      <img
        className="img"
        alt="img"
        src="https://picsum.photos/800/400?grayscale"
      />
    </div>

    <footer>
      &copy; <span>{year}</span>
    </footer>
  </div>,

  reactRoot
);

