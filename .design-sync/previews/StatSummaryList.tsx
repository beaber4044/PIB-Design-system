import { StatSummaryList } from 'design-system'

export function OrdersShipping() {
  return (
    <div style={{ maxWidth: 280 }}>
      <StatSummaryList
        title="주문/배송"
        icon="package"
        tone="brand"
        timestamp="최근 14:21"
        rows={[
          { label: '결제대기', value: 0 },
          { label: '신규주문', value: 2 },
          { label: '배송준비', value: 1, indent: true },
          { label: '배송중', value: 0, indent: true },
        ]}
      />
    </div>
  )
}

export function ClaimsSettlement() {
  return (
    <div style={{ maxWidth: 280 }}>
      <StatSummaryList
        title="클레임/정산"
        icon="wallet"
        tone="warning"
        timestamp="최근 14:21"
        rows={[
          { label: '취소요청', value: 0 },
          { label: '반품요청', value: 1 },
          { label: '오늘정산', value: '128,000', unit: '원' },
        ]}
      />
    </div>
  )
}
