const login = require("./auth");

describe("Regression Test - Login", () => {

    test("Sai mật khẩu", () => {
        expect(login("admin", "wrong")).toBe(false);
    });

    test("Username rỗng", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Password rỗng", () => {
        expect(login("admin", "")).toBe(false);
    });

    test("Username không tồn tại", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Password chứa ký tự đặc biệt", () => {
        expect(login("admin", "@#$%^")).toBe(false);
    });

    test("Username chứa ký tự đặc biệt", () => {
        expect(login("@dmin", "123")).toBe(false);
    });

    test("Tài khoản bị khóa", () => {
        expect(login("locked", "123")).toBe(false);
    });

    test("Sai cả username và password", () => {
        expect(login("user", "wrong")).toBe(false);
    });

});
