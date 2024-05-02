//MADE BY GUSTAV IHLENFELD
//
// Created by: GUSTAV I
// Created on: MAY 1st, 2024
// This file contains the JS functions for index.html

function ageCheck() {
    let age = parseInt(document.getElementById("age").value);
    let day = document.getElementById("days").value.toLowerCase();
    let result = document.getElementById("result");

    if (isNaN(age) || age <= 0 || age % 1 !== 0) {
        result.textContent = "Please enter a valid age.";
        return;
    }

    if (age < 5 || age > 95) {
        result.textContent = "You get in for FREE!";
    } else if ((age >= 12 && age <= 21) || day === "tuesday" || day === "thursday") {
        result.textContent = "You get a DISCOUNT, (student price)!";
    } else {
        result.textContent = "You have to pay REGULAR price.";
    }
}
