/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
declare module 'vscode' {
    // @alexr00 https://github.com/microsoft/vscode/issues/204484

    export interface CommentController {
        /**
         * The currently active comment, or `undefined` if no comment has focus.
         */
        readonly activeComment: Comment | undefined;

        /**
         * The active comment thread that belongs to this controller, or `undefined`
         * if the active thread belongs to a different controller.
         */
        readonly activeCommentThread: CommentThread | undefined;
    }
}
