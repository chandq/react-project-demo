import React from 'react'
import {Link} from "react-router";
import { Icon } from 'antd'
import styles from './error.scss'

const Error = () => <div>
  <div className={styles.error}>
    <Icon type="frown-o" />
    <h1>404 Not Found  <Link to="/">返回首页</Link></h1>
  </div>
</div>

export default Error