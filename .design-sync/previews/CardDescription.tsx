import { CardDescription } from 'design-system'

export function Basic() {
  return (
    <div style={{ maxWidth: 320 }}>
      <CardDescription>
        결제 완료 후 평균 1~2일 이내 출고되며, 도서산간 지역은 추가 1~2일이
        소요될 수 있습니다.
      </CardDescription>
    </div>
  )
}

export function LongText() {
  return (
    <div style={{ maxWidth: 320 }}>
      <CardDescription>
        주문하신 상품은 판매자 사정에 따라 배송이 지연될 수 있으며, 교환 및
        환불은 상품 수령일로부터 7일 이내에 고객센터를 통해 접수해 주시기
        바랍니다.
      </CardDescription>
    </div>
  )
}
