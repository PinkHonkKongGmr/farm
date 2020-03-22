import React from 'react'
import Chicken from '../../gameObjects/animals/chickens/chickens.js';
import Cow from '../../gameObjects/animals/cows/cows.js';
import Rye from '../../gameObjects/rye/rye.js'
import arrayCreator from '../../../helpers/arrayCreator.js'
import Trades from '../trades/trades.js'
import Curs from '../curs/curs.js'
import  {product} from '../../../consts/product.js';


class Market extends React.Component{

    constructor(props){
        super(props)
        
    }


    render(){

        const chickens = arrayCreator(64).map((el,ind)=><Chicken key={ind} 

            ind = {ind}
            name='chicken' 
            product = {product.ru.eggs}
            >
            </Chicken>)


            const ryes = arrayCreator(64).map((el,ind)=><Rye key={ind}
            ind = {ind}
            name='rye' 
            product = {product.ru.food}
            >
            </Rye>)

            const cows = arrayCreator(64).map((el,ind)=><Cow key={ind}
            ind = {ind}
            name='cow' 
            product = {product.ru.milk}
             >
            </Cow>)

        return <div>
                    {chickens}
                    {ryes}
                    {cows}
                    <Curs></Curs>
                    <Trades></Trades>
        </div>
    }
}



export default Market