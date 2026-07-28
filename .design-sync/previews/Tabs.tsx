import { Tabs } from 'design-system'

const items = [
  { value: 'all', label: '전체', count: 128 },
  { value: 'clothing', label: '의류' },
  { value: 'beauty', label: '뷰티' },
  { value: 'life', label: '생활용품' },
]

export function Underline() {
  return <Tabs items={items} value="all" onChange={() => {}} variant="underline" />
}

export function Pill() {
  return <Tabs items={items} value="clothing" onChange={() => {}} variant="pill" />
}

export function Bordered() {
  return <Tabs items={items} value="beauty" onChange={() => {}} variant="bordered" />
}
