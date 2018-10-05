import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            house: []
        }
    }
    componentDidMount() {
        axios.get('/api/get_houses').then((res) => {
            this.setState({
                house: res.data
            })
        })
        console.log(this.state.house)
    }
    handleDelete(id) {
        axios.delete(`/api/delete_house/:${id}`).then(res => console.log(res.data))
    }
    render() { 
        return (
            <div>
                <h2>Dashboard</h2>
                <Link to='/wizard/Step1'><button>Add New Property</button></Link>
                <House houses ={this.state.house} handleDelete ={this.handleDelete}/> 
            </div>
        )
    }
}