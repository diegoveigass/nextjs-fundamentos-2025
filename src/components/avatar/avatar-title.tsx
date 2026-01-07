import { ReactNode } from "react";

type AvatarTitleProps = {
  children: ReactNode;
};

export const AvatarTitle = ({ children }: AvatarTitleProps) => {
  return <strong className="text-gray-200 text-body-sm">{children}</strong>;
};
