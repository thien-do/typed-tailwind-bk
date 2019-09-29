const postcss = require("postcss")
const tailwind = require("tailwindcss")
const fs = require("fs");

const css = "@tailwind utilities;\n";

const config = {
  theme: {},
  variants: {},
  plugins: [],
};

const foo = (node) => {
  switch (node.type) {
    case "rule":
      return [node.selector];
    case "atrule":
      return node.nodes.flatMap(foo);
    default:
      throw new Error(`Unsupported node type: ${node.type}`)
  }
};

postcss([tailwind(config)])
  .process(css, { from: undefined })
  .then((result) => {
    const nodes = result.root.nodes;
    const classes = nodes.flatMap(foo);
    console.log(classes);
    fs.writeFile('output.txt', classes.join("\n"), () => true);
  });
