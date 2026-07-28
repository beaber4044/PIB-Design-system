import { Avatar } from 'design-system'

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar size="sm" name="김민지" />
      <Avatar size="md" name="김민지" />
      <Avatar size="lg" name="김민지" />
    </div>
  )
}

export function ImageMode() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar
        size="sm"
        name="이서준"
        src="https://i.pravatar.cc/80?img=12"
      />
      <Avatar
        size="md"
        name="이서준"
        src="https://i.pravatar.cc/96?img=12"
      />
      <Avatar
        size="lg"
        name="이서준"
        src="https://i.pravatar.cc/112?img=12"
      />
    </div>
  )
}

export function InitialsFallback() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar name="박서연" />
      <Avatar name="최도윤" />
      <Avatar name="정하은" />
      <Avatar />
    </div>
  )
}
