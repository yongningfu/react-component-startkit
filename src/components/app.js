import React from 'react'
import Menu from './index';
const { MenuItem, SubMenu } = Menu;

import classes from '../styles/menu.scss';

const onClick = (e, key) => {
	console.log(e, key);
}

export default class App extends React.Component {
  render () {
    return (
      <Menu
        onClick={onClick}
        className="hello"
      >
        <MenuItem key="1-1" className="food">食品分类</MenuItem>
        <MenuItem key="1-2" disabled>服装分类</MenuItem>
        <SubMenu title={"电器分类"} overlayClassName="sub">
          <MenuItem key="2-1" className="tv">电视机</MenuItem>
          <MenuItem key="2-2" disabled>笔记本</MenuItem>
          <MenuItem key="2-3">洗衣机</MenuItem>
        </SubMenu>
        <SubMenu title={"美妆分类"} disabled>
          <MenuItem key="3-1">眼影</MenuItem>
          <MenuItem key="3-2">洗面奶</MenuItem>
        </SubMenu>
      </Menu>
    )
  }
}


