import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'FluiDimensions',
  projectId: 'wwt4wlxz',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
