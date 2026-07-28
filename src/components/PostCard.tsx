import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

export interface PostCardProps extends HTMLAttributes<HTMLDivElement> {
  author: string;
  timeAgo: string;
  content: string;
  avatarSrc?: string;
  likeCount?: number;
  commentCount?: number;
  liked?: boolean;
  onLikeToggle?: () => void;
}

export function PostCard({
  author,
  timeAgo,
  content,
  avatarSrc,
  likeCount = 0,
  commentCount = 0,
  liked,
  onLikeToggle,
  className,
  ...props
}: PostCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-neutral-200 bg-neutral-0 p-4",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <Avatar name={author} src={avatarSrc} size="sm" />
        <div className="min-w-0">
          <p className="text-sm font-medium text-neutral-900 truncate">{author}</p>
          <p className="text-xs text-neutral-400">{timeAgo}</p>
        </div>
      </div>

      <p className="text-sm text-neutral-800 leading-relaxed whitespace-pre-line mb-3">
        {content}
      </p>

      <div className="flex items-center gap-4 text-neutral-500">
        <button
          type="button"
          onClick={onLikeToggle}
          className={cn(
            "flex items-center gap-1.5 text-xs",
            liked && "text-danger-500"
          )}
        >
          <Icon
            name="heart"
            size={16}
            fill={liked ? "currentColor" : "none"}
          />
          {likeCount}
        </button>
        <span className="flex items-center gap-1.5 text-xs">
          <Icon name="message" size={16} />
          {commentCount}
        </span>
        <button type="button" className="flex items-center gap-1.5 text-xs ml-auto">
          <Icon name="share" size={16} />
        </button>
      </div>
    </div>
  );
}
