import { LoginCard } from 'design-system'

export function Default() {
  return (
    <div style={{ height: 640 }}>
      <LoginCard
        title="PIB 헬스케어센터"
        fullScreen={false}
        rememberLabel="로그인 상태 유지"
        secondaryAction={{ label: '패스키 로그인', icon: 'shieldCheck' }}
        footerLinks={[
          { label: '아이디 찾기' },
          { label: '비밀번호 찾기' },
          { label: '회원가입' },
        ]}
      />
    </div>
  )
}

export function Minimal() {
  return (
    <div style={{ height: 480 }}>
      <LoginCard title="PIB Admin" fullScreen={false} />
    </div>
  )
}
