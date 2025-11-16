import { ComponentProps } from "react";

type PostGridCardProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

export function PostGridCard({ children, ...rest }: PostGridCardProps) {
  return (
    <div {...rest} className="container grid grid-cols-1 md:grid-cols-3 gap-6">
      {children}
    </div>
  );
}
