// src/main.ts

import FullList from './model/FullList';
import ListItem from './model/ListItem';
import ListTemplate from './templates/ListTemplate';
import { v4 as uuidv4 } from 'uuid';

document.addEventListener('DOMContentLoaded', () => {
    const fullList = new FullList();
    const template = new ListTemplate();

    document.getElementById('itemEntryForm')?.addEventListener('submit', (event) => {
        event.preventDefault();

        const input = document.getElementById('newItem') as HTMLInputElement;
        const newItem = new ListItem(uuidv4(), input.value);

        fullList.addItem(newItem);
        template.render(fullList);
        input.value = '';
    });

    document.getElementById('clearItemsButton')?.addEventListener('click', () => {
        fullList.clearList();
        template.render(fullList);
    });

    template.render(fullList);
});
