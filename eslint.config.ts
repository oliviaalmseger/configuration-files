import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,

  {
    rules: {
      camelcase: ['error', { properties: 'always' }],
      'comma-dangle': ['error', 'always-multiline'],
      curly: ['error', 'all'],
      semi: ['error', 'always'],
      'no-var': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'warn',
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    },
  },
);

/*  ALTERNATIV: 

rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Prevent unused variables while ignoring intentional `_` placeholders
      'no-console': 'warn', // Encourage removal of `console.log` in production code
      eqeqeq: 'error', // Enforce strict equality checks (=== and !==)
      curly: 'error', // Require braces for all control structures for clarity
      'default-case': 'error', // Ensure switch statements have a default case to handle unexpected values
      'dot-notation': 'error', // Prefer accessing properties with dot notation where possible
      'no-else-return': 'error', // Disallow unnecessary `else` after `return` for cleaner code
      'no-empty-function': 'warn', // Avoid empty functions unless explicitly required
      'no-eval': 'error', // Disallow `eval()` for security and performance reasons
      'no-implicit-globals': 'error', // Prevent global variable declarations to avoid conflicts
      'no-var': 'error', // Enforce `let` or `const` instead of `var` for block scoping
      'prefer-const': 'error', // Prefer `const` for variables that are not reassigned
      'prefer-template': 'error', // Use template literals instead of string concatenation
      'no-lone-blocks': 'error', // Disallow unnecessary nested blocks
      'no-useless-return': 'error', // Remove redundant `return` statements
      'consistent-return': 'error', // Ensure functions consistently return a value or `undefined`
      'no-unreachable': 'error', // Disallow unreachable code after `return`, `throw`, `break`, or `continue`
      'no-multi-spaces': 'error', // Disallow multiple spaces for cleaner formatting
      'no-duplicate-imports': 'error', // Combine duplicate imports into a single statement
      'spaced-comment': ['error', 'always'], // Enforce space after `//` or `/*` for readable comments
      'no-extra-semi': 'error', // Disallow unnecessary semicolons
      'no-new-object': 'error', // Use object literals instead of `new Object()`
      'no-array-constructor': 'error', // Use array literals instead of `new Array()`
      'object-shorthand': ['error', 'always'], // Use shorthand syntax for object properties and methods
      'no-floating-decimal': 'error', // Disallow leading/trailing decimal points in numeric literals
      'no-trailing-spaces': 'error', // Disallow trailing spaces at the end of lines
      semi: ['error', 'always'], // Enforce semicolons at the end of statements
      quotes: ['error', 'single', { avoidEscape: true }], // Use single quotes unless escaping
      'comma-dangle': ['error', 'never'], // Disallow trailing commas in object and array literals
      'arrow-spacing': ['error', { before: true, after: true }], // Enforce spacing around arrow functions
      'key-spacing': ['error', { beforeColon: false, afterColon: true }], // Enforce consistent spacing between keys and values
      'block-spacing': ['error', 'always'], // Enforce space inside single-line blocks
      'eol-last': ['error', 'always'], // Enforce a newline at the end of files
      indent: ['error', 2], // Enforce 2-space indentation for readability
      camelcase: ['error', { properties: 'never' }], // Enforce camelCase for variable and function names
      'array-bracket-spacing': ['error', 'never'], // Disallow spaces inside array brackets
      'object-curly-spacing': ['error', 'always'], // Enforce consistent spacing inside object literals
      'brace-style': ['error', '1tbs'], // Enforce one true brace style for blocks
      'func-call-spacing': ['error', 'never'], // Disallow spaces between function names and their invocations
      'keyword-spacing': ['error', { before: true, after: true }] // Enforce consistent spacing before/after keywords
    }
*/ 
