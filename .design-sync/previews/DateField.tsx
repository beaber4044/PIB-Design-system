import { useState } from 'react'
import { DateField } from 'design-system'

export function Default() {
  const [value, setValue] = useState('2026-07-01')
  return <DateField value={value} onChange={setValue} aria-label="시작일" />
}

export function Empty() {
  const [value, setValue] = useState('')
  return <DateField value={value} onChange={setValue} aria-label="날짜 선택" />
}
