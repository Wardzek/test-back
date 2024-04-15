"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutationCreateAd = void 0;
const client_1 = require("@apollo/client");
exports.mutationCreateAd = (0, client_1.gql) `
  mutation createAd($data: AdCreateInput!) {
    item: createAd(data: $data) {
      id
    }
  }
`;
