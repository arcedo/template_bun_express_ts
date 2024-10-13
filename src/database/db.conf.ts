export default {
    host: process.env.DB_HOST ?? "localhost",
    port: process.env.DB_PORT ?? "3306",
    user: process.env.DB_USER ?? "root",
    database: process.env.DB_NAME ?? "some_user",
    password: process.env.DB_PASS ?? "some_password",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};
