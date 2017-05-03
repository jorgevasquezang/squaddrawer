import "ignore-styles";
import Stadium from "../stadium/stadium";
describe("Stadium Test", function () {
    it("Swap Sides home/Away", () => {

        const stadium = new Stadium();

        expect(stadium.isHome).toBe(true);

        stadium.swapSides();
        expect(stadium.isHome).toBe(false);

        stadium.swapSides();
        expect(stadium.isHome).toBe(true);
    }),
        it("get games", (done) => {
            const stadium = new Stadium();
            fetch('squad.json').then(response => {
                return response.json();
            }).then(data => {
                console.log("Squad Json loaded", data);
                expect(data).not.toBeNull();
                done();
            });


        });
}
);