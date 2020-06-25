const router = require("express").Router();
const loginService = require("../services/login");

router.post("/", async (req, res) => {
  const { seatNo, ssn } = req.body;
  console.log(req.body);
  const user = await loginService.login(seatNo, ssn);

  if (!user) {
    return res
      .status(401)
      .json({ message: "invalid seat number or social security number" });
  }

  const userToken = {
    id: user.id,
    seatNo: user.seatNo,
    ssn: user.ssn,
    FullName: user.fullName,
  }; //Object.assign({}, user); //{ ...user };

  res.status(200).send({ userToken, seatNo: user.seatNo, ssn: user.ssn });
});

module.exports = router;
