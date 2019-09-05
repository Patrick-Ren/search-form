import React, {Component} from 'react';
import { Select, Tooltip } from 'antd';
import 'simplebar'
import 'simplebar/dist/simplebar.css'
import 'antd/dist/antd.css'
import './SearchField.scss'

class SearchFied extends Component {
    render() {
        return <React.Fragment>
            <div className="search-container">
                <div className="search-label">物料号（可输入多个）</div>
                <Select 
                    mode="tags" 
                    className="select-field" 
                    placeholder="请输入，然后回车；支持复制粘贴, 逗号和Tab会被视为分隔符"
                    dropdownStyle={{ display: "none"}}
                    tokenSeparators={[',', '，', '\t']}
                    onChange={val => console.log(val.length)}
                ></Select>
            </div>
        </React.Fragment>
    }
}

export default SearchFied;