import { getFirestore } from "firebase-admin/firestore"
import * as functions from "firebase-functions"
import App from "../../App"
import { generateThemeGeneHtml } from "../../generateThemeGenHtml"
import { htmlArrayToImages } from "./helpers/htmlArrayToImages"

const components = [App]

//http://localhost:5011/demo-dataset-builder/us-central1/testThemeGenEndpoint

export const testThemeGenEndpoint = functions.https.onRequest(
  async (req, res) => {
    const firestore = getFirestore()
    const htmlStrings = generateThemeGeneHtml(components)
    const images = await htmlArrayToImages(htmlStrings)
    res.type("image/png").send(images[0])
  }
)
