"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Posts = function Posts(_ref) {
  var posts = _ref.posts,
      loading = _ref.loading;

  if (loading) {
    return _react.default.createElement("h1", null, "Loading...");
  }

  console.log(posts);
  return _react.default.createElement("ul", {
    className: "list-group mb-4"
  }, posts.map(function (post) {
    return _react.default.createElement("li", {
      className: "list-group-item",
      key: post.id
    }, post.title);
  }));
};

var _default = Posts;
exports.default = _default;

//# sourceMappingURL=Posts.jsx.map