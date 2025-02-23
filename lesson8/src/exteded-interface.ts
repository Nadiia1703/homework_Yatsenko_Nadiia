import { Results } from './interface-fetch';

export interface ExtendedResults extends Results {
    timeLine: {
        start: string;
        end: string;
    }
}


const res: Partial<ExtendedResults> = {};
res.timeLine = {
    start: 'test',
    end: 'end-test'
};

