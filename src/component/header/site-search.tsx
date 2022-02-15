import * as React from "react";
import styled from "styled-components";

export const SiteSearchPanel = styled.div`
  max-width: 488px;
  flex: 1;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  margin: auto;
`

export const SearchContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #e8e8e8;
  border-radius: 50px;
  height: 32px;
  width: 100%;
  padding: 0 13px;

  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  appearance: none;
  background: transparent;
  border: none;
  color: #191919;
  font-size: 15px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-left: 8px;

  :focus-visible {
    outline: none;
  }
`
