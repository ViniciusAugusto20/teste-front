import styled, { css } from 'styled-components';
import { color } from '../../../assets/css/color';
import { typography } from '../../../assets/css/typography';

import { SlideContainerProps } from './types';

export const TextWrapper = styled.div`
  min-width: 470px;
  h1 {
    text-align: justify;
    color: ${color.black};
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.l1}px;
  }
  p {
    text-align: justify;
    color: ${color.mediumLightGray};
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.m3}px;
  }
  span {
    display: inline-block;
    text-align: justify;
    color: ${color.black};
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.s3}px;
    :last-child {
      margin-top: 30px;
    }
  }
`;
export const ImgWrapper = styled.div`
  img {
    max-width: 400px;
  }
`;
export const ButtonContainer = styled.div`
  z-index: 100;
  display: flex;
  align-items: end;
  justify-content: flex-end;
  flex-direction: column;
  margin: 0px 15px 15px 0px;
  width: 15px;
  button {
    color: ${color.white};
    background-color: ${color.orange};
    border: 1px solid ${color.darkOrange};
    border-radius: 2px;
    height: 35px;
    width: 100px;
    cursor: pointer;
    :hover {
      background-color: ${color.orange};
      opacity: 0.9;
      border-bottom: 4px solid ${color.darkOrange};
    }
    :active{
      border-bottom: none;
    }
  }
`;
export const Container = styled.div<SlideContainerProps>`
  display: flex;
  border: 1px solid ${color.mediumLightGray};
  box-shadow: 1px 1px 1px 1px ${color.mediumLightGray};
  background-color: ${color.background};
  border-radius: 5px;
  height: 400px;
  width: 800px;

  ${({ typeOfSlide, slideImg }) => {
    switch (typeOfSlide) {
      case 'default':
        return css`
          ${TextWrapper} {
            z-index: 100;
            margin-left: 50px;
            margin-top: 10px;
          }
          ${ImgWrapper} {
            img {
              top: 8px;
              left: 16px;
              height: 400px;
              max-width: 250px;
            }
          }
        `;
      case 'titleBottom':
        return css`
          background: url(${slideImg && slideImg});
          background-repeat: no-repeat;
          background-size: 100% 100%;
          ${TextWrapper} {
            display: flex;
            align-items: start;
            justify-content: flex-end;
            flex-direction: column;
            min-width: 720px;
            z-index: 100;
            margin-left: 50px;
            h1 {
              width: auto;
              color: ${color.white};
            }
            p {
              width: 550px;
              color: ${color.white};
            }
          }
          ${ImgWrapper} {
            img {
              display: none;
            }
          }
        `;
      case 'middle':
        return css`
          background: url(${slideImg && slideImg});
          background-repeat: no-repeat;
          background-size: 100% 100%;
          ${TextWrapper} {
            display: flex;
            align-items: end;
            justify-content: center;
            flex-direction: column;
            min-width: 720px;
            z-index: 100;
            margin-left: 50px;
            h1 {
              color: ${color.white};
            }
            p {
              color: ${color.white};
            }
          }
          ${ImgWrapper} {
            img {
              display: none;
            }
          }
        `;
      case 'imgTop':
        return css`
          background: url(${slideImg && slideImg});
          background-repeat: no-repeat;
          background-size: 100% 50%;
          ${TextWrapper} {
            display: flex;
            align-items: start;
            justify-content: flex-start;
            flex-direction: column;
            min-width: 720px;
            z-index: 100;
            margin: 60px 0px 0px 50px;
            h1 {
              margin: 15px 0px;
              width: auto;
              color: ${color.white};
            }
            p {
              margin: 10px 0px 50px 0px;
              width: auto;
              color: ${color.white};
            }
            span{
              margin: 15px 0px;
            }
          }
          ${ImgWrapper} {
            img {
              display: none;
            }
          }
        `;
      default:
        return css``;
    }
  }}
`;
