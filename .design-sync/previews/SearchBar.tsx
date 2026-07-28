import { SearchBar } from 'design-system'

export function States() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      <SearchBar placeholder="상품, 브랜드, 카테고리 검색" />
      <SearchBar defaultValue="여름 원피스" onClear={() => {}} />
      <SearchBar placeholder="지역, 매장명으로 검색" disabled />
    </div>
  )
}
