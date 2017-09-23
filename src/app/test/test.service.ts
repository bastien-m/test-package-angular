import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
    me: 'TestService';

    sayHello(): string {
        return 'call sayHello function from TestService';
    }
}