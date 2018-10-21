/**
 * author: yangke
 * Date: 2017/11/24
 * Features: 任务台
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Layout, Menu, Icon, Select, Modal, Button, Tooltip, Popover, Table, Progress, Dropdown} from "antd";
import styles from 'style/console.scss'
import { visitConsole, clearDoneTasks, clearCurrentTask } from '../actions/index'
import moment from 'moment'
import {TaskItemState, TaskType} from "constants/taskManager"

class Console extends Component {
    constructor(props) {
        super(props)
    }

    closeConsole=()=> {
        this.props.dispatch(visitConsole(false))
    };

    clear=()=> {
        this.props.dispatch(clearDoneTasks())
    }

    deleteCurrent=(time)=> this.props.dispatch(clearCurrentTask(time))

    render() {
        const {consoleIsShow, tasks, newTaskCount} = this.props;
        console.log("------task",tasks);
        const newTasks = tasks.filter((item)=> !item.ownerData.idKey.endsWith('DAEMON'));
        const columns = [{
            title: '名称',
            dataIndex: 'resourceName',
            width:'140px',
            render: (text, record)=> {
                return  <Tooltip
                    placement="top"
                    title={text}
                    arrowPointAtCenter
                    overlayClassName="myToolTip"
                    overlayStyle={{ wordBreak: 'break-all' }}>
                    <p className="table-tooltip">{text}</p>
                </Tooltip>
            }
        },{
            title: '任务',
            dataIndex: 'title',
            key: 'title',
            width:'140px'
        },{
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            width:'120px',
            render: (text, record)=> {
                return '';
            }
        },{
            title: '任务进度',
            dataIndex: 'progress',
            key: 'progress',
            // width:'140px',
            render:(text,record) => {
                return <Progress percent={parseInt(text)} />
            }
        }, {
            title: '开始时间',
            dataIndex: 'creationTimestamp',
            width:'200px',
            render: (text)=> moment(text).format('YYYY-MM-DD HH:mm:ss')
        }, {
            title: '结束时间',
            dataIndex: 'endTime',
            width:'200px',
            render: (text, record)=> {
                if([TaskItemState.FAILURE, TaskItemState.SUCCESS, TaskItemState.PENDING].includes(record.status.toUpperCase())) {
                    return moment(text).format('YYYY-MM-DD HH:mm:ss')
                }
                return ''
            }
        },{
            title: '失败原因',
            dataIndex: 'errmsg',
            width:'250px',
            render:(text)=>{
                return {text}
            }
        }, {
            title: '删除',
            dataIndex:'del',
            render: (text, record)=> <Icon type="delete" onClick={()=> this.deleteCurrent(record.creationTimestamp)}/>
        }];
        const text = (
            <div>
                <span>任务</span>
                <Tooltip
                    placement="bottom"
                    title="清空已完成"
                    arrowPointAtCenter>
                    <Icon type="delete" style={{lineHeight:'35px',cursor:'pointer'}} />
                </Tooltip>
            </div>
        );

        console.log('consoleIsShow', consoleIsShow);
       /* if(!consoleIsShow) {
            return null
        }*/
        return(
            <div>
                {
                    consoleIsShow
                        ?  <div className={`${styles.console} controller`} key="console">
                            <div className={styles.consoleTitle}>
                                <div ><span>任务台</span></div>
                                <div className={styles.consoleButton}>
                                    <span onClick={this.clear}><Tooltip title="清空已完成"><Icon type="delete"></Icon></Tooltip></span>
                                    <span onClick={this.closeConsole}>关闭</span>
                                </div>
                            </div>
                            <div className={`console-header ${styles.consoleContent}`}>
                                <Table dataSource={newTasks} columns={columns} pagination={false} scroll={{y:180}} />
                            </div>
                        </div>
                        : null
                }
            </div>

        )
    }
}


function mapStateToProps(state, ownProps) {
    const { showConsole, selectTasks } = state;

    return {
        consoleIsShow: showConsole.consoleIsShow,
        tasks: selectTasks.tasks,
        newTaskCount: selectTasks.newTaskCount
    }
}

module.exports = connect(mapStateToProps)(Console);

