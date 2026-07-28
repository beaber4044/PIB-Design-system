import { Toast } from 'design-system'

export function Tones() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Toast tone="neutral" message="새로운 업데이트가 있습니다." />
      <Toast tone="success" message="주문이 완료되었습니다." />
      <Toast tone="warning" message="재고가 얼마 남지 않았습니다." />
      <Toast tone="danger" message="결제에 실패했습니다. 다시 시도해주세요." />
    </div>
  )
}

export function Dismissible() {
  return <Toast tone="success" message="장바구니에 담았습니다." onClose={() => {}} />
}
