let funds = prompt("Please, enter the amount", "");
let discount = prompt("What is your discount ?", "");
let discounted;
let fundsSaved;

if (
    funds < 0 ||
    funds > 9999999 ||
    isNaN(funds) ||
    isNaN(discount) ||
    discount > 99 ||
    discount < 0
) {
    alert("Invalid data");
} else {
    discounted = funds - funds * (discount / 100);
    fundsSaved = funds - discounted;
    alert(`Price without discount: ${funds} USD,
    Discount: ${discount}%,
    Price with discount: ${discounted.toFixed(2)} USD,
    Saved:  ${fundsSaved.toFixed(2)} USD`);
}