import React from 'react';
import FarmField from '../gameFoos/field/field.js';
import InfoList from '../gameFoos/infoList/infoList.js';
import Market from '../gameFoos/market/market.js';




const MainHoc = ()=> 
    
    <div>
        <FarmField count={9}></FarmField>
        <InfoList></InfoList>
        <Market></Market>
    </div>

export default MainHoc