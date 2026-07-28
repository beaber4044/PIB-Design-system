import { Radio } from 'design-system'

export function States() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Radio id="rd-unchecked" name="delivery" label="일반 배송" />
      <Radio id="rd-checked" name="delivery" label="당일 배송" defaultChecked />
      <Radio id="rd-disabled" name="delivery" label="새벽 배송 (지원 안 함)" disabled />
    </div>
  )
}

export function Group() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Radio id="rd-card" name="payment" label="신용카드" defaultChecked />
      <Radio id="rd-account" name="payment" label="계좌이체" />
      <Radio id="rd-naverpay" name="payment" label="네이버페이" />
    </div>
  )
}
