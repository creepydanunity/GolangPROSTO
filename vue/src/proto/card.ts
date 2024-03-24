/* eslint-disable */
import * as _m0 from "protobufjs/minimal.js";

export const protobufPackage = "card";

export interface PageRequest {
  page: string;
}

export interface PageReply {
  components: Component[];
}

export interface Component {
  type: string;
  props: Prop[];
  children: Component[];
  id: number;
}

export interface Prop {
  propName: string;
  propValue: string;
}

function createBasePageRequest(): PageRequest {
  return { page: "" };
}

export const PageRequest = {
  encode(message: PageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== "") {
      writer.uint32(10).string(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.page = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PageRequest {
    return { page: isSet(object.page) ? globalThis.String(object.page) : "" };
  },

  toJSON(message: PageRequest): unknown {
    const obj: any = {};
    if (message.page !== "") {
      obj.page = message.page;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PageRequest>, I>>(base?: I): PageRequest {
    return PageRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PageRequest>, I>>(object: I): PageRequest {
    const message = createBasePageRequest();
    message.page = object.page ?? "";
    return message;
  },
};

function createBasePageReply(): PageReply {
  return { components: [] };
}

export const PageReply = {
  encode(message: PageReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.components) {
      Component.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.components.push(Component.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PageReply {
    return {
      components: globalThis.Array.isArray(object?.components)
        ? object.components.map((e: any) => Component.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PageReply): unknown {
    const obj: any = {};
    if (message.components?.length) {
      obj.components = message.components.map((e) => Component.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PageReply>, I>>(base?: I): PageReply {
    return PageReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PageReply>, I>>(object: I): PageReply {
    const message = createBasePageReply();
    message.components = object.components?.map((e) => Component.fromPartial(e)) || [];
    return message;
  },
};

function createBaseComponent(): Component {
  return { type: "", props: [], children: [], id: 0 };
}

export const Component = {
  encode(message: Component, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.props) {
      Prop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.children) {
      Component.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(32).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Component {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComponent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.props.push(Prop.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.children.push(Component.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Component {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      props: globalThis.Array.isArray(object?.props) ? object.props.map((e: any) => Prop.fromJSON(e)) : [],
      children: globalThis.Array.isArray(object?.children)
        ? object.children.map((e: any) => Component.fromJSON(e))
        : [],
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
    };
  },

  toJSON(message: Component): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.props?.length) {
      obj.props = message.props.map((e) => Prop.toJSON(e));
    }
    if (message.children?.length) {
      obj.children = message.children.map((e) => Component.toJSON(e));
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Component>, I>>(base?: I): Component {
    return Component.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Component>, I>>(object: I): Component {
    const message = createBaseComponent();
    message.type = object.type ?? "";
    message.props = object.props?.map((e) => Prop.fromPartial(e)) || [];
    message.children = object.children?.map((e) => Component.fromPartial(e)) || [];
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseProp(): Prop {
  return { propName: "", propValue: "" };
}

export const Prop = {
  encode(message: Prop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.propName !== "") {
      writer.uint32(10).string(message.propName);
    }
    if (message.propValue !== "") {
      writer.uint32(18).string(message.propValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Prop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.propName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.propValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Prop {
    return {
      propName: isSet(object.propName) ? globalThis.String(object.propName) : "",
      propValue: isSet(object.propValue) ? globalThis.String(object.propValue) : "",
    };
  },

  toJSON(message: Prop): unknown {
    const obj: any = {};
    if (message.propName !== "") {
      obj.propName = message.propName;
    }
    if (message.propValue !== "") {
      obj.propValue = message.propValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Prop>, I>>(base?: I): Prop {
    return Prop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Prop>, I>>(object: I): Prop {
    const message = createBaseProp();
    message.propName = object.propName ?? "";
    message.propValue = object.propValue ?? "";
    return message;
  },
};

export interface ComponentsGetter {
  GetPage(request: PageRequest): Promise<PageReply>;
}

export const ComponentsGetterServiceName = "card.ComponentsGetter";
export class ComponentsGetterClientImpl implements ComponentsGetter {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ComponentsGetterServiceName;
    this.rpc = rpc;
    this.GetPage = this.GetPage.bind(this);
  }
  GetPage(request: PageRequest): Promise<PageReply> {
    const data = PageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPage", data);
    return promise.then((data) => PageReply.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
