import styled from '@emotion/styled';

export const Statistic = styled.div`
  max-width: 400px;
  margin: 0 auto 10% auto;

  background-color: rgb(229, 236, 236);
  border: 2px solid gray;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2``;

export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Item = styled.li`
  width: 100px;

  background-color: rgb(191, 195, 195);
  border-top: 3px solid gray;
  border-left: 2px solid gray;
  border-right: 2px solid gray;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Label = styled.span`
  padding: 10%;
  text-align: center;

  font-size: 16px;
`;

export const Percentage = styled.span`
  padding: 10%;
  text-align: center;

  font-size: 20px;
  font-weight: bold;
`;
