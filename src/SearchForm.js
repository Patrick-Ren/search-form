import React, { useContext } from 'react';
import { Select, Input, Button } from 'antd';
import { MethodContext } from './App';
import './SearchForm.scss';


function SearchForm({ materialNumber, vender, gsm, loading }) {
    const { 
        handleSearchDataChange, 
        handleSearch, 
        handleSearchClear 
    } = useContext(MethodContext);

    return (
        <form className="search-form">
            <div className="first-row">
                <span className="label">Material Number:</span>
                <Select
                    mode="tags"
                    placeholder="请输入，然后回车；支持复制粘贴(会根据空格,逗号,分号和Tab进行分词)"
                    dropdownStyle={{ display: "none" }}
                    tokenSeparators={[';', '；', ',', '，', ' ', '\t']}
                    value={materialNumber}
                    onChange={(arr) => { handleSearchDataChange('materialNumber', arr) }}
                />
            </div>

            <div className="second-row">
                <div className="vender">
                    <span className="label">Vender:</span>
                    <Input 
                        placeholder="Vender" 
                        value={vender} 
                        onChange={(e) => { handleSearchDataChange('vender', e.target.value) }} 
                    />
                </div>

                <div className="gsm">
                    <span className="label">GSM:</span>
                    <Input 
                        placeholder="GSM" 
                        value={gsm} 
                        onChange={(e) => { handleSearchDataChange('gsm', e.target.value) }} />
                </div>

                <div className="btn-container">
                    <Button icon="search" loading={loading} onClick={handleSearch}>
                        Search
                    </Button>
                    <Button onClick={handleSearchClear}>
                        Clear
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;