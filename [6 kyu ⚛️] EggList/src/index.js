import React from 'react';
import ReactDOM from 'react-dom';

const eggNames = ['Lindt', 'Cadbury', 'Milka', 'Maltesers'];

const EggList = ({ eggs }) => <ul>{eggs.map((egg, index) => <EasterEgg name={egg} key={index} />)}</ul>;

const EasterEgg = ({ name }) => <li>{name}</li>;
ReactDOM.render(<EggList eggs={eggNames} />, document.getElementById('root'));
