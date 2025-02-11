/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-env node */

'use strict';

const upath = require( 'upath' );

module.exports = {
	PACKAGES_DIRECTORY: 'packages',
	RELEASE_DIRECTORY: 'release',
	CKEDITOR5_ROOT_PATH: upath.join( __dirname, '..', '..', '..' )
};
