import { errorMessages } from "@/shared/consts/errorMessages";

export function getErrorMessage(errorMessage?: string) {
  if (!errorMessage) {
    return errorMessages.default;
  }

  switch (errorMessage) {
    case "This email already exist":
      return errorMessages.existedUser;
    case "Unexpected":
      return errorMessages.unexpected;
    case "signal is aborted without reason":
      return errorMessages.abort;

    default:
      return errorMessage;
  }
}
