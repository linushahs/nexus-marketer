"use client";

import config from "../../../../sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function NextAdminPage() {
  return <NextStudio config={config} />;
}
