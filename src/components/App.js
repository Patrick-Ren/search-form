import React from 'react';
import SearchForm from './SearchForm';
import DataTable from './DataTable';
import ErrorBox from './ErrorBox';
import { GlobalContextProvider } from '../context/GlobalContextProvider'
import '../css/App.scss';

function App()  {
    return (
        <GlobalContextProvider>
            <div className="app-container">
                <SearchForm />
                <DataTable />
                <ErrorBox />
            </div>
        </GlobalContextProvider>
    )
}

export default App;