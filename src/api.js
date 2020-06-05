/**

 @Name：接口文件
 @Author：王达浩
 */
layui.define([], function (exports) {
  exports("api", {
    notice_findById: "http://kxinggs.cn:8080/web-manager/notice/findById.do",
    notice_findAllPage: "http://kxinggs.cn:8080/web-manager/notice/findAllPage.do",
    notice_freeze: "http://kxinggs.cn:8080/web-manager/notice/freeze.do",
    notice_unfreeze: "http://kxinggs.cn:8080/web-manager/notice/unfreeze.do",
    role_freeze: "http://kxinggs.cn:8080/web-manager/role/freeze.do",
    role_unfreeze: "http://kxinggs.cn:8080/web-manager/role/unfreeze.do",
    role_findRolePageList: "http://kxinggs.cn:8080/web-manager/role/findRolePageList.do",
    loginLog_findLoginLogList: "http://kxinggs.cn:8080/web-manager/loginLog/findLoginLogList.do",
    loginLog_delete: "http://kxinggs.cn:8080/web-manager/loginLog/delete.do",
    operationLog_findOperLogList: "http://kxinggs.cn:8080/web-manager/operationLog/findOperLogList.do",
    operationLog_delete: "http://kxinggs.cn:8080/web-manager/operationLog/delete.do",

    login: "http://kxinggs.cn:8080/web-manager/login.do",
    user_findUserList: "http://kxinggs.cn:8080/web-manager/user/findUserList.do",
    user_isDelete: "http://kxinggs.cn:8080/web-manager/user/isDelete.do",
    user_unfreeze: "http://kxinggs.cn:8080/web-manager/user/unfreeze.do",
    user_freeze: "http://kxinggs.cn:8080/web-manager/user/freeze.do",
    role_findAllRole: "http://kxinggs.cn:8080/web-manager/role/findAllRole.do",
    post_findAllPost: "http://kxinggs.cn:8080/web-manager/post/findAllPost.do",
    user_add: "http://kxinggs.cn:8080/web-manager/user/add.do",

    role_add: "http://kxinggs.cn:8080/web-manager/role/add.do",
    role_logicDelete: "http://kxinggs.cn:8080/web-manager/role/logicDelete.do",
    menu_treeLoad: "http://kxinggs.cn:8080/web-manager/menu/treeLoad.do",
    role_setAuthority: "http://kxinggs.cn:8080/web-manager/role/setAuthority.do",
    role_update: "http://kxinggs.cn:8080/web-manager/role/update.do",
    post_findPostList: "http://kxinggs.cn:8080/web-manager/post/findPostList.do",
    post_add: "http://kxinggs.cn:8080/web-manager/post/add.do",
    post_freeAccount: "http://kxinggs.cn:8080/web-manager/post/freeAccount.do",
    post_unFreeAccount: "http://kxinggs.cn:8080/web-manager/post/unFreeAccount.do",
    post_update: "http://kxinggs.cn:8080/web-manager/post/update.do",
    post_logicDelete: "http://kxinggs.cn:8080/web-manager/post/logicDelete.do",

    user_updateUserUnitPost: "http://kxinggs.cn:8080/web-manager/user/updateUserUnitPost.do",
    notice_add: "http://kxinggs.cn:8080/web-manager/notice/add.do",
    notice_update: "http://kxinggs.cn:8080/web-manager/notice/update.do",

    menu_MenuTree: "http://kxinggs.cn:8080/web-manager/menu/MenuTree.do",
    menu_firstMenu: "http://kxinggs.cn:8080/web-manager/menu/firstMenu.do",
    menu_secondMenu: "http://kxinggs.cn:8080/web-manager/menu/secondMenu.do",
    menu_add: "http://kxinggs.cn:8080/web-manager/menu/add.do",
    menu_delete: "http://kxinggs.cn:8080/web-manager/menu/delete.do",
    menu_findAll: "http://kxinggs.cn:8080/web-manager/menu/findAll.do",
  });
});