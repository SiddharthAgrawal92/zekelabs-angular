import { Injectable } from '@angular/core';

@Injectable()
class Constants {
    public readonly DEV_API_ENDPOINT: string = 'http://dev.api-server.com/';
    public readonly STAGING_API_ENDPOINT: string = 'http://staging.api-server.com/';
    public readonly PROD_API_ENDPOINT: string = 'http://prod.api-server.com/';
}