const express = require("express");
const router = express.Router();
const userServices = require("../service/user");
// ----------------------------------------------
// GET USERS
// ----------------------------------------------

router.get("/", (req, res) => {
  const users = userServices.getUsers();
  res.json(users);
});

// ----------------------------------------------
// GET A USER
// ----------------------------------------------

// queryString
// router.get("/", (req, res) => {

//   const queryStringId = parseInt(req.query.id);
//   const user = users.filter((user) => user.id === queryStringId);
//   res.json(user);
// });

// params
router.get("/:id", (req, res) => {
  const paramsId = parseInt(req.params.id);
  const user = userServices.getUser(paramsId);
  res.json(user);
});

// ! SUBRESSOURCES
// params + subressources
// router.get("/:id/libraries", (req, res) => {
//   // const paramsId = parseInt(req.params.id);
//   // const user = users.filter((user) => user.id === paramsId);
//   // res.json(user);
//   res.send("get all libraries from a user");
// });

// // params + one subressource
// router.get("/:userId/libraries/:libraryId", (req, res) => {
//   // const paramsId = parseInt(req.params.id);
//   // const user = users.filter((user) => user.id === paramsId);
//   // res.json(user);
//   res.send("get one library from a user");
// });

// ----------------------------------------------
// POST A NEW USER
// ----------------------------------------------

router.post("/", (req, res) => {
  const { newUser } = req.body;
  const createdUser = userServices.createUser(newUser);
  res.json(createdUser);
});

// ----------------------------------------------
// PUT A USER
// ----------------------------------------------

router.put("/:id", (req, res) => {
  const { updateUser } = req.body;
  const paramsId = parseInt(req.params.id);
  const updatedUser = userServices.updateUser(paramsId, updateUser);
  res.json(updatedUser);
});

// ----------------------------------------------
// DELETE A USSER
// ----------------------------------------------

router.delete("/:id", (req, res) => {
  const paramsId = parseInt(req.params.id);
  const deleteUser = userServices.deleteUser(paramsId);
  res.json(deleteUser);
});

module.exports = router;
