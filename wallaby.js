module.exports = function(wallaby){
    return {
        "files": [
            "src/**/*.ts",
            "!src/**/*.spec.ts"
            ],
        "tests": [
            "src/**/*.spec.ts"
            ],
        "testFramework": "mocha",
        "debug": true,
        "env": { type: "node" }
    };
};