import React from 'react';
import styled from 'styled-components'
import * as icons from './icons'
import Header from './components/Header'
import IconWrapper from './components/IconWrapper'
import { copyToClipboard } from 'copyforjs';
import { Tooltip, Space, message } from 'antd';

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-items: stretch;
  column-gap: 20px;
  align-items: stretch;
  margin: 0;
  padding: 10px 20px 50px 20px;
  list-style: none;
`
function msg() {
  message.destroy();
  message.success('已复制')
} 
class List extends React.Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Container>
          {
            Object.keys(icons)
              .map((key, index) => {
                const Icon = icons[key]
                const Copy = icons['Copy']
                return <li 
                  style={{
                    marginBottom: '24px',
                    padding: '6px',
                    borderRadius: '6px',
                    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.3), 0px 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  key={index}>
                  <IconWrapper>
                    <Space size={6} align="center" direction="vertical">
                      <Tooltip title="点击复制svg">
                        <Icon id={key} size={30} onClick={(e)=> {
                          const svgInner = document?.getElementById(key)?.innerHTML;
                          const wrap = 
                          `<svg class="icon default" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">${svgInner}<svg>
                          `
                          copyToClipboard(wrap);
                          msg();
                        }}/>
                      </Tooltip>
                      <Space size={4}>
                        <span>{key}</span>
                        <span onClick={() => {
                          copyToClipboard(key);
                          msg();
                        }}>
                          <Tooltip title="点击复制名称">
                            <Copy></Copy>
                          </Tooltip>
                        </span>
                      </Space>
                    </Space>
                  </IconWrapper>
                </li>
              })
          }
        </Container>
      </div>
    )
  }
}

export default List;
