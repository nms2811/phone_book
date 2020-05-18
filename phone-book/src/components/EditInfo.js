import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editphone } from '../actions/actioncreatores'
import {bindActionCreators} from 'redux' 



const initial = {
    payload:{
        name: '',
        number: '',
        type: {
            home: false,
            business: false,
            other: false
        },
        editing: false
    }
}

class EditInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Edited: false,
            payload:this.props.payload,
            id: this.props.id
        }
        this.onChangeSomething = this.onChangeSomething.bind(this);
        this.onChangeEdit = this.onChangeEdit.bind(this);
    }


    onChangeSomething(e) {
        this.setState({
            payload: {
                ...this.state.payload,
                [e.target.name]:  e.target.value
            }
        })
    }
    onChangeEdit(e) {
        this.setState({
            payload: {
                ...this.state.payload,
                editing:  !this.state.payload.editing
            }
        })
    }

    render() {
        return (
            <div className = "form-group-edit">
                <input onChange = {this.onChangeSomething} name = "name" value = {this.state.payload.name} type = "text" placeholder = "Name" />
                <input onChange = {this.onChangeSomething} name = "number" value = {this.state.payload.number} type = "text" placeholder = "Number" /> <br />
                <button type="button" onClick={() =>{this.props.editphone(this.state.id, this.state.payload);  this.setState(this.state = initial); document.getElementsByClassName("form-group-edit")[0].style.visibility = "hidden"} } className="btn-success">Add</button>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        editphone
    }, dispatch)
}

export default connect(null, mapDispatchToProps) (EditInfo);
