const users = require("../mock/users");

const getUsers = () => {
  return users;
};

const getUser = (paramsId) => {
  const user = users.filter((user) => user.id === paramsId);
  return user;
};

const createUser = (newUser) => {
  let usersCopy = [...users];
  usersCopy.push({ id: users.length + 1, ...newUser });
  return usersCopy;
};

// ! refacto !
const updateUser = (paramsId, updateUser) => {
  users.forEach((user, index) => {
    if (user.id == paramsId) users[index] = { id: user.id, ...updateUser };
  });
  return true;
};

const deleteUser = (paramsId) => {
  users.forEach((user, index) => {
    if (user.id == paramsId) users.splice(index, 1);
  });
  return users;
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
