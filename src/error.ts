import type { rpcmanager as rpcmanagerpb } from "./api/index.d";
import { rpcmanager } from "./api";

class GRPCError extends Error {
  public EOF: boolean;
  public OK: boolean;

  // public Code: beerrcode.ErrCode | beweshnet_errcode.ErrCode
  public GrpcCode: rpcmanagerpb.GRPCErrCode;

  public error: rpcmanagerpb.Error;

  constructor(e: rpcmanagerpb.IError | null | undefined) {
    if (!e) {
      // this should not happen, but should not break the app either.
      // instead simply create a empty error and warn about this
      console.warn(
        `GRPCError: (${e}) grpc error provided, empty error returned`,
      );
      e = rpcmanager.Error.create({});
    }

    const error = rpcmanager.Error.create(e);
    super(error.message);

    this.error = error;
    // this.Code = error.errorCode
    this.GrpcCode = error.grpcErrorCode;

    this.OK = error.grpcErrorCode === rpcmanager.GRPCErrCode.OK;
    // error.errorCode === beerrcode.ErrCode.Undefined
    this.EOF =
      error.grpcErrorCode === rpcmanager.GRPCErrCode.CANCELED ||
      (error.grpcErrorCode === rpcmanager.GRPCErrCode.UNKNOWN &&
        error.message === "EOF");
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

  public grpcErrorCode(): rpcmanagerpb.GRPCErrCode {
    return this.GrpcCode;
  }

  public toJSON(): any {
    // const details = this.details().codes.map((err: beerrcode.ErrCode) => {
    // 	return beerrcode.ErrCode[err]
    // })

    return {
      message: this.message,
      grpcErrorCode: rpcmanager.GRPCErrCode[this.GrpcCode],
      // errorCode: beerrcode.ErrCode[this.Code],
      // details: details,
      EOF: this.EOF,
      OK: this.OK,
    };
  }

  // public hasErrCode(error: beerrcode.ErrCode): boolean {
  // 	return reduce(this.error.errorDetails?.codes, (ac, v) => ac && v == error, false) || false
  // }
}

const newGRPCError = (code: number, message: string): GRPCError => {
  const error = rpcmanager.Error.fromObject({
    message: message,
    grpcErrorCode: code,
  });
  return new GRPCError(error);
};

const EOF = new GRPCError({
  grpcErrorCode: rpcmanager.GRPCErrCode.CANCELED,
  message: "EOF",
});

export { GRPCError, EOF, newGRPCError };
