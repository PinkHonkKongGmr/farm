import React from 'react'
import { connect } from 'react-redux';
import './info.scss' 
import { dispatch } from 'rxjs/internal/observable/range';


class infoList extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
    }

  
 
    render(){
        let i = 0;
        const names = ['Мухрю','Чикены','Рош','Еда', 'Всего ик', 'Надой']
        const infoArray =[];
        for (let key in this.props){
            if(key !== 'dispatch')
            {
                const nameOfClass = this.props[key] > 0 ? 'val green' : 'val red'
                infoArray.push(<div className='value' key ={i}>{names[i]}: <span className={nameOfClass}>{this.props[key]}</span></div>)
                i++;
            }
        }
    
        return <div>
                    {infoArray}
                </div>
    }
}

const mapStateToProps = state => {
    const props = {
      cowCount: state.dragged.cow,  
      chickCount: state.dragged.chickens,
      ryeCount: state.dragged.rye,
      food: state.generators.food,
      eggs: state.generators.eggs,
      milk: state.generators.milk,
    };
    return props;
  };


  
  export default connect(mapStateToProps)(infoList);