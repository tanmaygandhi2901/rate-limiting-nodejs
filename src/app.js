const express = require("express");
const app = express();
const rateLimitMiddleware = require("./middlewares/rateLimit");

app.use(rateLimitMiddleware);
app.get("/blog", (req, res) => {
  res.status(200).json({
    success: true,
    data: {},
    message: "Successfully fetched blog",
  });
});

app.get("/blog/post", (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      author: "Tanmay Gandhi",
      title: "Rate limiting - NodeJS",
    },
    message: "Successfully fetched blog post",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
