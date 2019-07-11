// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { ClientInfo } from "./ClientInfo";
import { IdToken } from "./IdToken";
import { Utils } from "./Utils";

/**
 * accountIdentifier       combination of idToken.uid and idToken.utid
 * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
 * userName                idToken.preferred_username
 * name                    idToken.name
 * idToken                 idToken
 * sid                     idToken.sid - session identifier
 * environment             idtoken.issuer (the authority that issues the token)
 */
export class Account {

    userId: string;

    /**
     * Creates an Account Object
     * @praram userId
     */
    constructor(userId: string) {
      this.userId = userId;
    }

    /**
     * @hidden
     * @param idToken
     * @param clientInfo
     */
    static createAccount(userId: string): Account {

        // create accountIdentifier
        return new Account(userId);
    }
}
