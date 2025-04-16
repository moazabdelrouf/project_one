const User = require("../models/customerSchema");
var moment = require("moment");

// Main Page (get)
const user_index_get = (req, res) => {
 // result ==> array of objects
 User.find()
  .then((result) => {
   res.render("index", { arr: result, moment: moment });
  })
  .catch((err) => {
   console.log(err);
  });
};

// Edit Page (get)
const user_edit_get = (req, res) => {
 User.findById(req.params.id)
  .then((result) => {
   res.render("user/edit", { obj: result, moment: moment });
  })
  .catch((err) => {
   console.log(err);
  });
};

// View Page (get)
const user_view_get = (req, res) => {
 // result ==> object
 User.findById(req.params.id)
  .then((result) => {
   res.render("user/view", { obj: result, moment: moment });
  })
  .catch((err) => {
   console.log(err);
  });
};

// Search Page (post)
const user_search_get = (req, res) => {
 const searchText = req.body.searchText.trim();
 User.find({ $or: [{ firstName: searchText }, { lastName: searchText }] })
  .then((result) => {
   res.render("user/search", { arr: result, moment: moment });
  })
  .catch((err) => {
   console.log(err);
  });
};

// Delete Button (delete)
const user_delete_delete = (req, res) => {
 User.deleteOne({ _id: req.params.id })
  .then((result) => {
   res.redirect("/");
  })
  .catch((err) => {
   console.log(err);
  });
};

// Update feature (put)
const user_update_put = (req, res) => {
 User.updateOne({ _id: req.params.id }, req.body)
  .then((result) => {
   res.redirect("/");
  })
  .catch((err) => {
   console.log(err);
  });
};

// Get Add
const user_add_get = (req, res) => {
 res.render("user/add");
};

// Search Post
const user_index_post = (req, res) => {
 User.create(req.body)
  .then(() => {
   res.redirect("/");
  })
  .catch((err) => {
   console.log(err);
  });
};

module.exports = {
 user_index_get,
 user_edit_get,
 user_view_get,
 user_search_get,
 user_delete_delete,
 user_update_put,
 user_add_get,
 user_index_post,
};
