import { Textarea } from 'design-system'

export function States() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <Textarea placeholder="배송 시 요청사항을 입력해주세요" />
      <Textarea
        defaultValue={'상품 잘 받았습니다. 배송이 빠르고 포장 상태도 좋았어요. 다음에도 또 주문할게요!'}
      />
      <Textarea placeholder="신고 사유를 입력하세요" error />
      <Textarea placeholder="작성이 불가능합니다" disabled />
    </div>
  )
}
