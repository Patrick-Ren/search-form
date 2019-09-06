import React, { Component } from 'react';
import { Select, Input, Button } from 'antd';
import 'antd/dist/antd.css'
import './SearchForm.scss'

class SearchForm extends Component {

    constructor(props) {
        super(props)
        console.log(this.props)
    }

    componentDidMount() {
        //console.log(this.props)
    }

    // static defaultProps = {
    //     materialNumber: [],
    //     vender: "",
    //     gsm: "",
    //     onMaterialNumberChange: () => {},
    //     onVenderChange: () => {},
    //     onGsmChange: () => {},
    //     onSearch: () => {},
    //     onReset: () => {}
    // }

    handleMaterialNumberChange = arr => {
        //console.log(this.props)
        //console.log(this.props)
        console.log(this.props)
        this.props.onMaterialNumberChange(arr)
    }

    handleVenderChange = val => {
        this.props.onVenderChange(val)
    }

    handleGsmChange = val => {
        this.props.onGsmChange(val)
    }

    handleSearch = () => {
        this.props.onSearch()
    }

    handleReset = () => {
        this.props.onReset()
    }

    handleSelectClick = val => {
        console.log(val)
    }

    render() {
        const { materialNumber, vender, gsm } = this.props;  
        // console.log(this.props)
        return <form className="search-form">
            <div className="first-row">
                <span className="label">Material Number:</span>
                <Select
                    mode="tags"
                    placeholder="请输入，然后回车；支持复制粘贴(会根据空格,逗号,分号和Tab进行分词)"
                    dropdownStyle={{ display: "none" }}
                    tokenSeparators={[';', '；', ',', '，', ' ', '\t']}
                    value={materialNumber}
                    onChange={this.handleMaterialNumberChange}
                    onClick={this.handleSelectClick}
                />
            </div>

            <div className="second-row">
                <div className="vender">
                    <span className="label">Vender:</span>
                    <Input placeholder="Vender" value={vender} onChange={this.handleVenderChange} />
                </div>

                <div className="gsm">
                    <span className="label">GSM:</span>
                    <Input placeholder="GSM" value={gsm} onChange={this.handleGsmChange} />
                </div>

                <div className="btn-container">
                    <Button type="primary" htmlType="submit">Search</Button>
                    <Button onClick={this.handleReset}>Clear</Button>
                </div>
            </div>
        </form>
    }
}

export default SearchForm;