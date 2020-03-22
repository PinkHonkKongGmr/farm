import React from 'react'
import ReactDom from 'react-dom'
import "./instruction.scss"
import  {instruction} from '../../../consts/text.js';
import  {buttontext} from '../../../consts/buttontext.js';
import { Button } from 'reactstrap';


class Instruction extends React.Component{

//    constructor(props){

//    }
    state = {
        rule:'rules1',
        visible:'visible'
    }
    el = document.createElement('div')
    page = 1
    lists = 4

    
    componentDidMount(){
        document.body.appendChild(this.el)
    }

    setButton = (sign) =>{
        const page = parseInt(this.state.rule.match(/\d/g))
        sign === 'plus' ? this.page = page + 1:
        this.page = page - 1
        let rule = `rules${this.page}`
        this.setState({rule})
    }

    nextHandler = () =>{
        this.setButton('plus')
    }

    prevHandler = () =>{
        this.setButton()
    }

    closeOpen = () => {
       this.state.visible === 'visible' ? this.setState({visible:'hide'}) : 
       this.setState({visible:'visible'})
    }

    render(){
        const rules = instruction.ru[this.state.rule]
        const btnClassNext = `nextBtn_${this.page}`
        const btnClassPrev = `prevBtn_${this.page}`
        const popupClass = `popup ${this.state.visible}`
        const closeOpen = this.state.visible === 'visible' ? buttontext.ru.clear : buttontext.ru.notClear
        return ReactDom.createPortal(<div className={popupClass}>
            <div className='instruction'>{instruction.ru.titleRu}{rules}
            <div>{this.page}/{this.lists}</div>
            <Button className = {btnClassPrev} onClick = {this.prevHandler}>{buttontext.ru.prev} </Button>
            <Button className = {btnClassNext} onClick = {this.nextHandler}>{buttontext.ru.next} </Button>
            </div>
        <Button className = 'clear' onClick = {this.closeOpen}>{closeOpen}</Button>
        </div>, this.el)
    }
}

export default Instruction