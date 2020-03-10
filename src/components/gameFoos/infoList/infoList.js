import React from 'react'
import { connect } from 'react-redux';


class infoList extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
    }
 
    render(){
        return <div>
                    <div className='chickenValues'>чикены: {this.props.chickCount}</div>
                    <div className='chickenValues'>Рош: {this.props.ryeCount}</div>
                    <div className='chickenValues'>еда: {this.props.food}</div>
                </div>
    }
}

const mapStateToProps = state => {
    const props = {
      chickCount: state.cells.chickens,
      ryeCount: state.cells.rye,
      food: state.generators.food,
    };
    return props;
  };


  
  export default connect(mapStateToProps)(infoList);