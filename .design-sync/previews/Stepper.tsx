import { Stepper } from 'design-system'

export function NearMin() {
  return <Stepper value={1} min={1} max={20} onChange={() => {}} />
}

export function MidRange() {
  return <Stepper value={3} min={1} max={20} onChange={() => {}} />
}

export function NearMax() {
  return <Stepper value={10} min={1} max={10} onChange={() => {}} />
}
