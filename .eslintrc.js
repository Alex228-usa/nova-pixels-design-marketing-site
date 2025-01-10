module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "next/core-web-vitals", // Next.js ESLint rules
        "plugin:@typescript-eslint/recommended", // TypeScript rules
        "plugin:next-on-pages/recommended" //CF Pages
    ],
    plugins: ["@typescript-eslint", "next-on-pages"],
    rules: {
        "next-on-pages/no-unsupported-configs": "warn"
    },
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
            },
        },
    },
};
