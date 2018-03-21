import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Component/Board.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.render(
    <div>
        <Board />
    </div>, document.getElementById('board')
)