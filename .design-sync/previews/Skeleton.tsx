import { Skeleton } from 'design-system'

export function TextLines() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 240 }}>
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-1/2" />
    </div>
  )
}

export function AvatarWithText() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: 280 }}>
      <Skeleton variant="circle" className="w-10 h-10" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton variant="text" className="w-3/4" />
        <Skeleton variant="text" className="w-1/2" />
      </div>
    </div>
  )
}

export function ProductCardSkeleton() {
  return (
    <div style={{ width: 180, border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
      <Skeleton variant="rect" className="w-full aspect-square" />
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton variant="text" className="w-full" />
        <Skeleton variant="text" className="w-1/3" />
      </div>
    </div>
  )
}
