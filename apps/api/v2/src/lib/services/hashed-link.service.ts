import { Injectable } from "@nestjs/common";

import { HashedLinkService as BaseHashedLinkService } from "@schedule/platform-libraries/private-links";

@Injectable()
export class HashedLinkService extends BaseHashedLinkService {
  constructor() {
    super();
  }
}
