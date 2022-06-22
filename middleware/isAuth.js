import jwt from "jsonwebtoken";
import ash from "express-async-handler";
export const isAuth = ash((req, res, next) => {
  const cook = req.headers.cookie;

  let token = "";

  //Extracting token from cookies
  for (
    let i = cook.search("token=") + 6;
    cook[i] != ";" && i < cook.length;
    i++
  ) {
    token += cook[i];
  }

  //Decoding token
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    err.statusCode = 500;

    throw err;
  }

  if (!decodedToken) {
    console.log(error);
  }

  req.user_id = decodedToken.id;

  next();
});
