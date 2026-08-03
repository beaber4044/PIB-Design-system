import { LineChart } from 'design-system'

const labels = ['월', '화', '수', '목', '금', '토', '일']

export function MultiSeries() {
  return (
    <div style={{ maxWidth: 480 }}>
      <LineChart
        labels={labels}
        series={[
          { name: '관수', color: '#03c75a', data: [1500, 1700, 1600, 1700, 2200, 2500, 2500] },
          { name: '꽃 판날', color: '#ef4444', data: [700, 800, 700, 800, 900, 1200, 1250] },
          { name: '분갈이', color: '#f59e0b', data: [400, 450, 400, 450, 500, 900, 850] },
        ]}
      />
    </div>
  )
}

export function SingleSeries() {
  return (
    <div style={{ maxWidth: 480 }}>
      <LineChart
        labels={labels}
        series={[{ name: '방문자', color: '#3b82f6', data: [120, 180, 150, 210, 260, 300, 280] }]}
      />
    </div>
  )
}
