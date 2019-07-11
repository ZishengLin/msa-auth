// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { Utils } from "./Utils";

/**
 * @hidden
 */
export class AccessTokenKey {

  authority: string;
  clientId: string;
  scopes: string;
  userId: string;

  constructor(authority: string, clientId: string, scopes: string, userId: string) {
    this.authority = authority;
    this.clientId = clientId;
    this.scopes = scopes;
    this.userId = userId;
  }
}
