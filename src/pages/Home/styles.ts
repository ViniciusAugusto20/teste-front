import styled from 'styled-components';
import { color } from '../../assets/css/color';
import { typography } from '../../assets/css/typography';
import { IoAddCircleOutline, IoRemoveOutline } from 'react-icons/io5';
import { InputProps } from './types';

export const Title = styled.span`
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m3}px;
  margin: 25px 0px;
  color: ${color.mediumGreen};
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;

export const IconAdd = styled(IoAddCircleOutline)`
  width: 25px;
  height: 25px;
  color: ${color.mediumGreen};
  position: relative;
  cursor: pointer;
`;

export const IconRemove = styled(IoRemoveOutline)`
  width: 25px;
  height: 25px;
  color: ${color.darkRed};
  position: relative;
  cursor: pointer;
`;

export const ContentBox = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(1, 1fr);
  padding: 10px 50px 50px 50px;
  box-shadow: 2px 2px 2px 2px ${color.mediumLightGray};
  background-color: ${color.background};
  border-radius: 5px;
  width: 50%;
  min-width: 200px;
`;

export const ContainerInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  align-self: start;
  margin: 8px 0px;
  span {
    align-self: start;
    margin-bottom: 5px;
    color: ${color.mediumBlue};
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.s3}px;
  }

  input {
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
    height: 40px;
    border: ${({ hasError }) =>
      hasError
        ? `1px solid ${color.red}`
        : `1px solid ${color.mediumLightGray}`};
    background: ${color.white};
    appearance: none;
    outline: none;
    border-radius: 5px;
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.s2}px;
    padding: 0px 20px;
    &:focus {
      border: 1px solid ${color.mediumGreen};
    }
  }
`;

export const Select = styled.select<InputProps>`
  cursor: pointer;
  display: inline-block;
  height: 40px;
  margin-right: 10px;
  border: ${({ hasError }) =>
    hasError ? `1px solid ${color.red}` : `1px solid ${color.mediumLightGray}`};
  background: ${color.white};
  appearance: none;
  outline: none;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-left: 20px;
  option {
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.s2}px;
  }
`;

export const ContainerMultipleInputs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 25px;
  margin: 8px 0px;
  svg {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;

export const ButtonSubmit = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  button {
    width: 150px;
    height: 40px;
    color: ${color.white};
    background-color: ${color.mediumGreen};
    border: 1px solid ${color.mediumLightGray};
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.s2}px;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      opacity: 0.9;
    }
  }
`;

export const ContainerError = styled.div`
  margin-top: 5px;
  color: ${color.red};
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s0}px;
`;
