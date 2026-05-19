export {
  getRecordingsOfCalVideoByRoomName,
  getDownloadLinkOfCalVideoByRecordingId,
  getAllTranscriptsAccessLinkFromRoomName,
  getCalVideoMeetingSessionsByRoomName,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} from "@schedule/features/conferencing/lib/videoClient";

export { FAKE_DAILY_CREDENTIAL } from "@schedule/app-store/dailyvideo/lib/VideoApiAdapter";

export type { CalMeetingParticipant, CalMeetingSession } from "@schedule/app-store/dailyvideo/zod";
