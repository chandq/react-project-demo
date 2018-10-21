/**
 * author: yangke
 * Date: 2018/1/2
 * Features: 分页
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'
import style from './pagination.scss'

class MyPagination extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const {
            size,
            defaultCurrent,
            pageSize,
            showTotal,
            total = 85,
            style,
            ...rest
        } = this.props
        return(
            <div className="pagination-container" style={{...style}}>
                <Pagination
                    size={size}
                    defaultCurrent={defaultCurrent}
                    pageSize={pageSize-0}
                    showTotal={showTotal===undefined ? total => `第 ${this.props.current || 1} 页` : showTotal}
                    total={total}
                    {...rest}/>
            </div>
        )
    }
}

MyPagination.defaultProps = {
    size: 'small',
    defaultCurrent: 1,
    pageSize: 10,
}

export default MyPagination