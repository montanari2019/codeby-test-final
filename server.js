const express = require("express");
const { resolve } = require("path");

const app = express();

app.use("/", express.static(
    resolve(__dirname, "./build"))
);

app.listen(process.env.PORT || 3000, (erro) => {
  if (erro) {
    return console.error(erro);
  }

  console.log("Deploy deu certo, essa vaga é sua");
});
