/* eslint-disable import/no-extraneous-dependencies */
const CracoAlias = require("craco-alias")

module.exports = {
  babel: {
    plugins: [["effector/babel-plugin", { addLoc: true }]],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
      },
    },
  ],
}
