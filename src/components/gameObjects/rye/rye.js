import React from 'react'
import uniqid from 'uniqid'
import './rye.scss' 


class Rye extends React.Component{
    constructor(props){
        super(props)
    }

    onStart(e){
        e.dataTransfer
        .setData('content', 'rye');
    }

    render(){
        const id = uniqid()
        return <div className ="rye" id={id} draggable={true} onDragStart={this.onStart}></div>
    }

}

export default Rye