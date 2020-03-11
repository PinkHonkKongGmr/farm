import React from 'react';
import FarmField from '../gameFoos/field/field.js';
import InfoList from '../gameFoos/infoList/infoList.js';
import Chicken from '../gameObjects/animals/chickens/chickens.js';
import Rye from '../gameObjects/rye/rye.js'
import arrayCreator from '../../helpers/arrayCreator.js'

const chickens = arrayCreator(64).map((el,ind)=><Chicken key={ind} 
name='chicken' 
startPosition ={{left:0,top:'400px'}}
product = 'ики'
>
</Chicken>)
const ryes = arrayCreator(64).map((el,ind)=><Rye key={ind}
 name='rye' 
 startPosition ={{left:0,top:'30px'}}
 product = 'пишша'
 >
 </Rye>)
const MainHoc = ()=> 
    
    <div>
        <FarmField count={9}></FarmField>
        <InfoList></InfoList>
        {chickens}
        {ryes}
    </div>

export default MainHoc