enum AuthMessages {
  SIGN_IN_SUCCESS = "You're successfully signed in. You'll redirected to the next page",
  SIGN_IN_EMPTY_FIELD = "Fields marked with * are mandatory",
  SIGN_IN_UNAUTHORIZED = "The username and/or password is incorrect",
  SIGN_IN_OTHER_PROBLEMS = 'Something get wrong during authorization.\n Please, check your internet connection',
}

export default AuthMessages;