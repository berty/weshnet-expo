/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  rpcmanager: {
    options: {
      go_package: "github.com/gfanton/grpcutil/rpcmanager"
    },
    nested: {
      RPCManager: {
        methods: {
          ClientInvokeUnary: {
            requestType: "ClientInvokeUnary.Request",
            responseType: "ClientInvokeUnary.Reply"
          },
          CreateClientStream: {
            requestType: "ClientCreateStream.Request",
            responseType: "ClientCreateStream.Reply"
          },
          ClientStreamSend: {
            requestType: "ClientStreamSend.Request",
            responseType: "ClientStreamSend.Reply"
          },
          ClientStreamRecv: {
            requestType: "ClientStreamRecv.Request",
            responseType: "ClientStreamRecv.Reply"
          },
          ClientStreamClose: {
            requestType: "ClientStreamClose.Request",
            responseType: "ClientStreamClose.Reply"
          },
          ClientStreamCloseAndRecv: {
            requestType: "ClientStreamCloseAndRecv.Request",
            responseType: "ClientStreamCloseAndRecv.Reply"
          }
        }
      },
      ClientInvokeUnary: {
        fields: {},
        nested: {
          Request: {
            fields: {
              methodDesc: {
                type: "MethodDesc",
                id: 2
              },
              payload: {
                type: "bytes",
                id: 3
              },
              header: {
                rule: "repeated",
                type: "Metadata",
                id: 4
              }
            }
          },
          Reply: {
            fields: {
              payload: {
                type: "bytes",
                id: 2
              },
              trailer: {
                rule: "repeated",
                type: "Metadata",
                id: 3
              },
              error: {
                type: "Error",
                id: 4
              }
            }
          }
        }
      },
      ClientCreateStream: {
        fields: {},
        nested: {
          Request: {
            fields: {
              methodDesc: {
                type: "MethodDesc",
                id: 2
              },
              payload: {
                type: "bytes",
                id: 3
              },
              header: {
                rule: "repeated",
                type: "Metadata",
                id: 4
              }
            }
          },
          Reply: {
            fields: {
              streamId: {
                type: "string",
                id: 1
              },
              trailer: {
                rule: "repeated",
                type: "Metadata",
                id: 2
              },
              error: {
                type: "Error",
                id: 3
              }
            }
          }
        }
      },
      ClientStreamSend: {
        fields: {},
        nested: {
          Request: {
            fields: {
              streamId: {
                type: "string",
                id: 1
              },
              payload: {
                type: "bytes",
                id: 2
              }
            }
          },
          Reply: {
            fields: {
              streamId: {
                type: "string",
                id: 1
              },
              trailer: {
                rule: "repeated",
                type: "Metadata",
                id: 2
              },
              error: {
                type: "Error",
                id: 3
              }
            }
          }
        }
      },
      ClientStreamRecv: {
        fields: {},
        nested: {
          Request: {
            fields: {
              streamId: {
                type: "string",
                id: 1
              }
            }
          },
          Reply: {
            fields: {
              streamId: {
                type: "string",
                id: 1
              },
              payload: {
                type: "bytes",
                id: 2
              },
              trailer: {
                rule: "repeated",
                type: "Metadata",
                id: 3
              },
              error: {
                type: "Error",
                id: 4
              },
              eof: {
                type: "bool",
                id: 5
              }
            }
          }
        }
      },
      ClientStreamClose: {
        fields: {},
        nested: {
          Request: {
            fields: {
              streamId: {
                type: "string",
                id: 1
              }
            }
          },
          Reply: {
            fields: {
              streamId: {
                type: "string",
                id: 1
              },
              trailer: {
                rule: "repeated",
                type: "Metadata",
                id: 2
              },
              error: {
                type: "Error",
                id: 3
              }
            }
          }
        }
      },
      ClientStreamCloseAndRecv: {
        fields: {},
        nested: {
          Request: {
            fields: {
              streamId: {
                type: "string",
                id: 1
              }
            }
          },
          Reply: {
            fields: {
              streamId: {
                type: "string",
                id: 1
              },
              payload: {
                type: "bytes",
                id: 2
              },
              trailer: {
                rule: "repeated",
                type: "Metadata",
                id: 3
              },
              error: {
                type: "Error",
                id: 4
              }
            }
          }
        }
      },
      MethodDesc: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          isClientStream: {
            type: "bool",
            id: 2
          },
          isServerStream: {
            type: "bool",
            id: 3
          }
        }
      },
      Metadata: {
        fields: {
          key: {
            type: "string",
            id: 1
          },
          values: {
            rule: "repeated",
            type: "string",
            id: 2
          }
        }
      },
      Error: {
        fields: {
          grpcErrorCode: {
            type: "GRPCErrCode",
            id: 1
          },
          message: {
            type: "string",
            id: 2
          },
          eof: {
            type: "bool",
            id: 3
          }
        }
      },
      GRPCErrCode: {
        values: {
          OK: 0,
          CANCELED: 1,
          UNKNOWN: 2,
          INVALID_ARGUMENT: 3,
          DEADLINE_EXCEEDED: 4,
          NOT_FOUND: 5,
          ALREADY_EXISTS: 6,
          PERMISSION_DENIED: 7,
          RESOURCE_EXHAUSTED: 8,
          FAILED_PRECONDITION: 9,
          ABORTED: 10,
          OUT_OF_RANGE: 11,
          UNIMPLEMENTED: 12,
          INTERNAL: 13,
          UNAVAILABLE: 14,
          DATA_LOSS: 15,
          UNAUTHENTICATED: 16
        }
      }
    }
  }
});

module.exports = $root;
