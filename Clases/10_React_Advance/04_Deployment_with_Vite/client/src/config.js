const environments = {
  development: "http://localhost:8080",
  production: "",
};

const baseUrl = environments[process.env.NODE_ENV] || "";

export { baseUrl };
