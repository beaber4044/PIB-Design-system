import { AdminTopbar } from 'design-system'

export function Default() {
  return <AdminTopbar />
}

export function WithWorkingMenus() {
  return (
    <AdminTopbar
      orgMenuItems={[
        { label: 'PIB Cloud' },
        { label: 'PIB Healthcare' },
      ]}
      userMenuItems={[
        { label: '내 정보' },
        { label: '환경설정' },
        { label: '로그아웃', danger: true },
      ]}
    />
  )
}
