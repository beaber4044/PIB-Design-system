import { AppBar } from 'design-system'

export function WithBack() {
  return (
    <div style={{ width: 375 }}>
      <AppBar title="상품 상세" showBack />
    </div>
  )
}

export function TitleOnly() {
  return (
    <div style={{ width: 375 }}>
      <AppBar title="마이페이지" />
    </div>
  )
}

export function WithRightAction() {
  return (
    <div style={{ width: 375 }}>
      <AppBar
        title="장바구니"
        showBack
        right={<span style={{ fontSize: 13, color: '#374151' }}>편집</span>}
      />
    </div>
  )
}
