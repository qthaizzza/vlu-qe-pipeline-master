const login = require("./auth");

test("Smoke Test - admin/123 đăng nhập thành công", () => {
    expect(login("admin", "123")).toBe(true);
});
