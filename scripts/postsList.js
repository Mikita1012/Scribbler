function deletePost(element) {
    // Find the parent card element
    var card = element.closest('.card');
    console.log("Hello");

    // Remove the card from the DOM
    if (card) {
        card.remove();
    }
}

// function showDeleteModal(trashIcon) {
//     var parentCard = trashIcon.closest('card');
//     // var deleteModal = parentCard.querySelector('.modal');
//     // deleteModal.style.display("block");

//     var deleteModal = parentCard.querySelector('.delete-modal');
//     // Show the delete modal
//     $(deleteModal).modal('show');
// }


function showDeleteModal(trashIcon) {
    // Find the closest parent card element
    var parentCard = trashIcon.closest('.card');
    // Check if a parent card element was found
    if (parentCard) {
        // Find the delete modal within the parent card
        var deleteModal = parentCard.querySelector('.delete-modal');
        // Check if a delete modal was found
        if (deleteModal) {
            // Show the delete modal
            $(deleteModal).modal('show');
        } else {
            console.error('Delete modal not found within the parent card.');
        }
    } else {
        console.error('Parent card element not found.');
    }
}


function showContent(titlePart) {
    var content = document.getElementById('titlePart')
    console.log(titlePart.value);
} 
