import { Reflector } from "@nestjs/core";

import { PERMISSIONS } from "@schedule/platform-constants";

export const Permissions = Reflector.createDecorator<(typeof PERMISSIONS)[number][]>();
