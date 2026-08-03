import { DropdownButton } from 'design-system'

export function BoardActions() {
  return (
    <DropdownButton
      label="더보기"
      items={[
        { label: '목록 편집' },
        { label: '카테고리 추가' },
        { label: '삭제', danger: true },
      ]}
    />
  )
}

export function PrimaryVariant() {
  return (
    <DropdownButton
      label="일괄 작업"
      variant="primary"
      items={[
        { label: '엑셀로 내보내기' },
        { label: '상태 일괄 변경' },
      ]}
    />
  )
}
