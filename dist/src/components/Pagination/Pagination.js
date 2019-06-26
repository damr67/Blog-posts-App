"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Pagination = function Pagination(_ref) {
  var postsPerPage = _ref.postsPerPage,
      totalPosts = _ref.totalPosts,
      paginate = _ref.paginate;
  var numPages = [];

  for (var i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    numPages.push(i);
  }

  return _react.default.createElement("ul", {
    className: "pagination mb-4"
  }, numPages.map(function (num) {
    return _react.default.createElement("li", {
      className: "page-item",
      key: num
    }, _react.default.createElement("a", {
      onClick: function onClick() {
        return paginate(num);
      },
      href: "!#",
      className: "page-link"
    }, num));
  }));
};

var _default = Pagination;
exports.default = _default;

//# sourceMappingURL=Pagination.jsx.map