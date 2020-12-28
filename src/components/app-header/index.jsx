import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import {headerLinks} from '@/common/local-data.js'
import{
  SearchOutlined
}from '@ant-design/icons'
import {Input} from 'antd'
import {
  GHeaderWrapper,
  DivLeftWra,
  DivRightWra
} from './style'

export default memo(function GAppHeader() {
  const selectItem=(item,index)=>{
    if(index<4){
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    }else{
      return (
        <a href={item.link}>{item.title}</a>
      )
    }
  }

  return (
    <GHeaderWrapper>
      <div className="content wrap-v1">
        <DivLeftWra>
          <a href='#/' className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item,index)=>{
                return(
                  <div key={item.title} className="select-item">
                    {selectItem(item,index)}
                  </div>
                )
              })
            }
          </div>
        </DivLeftWra>
        <DivRightWra>
            <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>}/>
            <div className="center">创作者中心</div>
            <div >登录</div>
        </DivRightWra>
      </div>
      <div className="divider"></div>
    </GHeaderWrapper>
  )
})
