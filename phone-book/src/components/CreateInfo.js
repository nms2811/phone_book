import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addphone } from '../actions/actioncreatores'
import {bindActionCreators} from 'redux'

const initial = {
    payload:{
        name: '',
        number: '',
        type: {
            home: false,
            business: false,
            other: false
        }
    }
}

class CreateInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payload:{
                name: '',
                number: '',
                type: {
                    home: false,
                    business: false,
                    other: false
                }     
            }
        }
        this.onChangeSomething = this.onChangeSomething.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    }

/* 
this.state = {
  food: {
    sandwich: {
      capsicum: true,
      crackers: true,
      mayonnaise: true
    },
    pizza: {
      jalapeno: true,
      extraCheese: false
    }
  }
}

To update extraCheese of pizza object:

this.setState(prevState => ({
  food: {
    ...prevState.food,           // copy all other key-value pairs of food object
    pizza: {                     // specific object of food object
      ...prevState.food.pizza,   // copy all pizza key-value pairs
      extraCheese: true          // update value of specific key
    }
  }
}))

*/

    onChangeSomething(e) {
        this.setState({
            payload: {
                ...this.state.payload,
                [e.target.name]:  e.target.value
            }
        })
    }
    
    onChangeCheckbox(e) {
        this.setState({
            payload: {
                ...this.state.payload,
                type:{
                    ...this.state.payload.type,
                    [e.target.name]: e.target.checked
                }   
            }
        })

    }

    render() {
        return (
            <div className = "form-group-add">
                <h3>Write name and number</h3>
                <input onChange = {this.onChangeSomething} name = "name" value = {this.state.payload.name} type = "text" placeholder = "Name" />
                <input onChange = {this.onChangeSomething} name = "number" value = {this.state.payload.number} type = "text" placeholder = "Number" /> <br />
                <nav className = " nav-checkbox">
                    <span>
                        <label> Home
                            <input type = "checkbox"  checked={this.state.payload.type.home} onChange={this.onChangeCheckbox} id = "home" name = "home" value = "home" />
                        </label>
                    </span>
                    <span>
                        <label> Business
                            <input type = "checkbox" checked={this.state.payload.type.business} onChange={this.onChangeCheckbox} id = "business" name = "business" value = "business" />
                        </label>
                    </span>
                    <span>
                        <label> Other 
                            <input type = "checkbox" checked={this.state.payload.type.other} onChange={this.onChangeCheckbox} id = "other" name = "other" value = "other" />
                        </label>
                    </span>   
                </nav>
                <button type="button" onClick={() =>{this.props.addphone(this.state.payload);  this.setState(this.state = initial)} } className="btn-success">Add</button>
            </div>
        )
    }

}
    
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addphone
    }, dispatch)
}

export default connect(null, mapDispatchToProps) (CreateInfo);