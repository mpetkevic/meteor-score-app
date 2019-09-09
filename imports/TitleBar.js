import React from 'react';
import './TitleBar.scss';

export default function TitleBar(props) {
  return (
    <div className="title-bar">
      <div className="wrapper">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
