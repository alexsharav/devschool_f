// postcss.config.mjs
import postcssNesting from 'postcss-nesting';

export default {
  plugins: {
    'postcss-nesting': postcssNesting,
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
