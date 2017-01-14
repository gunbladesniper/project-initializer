import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-bootstrap';

import PluginButton from '../parts/pluginButton';

class CFselections extends React.Component {

  componentDidMount(){
    console.log('hi');
  }

  render() {
    return(
      <Row >
      Suggested Plugins <br/>
        {this.props.tasks.cf.map((suggestion, index)=>{
          return(
            <PluginButton pluginName={suggestion} key={index}/>
          )
        })}
        {JSON.stringify(this.props.tasks.plugins)}
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    options: state.options,
    tasks: state.display
  };
}

export default connect(mapStateToProps)(CFselections);
