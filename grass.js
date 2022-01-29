const fs = require("fs");
var { PNG } = require("pngjs");
var data = fs.readFileSync("grass.png");
var png = PNG.sync.read(data);

module.exports = ({ rainfall, temperature, name }) => {
  if (name === "swamp" || name === "swamp_hills") {
    // swamp grass color is hard-coded
    return "6A7039";
  }
  if (name.includes("badlands")) {
    // badlands grass color is hard-coded
    return "90814D";
  }

  const t = Math.min(1, Math.max(0, temperature));
  const r = Math.min(1, Math.max(0, rainfall));
  const x = Math.floor((1 - t) * (png.width - 1));
  const y = Math.floor((1 - r * t) * (png.height - 1));
  const rgba = png.data.slice((y * png.width + x) * 4);

  if (name.includes("dark_forest")) {
    // dark forest grass color is averaged with 0x28340A to produce the final color
    rgba[0] = Math.floor((rgba[0] + 0x28) / 2)
    rgba[0] = Math.floor((rgba[0] + 0x34) / 2)
    rgba[0] = Math.floor((rgba[0] + 0x0A) / 2)
  }

  return (
    ("0" + rgba[0].toString(16)).slice(-2) +
    ("0" + rgba[1].toString(16)).slice(-2) +
    ("0" + rgba[2].toString(16)).slice(-2)
  ).toUpperCase();
};
