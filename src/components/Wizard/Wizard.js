import React, {Component} from 'react'
import {Link} from 'react-router-dom' 
import axios from 'axios'
import Route from 'react-router-dom'
import StepOne from '../Step_One'
import StepTwo from "../Step_Two"
import StepThree from "../Step_Three"

export default class Wizard extends Component {

    render () {
        return (
            <div>
                <h2>Wizard</h2>
                <Route path='/wizard/step1' Component = {StepOne}/>
                <Route path='/wizard/step2' Component = {StepTwo}/>
                <Route path='/wizard/step3' Component = {StepThree}/>
            </div>
        )
    }
}