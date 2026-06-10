/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
declare module 'vscode' {
	export interface AuthenticationProviderOptions {
		readonly supportedAuthorizationServers?: Uri[];
	}

	/**
	 * Common OAuth/OpenID Connect options shared across authentication flows.
	 */
	export interface AuthenticationProviderCommonOptions {
		/**
		 * When specified, the authentication provider will use the provided
		 * authorization server URL. Only effective when the provider has
		 * `supportedAuthorizationServers` set.
		 */
		authorizationServer?: Uri;

		/**
		 * Override the default client ID for the OAuth flow.
		 */
		clientId?: string;

		/**
		 * Resource URI (RFC 8707 resource indicator) to request an
		 * audience-restricted access token.
		 */
		resource?: string;
	}

	export interface AuthenticationProviderSessionOptions extends AuthenticationProviderCommonOptions {
		 //Special features for the session may be added here later
	}

	export interface AuthenticationGetSessionOptions extends AuthenticationProviderCommonOptions {
	//Special features for the session may be added here later
	}
}
