import { reduce } from 'lodash'

import api from './api'
import types from './api/index.d'

class GRPCError extends Error {
  public EOF: boolean
  public OK: boolean

  // public Code: beerrcode.ErrCode | beweshnet_errcode.ErrCode
  public GrpcCode: types.rpcmanager.GRPCErrCode

  public error: types.rpcmanager.Error

  constructor(e: types.rpcmanager.IError | null | undefined) {
    if (!e) {
      // this should not happen, but should not break the app either.
      // instead simply create a empty error and warn about this
      console.warn(
        `GRPCError: (${e}) grpc error provided, empty error returned`,
      )
      e = api.rpcmanager.Error.create({})
    }

    const error = api.rpcmanager.Error.create(e)
    super(error.message)

    this.error = error
    // this.Code = error.errorCode
    this.GrpcCode = error.grpcErrorCode

    this.OK = error.grpcErrorCode === api.rpcmanager.GRPCErrCode.OK
    // error.errorCode === beerrcode.ErrCode.Undefined
    this.EOF =
      error.grpcErrorCode === api.rpcmanager.GRPCErrCode.CANCELED ||
      (error.grpcErrorCode === api.rpcmanager.GRPCErrCode.UNKNOWN &&
        error.message === 'EOF')
  }

  // public details(): beerrcode.ErrDetails {
  // 	if (this.error.errorDetails) {
  // 		return beerrcode.ErrDetails.create(this.error.errorDetails)
  // 	}

  // 	return beerrcode.ErrDetails.create({})
  // }

  // public errCode(): beerrcode.ErrCode | beweshnet_errcode.ErrCode {
  // 	return this.Code
  // }

  public grpcErrorCode(): types.rpcmanager.GRPCErrCode {
    return this.GrpcCode
  }

  public toJSON(): any {
    // const details = this.details().codes.map((err: beerrcode.ErrCode) => {
    // 	return beerrcode.ErrCode[err]
    // })

    return {
      message: this.message,
      grpcErrorCode: api.rpcmanager.GRPCErrCode[this.GrpcCode],
      // errorCode: beerrcode.ErrCode[this.Code],
      // details: details,
      EOF: this.EOF,
      OK: this.OK,
    }
  }

  // public hasErrCode(error: beerrcode.ErrCode): boolean {
  // 	return reduce(this.error.errorDetails?.codes, (ac, v) => ac && v == error, false) || false
  // }
}

const newGRPCError = (code: number, message: string): GRPCError => {
  const error = api.rpcmanager.Error.fromObject({
    message: message,
    grpcErrorCode: code,
  })
  return new GRPCError(error)
}

const EOF = new GRPCError({
  grpcErrorCode: api.rpcmanager.GRPCErrCode.CANCELED,
  message: 'EOF',
})

export { GRPCError, EOF, newGRPCError }
