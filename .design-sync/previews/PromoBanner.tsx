import { PromoBanner } from 'design-system'

export function BrandTone() {
  return (
    <div style={{ maxWidth: 480 }}>
      <PromoBanner
        icon="bell"
        title="회원가입과 채널 연동을 한 번에! 알림 연동을 시작해보세요."
        actionLabel="시작하기"
        onAction={() => {}}
        onClose={() => {}}
      />
    </div>
  )
}

export function WarningTone() {
  return (
    <div style={{ maxWidth: 480 }}>
      <PromoBanner
        icon="alert"
        tone="warning"
        title="결제 수단 만료가 임박했어요. 지금 갱신하고 서비스를 계속 이용하세요."
        actionLabel="갱신하기"
        onAction={() => {}}
      />
    </div>
  )
}

export function DarkTone() {
  return (
    <div style={{ maxWidth: 480 }}>
      <PromoBanner
        icon="gift"
        tone="dark"
        title="쇼핑몰 제작 후엔? 광고해야지! 첫 캠페인 무료 크레딧 받기"
        actionLabel="크레딧 받기"
        onAction={() => {}}
        onClose={() => {}}
      />
    </div>
  )
}
