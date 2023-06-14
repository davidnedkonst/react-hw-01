export const theme1 = Object.freeze({
    colors: {
        tableHead: 'rgb(30, 191, 191)',
        TableRow1: 'rgb(232, 223, 224)',
        TableRow2: 'rgb(167, 166, 166)',
        Profile: 'rgb(229, 236, 200)',
        FriendCard: 'rgb(200, 230, 236)',
        isOffline: 'red',
        isOnline: 'green',
    },

    spacing: (value) => `${4 * value}px`,
    border: (value) => `${2 * value}px`,
})