import { withValidManifest } from "@coinbase/onchainkit/minikit";
import { minikitConfig } from "../../../minikit.config";

export async function GET() {
  return Response.json(withValidManifest(minikitConfig));
}

  "baseBuilder": {
    "allowedAddresses": ["0x818c0aAb63BC459d9C3961649dBA54767FCeaCF5"]
  }
