import React, { Component } from 'react';
import { Select, Input, Button } from 'antd';
import 'antd/dist/antd.css'
import './SearchForm.scss'

class SearchForm extends Component {

    handleMaterialNumberChange = arr => {
        this.props.onMaterialNumberChange(arr)
    }

    handleVenderChange = e => {
        this.props.onVenderChange(e.target.value)
    }

    handleGsmChange = e => {
        this.props.onGsmChange(e.target.value)
    }

    handleSearch = () => {
        this.props.onSearch()
    }

    handleReset = () => {
        this.props.onReset()
    }

    render() {
        const { materialNumber, vender, gsm, loading } = this.props;  
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
                    <Button icon="search" loading={loading} onClick={this.handleSearch}>Search</Button>
                    <Button onClick={this.handleReset}>Clear</Button>
                </div>
            </div>
        </form>
    }
}

export default SearchForm;