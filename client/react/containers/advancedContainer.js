import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GuidedCartContainer from './guidedCartContainer';
import AdvancedSelection from '../components/advancedSelection';

import { selectFramework, changeDisplayType, changeCheckoutFormat } from '../actions/index';


import { Grid, Row, Col, Button, Jumbotron, PageHeader, Image } from 'react-bootstrap';

class AdvancedContainer extends React.Component {
  render() {
    return(
      <div>
          <div className='cartView'>
            <GuidedCartContainer />
          </div>
          <div className='optionsView'>
            <AdvancedSelection />
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    options: state.options,
    display: state.display
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectFramework: selectFramework,
    changeDisplayType: changeDisplayType,
    changeCheckoutFormat: changeCheckoutFormat
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AdvancedContainer);