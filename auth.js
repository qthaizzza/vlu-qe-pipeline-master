function login(username, password) {
    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Đăng nhập hợp lệ
    if (username === "admin" && password === "9999") {
        return true;
    }

    // Các trường hợp đăng nhập không hợp lệ
    return false;
}

module.exports = login;
