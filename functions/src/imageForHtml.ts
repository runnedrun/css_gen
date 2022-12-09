import { getFirestore } from "firebase-admin/firestore"
import * as functions from "firebase-functions"
import { ThemeGenImageJob } from "../../types/ThemeGenJob"

export const runThemeGenHtmlImageJob = functions.firestore
  .document("themeGenImageJobs/{docId}")
  .onCreate(async (change) => {
    const firestore = getFirestore()
    const data = change.data() as ThemeGenImageJob
  })
