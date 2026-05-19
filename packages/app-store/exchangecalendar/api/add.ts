import { defaultHandler } from "@schedule/lib/server/defaultHandler";

export default defaultHandler({
  GET: import("./_getAdd"),
  POST: import("./_postAdd"),
});
