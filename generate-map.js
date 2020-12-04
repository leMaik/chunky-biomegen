function rgbToHex({ r, g, b }) {
  return (
    ("0" + r.toString(16)).slice(-2) +
    ("0" + g.toString(16)).slice(-2) +
    ("0" + b.toString(16)).slice(-2)
  ).toUpperCase();
}

const biomes = require("./biomes.json");
const biomeProfile = require("./default_biome_profile.json");
const mapColors = {};
for (const biome of biomes) {
  const [, color] = biomeProfile.colorMap.find(([id]) => id === biome.id);
  mapColors[biome.name] = `#${rgbToHex(color)}`;
}
console.log(JSON.stringify(mapColors, null, 2));
