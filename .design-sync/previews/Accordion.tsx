import { Accordion } from 'design-system'

const items = [
  {
    value: 'shipping',
    title: '배송은 얼마나 걸리나요?',
    content: '평균 2~3일 이내 도착하며, 도서/산간 지역은 1~2일 추가로 소요될 수 있습니다.',
  },
  {
    value: 'exchange',
    title: '교환은 어떻게 하나요?',
    content: '상품 수령 후 7일 이내 마이페이지 > 주문내역에서 교환을 신청하실 수 있습니다.',
  },
  {
    value: 'refund',
    title: '환불은 언제 처리되나요?',
    content: '반품 상품 검수 완료 후 영업일 기준 3~5일 이내 결제 수단으로 환불됩니다.',
  },
]

export function Basic() {
  return <Accordion items={items} defaultOpen="shipping" />
}

export function RefundOpen() {
  return <Accordion items={items} defaultOpen="refund" />
}
