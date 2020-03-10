import React from 'react';
import FarmField from '../gameFoos/field/field.js';
import InfoList from '../gameFoos/infoList/infoList.js';
import Chicken from '../gameObjects/animals/chickens/chickens.js';
import Rye from '../gameObjects/rye/rye.js'


const MainHoc = ()=>
    <div>
        <FarmField count={8}></FarmField>
        <InfoList></InfoList>
        <Chicken></Chicken>
        <Rye></Rye>
    </div>




export default MainHoc