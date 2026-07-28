import { ListItem, Icon } from 'design-system'

export function SettingsList() {
  return (
    <div style={{ maxWidth: 320, background: '#fff' }}>
      <ListItem
        leading={<Icon name="user" size={20} />}
        title="계정 정보"
        description="이름, 전화번호, 이메일 변경"
        showChevron
      />
      <ListItem
        leading={<Icon name="bell" size={20} />}
        title="알림 설정"
        description="주문, 배송, 혜택 알림 관리"
        showChevron
      />
      <ListItem
        leading={<Icon name="lock" size={20} />}
        title="비밀번호 변경"
        showChevron
      />
    </div>
  )
}

export function WithTrailing() {
  return (
    <div style={{ maxWidth: 320, background: '#fff' }}>
      <ListItem
        leading={<Icon name="cart" size={20} />}
        title="장바구니"
        description="담긴 상품 3개"
        trailing={<span style={{ fontSize: 12, color: '#9ca3af' }}>3</span>}
      />
      <ListItem
        leading={<Icon name="heart" size={20} />}
        title="찜한 상품"
        trailing={<span style={{ fontSize: 12, color: '#9ca3af' }}>12</span>}
      />
    </div>
  )
}

export function Disabled() {
  return (
    <div style={{ maxWidth: 320, background: '#fff' }}>
      <ListItem
        leading={<Icon name="gift" size={20} />}
        title="쿠폰함 (사용 불가)"
        description="현재 이용할 수 없는 메뉴입니다"
        disabled
        showChevron
      />
    </div>
  )
}
