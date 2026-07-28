import { ProgressBar } from 'design-system'

export function Sweep() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <ProgressBar value={3} showLabel />
      <ProgressBar value={35} showLabel />
      <ProgressBar value={68} showLabel />
      <ProgressBar value={100} showLabel />
    </div>
  )
}

export function NoLabel() {
  return (
    <div style={{ width: 320 }}>
      <ProgressBar value={54} />
    </div>
  )
}

export function CustomMax() {
  return (
    <div style={{ width: 320 }}>
      <ProgressBar value={7} max={10} showLabel />
    </div>
  )
}
