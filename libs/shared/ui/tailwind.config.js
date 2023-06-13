const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const tailwindWorkspacePreset = require('../../../tailwind-workspace-preset.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [tailwindWorkspacePreset],
};
