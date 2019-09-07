import React, { Component } from 'react';
import SearchForm from './SearchForm';
import DataTable from './DataTable';
import ErrorBox from './ErrorBox';
import './App.scss'

const fakeData = [];
for (let i = 0; i < 50; i++) {
    var item = {
        key: (i + 1).toString(),
        materialNumber: "MN" + (i + 1).toString().padStart(3, '0'),
        vender: "renzhu1",
        gsm: "whatever"
    }
    for (let x = 0; x < 30; x++) {
        item["other" + (x+1)] = "this is just some fake data"
    }
    fakeData.push(item)
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            materialNumber: [],
            vender: "",
            gsm: "",
            searching: false,
            dataSource: [], 
            uploadErrors: []
        }
    }
    handleMaterialNumberChange = arr => {
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
        this.setState({
            gsm: val
        })
    }

    fetchData = () => {
        setTimeout(() => {
            this.setState({
                searching: false,
                dataSource: fakeData
            })
        }, 1000)
    }

    search = () => {
        this.setState({
            searching: true
        }, this.fetchData) 
    }

    reset = () => {
        this.setState({
            materialNumber: [],
            vender: "",
            gsm: ""
        })
    }

    clearUploadErrors = () => {
        this.setState({
            uploadErrors: []
        })
    }

    handleUpload = () => {
        //make api call
        this.setState({
            uploadErrors: [
                {
                    location: "第一行第一列",
                    msg: "长度不符合规则"
                }, {
                    location: "第二行第三列",
                    msg: "应该是数字类型"
                }, {
                    location: "第五行第二列",
                    msg: "不可为空"
                }, {
                    location: "第五行第三列",
                    msg: "非法数据"
                },{
                    location: "第五行第三列",
                    msg: "There are many variations of passages of Lorem Ipsum available, but the ways."
                },{
                    location: "第五行第三列",
                    msg: "There are many variations of passages of Lorem Ipsum available, but the ways.There are many variations of passages of Lorem Ipsum available, but the ways."
                },
            ]
        })
    }

    render() {
        const { materialNumber, vender, gsm, searching, dataSource, uploadErrors } = this.state;
        return <div className="app-container">
            <SearchForm
                materialNumber={materialNumber}
                vender={vender}
                gsm={gsm}
                loading={searching}
                onMaterialNumberChange={this.handleMaterialNumberChange}
                onVenderChange={this.handleVenderChange}
                onGsmChange={this.handleGsmChange}
                onSearch={this.search}
                onReset={this.reset}
            />
            <DataTable dataSource={dataSource} loading={searching} onUpload={this.handleUpload} />
            <ErrorBox errors={uploadErrors} onClose={this.clearUploadErrors} />
        </div>
    }
}

export default App;