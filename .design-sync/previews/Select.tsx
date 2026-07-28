import { Select } from 'design-system'

export function States() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 280 }}>
      <Select defaultValue="">
        <option value="" disabled>
          배송 지역을 선택하세요
        </option>
        <option value="seoul">서울특별시</option>
        <option value="busan">부산광역시</option>
        <option value="incheon">인천광역시</option>
      </Select>
      <Select defaultValue="popular">
        <option value="popular">인기순</option>
        <option value="latest">최신순</option>
        <option value="price-asc">낮은 가격순</option>
        <option value="price-desc">높은 가격순</option>
      </Select>
    </div>
  )
}

export function ErrorAndDisabled() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 280 }}>
      <Select error defaultValue="">
        <option value="" disabled>
          결제 수단을 선택하세요
        </option>
        <option value="card">신용카드</option>
        <option value="bank">계좌이체</option>
      </Select>
      <Select disabled defaultValue="kr">
        <option value="kr">대한민국 (+82)</option>
        <option value="us">미국 (+1)</option>
      </Select>
    </div>
  )
}
