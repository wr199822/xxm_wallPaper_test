"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_common_theme2 = common_vendor.resolveComponent("common-theme");
  _easycom_common_theme2();
}
const _easycom_common_theme = () => "../../components/common-theme/common-theme.js";
if (!Math) {
  _easycom_common_theme();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(12, (item, k0, i0) => {
      return {
        a: "2c376c47-0-" + i0
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
