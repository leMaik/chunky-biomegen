const tint = require("./map.json");
const biomes = require("./biomes.json");

for (const biome of Object.keys(tint)) {
  if (!biomes.some((b) => b.name === biome)) {
    console.log(`Unknown biome: ${biome}`);
    process.exitCode = -1;
  }
}
for (const biome of biomes) {
  if (!tint[biome.name]) {
    console.log(`Missing map color for biome: ${biome.name}`);
    process.exitCode = -1;
  }
}
