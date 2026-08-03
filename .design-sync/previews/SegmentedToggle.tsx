import { useState } from 'react'
import { SegmentedToggle } from 'design-system'

export function MetricSwitch() {
  const [value, setValue] = useState('count')
  return (
    <SegmentedToggle
      value={value}
      onChange={setValue}
      options={[
        { value: 'count', label: '결제건수' },
        { value: 'buyers', label: '결제자수' },
        { value: 'amount', label: '결제금액' },
      ]}
    />
  )
}

export function TwoOptions() {
  const [value, setValue] = useState('week')
  return (
    <SegmentedToggle
      value={value}
      onChange={setValue}
      options={[
        { value: 'week', label: '주간' },
        { value: 'month', label: '월간' },
      ]}
    />
  )
}
