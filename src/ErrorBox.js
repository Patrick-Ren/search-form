import React, {Component} from 'react'
import { Drawer } from 'antd'
import "./ErrorBox.scss"

class ErrorBox extends Component {
    static defaultProps = {
        errors: []
    }

    handleClose = () => {
        this.props.onClose()
    }
    render() {
        const {errors} = this.props;
        return <Drawer
                visible={errors.length > 0 ? true : false}
                title={`☹ 出现了${errors.length}条错误`}
                placement="right"
                onClose={this.handleClose}
                width={500}
            >
                {
                    errors.map(item => <div className="error-card">
                        <p>位置: {item.location}</p>
                        <p>{item.msg}</p>
                    </div>)
                }
        </Drawer>
    }
}

export default ErrorBox;