
const users = [
        { "id" : "test", "pass" : "1234" },
        { "id" : "hong", "pass" : "1111" },
        { "id" : "test1234", "pass" : "test1234" }
];

export const getLoginData = (id, pass) => {
    const userIndex = users.findIndex(user => user.id === id && user.pass === pass);
    return userIndex;
}

export const getUserData = () => {
    return users;
}