import { Timestamp } from "firebase-admin/firestore"

export enum HtmlToImageJobStatus {
  pending,
  inProgress,
  complete,
}

export enum ModelType {
  ThemeGen,
}

export type HTMLToImageItem = {
  html: string
  finishedImageUrl: string
  startedAt: Timestamp
  finishedAt: Timestamp
}

export type HTMLToImageJob = {
  createdAt: Timestamp
  completedAt: Timestamp
  forModel: ModelType
  jobStatus: HtmlToImageJobStatus
  items: Record<string, HTMLToImageItem>
}
