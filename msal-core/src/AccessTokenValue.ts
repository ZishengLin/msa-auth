// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * @hidden
 */
export class AccessTokenValue {

  accessToken: string;
  expiresIn: string;
  userId: string;

  constructor(accessToken: string, expiresIn: string, userId: string) {
    this.accessToken = accessToken;
    this.expiresIn = expiresIn;
    this.userId = userId;
  }
}
