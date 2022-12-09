import React from 'react';
import styled from 'styled-components';
import { copyToClipboard } from 'copyforjs';
import { Tooltip } from 'antd';

const IconWrapper = styled.a`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  svg{
    margin: 36px 0;
  }
`

export default ({children}) =>
  <IconWrapper 
  onClick={()=> {copyToClipboard(JSON.stringify(children))}}>
    <Tooltip title="点击复制svg">
      { children }
    </Tooltip>
  </IconWrapper>
