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
    render() {
        <div>
            Name:<input onChange={this.handleName} />
            Address:<input onChange={this.handleAddress} />
            City:<input onChange={this.handleCity} />
            State:<input onChange={this.handleState} />
            Zipcode:<input onChange={this.handleZip} />
        </div>
    }
}