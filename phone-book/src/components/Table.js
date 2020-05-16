import React, {Component} from 'react'
import { connect } from 'react-redux'
import { removephone, setVisibilityFilter } from '../actions/actioncreatores'
import {SHOW_ALL, SHOW_HOME, SHOW_BUSINESS, SHOW_OTHER} from '../actions/actiontypes';
import {bindActionCreators} from 'redux' 
import EditInfo from './EditInfo';

function visibility() {
    if (document.getElementsByClassName("edit_data")[0].style = "hidden")
        return document.getElementsByClassName("edit_data")[0].style = "visible";
    else 
        return document.getElementsByClassName("edit_data")[0].style = "hidden";
}

class Table extends Component {
    constructor() {
        super();

        this.state = {
            clicked: false
        };

        this.handleClick = this.handleClick.bind(this);  
    }

    handleClick() {
        this.setState({
          clicked: true
        });
      }

    //   handleClick(phone) {
    //     this.setState({
    //       clicked: {
    //         ...this.state.clicked,
    //         clicked: true
    //       },
    //       id: {
    //           ...this.state.id,
    //           id: phone.id 
    //       },
    //       payload: {
    //         ...this.state.payload,
    //         payload: phone.payload
    //       }
    //     });
    //   }

    render() {
        return(
            <div>
            <nav style = {{marginTop: "20px"}}>
                <ol className = "contact_filter">
                    <li className = {"contact-item" + (this.props.visibilityFilter === SHOW_ALL? '-active':'') }
                        onClick = {() => this.props.setVisibilityFilter(SHOW_ALL)}
                    >
                    ALL   
                    </li>
                    <li className = {"contact-item" + (this.props.visibilityFilter === SHOW_HOME? '-active':'') }
                        onClick = {() => this.props.setVisibilityFilter(SHOW_HOME)}
                    >
                    HOME   
                    </li>
                    <li className = {"contact-item" + (this.props.visibilityFilter === SHOW_BUSINESS? '-active':'') }
                        onClick = {() => this.props.setVisibilityFilter(SHOW_BUSINESS)}
                    >
                    BUSINESS  
                    </li>
                    <li className = {"contact-item" + (this.props.visibilityFilter === SHOW_OTHER? '-active':'') }
                        onClick = {() => this.props.setVisibilityFilter(SHOW_OTHER)}
                    >
                    OTHER
                    </li>
                </ol>
            </nav>
            {this.props.todos.length !== 0 ? (
                <table id = "customer">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>NUMBER</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.map(phone => (
                            <tr key = {phone.id}>
                                <td>{phone.payload.name}</td>
                                <td>{phone.payload.number}</td>
                                <td><button onClick = {() =>{this.props.removephone(phone.id); } }>Delete</button></td>
                                <td><button onClick = {this.handleClick}>EDIT</button></td><br/>
                                <div>
                                    {this.state.clicked ? 
                                        <EditInfo
                                            id = {phone.id}
                                            payload = {phone.payload} />
                                    : null}    
                                </div>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            ) : (<div className = "Nothing">
                NO RESULTS
                </div>
                )}{""}
        </div>
        );
    }
}

    

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_HOME:
            return todos.filter(t => t.payload.type.home);
        case SHOW_BUSINESS:
            return todos.filter(t => t.payload.type.business);
        case SHOW_OTHER:
            return todos.filter(t => t.payload.type.other)
        default:
            throw new Error("Unknown filter: " + filter);
    }
}

const mapStateToProps = state => {
    return {
       todos: getVisibleTodos(state.todos, state.visibilityFilter),
       visibilityFilter: state.visibilityFilter
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        removephone,
        setVisibilityFilter
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
