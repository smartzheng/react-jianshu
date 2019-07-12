import styled from 'styled-components'
import logoPic from '../../statics/nav_log.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  width: 100%;
  border-bottom: 0.5px solid #eee;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
  background: url(${logoPic});
  font-size: 0;
  width: 100px;
  height: 56px;
  line-height: 56px;
  display: inline-block;
  background-size: contain;
  vertical-align: middle;
`;

export const NavDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const NavSearchWrapper = styled.div`
  margin-left: 10px;
  position: relative;
  display: inline-block;
  .iconfont{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    text-align: center;
    border-radius: 15px;
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
    placeholder: '搜索'
})`
  ::placeholder{
    color: #999;
  }
  transition: width 500ms ease-out;
  &.focused{
    width: 240px;
  }
  &.slide-enter {
    transition: all 500ms ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 500ms ease-out;
  }
  &.slide-exit-active {
    width: 180px;
  }
  display: inline-block;
  box-sizing: border-box;
  color: #777;
  width: 180px;
  font-size: 15px;
  padding: 0 40px 0 20px;
  border: none;
  outline: none;
  line-height: 38px;
  background-color: #eee;
  border-radius: 20px;
`;

export const NavItem = styled.div`
  &.nav-home{
    color: #ea6f5a;
    margin-left: 150px;
    font-size: 17px;
  };
  &.nav-download{
    font-size: 17px;
    color: #333;
    :hover{
      background-color: #eee;
    }
  };
  &.nav-font{
    color: #969696;
  };
  &.nav-login{
    color: #969696;
  };
  &.nav-reg{
    color: #ea6f5a;
    margin:  0 12px;
    width: 80px;
    line-height: 24px;
    border: 1px solid #ea6f5a;
    border-radius: 20px;
    padding: 6px 12px;
  };
  &.nav-write{
    width: 100px;
    color: white;
    background-color: #ea6f5a;
    margin: 0 12px;
    padding: 6px 12px;
    line-height: 24px;
    border: 1px solid #ea6f5a;
    border-radius: 20px;
  };
  padding: 0 12px;
  line-height: 56px;
  font-weight: 400;
  text-align: center;
  font-size: 15px;
  display: inline-block;
`;

