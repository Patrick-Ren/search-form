import React, { useContext } from 'react'
import { Drawer } from 'antd'
import { GlobalContext } from '../context/GlobalContextProvider';
import { v4 } from 'uuid'
import '../css/ErrorBox.scss';

function ErrorBox() {
    const { uploadErrors: errors, showErrorBox: visible, setShowErrorBox } = useContext(GlobalContext)
    return (
        <Drawer
            visible={visible}
            title={`☹  出现了${errors.length}条错误`}
            placement="right"
            onClose={ () => { setShowErrorBox(false) } }
            width={500}
        >
                {
                    errors.map(error => (
                        <div className="error-card" key={v4()}>
                            <p>位置: {error.location}</p>
                            <p>{error.msg}</p>
                        </div>
                    ))
                }
        </Drawer>
    )
}

export default ErrorBox;