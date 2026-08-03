import { TreeListTable } from 'design-system'

export function BoardManagement() {
  return (
    <TreeListTable
      columns={[
        { key: 'domain', header: '소유 도메인' },
        { key: 'count', header: '게시글 수', align: 'right' },
        { key: 'type', header: '게시판 타입' },
      ]}
      rows={[
        { id: 'notice', label: '공지사항', bold: true, cells: {} },
        {
          id: 'news',
          label: '새소식',
          depth: 1,
          badge: { label: '공개', tone: 'success' },
          cells: { domain: 'PIB CLOUD', count: 10, type: '미리보기형' },
        },
        {
          id: 'service',
          label: '서비스 소식',
          depth: 1,
          badge: { label: '게시판', tone: 'brand' },
          cells: { domain: 'PIB CLOUD', count: 30, type: '앨범형' },
        },
        {
          id: 'inquiry',
          label: '문의하기',
          depth: 1,
          badge: { label: '비공개', tone: 'neutral' },
          cells: { domain: 'PIB CLOUD', count: 5, type: '게시판형' },
        },
      ]}
    />
  )
}

export function FlatList() {
  return (
    <TreeListTable
      columns={[
        { key: 'role', header: '역할' },
        { key: 'status', header: '상태' },
      ]}
      rows={[
        { id: 'u1', label: '김지우', cells: { role: '관리자', status: '활성' } },
        { id: 'u2', label: '이서준', cells: { role: '운영진', status: '활성' } },
        { id: 'u3', label: '박민준', cells: { role: '멤버', status: '초대됨' } },
      ]}
    />
  )
}
