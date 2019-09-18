/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IElectronService } from 'vs/platform/electron/node/electron';
import { IMainProcessService, createSimpleMainChannelProxy } from 'vs/platform/ipc/electron-browser/mainProcessService';

export class ElectronService {

	_serviceBrand: undefined;

	constructor(@IMainProcessService mainProcessService: IMainProcessService) {
		return createSimpleMainChannelProxy<IElectronService>('electron', mainProcessService);
	}
}
