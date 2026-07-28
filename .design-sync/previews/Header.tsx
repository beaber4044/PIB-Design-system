import { Header } from 'design-system'

export function Basic() {
  return (
    <div style={{ width: 375 }}>
      <Header />
    </div>
  )
}

export function WithNav() {
  return (
    <div style={{ width: 375 }}>
      <Header
        nav={
          <>
            <span>홈</span>
            <span>카테고리</span>
            <span>베스트</span>
            <span>이벤트</span>
          </>
        }
      />
    </div>
  )
}
