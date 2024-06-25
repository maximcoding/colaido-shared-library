"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatus = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType["Private"] = "Private";
    UserType["Business"] = "Business";
    UserType["Admin"] = "Admin";
    UserType["ContentManager"] = "ContentManager";
    UserType["CustomerSupport"] = "CustomerSupport";
})(UserType || (exports.UserType = UserType = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["Unconfirmed"] = "Unconfirmed";
    UserStatus["Confirmed"] = "Confirmed";
    UserStatus["Banned"] = "Banned";
    UserStatus["Deactivated"] = "Deactivated";
    UserStatus["Deleted"] = "Deleted";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
