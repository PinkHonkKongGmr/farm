import React from 'react';
import FarmField from '../gameFoos/field/field.js';
import InfoList from '../gameFoos/infoList/infoList.js';
import Chicken from '../gameObjects/animals/chickens/chickens.js'


const MainHoc = ()=>
    <div>
        <FarmField count={8}></FarmField>
        <InfoList></InfoList>
        <Chicken></Chicken>
    </div>




export default MainHoc