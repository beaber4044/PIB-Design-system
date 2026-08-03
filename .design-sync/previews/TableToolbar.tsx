import { TableToolbar, Button, Icon } from 'design-system'

export function WithPrimaryAction() {
  return (
    <div style={{ maxWidth: 480 }}>
      <TableToolbar
        left="총 128명"
        right={
          <Button size="sm">
            <Icon name="plus" size={14} />
            사용자 등록
          </Button>
        }
      />
    </div>
  )
}

export function CountOnly() {
  return (
    <div style={{ maxWidth: 480 }}>
      <TableToolbar left="24건 중 3건 선택됨" />
    </div>
  )
}
