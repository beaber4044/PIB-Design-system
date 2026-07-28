import { Divider } from 'design-system'

export function InList() {
  return (
    <div style={{ maxWidth: 320, background: '#fff' }}>
      <div style={{ padding: '12px 4px' }}>
        <div style={{ fontSize: 14, color: '#111827' }}>주문 배송 조회</div>
        <div style={{ fontSize: 12, color: '#6b7280' }}>7월 26일 도착 예정</div>
      </div>
      <Divider />
      <div style={{ padding: '12px 4px' }}>
        <div style={{ fontSize: 14, color: '#111827' }}>쿠폰 및 적립금</div>
        <div style={{ fontSize: 12, color: '#6b7280' }}>사용 가능 쿠폰 3장</div>
      </div>
    </div>
  )
}

export function Labeled() {
  return (
    <div style={{ maxWidth: 320 }}>
      <Divider label="7월 28일" />
    </div>
  )
}

export function Vertical() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 32 }}>
      <span style={{ fontSize: 13, color: '#111827' }}>주문내역</span>
      <Divider orientation="vertical" />
      <span style={{ fontSize: 13, color: '#111827' }}>찜한 상품</span>
      <Divider orientation="vertical" />
      <span style={{ fontSize: 13, color: '#111827' }}>최근 본 상품</span>
    </div>
  )
}
