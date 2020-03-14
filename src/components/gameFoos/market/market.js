import React from 'react'
import Chicken from '../../gameObjects/animals/chickens/chickens.js';
import Cow from '../../gameObjects/animals/cows/cows.js';
import Rye from '../../gameObjects/rye/rye.js'
import arrayCreator from '../../../helpers/arrayCreator.js'


class Market extends React.Component{

    constructor(props){
        super(props)
        
    }


    render(){

        const chickens = arrayCreator(64).map((el,ind)=><Chicken key={ind} 

            ind = {ind}
            name='chicken' 
            product = 'Ики'
            >
            </Chicken>)


            const ryes = arrayCreator(64).map((el,ind)=><Rye key={ind}
            ind = {ind}
            name='rye' 
            product = 'Пишша'
            >
            </Rye>)

            const cows = arrayCreator(64).map((el,ind)=><Cow key={ind}
            ind = {ind}
            name='cow' 
            product = 'Милк'
             >
            </Cow>)

        return <div>
                    {chickens}
                    {ryes}
                    {cows}
        </div>
    }
}

export default Market