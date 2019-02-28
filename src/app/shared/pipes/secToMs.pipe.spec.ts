import { SecToMsPipe } from './secToMs.pipe';

describe('SecToMsPipe', () => {
    it('create an instance', () => {
        const pipe = new SecToMsPipe();
        expect(pipe).toBeTruthy();
    });
});
