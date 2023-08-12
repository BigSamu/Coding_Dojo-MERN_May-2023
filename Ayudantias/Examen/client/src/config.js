const environments = {
    development: "http://localhost:8080",
    production: "/api",
};

const baseURL = environments[process.env.NODE_ENV] || "";

export { baseURL };