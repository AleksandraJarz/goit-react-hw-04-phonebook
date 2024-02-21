import styled from 'styled-components';

export const ContactItemLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactItemName = styled.span`
  font-weight: bold;
`;
export const ContactItemNumber = styled.span`
  margin-left: 10px;
`;

export const ContactItemBtn = styled.button`
  height: 25px;
  border-radius: 6px;
  border-width: 0px;
  background-color: red;
  color: white;
  font-size: 15px;
  margin-left: 10px;

  &:hover {
    background-color: #ff8800;
  }

  &:active {
    background-color: #ff9900;
  }
`;
