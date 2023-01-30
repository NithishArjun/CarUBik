export default function getErrorMessageByCode(errorCode) {
  switch (errorCode) {
    case "EMAIL_NOT_FOUND":
      return "There is no user record corresponding to this email address.";
    case "INVALID_PASSWORD":
      return "The password is invalid. Please check the entered credentials.";
    case "USER_DISABLED":
      return "The user account has been disabled. Please contact administrator.";
    case "EMAIL_EXISTS":
      return "The email address is already in use by another account.";
    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      return "We have blocked all requests from this device due to unusual activity. Try again later.";
    default:
      return "Error occured while processing your request. Please try again later.";
  }
}
