/**
 * Created by chendq on 2018/10/9.
 */
import React, {Component} from "react";
import { Button, Tooltip } from 'antd';
import PropTypes from 'prop-types';


class Buttons extends Component {
    constructor(props,context){
        super(props,context)
        this.state = {

        }
    }

    renderOperationButton = () => {
        let { style, selected, type, bgColor, iconButton,toolTip,placement, ...others,} = this.props;
        let bgcolor = bgColor && bgColor.bgcolor !=='#464646'? bgColor.bgcolor:'#191919';
        let styles = Object.assign({
            backgroundColor: '#f19c4a',
            width:"auto",
            margin:"0 12px 0 0",
            padding:"0 6px",
            border: "none",
            color: "#fff",
            height: "30px",
            borderRadius: "0px",
            fontSize: "1.4rem"},style);

        return(
            <Button {...others} style={styles}>
                <div className="oper-btn-content">
                    <span className={`icon-${type} operationButton`} />
                    {this.props.children}
                </div>
            </Button>

        )
    };

    renderIconButton = (styles)=> {
        let { style, selected, type, bgColor, iconButton,toolTip,placement, ...others} = this.props;
        styles = Object.assign(styles,{
            backgroundColor: "#191919",
            width:"16px",
            lineHeight: "14px",
            height:"14px",
            // marginRight:"18px",
        });
        return(
            <Tooltip title={toolTip} placement={placement}>
                <div style={styles} {...others}>
                    <span className={`icon-${iconButton} icon-button`}></span>
                </div>
            </Tooltip>
        )
    }

    render(){
        let { style, selected, type, bgColor, iconButton,toolTip,placement,show, ...others} = this.props;
        let bgcolor = selected? bgColor.clickBgColor: bgColor.bgcolor;
        let styles=Object.assign({
            border: "none",
            color: "#fff",
            height: "46px",
            borderRadius: "0px",
            fontSize: "1.6rem",
            marginLeft:"6px",
            background: '#f19c4a'}, style);
        if(selected){
            Object.assign(styles,{color:"#fff"});
        }
        if(show===false) {
            return null;
        }else{
            if(iconButton){
                return  this.renderIconButton(styles);
            }else{
                if(type){
                    return this.renderOperationButton();
                }else{
                    return(
                        <Button {...others} style={styles}>{this.props.children}</Button>
                    )
                }
            }
        }

    }




}
Buttons.defaultProps = {
    iconButton:'',
    style:{},
    selected:false,  //true为蓝色，false为灰色
    type:'',   //type有值为操作按钮，没有值为三级导航按钮
    onClick:()=>{},
    bgColor:{bgcolor:"#464646",clickBgColor:"#019bfd"},
    toolTip:'划入事件',
    placement:'bottom'

};
Buttons.propTypes = {
    iconButton:PropTypes.string,
    style:PropTypes.object,
    selected:PropTypes.bool,
    type:PropTypes.string,
    onClick:PropTypes.func,
    toolTip:PropTypes.string,
    placement:PropTypes.string
};

export default Buttons