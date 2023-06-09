import styled from '@emotion/styled';

export const Card = styled.div`
  margin: 
  0
  auto
  ${({ theme }) => theme.spacing(10)} 
  auto;

  max-width: ${({ theme }) => theme.spacing(100)};

  background-color: ${({ theme }) => theme.colors.Profile};
  border: ${({ theme }) => theme.border(1)} solid gray;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.div`
  padding: ${({ theme }) => theme.spacing(5)};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
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
  border-top: ${({ theme }) => theme.border(1)} solid gray;
  border-right: ${({ theme }) => theme.border(1)} solid gray;

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
