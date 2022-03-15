function getLogin(req, res, next) {
  res.render("index", {
    title: "log in - Chat Application",
  });
}

// exporting modules
module.exports = {
  getLogin,
};
