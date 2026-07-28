import { Card, CardTitle, CardDescription, Button, Badge } from 'design-system'

export function Basic() {
  return (
    <Card style={{ maxWidth: 320 }}>
      <CardTitle>배송 안내</CardTitle>
      <CardDescription>
        결제 완료 후 평균 1~2일 이내 출고되며, 도서산간 지역은 추가 1~2일이
        소요될 수 있습니다.
      </CardDescription>
    </Card>
  )
}

export function WithActions() {
  return (
    <Card style={{ maxWidth: 320 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <CardTitle>멤버십 혜택</CardTitle>
        <Badge tone="brand">Pro</Badge>
      </div>
      <CardDescription>
        매달 무료배송 쿠폰과 적립금 2배 혜택을 받아보세요.
      </CardDescription>
      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <Button size="sm">지금 가입하기</Button>
        <Button size="sm" variant="ghost">
          더 알아보기
        </Button>
      </div>
    </Card>
  )
}
