import { BottomNavigation } from 'design-system'

const items = [
  { value: 'home', label: '홈', icon: 'home' as const },
  { value: 'search', label: '검색', icon: 'search' as const },
  { value: 'cart', label: '장바구니', icon: 'cart' as const },
  { value: 'heart', label: '찜', icon: 'heart' as const },
  { value: 'user', label: '마이페이지', icon: 'user' as const },
]

export function Basic() {
  return (
    <div style={{ width: 375 }}>
      <BottomNavigation items={items} value="home" onChange={() => {}} />
    </div>
  )
}

export function CartActive() {
  return (
    <div style={{ width: 375 }}>
      <BottomNavigation items={items} value="cart" onChange={() => {}} />
    </div>
  )
}
