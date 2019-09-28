import React, { useState, useEffect } from 'react'
import FakeData from './FakeData';

const GlobalContext = React.createContext();

function GlobalContextProvider({ children }) {
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

    // function handleSearchDataChange(dataType, newValue) {
    //     setSearchData(prev => {
    //         return { ...prev, [dataType]: newValue }
    //     })
    // }

    function handleSearch(newSearchData) {
        setSearchData(newSearchData)
        setSearching(true)
    }

    function handleSearchClear() {
        console.log('inside handle search clear')
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
        <GlobalContext.Provider 
            value ={{
                searchData, searching, tableData, uploadErrors, showErrorBox,
                setShowErrorBox,
                handleSearch, handleSearchClear, handleUpload
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider };