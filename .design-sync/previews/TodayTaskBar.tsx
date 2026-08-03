import { TodayTaskBar } from 'design-system'

export function WithPendingTasks() {
  return (
    <div style={{ maxWidth: 420 }}>
      <TodayTaskBar
        title="오늘의 할일"
        items={[
          { label: '신규 문의', value: 3 },
          { label: '답변 대기', value: 1 },
          { label: '처리중', value: 0 },
          { label: '반품/교환', value: 0 },
        ]}
      />
    </div>
  )
}

export function AllClear() {
  return (
    <div style={{ maxWidth: 420 }}>
      <TodayTaskBar
        title="오늘의 할일"
        items={[
          { label: '신규주문', value: 0 },
          { label: '취소요청', value: 0 },
          { label: '문의', value: 0 },
        ]}
      />
    </div>
  )
}
