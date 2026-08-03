import { Pagination } from 'design-system'

export function MiddlePage() {
  return <Pagination page={3} totalPages={5} onChange={() => {}} />
}

export function FirstPage() {
  return <Pagination page={1} totalPages={8} onChange={() => {}} />
}

export function LastPage() {
  return <Pagination page={8} totalPages={8} onChange={() => {}} />
}
