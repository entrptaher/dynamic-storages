import babel from "rollup-plugin-babel";

const plugins = [
  babel({
    runtimeHelpers: true,
    presets: ["@babel/preset-env"],
    plugins: [
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          loose: true
        }
      ],
      "@babel/plugin-transform-runtime"
    ]
  })
];

export default [
  {
    input: "src/index.js",
    output: {
      file: "build/index.js",
      format: "cjs"
    },
    plugins
  },
  {
    input: "src/worker1.js",
    output: {
      file: "build/worker1.js",
      format: "cjs"
    },
    plugins
  }
];
