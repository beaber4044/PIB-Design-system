import { LoginCard } from 'design-system'

export function Default() {
  return (
    <div style={{ height: 560 }}>
      <LoginCard
        title="PIB 헬스케어센터 관리자"
        fullScreen={false}
        hint="테스트 계정 admin / 1234"
      />
    </div>
  )
}
