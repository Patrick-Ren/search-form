import React, { Component } from "react";
import { Table, Button } from 'antd';
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import 'antd/dist/antd.css';
import './DataTable.scss';

const columns = [
    {
        title: "Material Number",
        dataIndex: "materialNumber",
        key: "materialNumber",
        fixed: 'left',
        width: 150
    }, {
        title: "Vender",
        key: "vender",
        dataIndex: "vender",
        fixed: 'left',
        width: 100
    }, {
        title: "GSM",
        key: "gsm",
        dataIndex: "gsm",
        fixed: 'left',
        width: 100
    }
]

for (let i = 0; i < 20; i++) {
    let newColumn = {
        title: "Other " + (i + 1),
        key: i.toString(),
        dataIndex: "other" + (i + 1),
        
    }
    columns.push(newColumn)
}

class DataTable extends Component {

    constructor(props) {
        super(props)
    }

    handleUpload = () => {
        this.props.onUpload()
    }

    exportAsExcel = () => {

        //dataSource to excel
        var wb = XLSX.utils.book_new();
        wb.Props = {
            Title: "Search Result, Lenovo",
            Subject: "Search Result",
            Author: "Lenovo",
            CreatedDate: new Date()
        };
        
        wb.SheetNames.push("Result Sheet");

        //convert dataSource to array
        let ws_data = [];
        //add in header
        let header = [];
        columns.forEach(col => {
            header.push(col['title'])
        })
        ws_data.push(header)
        //add in data 
        this.props.dataSource.forEach(item => {
            let arr = [];
            for (let prop in item) {
                if (prop === "key")
                    continue;
                arr.push(item[prop])
            }
            ws_data.push(arr)
        })

        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["Result Sheet"] = ws;
        var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        saveAs(
            new Blob(
                [s2ab(wbout)],
                {type:"application/octet-stream"}
            ),
            `${(new Date()).toLocaleString()} 搜索数据.xlsx`
        );
    }

    render() {
        const { dataSource, loading } = this.props;
        return  <div className="table-container">
                <Table 
                    columns={columns} 
                    loading={loading}
                    dataSource={dataSource} 
                    scroll={{
                        x: 1300,
                        y: 500
                    }}
                    pagination={{
                        defaultCurrent: 1,
                        defaultPageSize: 100,
                        hideOnSinglePage: true,
                        total: dataSource.length
                    }}
                    footer={() => {
                        return <div className="footer">
                            <Button type="default" onClick={this.exportAsExcel}>Export As Excel</Button>
                            <Button type="default" onClick={this.handleUpload}>Upload Excel File</Button>
                        </div>
                    }}
                    className="data-table" />
        </div>
    }
}

export default DataTable;