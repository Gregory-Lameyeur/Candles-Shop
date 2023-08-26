const path = require('path');

module.exports = {
  entry: './home.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'), // Chemin du répertoire de sortie (par exemple, 'dist')
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // ... règles des loaders ...
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Inclure les extensions pour TypeScript
  },
};
