import { HTMLToImageItem, HTMLToImageJob, ModelType } from "./HtmlToImageJob"

export interface ThemGenImageItem extends HTMLToImageItem {
  componentName: string
  labelTailwindClasses: string[]
  labelGridPosition: string
  labelPixelPosition: { x: number; y: number }
}

export interface ThemeGenImageJob extends HTMLToImageJob {
  forModel: ModelType.ThemeGen
  items: Record<string, ThemGenImageItem>
}
