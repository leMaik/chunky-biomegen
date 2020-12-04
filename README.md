# chunky-biomegen

This repository contains scripts to generate Chunky's biomes list from a JSON file that contains all biomes (`biomes.json`) and a biome color map file (`default_biome_profile.json`, which is taken from [Amidst](https://github.com/toolbox4minecraft/amidst/blob/master/src/main/resources/amidst/mojangapi/default_biome_profile.json)).

## Usage

0. Update biomes in `biomes.json` and the map colors in `default_biome_profile.json`
1. Generate the `map.json`: `node generate-map.js > map.json`
2. Generate the Java code for Chunky: `node generate.js > test.java`
3. Check if anything is missing: `node test-map.js`

## Known issues

- The map color for the _Dripstone Caves_ biome was not yet in Amidst at the time of writing so it was set to `#7B6254`
- The _rain_ value for the _Dripstone Caves_ couldn't be figured out properly and was thus set to 0.4 (matching the _Plains_ biome)
