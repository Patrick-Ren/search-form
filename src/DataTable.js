import React, { Component } from "react";
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';
import './DataTable.scss'

const columns = [
    {
        title: "Material Number",
        dataIndex: "materialNumber",
        key: "materialNumber",
        fixed: 'left',
        width: 50
    }, {
        title: "Vender",
        key: "vender",
        fixed: 'left',
        dataIndex: "vender"
    }, {
        title: "GSM",
        key: "gsm",
        fixed: 'left',
        dataIndex: "gsm",
    }
]

for (let i = 0; i < 30; i++) {
    let newColumn = {
        title: "Other " + (i + 1),
        dataIndex: "other" + (i + 1)
    }
    columns.push(newColumn)
}

class DataTable extends Component {

    handleUpload = () => {
        this.props.onUpload()
    }

    render() {
        const { dataSource, loading } = this.props;
        return  <div className="table-container">
                <Table 
                    columns={columns} 
                    loading={loading}
                    dataSource={dataSource} 
                    scroll={{
                        x: true,
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
                            <Button type="default">Export As Excel</Button>
                            <Button type="default" onClick={this.handleUpload}>Upload Excel File</Button>
                        </div>
                    }}
                    className="data-table" />
        </div>
    }
}

export default DataTable;