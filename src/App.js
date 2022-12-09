import React from 'react';
import styled from 'styled-components'
import * as icons from './icons'
import Header from './components/Header'
import IconWrapper from './components/IconWrapper'
import { copyToClipboard } from 'copyforjs';
import { Tooltip } from 'antd';

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
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                      <Tooltip title="点击复制svg">
                        <Icon onClick={()=> console.log(Icon, 'Icon')}/>
                      </Tooltip>
                      <span>
                        {key}
                        <span style={{marginLeft: '10px'}} onDoubleClick={() => copyToClipboard(key)}>
                          <Tooltip title="点击复制名称">
                            <Copy></Copy>
                          </Tooltip>
                        </span>
                      </span>
                      </div>
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
