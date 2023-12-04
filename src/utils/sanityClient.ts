import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "jze529mi",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

export default sanityClient;
