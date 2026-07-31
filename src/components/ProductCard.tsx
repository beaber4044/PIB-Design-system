import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Icon } from "./Icon";

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  name: string;
  price: number;
  discountPercent?: number;
  liked?: boolean;
  onLikeToggle?: () => void;
}

function formatPrice(price: number) {
  return price.toLocaleString("ko-KR") + "원";
}

export function ProductCard({
  image,
  name,
  price,
  discountPercent,
  liked,
  onLikeToggle,
  className,
  ...props
}: ProductCardProps) {
  const discountedPrice = discountPercent
    ? Math.round((price * (100 - discountPercent)) / 100)
    : price;

  return (
    <div
      className={cn(
        "w-[180px] rounded-lg border border-neutral-200 bg-neutral-0 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative aspect-square bg-neutral-100">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-300">
            <Icon name="image" size={32} />
          </div>
        )}
        <button
          type="button"
          onClick={onLikeToggle}
          aria-label={liked ? "찜 해제" : "찜하기"}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-neutral-0/90 flex items-center justify-center shadow-sm"
        >
          <Icon
            name="heart"
            solid={liked}
            size={15}
            className={liked ? "text-danger-500" : "text-neutral-400"}
          />
        </button>
      </div>

      <div className="p-3">
        <p className="text-sm text-neutral-900 truncate mb-1">{name}</p>
        <div className="flex items-baseline gap-1.5">
          {discountPercent ? (
            <>
              <span className="text-sm font-semibold text-danger-500">
                {discountPercent}%
              </span>
              <span className="text-sm font-semibold text-neutral-900">
                {formatPrice(discountedPrice)}
              </span>
            </>
          ) : (
            <span className="text-sm font-semibold text-neutral-900">
              {formatPrice(price)}
            </span>
          )}
        </div>
        {discountPercent ? (
          <span className="text-xs text-neutral-400 line-through">
            {formatPrice(price)}
          </span>
        ) : null}
      </div>
    </div>
  );
}
