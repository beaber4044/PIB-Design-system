import { ColorIcon, type ColorIconName } from 'design-system'

const names: ColorIconName[] = [
  'home',
  'calendar',
  'folder',
  'settings',
  'lightbulb',
  'like',
  'check',
  'bell',
  'star',
  'file',
]

function Row({ set }: { set: 'plump' | 'flex' }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {names.map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 56 }}>
          <ColorIcon name={name} set={set} size={32} />
          <span style={{ fontSize: 10.5, color: '#9a958f' }}>{name}</span>
        </div>
      ))}
    </div>
  )
}

export function Plump() {
  return <Row set="plump" />
}

export function Flex() {
  return <Row set="flex" />
}
