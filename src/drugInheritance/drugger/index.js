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
        this.contentLocal = null;
        this.timeToGenerate = null 
        this.balls = null
    }

    removeController =()=>{
        const {getProfit} = this.props
        this.removeControllerInterval = setInterval(()=>{
            if(this.props.idToRemove === this.id){
                this.id= uniqid()
                this.container=this.homeContainer
                this.setState({dragged:false, product:0, status:this.status, food:0})
                clearInterval(this.interval, this.removeControllerInterval)
                getProfit(this.sellPrice)
                this.removeMethod()
                
            }
        })
    }

    foodStatusController = () => {
        console.log('this.state.food', this.foodControlRef.current)
        this.state.food > 0 ? this.foodControlRef.current.style.backgroundColor = '#b2ec5d' :
        this.foodControlRef.current.style.backgroundColor = 'rgb(253, 71, 71)'
    }
    
    generateStatusController = (q, proc) => {
        const proceed = q * proc
        if(proceed > 0 && proceed < 25){
          this.generateControlRef.current.style.backgroundColor = '#ffff66'
        }
        if(proceed > 15 && proceed < 27){
          this.generateControlRef.current.style.backgroundColor = '#fff44f'
        }
        if(proceed > 27 && proceed < 50){
          this.generateControlRef.current.style.backgroundColor = '#ced23a'
        }
        if(proceed > 50 && proceed < 76){
          this.generateControlRef.current.style.backgroundColor = '#b2ec5d'
        }
        if(proceed > 82 && proceed < 100){
          this.generateControlRef.current.style.backgroundColor = '#5da130'
        }
        this.generateControlRef.current.style.height = `${proceed}%`
      }

      colorBack = () => this.generateControlRef.current.style.backgroundColor = 'rgb(253, 71, 71)'

    generator = () =>{
        let countDown = 0 
        this.interval = setInterval(()=>{
        this.foodStatusController()    
        if(this.state.food > 0){
        countDown ++;
        const q = 5/this.timeToGenerate 
        this.generateStatusController(q, countDown)
        if(countDown === this.timeToGenerate * 20)
        {countDown = 0;  
        this.colorBack()       
        this.stateActions()
        this.sumProductUp();
        this.upgrade()
        this.control()
      };
      }
    },50)
   }

    
   sumProductUp = () => this.sumProduct = this.sumProduct + 1
    

    deal = () => {
      const {spend} = this.props
        spend(this.cost);
    }


    onStart= (e)=>{
        e.dataTransfer
        .setData('id', this.id)
        
        e.dataTransfer
        .setData('content', `${this.props.name}_inside`);

        e.dataTransfer
        .setData('contentLocal', `${this.contentLocal}`);
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
        
       const tosee = this.dealOpportunity()? 'visible' : 'none'
       const classNames = `${this.props.name} ${this.state.status} household ${tosee}`
       const product = this.state.dragged ? this.props.product : ''  
       const value = this.state.dragged ? this.state.product : ''    
       const feedind = this.props.name !=='rye' ? <div className = 'ball'>{this.state.food}</div> :null
       const element = <div className ={classNames}
            draggable={!this.state.dragged} 
            onDragStart={this.onStart} 
            onDragEnd={this.onDragEndHandler} 
        >

    <div>{product} {this.controlElements}{value}{feedind}</div>
        </div>

        
        return ReactDom.createPortal(element, this.container)
    }

}

export default Drugger


