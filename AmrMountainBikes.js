AmrMountainBikes.js


function purchaseConfirmation(bicycleName, price) {
            // Ask for confirmation
            var confirmed = confirm("Are you sure you want to purchase"+ "?");

            // If confirmed, show the success message
            if (confirmed) {
                document.getElementById('popupMessage').innerHTML = 'Purchase Made Successfully! ' + bicycleName + '!';
                document.getElementById('successPopup').style.display = 'block';
            }
        }

        function closePopup() {
            // Close the popup
            document.getElementById('successPopup').style.display = 'none';
        }