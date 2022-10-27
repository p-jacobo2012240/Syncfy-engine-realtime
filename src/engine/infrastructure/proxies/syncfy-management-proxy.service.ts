import { Injectable, ForbiddenException } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { map, catchError } from 'rxjs';

@Injectable()
export class SyncfyManagementProxyService {

    // TEMP while i create env file
    readonly API_URL = 'http://localhost:8081'

    // useful to implement axios in nestjs 
    // https://www.codewithvlad.com/blog/how-to-use-axios-in-nestjs

    constructor(private http: HttpService) {}

    async alertsByOAuth(authId: String) {
        return this.http
            .get(`${this.API_URL}/metrics/alert/${authId}`)
            .pipe(
                map((response) => { return response.data })
            )
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('API not available');
                }),
            );
    }

    async notificationByOAuth(authId: string) {
        return this.http
            .get(`${this.API_URL}/metrics/notification/${authId}`)
            .pipe(
                map((response) => { return response.data })
            )
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('API not available');
                }),
            );
    }
}
