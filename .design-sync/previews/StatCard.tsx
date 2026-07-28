import { StatCard } from 'design-system'

export function Grid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, maxWidth: 420 }}>
      <StatCard label="팔로워" value="1,204" trend={4.2} />
      <StatCard label="게시물" value="86" trend={-1.1} />
      <StatCard label="좋아요" value="9,530" />
    </div>
  )
}

export function PositiveTrend() {
  return <StatCard label="이번 달 매출" value="3,240,000원" trend={12.5} />
}

export function NegativeTrend() {
  return <StatCard label="반품율" value="2.4%" trend={-0.8} />
}

export function NoTrend() {
  return <StatCard label="누적 방문자" value="128,430" />
}
