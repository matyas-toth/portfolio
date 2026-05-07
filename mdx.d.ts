declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { PostMeta } from "@/content/types";

  export const meta: PostMeta;

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
