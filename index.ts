#! /usr/bin/env node

import inquirer from "inquirer";

let store: string[] = [];
let start: boolean = true;
async function user() {
  while (start) {
    let user_input  = await inquirer
      .prompt([
        {
          type: "string",
          name: "todo_item",
          message: "Enter the todo item here",
        },
        {
          type: "confirm",
          name: "todo_list",
          message: "Would you like to enter more : ",
          default: false,
        },
      ])
      .then(async (display) => {
        if (display.todo_item) {
          store.push(display.todo_item);
        }
        if (display.todo_list == false) {
          await display_list();
          terminate();
        }
      });
  }
}

async function display_list() {
  console.log("Your todo list is : ");
  for (let index = 0; index < store.length; index++) {
    await duration();
    console.log(store[index]);
  }
}
async function terminate() {
  console.log("Thank you !");
  start = false;
}

async function duration() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
}

user();
