import { SetMetadata } from '@nestjs/common';
import { HAS_PERMISSION_KEY, PermissionType } from '@spikey/shared/permissions';


export function HasPermission(permission: PermissionType) {
  return SetMetadata(HAS_PERMISSION_KEY, permission);
}
