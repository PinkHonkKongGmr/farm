import React from 'react'
import { connect } from 'react-redux';


class infoList extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
    }

    render(){
        return <div>
                    <div className='chickenValues'>{this.props.chickCount}</div>
                    <div></div>
                </div>
    }
}

const mapStateToProps = state => {
    const props = {
      chickCount: state.cells.chickens,
    };
    return props;
  };
  
  export default connect(mapStateToProps)(infoList);