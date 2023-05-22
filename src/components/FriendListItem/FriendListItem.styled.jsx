import styled from "@emotion/styled";

export const FriendCard = styled.li`
    margin: 0 auto 0 auto;
    max-width: 200px;
    padding: 1%;

    background-color: ${({ theme }) => theme.colors.FriendCard};
    border: 3px solid gray;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    align-Items: center;
    justify-content: flex-start;
    gap: 10%;
`;

export const Avatar = styled.img`
    width: 30%;
`;

export const Name = styled.p`
    fontSize: 20px;
    font-weight: bold;
`;

export const Led = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ isOnline, theme }) => isOnline ? theme.colors.isOnline : theme.colors.isOffline};
`;