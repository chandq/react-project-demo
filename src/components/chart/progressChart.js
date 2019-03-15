/**
 * author: chendq
 * Date: 2017/11/22
 * Features: 首页资源占用的进度条组件
 */

import React from 'react'
import { Row, Col, Spin } from 'antd'
import PropTypes from 'prop-types'
import Progress from 'common/process'
import style from 'style/progressChart.scss'
import { injectIntl } from 'react-intl';
import messages from 'entry/messages'
const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
const {
    used,
    available,
    total
} =  messages
const ProgressChart =({
                          size,
                          intl,
                          total: innerTotal,
                          used: innerUesd,
                          childrenTitles,
                          rest,
                          unit = 'GB' }) => {
    let [__total, __used, __rest] = [ innerTotal, innerUesd, rest ]
    let _used
    if(__used.toString().endsWith('B')) {
        let endStr = __used.toString()
        if(endStr.endsWith('MB')) {
            _used = __used.split(' ')[0] / 1024
        }else if(endStr.endsWith('TB')){
            _used = __used.split(' ')[0] * 1024
        }else if(endStr.endsWith('PB')) {
            _used = __used.split(' ')[0] * 1024 * 1024
        }else {
            _used = __used.split(' ')[0]
        }
    } else {
        _used = __used
    }
    _used = parseFloat(_used)
    let percent = 0, _usedPercent = 0, _restPercent = 0, _total = null, _rest = null
    if(__total !== undefined) {
        if(__total.toString().endsWith('B')) {
            let endStr2 = __total.toString()
            if(endStr2.endsWith('MB')) {
                _total = __total.split(' ')[0] / 1024
            }else if(endStr2.endsWith('TB')) {
                _total = __total.split(' ')[0] * 1024
            }else if(endStr2.endsWith('PB')){
                _total = __total.split(' ')[0] * 1024 * 1024
            } else {
                _total = __total.split(' ')[0]
            }
        } else {
            _total = __total
        }
        _total = parseFloat(_total)
        _usedPercent = _used / _total * 100
        _restPercent = (_total -_used) / _total * 100;
        if(parseFloat(_total)==0){
            _usedPercent = 0
        }
    }
    if(__rest !== undefined) {
        _rest = __rest.toString().endsWith('B') ? __rest.split(' ')[0] : __rest
        _rest = parseFloat(_rest)
        _usedPercent = _used / (_used + _rest) * 100
        _restPercent = _rest / (_used + _rest) * 100
    }

    _total = _total === null ? `${ unit === '个' ? (parseFloat(_rest) + parseFloat(_used)): (parseFloat(_rest) + parseFloat(_used)).toFixed(2)} ${unit}` : _total + ' ' + unit
    _rest = _rest === null ? `${ unit === '个'&& parseFloat(_total)>parseFloat(_used)? (parseFloat(_total) - parseFloat(_used)): parseFloat(_total)<parseFloat(_used)?0:(parseFloat(_total) - parseFloat(_used)).toFixed(2)} ${unit}` : _rest + ' '+ unit
    console.log("before render", _total, _rest, unit)
    if(String(innerTotal)[0] === '0' && String(innerUesd)[0] === '0') { // 如果没有数据
        _restPercent = 0
        _usedPercent = 0
    }

    return(
        <div className={`${style.progressChartWrapper} progress-wrapper`}>
            <Row className={style.topRow}>
                <Col span={24}>
                    <Progress
                        colors={['#029bfb', '#29fee8']}
                        percent={_usedPercent}
                        height={6}/>
                    <span className={style.percentText}>{_usedPercent.toFixed(2)}%</span>
                </Col>
            </Row>

            <Row className={style.rowFirst} style={{marginTop:`${size === 'small' ? '0': '24px'}`}}>
                <Col span={8}>
                    <Progress
                        head={childrenTitles[0]}
                        colors={['#029bfb', '#29fee8']}
                        percent={_usedPercent.toFixed(2)}
                        height={2}
                        tail={(_used).toFixed(2) + ' '+unit}
                    />
                </Col>
            </Row>

            <Row className={style.rowSecond}>
                <Col span={8}>
                    <Progress
                        head={childrenTitles[1]}
                        colors={['#00ff00', '#29fee8']}
                        percent={_restPercent}
                        tail={_rest}
                        height={2}/>
                </Col>
            </Row>

            <Row className={style.rowThird}>
                <Col span={8}>
                    <Progress
                        head={childrenTitles[2]}
                        colors={['#9501c7', '#049afb']}
                        percent={100}
                        tail={_total}
                        height={2}/>
                </Col>
            </Row>
        </div>
    )
}
ProgressChart.propTypes = {
    total: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
    used:  PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]).isRequired,
    rest:  PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
    unit: PropTypes.string.isRequired,
    childrenTitles: PropTypes.array
}
ProgressChart.defaultProps = {
    childrenTitles: ['已用', '可用', '总共']
}
export default injectIntl(ProgressChart)