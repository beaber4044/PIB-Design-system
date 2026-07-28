import { Switch } from 'design-system'

export function States() {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Switch id="sw-off" label="푸시 알림" />
      <Switch id="sw-on" label="자동 로그인" defaultChecked />
      <Switch id="sw-disabled" label="위치 정보 (지원 안 함)" disabled />
    </div>
  )
}

export function SettingsList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Switch id="sw-marketing" label="야간 알림 받기" defaultChecked />
      <Switch id="sw-dark" label="다크 모드" />
      <Switch id="sw-biometric" label="생체 인증 로그인" defaultChecked />
    </div>
  )
}
