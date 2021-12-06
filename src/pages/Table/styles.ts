import styled from 'styled-components';
import { color } from '../../assets/css/color';
import { typography } from '../../assets/css/typography';

export const ContainerTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  font-family: ${typography.type.primary};
  border: 1px solid ${color.mediumLightGray} !important;
  border-radius: 5px;
  .rdt_TableHeadRow{
    background-color: ${color.mediumGreen};
    color: ${color.white};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.s2}px;
  }
  .rdt_TableRow{
    background-color: ${color.lightGray};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.s2}px;
  }
`;
