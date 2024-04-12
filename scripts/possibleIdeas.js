function addIdea() {
    const table = document.getElementById('possibleIdeas').getElementsByTagName('tbody')[0];
    const newIdeaInput = document.getElementById('newIdea');
    const newIdea = newIdeaInput.value;
    if (newIdea.trim() !== '') {  // Check if the input is not just spaces
        const newRow = table.insertRow(table.rows.length);
        const cell1 = newRow.insertCell(0);
        cell1.textContent = newIdea;

        const cell2 = newRow.insertCell(1);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            this.closest('tr').remove();
        });
        cell2.appendChild(deleteBtn);

        newIdeaInput.value = '';  // Clear input after adding
    }
}
