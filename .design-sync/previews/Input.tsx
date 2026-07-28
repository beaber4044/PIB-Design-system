import { Input } from 'design-system'

export function States() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      <Input placeholder="이메일 주소" />
      <Input placeholder="비밀번호" defaultValue="hunter2" type="password" />
      <Input placeholder="쿠폰 코드" error />
      <Input placeholder="비활성" disabled />
    </div>
  )
}

export function Filled() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      <Input defaultValue="hong@naver.com" placeholder="이메일 주소" />
      <Input defaultValue="서울특별시 강남구 테헤란로 123" placeholder="배송지 주소" />
    </div>
  )
}
