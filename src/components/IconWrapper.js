import React from 'react';
import styled from 'styled-components';
import { copyToClipboard } from 'copyforjs';

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
  title='点击复制svg' 
  onClick={()=> {copyToClipboard(children)}}>
    { children }
  </IconWrapper>
