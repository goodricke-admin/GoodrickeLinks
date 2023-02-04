export function checkPassword(password) {
    return password == process.env.ADMIN_PASSWORD;
}