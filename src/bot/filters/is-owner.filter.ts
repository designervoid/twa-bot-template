import { Context } from "~/bot/types";
import { Role } from "@prisma/client";
import { ContextScopeWith } from "~/bot/types/context";

export const isOwnerUser = <C extends Context>(
  ctx: C
): ctx is C & ContextScopeWith<"user"> => {
  return ctx.scope.user?.role === Role.OWNER;
};
