document.querySelector(`#contentOutput`).focus();

const buttons = document.querySelectorAll(`button`);
const fullScreen = document.querySelector(`#floating-button`);
const output = document.querySelector(`#contentOutput`);

buttons.forEach(function(button) {
    button.addEventListener(`click`, function() {
        let myEvent = button.dataset[`command`];
        if (myEvent === `insertImage` || myEvent === `createLink`) {
            const url = prompt(`Enter your Link Here: `);
            document.execCommand(myEvent, false, url);
        }
        else if (myEvent === `formatBlock`) {
            const formattingValue = button.dataset[`block`];
            document.execCommand(myEvent, false, formattingValue);
        }
        else {
            document.execCommand(myEvent, false, null);
        }
    });
});

// document.querySelector(`#search`).addEventListener(`click`, function() {
//     document.querySelector(`.section__edit`).style.bottom = `110px`;
// });

// document.querySelector(`.edit__close`).addEventListener(`click`, function() {
//     document.querySelector(`.section__edit`).style.bottom = `-110px`;
// });