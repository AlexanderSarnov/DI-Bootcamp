import { promises as fs } from 'fs';

export const read_file = async (file_path) => {
    try {
        return await fs.readFile(file_path, 'utf8');
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
        throw error;
    }
}; // !need explanation

