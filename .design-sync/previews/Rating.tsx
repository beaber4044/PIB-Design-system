import { useState } from 'react'
import { Rating } from 'design-system'

export function Values() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Rating value={5} readOnly />
      <Rating value={3.5} readOnly />
      <Rating value={1} readOnly />
      <Rating value={0} readOnly />
    </div>
  )
}

export function Interactive() {
  const [value, setValue] = useState(4)
  return <Rating value={value} onChange={setValue} />
}

export function ReadOnlyProductReview() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Rating value={4} readOnly max={5} />
      <span style={{ fontSize: 13, color: '#737373' }}>4.0 (128개 리뷰)</span>
    </div>
  )
}
