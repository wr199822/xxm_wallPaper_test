"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.p({
          type: "cloud-download-filled",
          size: "22",
          color: "#2cb28b"
        }),
        c: common_vendor.p({
          type: "right",
          size: "22",
          color: "#a7a7a7"
        }),
        d: common_vendor.p({
          type: "star-filled",
          size: "22",
          color: "#2cb28b"
        }),
        e: common_vendor.p({
          type: "right",
          size: "22",
          color: "#a7a7a7"
        }),
        f: common_vendor.p({
          type: "chatboxes-filled",
          size: "22",
          color: "#2cb28b"
        }),
        g: common_vendor.p({
          type: "right",
          size: "22",
          color: "#a7a7a7"
        }),
        h: common_vendor.p({
          type: "paperplane-filled",
          size: "22",
          color: "#2cb28b"
        }),
        i: common_vendor.p({
          type: "right",
          size: "22",
          color: "#a7a7a7"
        }),
        j: common_vendor.p({
          type: "flag-filled",
          size: "22",
          color: "#2cb28b"
        }),
        k: common_vendor.p({
          type: "right",
          size: "22",
          color: "#a7a7a7"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
