import React, {Component} from 'react'
import { connect } from 'react-redux'
import { removephone, setVisibilityFilter } from '../actions/actioncreatores'
import {SHOW_ALL, SHOW_HOME, SHOW_BUSINESS, SHOW_OTHER} from '../actions/actiontypes';
import {bindActionCreators} from 'redux' 


class Table extends Component {
    render() {
        return(
            <div>
            <nav styler = {{marginTop: "60px"}}>
                <ol className = "contact_filter">
                    <li className = {"contact-item" + (this.props.visibilityFilter === SHOW_ALL? 'active':'') }
                        onClick = {() => this.props.setVisibilityFilter(SHOW_ALL)}
                    >
                    ALL   
                    </li>
                    <li className = {"contact-item" + (this.props.visibilityFilter === SHOW_HOME? 'active':'') }
                        onClick = {() => this.props.setVisibilityFilter(SHOW_HOME)}
                    >
                    HOME   
                    </li>
                    <li className = {"contact-item" + (this.props.visibilityFilter === SHOW_BUSINESS? 'active':'') }
                        onClick = {() => this.props.setVisibilityFilter(SHOW_BUSINESS)}
                    >
                    BUSINESS  
                    </li>
                    <li className = {"contact-item" + (this.props.visibilityFilter === SHOW_OTHER? 'active':'') }
                        onClick = {() => this.props.setVisibilityFilter(SHOW_OTHER)}
                    >
                    OTHER
                    </li>
                </ol>
            </nav>
            {this.props.todos.length !== 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>NUMBER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.map(phone => (
                            <tr key = {phone.id}>
                                <td>{phone.payload.name}</td>
                                <td>{phone.payload.number}</td>
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