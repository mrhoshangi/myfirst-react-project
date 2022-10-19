import React from 'react';
import ReactDOM from 'react-dom';

function timer() {
  const elem = (
    <div>
      <h1>این یک تایمر است</h1>
      <h2>
        It is {new Date().toLocaleTimeString()}
      </h2>
    </div>
  )
  ReactDOM.render(elem , document.getElementById('root'))
}

setInterval(() => {
  timer()
}, 1000);


