module.exports = {
    "rootDir": "./packages",
    "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "json5"],
    "moduleNameMapper": {
        "^@shop/app/(.+)$": "<rootDir>/app/$1",
        "^@shop/core/(.+)$": "<rootDir>/core/$1",
        "^@shop/dls/(.+)$": "<rootDir>/dls/$1"
    },
    "modulePathIgnorePatterns": ["<rootDir>/dls/"],
    "moduleDirectories": ["node_modules", "src"],
    "testRegex": ".test.(ts|js|tsx|jsx)",
    "collectCoverage": true,
    "collectCoverageFrom": [
        "<rootDir>/app/src",
        "<rootDir>/core/src"
    ],
    "transform": {
        "^.+\\.json5?$": "json5-jest",
        '^.+\\.tsx?$': 'babel-jest'
    },
    "coveragePathIgnorePatterns": [
        "node_modules",
        "__mocks__"
    ],
    "coverageDirectory": "../testReports",
    "coverageThreshold": {
        "global": {
            "branches": 50,
            "functions": 80,
            "lines": 90,
            "statements": 100
        }
    },
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["../test.config.js"]
};