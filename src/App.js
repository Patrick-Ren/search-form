import React, { Component } from 'react';
import SearchForm from './SearchForm'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            materialNumber: [],
            vender: "",
            gsm: ""
        }
    }
    handleMaterialNumberChange = arr => {
        this.log('in App hanlder: ', arr)
        this.setState({
            materialNumber: arr
        })
    }

    handleVenderChange = val => {
        this.setState({
            vender: val
        })
    }

    handleGsmChange = val => {
        console.log('gsm changed')
        this.setState({
            gsm: val
        })
    }

    search = () => {
    
    }

    reset = () => {
        this.setState({
            materialNumber: [],
            vender: "",
            gsm: ""
        })
    }

    render() {
        const { materialNumber, vender, gsm } = this.state;
        return <React.Fragment>
            <SearchForm
                materialNumber={materialNumber}
                vender={vender}
                gsm={gsm}
                onMaterialNumberChange={this.handleMaterialNumberChange}
                onVenderChange={this.handleVenderChange}
                onGsmChange={this.handleGsmChange}
                onSearch={this.search}
                onReset={this.reset}
            />
        </React.Fragment>
    }
}

export default App;