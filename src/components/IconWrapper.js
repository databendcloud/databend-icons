import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.a`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  svg{
    margin: 8px 0;
  }
`

export default ({children}) =>
  <IconWrapper>
     { children }
  </IconWrapper>
