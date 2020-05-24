export enum RoleTitle {
  GOD = "GOD",
  TIER1 = "TIER1",
  TIER2 = "TIER2",
  TIER3 = "TIER3",
  TIER4 = "TIER4",
  NONE = "NONE",
}

export interface Role {
  title: RoleTitle;
  priority: number;
}

export function factoryRoleFromTitle(title: string): Role {
  switch (title) {
    case RoleTitle.GOD:
      return { title: RoleTitle.GOD, priority: 0 };
    case RoleTitle.TIER1:
      return { title: RoleTitle.TIER1, priority: 1 };
    case RoleTitle.TIER2:
      return { title: RoleTitle.TIER2, priority: 2 };
    case RoleTitle.TIER3:
      return { title: RoleTitle.TIER3, priority: 3 };
    case RoleTitle.TIER4:
      return { title: RoleTitle.TIER4, priority: 4 };
    default:
      return { title: RoleTitle.NONE, priority: 5 };
  }
}
