// src/templates/ListTemplate.ts

import FullList from '../model/FullList';
import ListItem from '../model/ListItem';

class ListTemplate {
    ul: HTMLUListElement;

    constructor() {
        this.ul = document.getElementById('listItems') as HTMLUListElement;
    }

    render(fullList: FullList) {
        // Clear the existing content
        this.ul.innerHTML = '';

        // Loop through the list items and create new <li> elements
        fullList.loadList();
        fullList.getList().forEach((item: ListItem) => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            if (item.checked) {
                li.classList.add('completed');
            }

            // Create a checkbox to toggle item completion
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.checked;
            checkbox.addEventListener('click', () => {
                fullList.toggleItem(item.id);
                this.render(fullList);
            });

            // Create a span to display the item text
            const span = document.createElement('span');
            span.contentEditable = 'true'; // Correctly set contentEditable as a string
            span.textContent = item.item;
            span.addEventListener('blur', () => {
                fullList.updateItem(item.id, span.textContent || '');
            });

            // Create a delete button to remove the item
            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger btn-sm float-right';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                fullList.removeItem(item.id);
                this.render(fullList);
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);
            this.ul.appendChild(li);
        });
    }
}

export default ListTemplate;
