package expo.modules.weshnetexpo

import expo.modules.kotlin.exception.CodedException

class WeshnetNotStartedError : CodedException("NotStarted", "Service hasn't started yet", null)
class WeshnetCoreError(err: Exception?) : CodedException("CoreError", err)

