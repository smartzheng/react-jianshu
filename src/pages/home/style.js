import styled from 'styled-components'

export const HomeWrapper = styled('div')`
  width: 960px;
  overflow: hidden;
  padding: 30px 0 50px 0;
  margin: 0 auto;
`;
export const HomeLeft = styled('div')`
  width: 625px;
  float: left;
  .no-more{
    width: 625px;
    text-align: center;
    font-size: 16px;
    color: #969696;
    margin-top: 20px;
  }
`;
export const HomeRight = styled('div')`
  width: 280px;
  float: right;
`;
export const ListWrapper = styled('div')`
  width: 625px;
`;
export const ListItem = styled('div')`
  padding: 15px 0 20px 0;
  display: flex;
  justify-content: space-between;
  width: 625px;
  border-bottom: 1px solid #f0f0f0;
  .img{
    width: 150px;
    cursor: pointer;
    margin-left: 20px;
    height: 100px;
    border: 1px solid #eee;
    border-radius: 5px;
  }
`;

export const ListItemInfo = styled('div')`
  flex: 1;
  .title{
    float: left;
    color: #333;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.5;
    &:hover{
      text-decoration: underline
    }
  }
  .desc{
    color: #999;
    float: left;
    line-height: 24px;
    font-size: 13px;
  }
`;
export const Banner = styled('img').attrs(
    (props) => ({
        alt: '',
        src: props.imgUrl
    })
)`
  width: 625px;
  height: 270px;
`;

export const RecommendItem = styled('div')`
  margin-bottom: 10px;
  .img{
    width: 280px;
    height: 50px;
  }
`;

export const WriterListTitleWrapper = styled('div')`
  margin-top: 20px;
  .title{
    font-size: 14px;
    color: #969696;
    line-height: 17px;
  }
  .change{float: right;
    color: #969696;
    line-height: 17px;
    font-size: 14px;
    cursor: pointer;
      .spin{
        float: left;
        font-size: 15px;
        margin-right: 2px;
        transition: all 400ms;
        transform-origin: center center;
      }
  }
`;
export const WriterListWrapper = styled('div')`
  margin-top: 20px;
`;
export const WriterItem = styled('div')`
  margin-bottom: 15px;
  overflow: hidden;
  .avatar{
    border-radius: 24px;
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 5px;
  }
  .writer-info{
    float: left;
      .name{
        font-size: 14px;
        color: #333;
        margin-top: 5px;
      }
      .desc{
        font-size:12px;
        color: #969696;
        margin-top: 5px;
      }
  }
  .follow{
    font-size:13px;
    margin-top: 5px;
    float: right;
    color: #42c02e;
  }
`;

