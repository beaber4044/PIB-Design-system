import { Tooltip } from 'design-system'

export function Triggers() {
  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
        <Tooltip content="재고 3개 남음">
          <button
            type="button"
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: '1px solid #d4d4d4',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
            }}
          >
            i
          </button>
        </Tooltip>
        <p style={{ fontSize: 12, color: '#888', margin: 0, textAlign: 'center' }}>
          Tooltip on hover: "재고 3개 남음"
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
        <Tooltip content="무료배송 대상 상품입니다" side="bottom">
          <span
            style={{
              maxWidth: 120,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontSize: 14,
              color: '#171717',
              borderBottom: '1px dashed #a3a3a3',
              cursor: 'default',
            }}
          >
            네이버 프리미엄 배송 상품명
          </span>
        </Tooltip>
        <p style={{ fontSize: 12, color: '#888', margin: 0, textAlign: 'center' }}>
          Tooltip on hover: "무료배송 대상 상품입니다"
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
        <Tooltip content="결제 완료 후 취소할 수 없습니다" side="right">
          <button
            type="button"
            style={{
              height: 36,
              padding: '0 14px',
              borderRadius: 18,
              border: 'none',
              background: '#03c75a',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            결제하기
          </button>
        </Tooltip>
        <p style={{ fontSize: 12, color: '#888', margin: 0, textAlign: 'center' }}>
          Tooltip on hover: "결제 완료 후 취소할 수 없습니다"
        </p>
      </div>
    </div>
  )
}
