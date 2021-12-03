import { joinItems, getYear, getOptions, getGenres } from "../movieUtils";

describe('movie utils tests', () => {

    it('should join items from array by comma', () => {
        const array = ["Horror", "Comedy", "Adventure"];
        const expectedValue = "Horror, Comedy, Adventure";
        expect(joinItems(array)).toBe(expectedValue);
    });

    it('should return year', () => {
        const date = "2021-04-01";
        expect(getYear(date)).toBe("2021");
    });

    it('should convert array of genres into options', () => {
        const array = ["Horror", "Comedy"];
        const expectedValue = [{ "label": "Horror", "value": "Horror" }, { "label": "Comedy", "value": "Comedy" }];
        expect(getOptions(array)).toStrictEqual(expectedValue);
    });

    it('should convert options into array of genres', () => {
        const array = [{ "label": "Horror", "value": "Horror" }, { "label": "Comedy", "value": "Comedy" }];
        const expectedValue = ["Horror", "Comedy"];
        expect(getGenres(array)).toStrictEqual(expectedValue);
    });

});