import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: { projectId: 'wwt4wlxz', dataset: 'production' },
  // Hosted Studio URL: https://fluidimensions.sanity.studio
  studioHost: 'fluidimensions',
  deployment: { appId: 'wz0setykbcq57nvqssune1bt' },
});
