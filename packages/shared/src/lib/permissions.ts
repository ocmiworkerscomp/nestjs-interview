import { UserType } from '@spikey/shared/types';
import { Role } from '@prisma/client';
import { without } from '@spikey/shared/lodash';

export const HAS_PERMISSION_KEY = 'has_permission';

const resources = ['user'] as const;
const crud = ['create', 'viewAny', 'view', 'update', 'delete'] as const;
const basePermissions = resources.flatMap((resource: Resource) =>
  crud.map((action: Crud) => `${resource}:${action}`)
) as PermissionType[];

type Crud = (typeof crud)[number];
type Resource = (typeof resources)[number];
export type PermissionType = `${Resource}:${Crud}`;

export function getAllPermissions(aRole: Role): PermissionType[] {
  switch (aRole) {
    case 'SUPER_USER':
    case 'ADMIN':
      return basePermissions;
    case 'DEMO':
    case 'USER':
    default:
      return without(
        basePermissions,
        'user:delete'
      );
  }
}

export function hasPermission(
  aPermissions: PermissionType[] = [],
  aPermission: PermissionType
) {
  return aPermissions.includes(aPermission);
}

export function hasAnyPermission(
  aPermissions: PermissionType[] = [],
  aPermissionsToCheck: PermissionType[]
) {
  return aPermissions.some((permission) =>
    aPermissionsToCheck.includes(permission)
  );
}

export function hasRole(aUser: UserType, aRole: Role): boolean {
  return aUser?.role === aRole;
}
