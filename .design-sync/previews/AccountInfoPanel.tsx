import { AccountInfoPanel } from 'design-system'

export function FreePlan() {
  return (
    <div style={{ maxWidth: 300 }}>
      <AccountInfoPanel
        name="관리자"
        email="admin@pib.io"
        planLabel="Free"
        rows={[
          { label: '도메인', value: '기본 도메인 사용 중', action: { label: '연결', tone: 'brand' } },
          { label: 'SSL', value: '사용 중' },
          { label: 'APP', value: '미사용', action: { label: '설정', tone: 'brand' } },
        ]}
      />
    </div>
  )
}

export function BusinessPlan() {
  return (
    <div style={{ maxWidth: 300 }}>
      <AccountInfoPanel
        name="김지우"
        email="jiwoo@pib.io"
        planLabel="Business"
        rows={[
          { label: '도메인', value: 'pib-shop.com' },
          { label: 'SSL', value: '사용 중 (자동 갱신)' },
          { label: 'SMS', value: '128건', action: { label: '충전' } },
        ]}
      />
    </div>
  )
}
