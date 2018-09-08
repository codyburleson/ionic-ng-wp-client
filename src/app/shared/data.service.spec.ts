import {DataService} from './data.service';

describe('DataService', () => {

    let httpClientSpy: { get: jasmine.Spy };
    let dataService: DataService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        dataService = new DataService(<any> httpClientSpy);
    });

    it('should be created)', () => {
        expect(dataService).toBeTruthy();
    });

});
