"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_common_theme2 = common_vendor.resolveComponent("common-theme");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_common_theme2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_common_theme = () => "../../components/common-theme/common-theme.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_common_theme)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const pics = common_vendor.ref(["/common/images/wallpaper/banner1.jpg", "/common/images/wallpaper/banner2.jpg", "/common/images/wallpaper/banner3.jpg"]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(pics), (item, k0, i0) => {
          return {
            a: item
          };
        }),
        b: common_vendor.p({
          type: "sound-filled",
          size: "28",
          color: "#2aa47f"
        }),
        c: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        d: common_vendor.p({
          type: "right",
          size: "25",
          color: "#e4e4e4"
        }),
        e: common_vendor.p({
          type: "calendar-filled",
          size: "25",
          color: "#28b389"
        }),
        f: common_vendor.p({
          date: Date.now(),
          format: "dd日"
        }),
        g: common_vendor.f(8, (item, k0, i0) => {
          return {};
        }),
        h: common_assets._imports_0,
        i: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: "66f684ed-6-" + i0
          };
        }),
        j: common_vendor.p({
          isMore: false
        }),
        k: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
