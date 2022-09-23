import { LogLevel } from '@azure/msal-browser';
// Browser check variables
// If you support IE, our recommendation is that you sign-in using Redirect APIs
// If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check

// Config object to be passed to Msal on creation
export const msalConfig = {
	auth: {
		clientId: '83a320ac-df35-4fff-a248-3582578fc79d',
		authority: 'https://login.microsoftonline.com/a3ff746a-584e-4da9-80fd-6d0fc99faaa5',
		redirectUri: 'https://nccer-ldt6.vercel.app/'
	},
	cache: {
		cacheLocation: 'sessionStorage', // This configures where your cache will be stored
		storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
	},
	system: {
		loggerOptions: {
			loggerCallback: (level, message, containsPii) => {
				if (containsPii) {
					return;
				}
				switch (level) {
					case LogLevel.Error:
						console.error(message);
						return;
					case LogLevel.Info:
						console.info(message);
						return;
					case LogLevel.Verbose:
						console.debug(message);
						return;
					case LogLevel.Warning:
						console.warn(message);
						return;
					default:
						return;
				}
			}
		}
	}
};

export const loginRequest = {
	scopes: ['api://83a320ac-df35-4fff-a248-3582578fc79d/vendorintegration']
};

export const tokenRequest = {
	scopes: ['api://83a320ac-df35-4fff-a248-3582578fc79d/vendorintegration'],
	forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};

export const graphMeEndpoint = 'https://graph.microsoft.com/v1.0/me';
export const graphMailEndpoint = 'https://graph.microsoft.com/v1.0/me/messages';
