import React from 'react'
import uniqid from 'uniqid'



class Drugger extends React.Component{
    constructor(props){
        super(props)
    }

    onStart = (e)=>{
        e.dataTransfer
        .setData('content', this.props.name);
    }

    render(){
        const id = uniqid()
        return <div className ={this.props.name} id={id} draggable={true} onDragStart={this.onStart}></div>
    }

}

export default Drugger