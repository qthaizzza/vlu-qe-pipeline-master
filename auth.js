function login(username, password) {
    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Đăng nhập hợp lệ
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = login;
