module.exports = [
    {
      ignores: ['node_modules/**'],
    },
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {
        'no-unused-vars': 'error',
        'prefer-const': 'error', 
        'eqeqeq': 'error',
      },
    },
  ];
  