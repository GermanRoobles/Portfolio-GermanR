import type { LucideIcon } from 'lucide-react'
import {
  ChartColumn,
  Cloud,
  LayoutGrid,
  Server,
  Store,
  Workflow,
} from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  'layout-grid': LayoutGrid,
  server: Server,
  store: Store,
  'chart-column': ChartColumn,
  workflow: Workflow,
  cloud: Cloud,
}

export function SkillGroupIcon({ name }: { name: string }) {
  const Icon = ICONS[name] ?? LayoutGrid
  return <Icon aria-hidden className="skill-card__svg" strokeWidth={2} />
}
