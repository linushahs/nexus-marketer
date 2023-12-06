import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./studio/schemas";

const config = defineConfig({
  name: "default",
  title: "nexus-blog-cms",

  projectId: "jze529mi",
  dataset: "production",
  apiVersion: "2022-03-07",

  plugins: [deskTool()],

  basePath: "/admin",
  schema: {
    types: schemaTypes,
  },
});

export default config;
