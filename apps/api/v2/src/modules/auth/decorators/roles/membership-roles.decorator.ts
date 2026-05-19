import { Reflector } from "@nestjs/core";

import { MembershipRole } from "@schedule/platform-libraries";

export const MembershipRoles = Reflector.createDecorator<MembershipRole[]>();
