import React from 'react';
import styled from 'styled-components'
import * as icons from './icons'
import Header from './components/Header'
import IconWrapper from './components/IconWrapper'
import { copyToClipboard } from 'copyforjs';
import { Tooltip, Space, message } from 'antd';

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0 0 50px 0;
  list-style: none;
`

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
                return <li key={index}>
                  <IconWrapper>
                    <Space size={30} align="center" direction="vertical">
                      <Tooltip title="点击复制svg">
                        <Icon onClick={()=> console.log(Icon(), Icon, 'Icon')}/>
                      </Tooltip>
                      <Space size={12}>
                        <span>{key}</span>
                        <span onClick={() => {
                          message.success('已复制')
                          copyToClipboard(key)
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
