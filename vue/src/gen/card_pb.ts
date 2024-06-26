// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file card.proto (package card, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message card.PageRequest
 */
export class PageRequest extends Message<PageRequest> {
  /**
   * @generated from field: string page = 1;
   */
  page = "";

  constructor(data?: PartialMessage<PageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "card.PageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PageRequest {
    return new PageRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PageRequest {
    return new PageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PageRequest {
    return new PageRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PageRequest | PlainMessage<PageRequest> | undefined, b: PageRequest | PlainMessage<PageRequest> | undefined): boolean {
    return proto3.util.equals(PageRequest, a, b);
  }
}

/**
 * @generated from message card.PageReply
 */
export class PageReply extends Message<PageReply> {
  /**
   * @generated from field: repeated card.Component components = 1;
   */
  components: Component[] = [];

  constructor(data?: PartialMessage<PageReply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "card.PageReply";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "components", kind: "message", T: Component, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PageReply {
    return new PageReply().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PageReply {
    return new PageReply().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PageReply {
    return new PageReply().fromJsonString(jsonString, options);
  }

  static equals(a: PageReply | PlainMessage<PageReply> | undefined, b: PageReply | PlainMessage<PageReply> | undefined): boolean {
    return proto3.util.equals(PageReply, a, b);
  }
}

/**
 * @generated from message card.Component
 */
export class Component extends Message<Component> {
  /**
   * @generated from field: string type = 1;
   */
  type = "";

  /**
   * @generated from field: repeated card.Prop props = 2;
   */
  props: Prop[] = [];

  /**
   * @generated from field: repeated card.Component children = 3;
   */
  children: Component[] = [];

  /**
   * @generated from field: int32 id = 4;
   */
  id = 0;

  constructor(data?: PartialMessage<Component>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "card.Component";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "props", kind: "message", T: Prop, repeated: true },
    { no: 3, name: "children", kind: "message", T: Component, repeated: true },
    { no: 4, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Component {
    return new Component().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Component {
    return new Component().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Component {
    return new Component().fromJsonString(jsonString, options);
  }

  static equals(a: Component | PlainMessage<Component> | undefined, b: Component | PlainMessage<Component> | undefined): boolean {
    return proto3.util.equals(Component, a, b);
  }
}

/**
 * @generated from message card.Prop
 */
export class Prop extends Message<Prop> {
  /**
   * @generated from field: string prop_name = 1;
   */
  propName = "";

  /**
   * @generated from field: string prop_value = 2;
   */
  propValue = "";

  constructor(data?: PartialMessage<Prop>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "card.Prop";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "prop_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "prop_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Prop {
    return new Prop().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Prop {
    return new Prop().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Prop {
    return new Prop().fromJsonString(jsonString, options);
  }

  static equals(a: Prop | PlainMessage<Prop> | undefined, b: Prop | PlainMessage<Prop> | undefined): boolean {
    return proto3.util.equals(Prop, a, b);
  }
}

