import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const CheckoutItemContainer = styled(Paper)`
  width: 104%;
  display: flex;
  min-height: 100px;
  margin-top:10px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    width: 190%;
   
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-left: 10px;
  img {
    width: 90%;
    height: 90%;
  }

  @media screen and (max-width: 768px) {
    
    width: 35%;
    img {
    padding-left:5px;
    width: 80%;
    height: 80%;
  }
   
  }
`;

export const TextContainer = styled.span`
  width: 23%;
  @media screen and (max-width: 768px) {
    width: 22%;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin:14px;
  }
`;