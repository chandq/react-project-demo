/**
 * author: yangke
 * Date: 2017/11/28
 * Features: 弹框组件
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {  Modal, Tabs, message, Form, Steps } from 'antd'
import Button from 'common/button/button'
import PropTypes from 'prop-types'
import style from './modal.scss'
const TabPane = Tabs.TabPane
const Step = Steps.Step
const { confirm, info, success, error,  } = Modal

class _Modal extends Component {
    constructor(props) {
        super(props)
        const { children } = props
        let requiredForm = []
        if(props.fade !== 'edit' && props.type === 'tab') {
            requiredForm = children.map((_, i)=> {return { [i]: _.props.required }})
            console.log("requiredForm", requiredForm)
        }
        this.state = {
            formName: Math.random(),
            current: 0,
            formStore: {},
            requiredForm,
          currentPageData: {},
          nextStepAllowed: true,
          previousStepAllowed: true,
          submitAllowed: true
        }
    }

    componentWillMount() {
        const {  } = this.props
    }
    updateCurrentStepData=({pageData={},nextStepAllowed=true, previousStepAllowed=true, submitAllowed=true})=>{
        this.setState({currentPageData: Object.assign({}, pageData), nextStepAllowed, previousStepAllowed, submitAllowed});
    }

    handleCancel =()=> {
        this.setState({currentPageData: {}, nextStepAllowed:true, previousStepAllowed:true, submitAllowed:true});
        this.props.onCancel()
        // let node = document.getElementsByClassName('_innerModalWrap')[0]
        // const unmountResult = ReactDOM.unmountComponentAtNode(node)
        // if(unmountResult && node) {
        //     node.parentNode.removeChild(node)
        // }
    }

    tabChange =tab=> {
        console.log(tab)
        console.log(tab[0])
        let requiredForm = this.state.requiredForm.filter((_, index)=> index != tab[0] && index !== 0);
        this.setState({ requiredForm })
    };

    next =()=> {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          let current = this.state.current + 1;
          this.setState({
            current,
            currentPageData: {},
            nextStepAllowed:true,
            previousStepAllowed:true,
            submitAllowed:true,
            formStore: {
              ...this.state.formStore,
              [--current]: values
            }
          }, () => {
            this.props.getFirst && this.props.getFirst(this.state.formStore);
          });
        }
      });
    }
    prev =()=> {
        const current = this.state.current - 1;
        this.setState({ current,
          currentPageData: {},
          nextStepAllowed:true,
          previousStepAllowed:true,
          submitAllowed:true}, ()=> {
            const { current, formStore } = this.state
            let keys = Object.keys(formStore)
            if(keys.length !== 0) {
                setTimeout(() => {
					this.props.form.setFieldsValue({...formStore[current]})
				});
            }
        });

    }

    clearData=index=> {
        if(index) {
            delete this.state.formStore[index]
        } else {
            this.setState({
                formStore: {},
              currentPageData: {},
              nextStepAllowed:true,
              previousStepAllowed:true,
              submitAllowed:true
            })
        }
    }

    handleSubmit=e=> {
        console.log("提交~~~")
        e.preventDefault();
        const { type, form, getFormData, onCancel, filterNull } = this.props
        const { formStore, requiredForm } = this.state
        form.validateFields((err, values) => {
            if(err) {
                console.log("err", err)
                message.info("请填完整表单！")
                return
            }
            if (!err) {
                let len = requiredForm.filter(item=> Object.values(item)[0] !== undefined )
                if(len.length) {
                    console.log("err", this.state.requiredForm)
                    message.info("请填完整表单！")
                    return
                }
                if(type === 'step') {``
                    values = Object.assign(values, Object.values(formStore).reduce((pre,next)=> { return Object.assign(pre, next) },{}))
                }
                if(typeof getFormData === "function") {
                    if(filterNull) {
                        Object.keys(values).forEach(item=> {
                            if(values[item]===undefined)
                                delete values[item]
                        })
                    }
                    getFormData(values)
                }
                if(this.props.closeOnSubmit){
                    this.handleCancel();
                }
            }
        });
    };

    handleOk =()=> {
        if(this.props.type === undefined) {
            this.props.onCancel()
        }
    }

    renderContent =(type, steps)=> {
        const { formName, current } = this.state
        if(type === 'tab') {
            return <Form id={formName} name={formName} onSubmit={this.handleSubmit}>
                <Tabs type="card"  onChange={this.tabChange}>
                    {
                        React.Children.map(this.props.children, (ele, index)=> {
                            return <TabPane key={ele.title || index} tab={ele.props.required ?`* ${ ele.props.title}` :  ele.props.title}>
                                {React.cloneElement(ele, {form: this.props.form, updateCurrentStepData: this.updateCurrentStepData})}
                            </TabPane>
                        })
                    }
                </Tabs>
            </Form>
        } else if(type === 'step'){
            return (
                <Form id={formName} name={formName} onSubmit={this.handleSubmit}>
                    <Steps current={this.state.current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                    <div className="steps-content">{steps[this.state.current].content}</div>
                </Form>
            )
        }else if(type === 'form'){
            return (
                <Form id={formName} name={formName} onSubmit={this.handleSubmit}>
                    { React.cloneElement(this.props.children, {form: this.props.form, updateCurrentStepData: this.updateCurrentStepData}) }
                </Form>
            )
        } else {
            return this.props.children
        }
    }

    render() {
        const {
            title,
            type,
            footer,
            ...restProps
        } = this.props;
        const {
            formName,
            current,} = this.state
        let _steps = [], _footer = []
        if(type === 'step') {
            _steps = React.Children.map(this.props.children, (ele, index)=> {
                return Object.assign({}, {
                    title: ele.props.title,
                    content: React.cloneElement(ele, {form: this.props.form, clear: this.clearData, _data: this.state.formStore, updateCurrentStepData: this.updateCurrentStepData})
                })
            })
            _footer = [
                current > 0 && <Button key="previous" bgColor={{ bgcolor:"#019bfd"}} style={{ marginLeft: 8 }} disabled={!this.state.previousStepAllowed} onClick={() => this.prev()}> 上一步 </Button>,
                current < _steps.length - 1 && <Button bgColor={{ bgcolor:"#019bfd"}} key="next" disabled={!this.state.nextStepAllowed} onClick={() => this.next()}>下一步</Button>,
                <Button key="cancel" onClick={this.handleCancel} b
                        gColor={{ bgcolor:"#002e4c"}}>取消</Button>,
                current === _steps.length - 1 && <Button key="submit" htmlType="submit" bgColor={{ bgcolor:"#019bfd"}} disabled={!this.state.submitAllowed} form={formName}>确定</Button>,
            ]
        } else {
            _footer = [
                <Button key="cancel" onClick={this.handleCancel} bgColor={{ bgcolor:"#002e4c"}}>取消</Button>,
                <Button key="submit" htmlType="submit" bgColor={{ bgcolor:"#019bfd"}} form={formName} disabled={!this.state.submitAllowed} onClick={this.handleOk}>确定</Button>,
            ]
        }
        return(
            <div className="_innerModalWrap" >
                <Modal
                    {...restProps}
                    title={title}
                    footer={footer !== undefined ? footer :_footer}>
                    { this.props.visible && this.renderContent(type, _steps) }
                </Modal>
            </div>
        )
    }
}

_Modal.defaultProps = {
    transitionName: "",
    maskTransitionName: "",
    maskClosable: false,
    maskStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
    wrapClassName: 'esage-modal-panel',
  closeOnSubmit: true
}

_Modal.propTypes = {
    onCancel: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
  closeOnSubmit: PropTypes.bool,
    children: PropTypes.any,
    type: PropTypes.string
}

_Modal = Form.create()(_Modal)
_Modal.confirm =  confirm
export default _Modal