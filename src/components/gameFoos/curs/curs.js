import React from 'react';
import './curs.scss'
import  {curs} from '../../../consts/curs.js';

const Curs = ()=> 
    
    <div className = 'curs'>
        <div>{curs.ru.today}</div>
        <div>{curs.ru.chicken}</div>
        <div>{curs.ru.cow}</div>
        <div>{curs.ru.milk}</div>
        <div>{curs.ru.egg}</div>
        <div>{curs.ru.land}</div>
        <div>{curs.ru.rye}</div>
    </div>

export default Curs