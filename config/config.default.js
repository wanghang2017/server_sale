module.exports = {
    keys: "xiaowang",
    mysql: {
        client: {
            host: "47.94.21.76",
            port: "3306",
            user: "user",
            password: "080894",
            database: "test"
        },
        app: true,
        agent: false,
    },
    security : {
        csrf: {
            enable: false,
        },
    }
}