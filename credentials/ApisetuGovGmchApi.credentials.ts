import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovGmchApi implements ICredentialType {
        name = 'N8nDevApisetuGovGmchApi';

        displayName = 'Apisetu Gov Gmch API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovGmch/apisetu-gov-gmch.svg', dark: 'file:../nodes/ApisetuGovGmch/apisetu-gov-gmch.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/gmch/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/gmch/v3',
                        description: 'The base URL of your Apisetu Gov Gmch API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
