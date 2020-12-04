const { camelCase } = require("camel-case");
const getGrassColor = require("./grass");
const getFoliageColor = require("./foliage");

const biomes = require("./biomes.json");
const water = require("./water.json");
const map = require("./map.json");

for (const biome of biomes) {
  if (water[biome.name]) {
    console.log(
      `private static final Biome ${camelCase(biome.name)} = new Biome("${
        biome.displayName
      }", ${biome.temperature}, ${biome.rainfall}, 0x${
        map[biome.name]?.slice(1).toUpperCase() ?? "7E7E7E"
      }, 0x${getGrassColor(biome)}, 0x${getFoliageColor(biome)}, 0x${water[
        biome.name
      ].slice(1).toUpperCase()});`
    );
  } else {
    console.log(
      `private static final Biome ${camelCase(biome.name)} = new Biome("${
        biome.displayName
      }", ${biome.temperature}, ${biome.rainfall}, 0x${
        map[biome.name]?.slice(1).toUpperCase() ?? "7E7E7E"
      }, 0x${getGrassColor(biome)}, 0x${getFoliageColor(biome)});`
    );
  }
}

console.log("private static final Biome[] biomes = {");
for (let i = 0; i < 256 / 8; ++i) {
  for (let j = 0; j < 8; ++j) {
    process.stdout.write(
      `${camelCase(
        biomes.find((b) => b.id === i * 8 + j)?.name ?? "unknown"
      )}, `
    );
  }
  console.log("");
}
console.log("};");
