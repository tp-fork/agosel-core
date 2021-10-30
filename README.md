# Agileopsvn Serverless Core

## Run on local

Requries:

- Node JS
- Install [Yalc globally](https://github.com/wclr/yalc)

```bash
# install libs
yarn

# register CLI on local
yarn link

# register/update package on local
yarn build
yalc publish
```

## Structure

## TS config

```json
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "commonjs",
    "moduleResolution": "node",
    "declaration": true,
    "strict": true,
    "noImplicitAny": true /* Raise error on expressions and declarations with an implied 'any' type. */,
    "strictNullChecks": true /* Enable strict null checks. */,
    "strictFunctionTypes": true /* Enable strict checking of function types. */,
    "noUnusedLocals": true /* Report errors on unused locals. */,
    "noUnusedParameters": true /* Report errors on unused parameters. */,
    "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
    "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */,
    "importHelpers": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "sourceMap": true,
    "outDir": "dist/",
    "types": ["node", "jest"],
    "lib": ["es2018", "DOM"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

## eslint config

```bash
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## prettier config

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

## Upgrade

```bash
yarn upgrade --latest
```
