import { EmptyState, Button } from 'design-system'

export function EmptyCart() {
  return (
    <div style={{ maxWidth: 360, border: '1px solid #e5e5e5', borderRadius: 8 }}>
      <EmptyState
        icon="cart"
        title="장바구니가 비어있어요"
        description="관심 상품을 담아보세요."
        action={<Button size="sm">쇼핑 계속하기</Button>}
      />
    </div>
  )
}

export function NoSearchResults() {
  return (
    <div style={{ maxWidth: 360, border: '1px solid #e5e5e5', borderRadius: 8 }}>
      <EmptyState
        icon="search"
        title="검색 결과가 없어요"
        description="다른 키워드로 다시 검색해보세요."
      />
    </div>
  )
}

export function NoNotifications() {
  return (
    <div style={{ maxWidth: 360, border: '1px solid #e5e5e5', borderRadius: 8 }}>
      <EmptyState
        icon="bell"
        title="알림이 없어요"
        description="새로운 소식이 오면 여기에 표시돼요."
      />
    </div>
  )
}
