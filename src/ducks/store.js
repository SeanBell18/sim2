import {createStore } from 'redux'
import {name, address, city, state, zipcode} from './reducer'

export default createStore(name, address, city, state, zipcode)