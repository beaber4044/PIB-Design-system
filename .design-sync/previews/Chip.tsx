import { Chip } from 'design-system'

export function Selection() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip selected>전체</Chip>
      <Chip>상의</Chip>
      <Chip>하의</Chip>
      <Chip>아우터</Chip>
      <Chip>신발</Chip>
    </div>
  )
}

export function Removable() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip selected onRemove={() => {}}>
        브랜드: 나이키
      </Chip>
      <Chip selected onRemove={() => {}}>
        색상: 블랙
      </Chip>
      <Chip onRemove={() => {}}>사이즈: L</Chip>
    </div>
  )
}
