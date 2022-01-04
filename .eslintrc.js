module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:jsx-a11y/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'react/function-component-definition': 'off',
        'react/react-in-jsx-scope': 0,
        indent: ['error', 4],
        'linebreak-style': 0,
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'no-console': 'off',
        'comma-dangle': ['error', 'never']
    }
};
