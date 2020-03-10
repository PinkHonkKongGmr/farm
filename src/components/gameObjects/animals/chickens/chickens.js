import React from 'react'
import uniqid from 'uniqid'
import './chickens.scss' 


class Chicken extends React.Component{
    constructor(props){
        super(props)
    }

    onStart(e){
        e.dataTransfer
        .setData('content', 'chicken');
    }

    render(){
        const id = uniqid()
        return <div className ="chicken" id={id} draggable={true} onDragStart={this.onStart}></div>
    }

}

export default Chicken