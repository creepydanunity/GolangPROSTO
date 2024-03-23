// @generated by protoc-gen-es v1.8.0 with parameter "target=js"
// @generated from file card.proto (package card, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message card.PageRequest
 */
export const PageRequest = /*@__PURE__*/ proto3.makeMessageType(
  "card.PageRequest",
  () => [
    { no: 1, name: "page", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message card.PageReply
 */
export const PageReply = /*@__PURE__*/ proto3.makeMessageType(
  "card.PageReply",
  () => [
    { no: 1, name: "components", kind: "message", T: Component, repeated: true },
  ],
);

/**
 * @generated from message card.Component
 */
export const Component = /*@__PURE__*/ proto3.makeMessageType(
  "card.Component",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "props", kind: "message", T: Prop, repeated: true },
    { no: 3, name: "children", kind: "message", T: Component, repeated: true },
    { no: 4, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message card.Prop
 */
export const Prop = /*@__PURE__*/ proto3.makeMessageType(
  "card.Prop",
  () => [
    { no: 1, name: "prop_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "prop_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

