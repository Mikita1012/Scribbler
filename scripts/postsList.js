function deletePost(element) {
    // Find the parent card element
    var card = element.closest('.card');
    console.log("Hello");

    // Remove the card from the DOM
    if (card) {
        card.remove();
    }
}
