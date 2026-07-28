import { Icon } from 'design-system'

const items: { name: Parameters<typeof Icon>[0]['name']; label: string }[] = [
  { name: 'home', label: '홈' },
  { name: 'search', label: '검색' },
  { name: 'cart', label: '장바구니' },
  { name: 'heart', label: '찜' },
  { name: 'user', label: '내 정보' },
  { name: 'bell', label: '알림' },
  { name: 'gift', label: '혜택' },
  { name: 'star', label: '리뷰' },
]

export function IconGrid() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16,
        width: 320,
      }}
    >
      {items.map((item) => (
        <div
          key={item.name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            color: '#374151',
          }}
        >
          <Icon name={item.name} size={22} />
          <span style={{ fontSize: 12 }}>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
      <Icon name="star" size={16} />
      <Icon name="star" size={24} />
      <Icon name="star" size={32} />
    </div>
  )
}

export function BrandColored() {
  return (
    <div style={{ display: 'flex', gap: 16, color: '#03c75a' }}>
      <Icon name="check" size={24} />
      <Icon name="cart" size={24} />
      <Icon name="tag" size={24} />
    </div>
  )
}
