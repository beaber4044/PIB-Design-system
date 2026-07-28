import { Badge } from 'design-system'

export function Tones() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge tone="neutral">일반</Badge>
      <Badge tone="brand">추천</Badge>
      <Badge tone="success">배송완료</Badge>
      <Badge tone="warning">품절임박</Badge>
      <Badge tone="danger">긴급</Badge>
      <Badge tone="info">신규</Badge>
    </div>
  )
}

export function InContext() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ fontSize: 14, color: '#111827' }}>무선 이어폰 프로</span>
      <Badge tone="danger">-30%</Badge>
      <Badge tone="brand">베스트</Badge>
    </div>
  )
}
