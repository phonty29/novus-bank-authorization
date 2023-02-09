enum AuthMessages {
  SIGN_IN_SUCCESS = "You're successfully signed in. You'll redirected to the next page",
  SIGN_IN_EMPTY_FIELD = 'Fields marked with * are mandatory',
  SIGN_IN_UNAUTHORIZED = 'The username and/or password is incorrect',
  SIGN_UP_WRONG_PHONE_FORMAT = 'The phone format is wrong',
  SIGN_UP_WRONG_EMAIL_FORMAT = 'Wrong email format. Include "@" in the email address',
  SIGN_UP_AGE_RESTRICTED = 'This application is only for users older 16',
  SIGN_UP_WRONG_USERNAME_FORMAT = 'Wrong username format. It can contain only latin letters and numbers',
  SIGN_UP_WRONG_PASSWORD_FORMAT = 'Password length is between 6-16. It must have latin letters, numbers and at least one of these symbols [!,@,#,$,%,^,&,*]',
  SIGN_IN_PASSWORD_DOES_NOT_MATCH = 'The password confirmation doesn\'t match',
  SIGN_IN_OTHER_PROBLEMS = 'Something get wrong during authorization.\n Please, check your internet connection',
  SIGN_UP_EMAIL_UNAVAILABLE= 'It seems that this email is already in use. Please, choose another one.',
  SIGN_UP_USERNAME_UNAVAILABLE = 'It seems that this username is already in use. Please, choose another one.',
}

export default AuthMessages;
