Amr.js

function searchRedirect() {
            
            var searchQuery = document.getElementById('searchInput').value;

            
            if (searchQuery.trim() !== '') {
                
                window.location.href = 'https://example.com/searched-tab?q=' + encodeURIComponent(searchQuery);
                
            }
        }

function search() {
  var searchInput = document.getElementById("searchInput").value;
  
  alert("Searching for: " + searchInput);
}

