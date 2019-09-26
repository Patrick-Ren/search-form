import React, { useContext } from "react";
import { Table, Button } from 'antd';
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { MethodContext } from './App';
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

function DataTable({ dataSource, loading }) {

    const { handleUpload } = useContext(MethodContext)
    
    function exportAsExcel() {
        /*
            这个函数里的代码来自: https://redstapler.co/sheetjs-tutorial-create-xlsx 
        */
        var wb = XLSX.utils.book_new();
        wb.Props = {
            Title: "Search Result, Lenovo",
            Subject: "Search Result",
            Author: "Lenovo",
            CreatedDate: new Date()
        };
        
        wb.SheetNames.push("Result Sheet");

        /*截取dataSource里的数据为二维数组，以作为worksheet里面的数据*/
        let ws_data = [];
        //add in header
        let header = [];
        columns.forEach(col => {
            header.push(col['title'])
        })
        ws_data.push(header)
        //add in data 
        dataSource.forEach(item => {
            let arr = [];
            for (let prop in item) {
                if (prop === "key")
                    continue;
                else
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
            for (var i=0; i<s.length; i++) 
                view[i] = s.charCodeAt(i) & 0xFF;
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

    return (
        <div className="table-container">
            <Table 
                className="data-table"
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
                    return (
                        <div className="footer">
                            <Button 
                                type="default" 
                                icon="file-excel"
                                onClick={exportAsExcel}>
                                Export As Excel
                            </Button>
                            <Button 
                                type="default" 
                                icon="upload"
                                onClick={handleUpload}>
                                Upload Excel File
                            </Button>
                        </div>
                    )
                }}
            />
        </div>
    )
}

export default DataTable;