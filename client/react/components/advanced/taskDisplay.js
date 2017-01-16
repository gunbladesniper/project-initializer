import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Grid, Row, Col, Button} from 'react-bootstrap';

import TaskButton from '../parts/TaskButton';
import NavButton from '../parts/navButton';

import { changeTask, tasksSet } from '../../actions/index';
import { buildButton } from '../../utils/taskBuilderDesc';


class TaskDisplay extends React.Component {
  render () {
    return(
      <div>
        <div className='taskDisplayHeader'>
          <Button
            onClick={()=>{
              this.props.changeTask(addNewTask(this.props.tasks.tasks));
            }}
          >
            Add Task
          </Button>
        </div>
        <div className='taskContainer'>
        {this.props.tasks.tasks.map((task, index)=>{
          return (
            <Row key={index}>
              <TaskButton task={task} key={index} id={index}/>
            </Row>
          )
        })}
        </div>
        <div className='taskContainerFooter'>
          <Link to='/checkout'>
            <Button onClick={()=> {
              this.props.tasksSet(this.props.tasks.tasks);
            }}>
              Build
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    options: state.options,
    tasks: state.display
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    changeTask: changeTask,
    tasksSet: tasksSet
  }, dispatch);
}
function addNewTask(tasks) {

  var newTask = {
    name: 'Task',
    plugins:[]
  }
  tasks.push(newTask);
  return tasks;
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskDisplay);