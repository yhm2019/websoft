/**
 * A sample of a main function stating the famous Hello World.
 *
 * @returns void
 */
 "use strict"
function main() {
    let a = 1;
    let b;
    let range = "";

    b = a + 1;

    for (let i=0; i < 9; i++) {
        range += i + ", ";
    }

    if(range != 38) {
        console.log("Answer is not 38!");
    }

    while(range != 45) {
        console.info("Answer is not 45!");
        break;
    }
    const date = new Date();
    console.info("Now is:" + date);
    console.info("Hello World");
    console.info(range.substring(0, range.length - 2));
    console.info(a, b);
}
main();