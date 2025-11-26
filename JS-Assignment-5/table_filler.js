document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const tableBody = document.getElementById('student-table-body');
    const noResultsRow = document.getElementById('no-results-row');
    const rows = tableBody.querySelectorAll('tr');

    function filterTable() {
        const filter = searchInput.value.toLowerCase();
        let resultsFound = false;

        rows.forEach(row => {
            let rowMatches = false;
            // Get all cell content in the row and join them into a single string
            const cells = row.querySelectorAll('td');
            
            cells.forEach(cell => {
                if (cell.textContent.toLowerCase().includes(filter)) {
                    rowMatches = true;
                }
            });

            if (rowMatches) {
                row.style.display = ''; // Show the row
                resultsFound = true;
            } else {
                row.style.display = 'none'; // Hide the row
            }
        });

        // Show/Hide "No results found" message
        if (noResultsRow) {
            noResultsRow.style.display = resultsFound ? 'none' : 'table-row';
        }
    }

    // Use the 'input' event for real-time filtering
    searchInput.addEventListener('input', filterTable);
});