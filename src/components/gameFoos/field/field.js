import React from 'react'
import arrayCreator from '../../../helpers/arrayCreator.js'
import Cell from '../../gameObjects/cells/cell.js'
import './field.scss'

class FarmField extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
    }

    render(){
    let cells = arrayCreator(this.props.count).map((el,ind)=><Cell key={ind}></Cell>)
    return <div className='field'>{cells}</div>
    }
}

export default FarmField;