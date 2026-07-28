import { AppMainHeader } from 'design-system'

export function Basic() {
  return (
    <div style={{ width: 375 }}>
      <AppMainHeader />
    </div>
  )
}

export function CustomActions() {
  return (
    <div style={{ width: 375 }}>
      <AppMainHeader
        actions={
          <>
            <span style={{ fontSize: 12, color: '#374151' }}>알림 3</span>
          </>
        }
      />
    </div>
  )
}
