import { SetupChecklistCard } from 'design-system'

export function InProgress() {
  return (
    <div style={{ maxWidth: 280 }}>
      <SetupChecklistCard
        title="기본 설정"
        items={[
          { label: '사이트 정보 설정하기', done: true },
          { label: '디자인 편집하기', done: true },
          { label: '약관 설정하기', done: false },
          { label: '도메인 연결하기', done: false },
        ]}
        onSkip={() => {}}
      />
    </div>
  )
}

export function AlmostDone() {
  return (
    <div style={{ maxWidth: 280 }}>
      <SetupChecklistCard
        title="성장하기"
        items={[
          { label: '검색엔진 최적화', done: true },
          { label: '검색엔진 등록하기', done: false },
          { label: '소셜 로그인 설정하기', done: false },
        ]}
        onSkip={() => {}}
      />
    </div>
  )
}

export function Completed() {
  return (
    <div style={{ maxWidth: 280 }}>
      <SetupChecklistCard
        title="판매하기"
        items={[
          { label: '상품 추가하기', done: true },
          { label: '배송 설정하기', done: true },
          { label: '결제 수단 연결하기', done: true },
        ]}
      />
    </div>
  )
}
