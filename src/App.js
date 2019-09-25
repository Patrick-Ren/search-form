import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import DataTable from './DataTable';
import ErrorBox from './ErrorBox';
import FakeData from './FakeData';
import './App.scss';

const MethodContext = React.createContext(null)

function App()  {
    const [searchData, setSearchData] = useState({
        materialNumber: [],
        vender: "",
        gsm: ""
    });

    const [searching, setSearching] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [uploadErrors, setUploadErrors] = useState([]);
    const [showErrorBox, setShowErrorBox] = useState(false)

    useEffect(() => {
        if (searching) {
            setTimeout(() => {
                setTableData(FakeData.table)
            }, 1000)
        }
    }, [searching])

    useEffect(() => {
        setSearching(false)
    }, [tableData])

    function handleSearchDataChange(dataType, newValue) {
        setSearchData(prev => {
            return { ...prev, [dataType]: newValue }
        })
    }

    function handleSearch() {
        setSearching(true)
    }

    function handleSearchClear() {
        setSearchData({
            materialNumber: [],
            vender: "",
            gsm: ""
        })
    }

    function handleUpload() {
        //show uploader, make api call
        setUploadErrors(FakeData.errors)
        setShowErrorBox(true)
    }

    return (
        <MethodContext.Provider value={{
                handleSearchDataChange, handleSearch, handleSearchClear, handleUpload, setShowErrorBox
        }}>
            <div className="app-container">
                <SearchForm
                    materialNumber={searchData.materialNumber}
                    vender={searchData.vender}
                    gsm={searchData.gsm}
                    loading={searching}
                />
                <DataTable dataSource={tableData} loading={searching} />

                <ErrorBox errors={uploadErrors} visible={showErrorBox} />
            </div>
        </MethodContext.Provider>
    )
}


export { MethodContext };
export default App;