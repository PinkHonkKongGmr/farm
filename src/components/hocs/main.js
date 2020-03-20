import React from 'react';
import FarmField from '../gameFoos/field/field.js';
import InfoList from '../gameFoos/infoList/infoList.js';
import Market from '../gameFoos/market/market.js';
import Instruction from '../hopups/instruction/instruction.js';



const MainHoc = ()=> 
    
    <div>
        <FarmField></FarmField>
        <InfoList></InfoList>
        <Market></Market>
        <Instruction></Instruction>
    </div>

export default MainHoc