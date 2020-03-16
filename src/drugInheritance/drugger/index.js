import React from 'react'
import uniqid from 'uniqid'
import ReactDom from 'react-dom'
import './common.scss' 


class Drugger extends React.Component{
    constructor(props){
        super(props)
        this.homeContainer = document.createElement('div')
        document.querySelector('body').appendChild(this.homeContainer)
        this.container = this.homeContainer
        this.id = uniqid()
        this.method = null;
        this.removeMethod = null;
        this.state ={dragged:false}
    }

    removeController =()=>{
        const {getProfit} = this.props
        this.removeControllerInterval = setInterval(()=>{
            if(this.props.idToRemove===this.id){
                this.id= uniqid()
                this.container=this.homeContainer
                this.setState({dragged:false, product:0, status:this.status})
                clearInterval(this.interval, this.removeControllerInterval)
                getProfit(this.sellPrice)
                this.removeMethod()
                
            }
        })
    }

    dealOpportunity = () => this.props.gold < this.cost ? false : true

    

    deal = () => {
      const {spend} = this.props
        spend(this.cost);
    }


    onStart= (e)=>{
        if(this.dealOpportunity())
        {e.dataTransfer
        .setData('id', this.id)
        e.dataTransfer
        .setData('content', `${this.props.name}_inside`);
        }
    }

    onDragEndHandler = () => {
        if(this.props.id === this.id && !this.state.dragged){
            this.deal()
            this.setState({dragged:true, status:`dragged dragged_${this.props.name}`})
            this.container = this.props.cell
            this.removeController()
            this.method()
            this.generator()
                   
        }
    }

    harvest=()=>{
        this.props.harvester(this.state.product)
        this.setState({product:0})
    }

    render(){ 
       const classNames = `${this.props.name} ${this.state.status} household`
       const product = this.state.dragged ? this.props.product : ''  
       const value = this.state.dragged ? this.state.product : ''    

       const elemento = <div className ={classNames}
            draggable={!this.state.dragged} 
            onDragStart={this.onStart} 
            onDragEnd={this.onDragEndHandler} 
        >

        <div>{product} {this.state.controlElements}{value}</div>
        </div>

        
        return ReactDom.createPortal(elemento, this.container)
    }

}

export default Drugger


