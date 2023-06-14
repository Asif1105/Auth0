module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'import',
        'simple-import-sort'
    ],
    extends: [
        'standard',
        'standard-react',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    ignorePatterns: ['/*.{config}.*/'],
    env: {
        browser: true,
        node: true,
        jest: true
    },
    globals: {
        cookie: true,
        console: true,
        window: true
    },
    rules: {
        'yoda': 2,
        'new-cap': 2,
        'no-class-assign': 2,
        'no-mixed-operators': 2,
        'no-duplicate-imports': 2,
        'react-hooks/rules-of-hooks': 2,
        'import/first': 2,
        'import/newline-after-import': [2, { "count": 1 }],
        'import/no-duplicates': 2,
        'import/no-absolute-path': 2,
        'simple-import-sort/imports': 0,
        'indent': [2, 2, { 'SwitchCase': 1 }],
        '@typescript-eslint/indent': [2, 2, { 'SwitchCase': 1 }],
        'semi': [2, 'always'],
        'quotes': [2, 'single'],
        'max-len': [2, {
            code: 120,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'max-params': [2, 3],
        'object-curly-spacing': 2,
        'space-before-function-paren': [2, 'never'],
        'react/jsx-first-prop-new-line': [2, 'never'],
        'no-console': 1,
        'operator-linebreak': [2],
        'no-unneeded-ternary': 1,
        'react/self-closing-comp': 1,
        'react/no-multi-comp': [1, { 'ignoreStateless': true }],
        '@typescript-eslint/prefer-optional-chain': 1,
        '@typescript-eslint/type-annotation-spacing': [1, { "before": false, "after": true }],
        '@typescript-eslint/prefer-nullish-coalescing': 1,
        'keyword-spacing': [2, { before: true }],
        'react/jsx-no-bind': [2, {
            ignoreRefs: true,
            allowFunctions: true,
            allowArrowFunctions: false,
            allowBind: false
        }],
        'no-multi-spaces': [1, {
            exceptions: {
                VariableDeclarator: true,
                AssignmentExpression: true,
                Property: true
            }
        }],
        'key-spacing': [1, {
            multiLine: {
                beforeColon: true,
                afterColon: true
            },
            align: {
                on: 'colon',
                beforeColon: true,
                afterColon: true
            }
        }],
        'react/jsx-closing-bracket-location': [1, { selfClosing: 'props-aligned', nonEmpty: 'after-props' }],
        'spaced-comment': [1, 'always', { block: { exceptions: ['-'] } }],
        'no-trailing-spaces': [1, {
            ignoreComments: true,
            skipBlankLines: true
        }],
        'camelcase': [1, { ignoreGlobals: true, properties: 'always' }],
        'no-unused-vars': 0,
        'space-infix-ops': 0,
        'no-throw-literal': 1,
        'jsx-handler-names': [0, {
            eventHandlerPrefix: 'off',
            eventHandlerPropPrefix: 'off'
        }],
        'no-useless-escape': 1,
        'multiline-ternary': [2, 'always-multiline'],
        'no-use-before-define': [2, { "classes": true }],
        'array-callback-return': [1, { allowImplicit: true, checkForEach: true }],
        'no-unused-expressions': [1, { allowShortCircuit: true, allowTernary: true }],
        'template-curly-spacing': [1, 'never'],
        'no-irregular-whitespace': [1, { skipStrings: false, skipComments: true }],
        'react/no-unused-prop-types': 0,
        '@typescript-eslint/ban-types': [0,
            {
                types: {
                    String: {
                        message: "Use \'string\' instead",
                        fixWith: "string"
                    }
                }
            }
        ],
        '@typescript-eslint/no-explicit-any': [0, { fixToUnknown: true, ignoreRestArgs: true }],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/explicit-function-return-type': 0
    },
    "overrides": [{
        "files": ["*.ts", "*.js"],
        "rules": {
            "@typescript-eslint/explicit-function-return-type": 0
        }
    }]
};