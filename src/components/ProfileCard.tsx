import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Avatar } from "./Avatar";
import { Button } from "./Button";

export interface ProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  handle?: string;
  bio?: string;
  avatarSrc?: string;
  following?: boolean;
  onFollowToggle?: () => void;
}

export function ProfileCard({
  name,
  handle,
  bio,
  avatarSrc,
  following,
  onFollowToggle,
  className,
  ...props
}: ProfileCardProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-0 p-4",
        className
      )}
      {...props}
    >
      <Avatar name={name} src={avatarSrc} size="lg" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-neutral-900 truncate">{name}</p>
        {handle && <p className="text-xs text-neutral-500 truncate">@{handle}</p>}
        {bio && <p className="text-sm text-neutral-600 mt-1.5 line-clamp-2">{bio}</p>}
      </div>
      <Button
        size="sm"
        variant={following ? "outline" : "primary"}
        onClick={onFollowToggle}
        className="shrink-0"
      >
        {following ? "팔로잉" : "팔로우"}
      </Button>
    </div>
  );
}
