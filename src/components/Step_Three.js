


export default class Step_One extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
        this.handleName = this.handleName.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleState = this.handleState.bind(this)
        this.handleZip = this.handleZip.bind(this)
    }
    handleName(e) { this.setState({ name: e.target.value }) }
    handleAddress(e) { this.setState({ address: e.target.value }) }
    handleCity(e) { this.setState({ city: e.target.value }) }
    handleState(e) { this.setState({ state: e.target.value }) }
    handleZip(e) { this.setState({ zipcode: e.target.value }) }
    handleAddHome(name, address, city, state, zip) {
        let newHome = { name, address, city, state, zip }
        axios.post(`/api/add_home`, newHome).then(res => {
        })
    }

    render() {
        <div>
            Name:<input onChange={this.handleName} />
            Address:<input onChange={this.handleAddress} />
            City:<input onChange={this.handleCity} />
            State:<input onChange={this.handleState} />
            Zipcode:<input onChange={this.handleZip} />
            <Link to='/'><button onClick={this.handleAddHome(this.state.name, this.state.address,
                this.state.city, this.state.state, this.state.zip)}>Add New</button></Link>
        </div>
    }
}