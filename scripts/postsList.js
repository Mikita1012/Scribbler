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



function redirectToPostPage(anchorTag) {
    // Get the card header text
    var author = anchorTag.closest('.card').querySelector('.card-header').innerText;
    localStorage.setItem('postTitle', author);
    window.location.href = anchorTag.href;

    var title = anchorTag.closest('.card-content').querySelector('.titlePart').innerText;
    localStorage.setItem('titlePart', title);

    var content = anchorTag.closest('.card-content').querySelector('.content').innerText;
    localStorage.setItem('content', content);







}






