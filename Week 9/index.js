import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FacebookEmojiCounter from './Facebookemoji'
import ToggleMode from './ToggleModeComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FacebookEmojiCounter />
    <FacebookEmojiCounter type= "like"/>
 < FacebookEmojiCounter type= "Love"/>
 < FacebookEmojiCounter type= "happy"/>
 < ToggleMode/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();