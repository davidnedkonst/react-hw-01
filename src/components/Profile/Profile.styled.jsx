import styled from '@emotion/styled';

export const Card = styled.div`
margin: 0 auto 10% auto;
  max-width: 400px;

  background-color: rgb(229, 236, 236);
  border: 3px solid gray;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.div`
  padding: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Avatar = styled.img`
  width: 40%;
  border-radius: 50%;
  display: block;
`;

export const Name = styled.p`
  margin: 0;
  display: block;

  font-size: 30px;
  font-weight: bold;
`;

export const Tag = styled.p`
  margin: 0;
  display: block;

  font-size: 20px;
  font-weight: normal;
`;

export const Location = styled.p`
  margin: 0;
  display: block;

  font-size: 20px;
  font-weight: normal;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StatsItem = styled.li`
  width: auto;

  background-color: rgb(191, 195, 195);
  border: 1px solid gray;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Label = styled.span`
  padding: 10%;
  text-align: center;

  font-size: 20px;
  font-weight: bold;
`;

export const Quantity = styled.span`
  padding: 10%;
  text-align: center;

  font-size: 16px;
`;
