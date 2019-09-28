import React, { useState, useEffect, useContext } from 'react';
import { Select, Input, Button } from 'antd';
import { GlobalContext } from '../context/GlobalContextProvider';
import '../css/SearchForm.scss';

function SearchForm() {
    const { 
        searchData: { materialNumber, vender, gsm }, searching,
        handleSearch, handleSearchClear 
    } = useContext(GlobalContext);  

    //use local state and only inform global state to update when search button is clicked
    const [curMaterialNumber, setCurMaterialNumber] = useState(materialNumber)
    const [curVender, setCurVender] = useState(vender);
    const [curGsm, setCurGsm] = useState(gsm);    

    //to sync local state with global state, but this code is really ugly!!!
    useEffect(() => {
        setCurMaterialNumber(materialNumber)
    }, [materialNumber])

    useEffect(() => {
        setCurVender(vender)
    }, [vender])

    useEffect(() => {
        setCurGsm(gsm)
    }, [gsm])

    return (
        <form className="search-form">
            <div className="first-row">
                <span className="label">Material Number:</span>
                <Select
                    mode="tags"
                    placeholder="请输入，然后回车；支持复制粘贴(会根据空格,逗号,分号和Tab进行分词)"
                    dropdownStyle={{ display: "none" }}
                    tokenSeparators={[';', '；', ',', '，', ' ', '\t']}
                    value={curMaterialNumber}
                    onChange={ setCurMaterialNumber }
                />
            </div>

            <div className="second-row">
                <div className="vender">
                    <span className="label">Vender:</span>
                    <Input 
                        placeholder="Vender" 
                        value={curVender} 
                        onChange={(e) => { setCurVender(e.target.value) }} 
                    />
                </div>

                <div className="gsm">
                    <span className="label">GSM:</span>
                    <Input 
                        placeholder="GSM" 
                        value={curGsm} 
                        onChange={(e) => { setCurGsm(e.target.value) }} />
                </div>

                <div className="btn-container">
                    <Button icon="search" 
                        type="primary" 
                        loading={searching} 
                        onClick={() => { 
                            handleSearch({ 
                                materialNumber: curMaterialNumber, 
                                vender: curVender,  
                                gsm: curGsm
                            }) 
                        }}
                    >
                        Search
                    </Button>
                    <Button 
                        type='primary'
                        onClick={handleSearchClear}>
                        Clear
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;