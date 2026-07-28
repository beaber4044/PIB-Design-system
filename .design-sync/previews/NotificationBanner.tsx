import { useState } from 'react'
import { NotificationBanner } from 'design-system'

export function Info() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <NotificationBanner
      tone="info"
      title="새로운 업데이트가 있어요"
      description="앱을 최신 버전으로 업데이트해보세요."
      onClose={() => setVisible(false)}
    />
  )
}

export function Success() {
  return (
    <NotificationBanner
      tone="success"
      title="주문이 완료되었어요"
      description="배송 준비가 시작되면 알려드릴게요."
    />
  )
}

export function Warning() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <NotificationBanner
      tone="warning"
      title="재고가 얼마 남지 않았어요"
      description="품절되기 전에 서둘러 주문해보세요."
      onClose={() => setVisible(false)}
    />
  )
}

export function Danger() {
  return (
    <NotificationBanner
      tone="danger"
      title="결제에 실패했어요"
      description="카드 정보를 확인하고 다시 시도해주세요."
    />
  )
}
