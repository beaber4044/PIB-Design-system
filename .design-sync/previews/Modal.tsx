import { Modal } from 'design-system'

export function Basic() {
  return (
    <Modal open={true} onClose={() => {}} title="알림">
      장바구니에 상품이 추가되었습니다.
    </Modal>
  )
}

export function WithFooter() {
  return (
    <Modal
      open={true}
      onClose={() => {}}
      title="주문을 취소할까요?"
      footer={
        <>
          <button
            type="button"
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 14,
              color: '#374151',
              border: '1px solid #e5e7eb',
              background: '#fff',
            }}
          >
            닫기
          </button>
          <button
            type="button"
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              fontSize: 14,
              color: '#fff',
              background: '#03c75a',
              border: 'none',
            }}
          >
            취소하기
          </button>
        </>
      }
    >
      주문을 취소하면 되돌릴 수 없습니다. 계속 진행하시겠습니까?
    </Modal>
  )
}
