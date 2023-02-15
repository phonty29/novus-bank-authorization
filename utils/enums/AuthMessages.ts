enum AuthMessages {
  LOG_IN_SUCCESS = "You're successfully signed in. You'll redirected to the next page",
  AUTH_EMPTY_FIELDS = 'Fields marked with * are mandatory',
  LOG_IN_INCORRECT = 'The username and/or password is incorrect',
  PHONE_WRONG_FORMAT = 'The phone format is wrong',
  EMAIL_WRONG_FORMAT = 'Wrong email format. Include "@" in the email address',
  AGE_RESTRICTED = 'This application is only for users older 16',
  USERNAME_WRONG_FORMAT = 'Wrong username format. It can contain only latin letters and numbers',
  PASSWORD_WRONG_FORMAT = 'Password length is between 6-16. It must have latin letters, numbers and at least one of these symbols [!,@,#,$,%,^,&,*]',
  PASSWORDS_DONT_MATCH = 'The password confirmation doesn\'t match',
  AUTH_SERVER_ERROR = 'Internal server error.\n Please, check your internet connection',
  EMAIL_UNAVAILABLE = 'It seems that this email is already in use. Please, choose another one.',
  USERNAME_UNAVAILABLE = 'It seems that this username is already in use. Please, choose another one.',
  LINK_IS_ACTIVATED = 'It seems that link is already activated',
  LINK_IS_EXPIRED = 'It seems that link is expired. Try to send confirmation once again.',
  AUTH_BAD_REQUEST = 'Bad request',
  AUTH_UNAUTHORIZED = 'User is unauthorized'
}

export default AuthMessages;
