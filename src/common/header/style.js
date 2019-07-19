import styled from 'styled-components'
import logoPic from '../../statics/nav_log.png'

export const HeaderWrapper = styled('div')`
  height: 56px;
  z-index: 1;
  margin-left: calc(100vw - 100%);
  top: 0;
  left: 0;
  right: 0;
  min-width: 980px;
  width: 100%;
  position:fixed;
  border-bottom: 0.5px solid #eee;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: white;
`;

export const Logo = styled('div')`
  background: url(${logoPic});
  font-size: 0;
  width: 100px;
  height: 56px;
  line-height: 56px;
  display: inline-block;
  background-size: contain;
  vertical-align: middle;
`;

export const NavDiv = styled('div')`
  vertical-align: middle;
`;

export const SearchSuggestion = styled('div')`
  z-index: 1;
  background-color: white;
  position: absolute;
  top: 50px;
  padding: 20px 20px 10px 20px;
  box-sizing: border-box;
  font-size: 14px;
  width: 250px;
  overflow: hidden;
  border-radius: 3px;
  border: 1px solid #eee;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`;
export const SearchSuggestionTitle = styled('div')`
  font-size: 14px;
  color: #969696;
  display: block;
  line-height: 17px;
`;

export const SearchSuggestionChange = styled('div')`
  float: right;
  color: #969696;
  display: inline-block;
  line-height: 17px;
  font-size: 14px;
  cursor: pointer;
  .spin{
    display: inline-block;
    float: left;
    font-size: 15px;
    margin-right: 2px;
    transition: all 400ms;
    transform-origin: center center;
  }
`;
export const SearchSuggestionItems = styled('div')`
  color: #777;
  display: block;
  font-size: 13px;
`;
export const SearchSuggestionItem = styled('div')`
  height: 20px;
  line-height: 20px;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 2px 5px;
  cursor: pointer;
  display: inline-block;
  margin: 10px 10px 0 0;
`;

export const NavSearchWrapper = styled('div')`
  margin-left: 10px;
  position: relative;
  display: inline-block;
  .search-icon{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    box-sizing: border-box; 
    background-color: #eee;
    &.focused{
        background: #777;
		color: #fff;
    }
  }
`;


export const NavSearch = styled.input.attrs({
    placeholder: '搜索',
    focused: false
})`
  ::placeholder{
    color: #999;
  }
  transition: width 500ms ease-out;
  &.focused{
    width: 320px;
  }
  &.slide-enter {
    transition: all 500ms ease-out;
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-exit {
    transition: all 500ms ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
  display: inline-block;
  box-sizing: border-box;
  color: #777;
  width: 240px;
  font-size: 15px;
  padding: 0 40px 0 20px;
  border: none;
  outline: none;
  line-height: 38px;
  background-color: #eee;
  border-radius: 20px;
`;

export const NavItem = styled('div')`
  &.nav-home{
    color: #ea6f5a;
    margin-left: 150px;
    font-size: 17px;
    cursor: pointer;
  };
  &.nav-download{
    font-size: 17px;
    color: #333;
    cursor: pointer;
    :hover{
      background-color: #eee;
    }
  };
  &.nav-font{
    color: #969696;
    cursor: pointer;
  };
  &.nav-login{
    color: #969696;
    cursor: pointer;
  };
  &.nav-reg{
    color: #ea6f5a;
    cursor: pointer;
    margin:  0 12px;
    width: 80px;
    line-height: 24px;
    border: 1px solid #ea6f5a;
    border-radius: 20px;
    padding: 6px 12px;
  };
  &.nav-write{
    width: 100px;
    cursor: pointer;
    color: white;
    background-color: #ea6f5a;
    margin: 0 30px 0 12px;
    padding: 6px 12px;
    line-height: 24px;
    border: 1px solid #ea6f5a;
    border-radius: 20px;
  };
  padding: 0 12px;
  line-height: 56px;
  font-weight: 400;
  text-align: center;
  box-sizing: border-box;
  font-size: 15px;
  display: inline-block;
`;