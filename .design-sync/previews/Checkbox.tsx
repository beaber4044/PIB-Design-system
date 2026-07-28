import { Checkbox } from 'design-system'

export function States() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Checkbox id="cb-unchecked" label="알림 받기" />
      <Checkbox id="cb-checked" label="이용약관에 동의합니다" defaultChecked />
      <Checkbox id="cb-disabled" label="선택 불가 항목" disabled />
    </div>
  )
}

export function List() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Checkbox id="cb-marketing" label="마케팅 정보 수신 동의" defaultChecked />
      <Checkbox id="cb-night" label="야간 알림 받기" />
      <Checkbox id="cb-all" label="전체 동의" defaultChecked />
    </div>
  )
}
