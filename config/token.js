import jwt from "jsonwebtoken";

const tokenGenerator = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "2d",
  });
};

export default tokenGenerator;
