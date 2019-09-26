import React, { useContext } from 'react'
import { Drawer, Icon } from 'antd'
import { MethodContext } from './App'
import './ErrorBox.scss'

function ErrorBox({errors, visible}) {
    const { setShowErrorBox } = useContext(MethodContext)
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
                        <div className="error-card">
                            <p>位置: {error.location}</p>
                            <p>{error.msg}</p>
                        </div>
                    ))
                }
        </Drawer>
    )
}

export default ErrorBox;