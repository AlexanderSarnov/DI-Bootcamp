// seedData.js

require('dotenv').config(); // Load environment variables from .env file
const db = require('./config/db');
const convertTextToSpeech = require('./utils/textToSpeech');

const words = [
    { english: 'Red', hebrew: 'אדום' },
    { english: 'Blue', hebrew: 'כחול' },
    { english: 'Green', hebrew: 'ירוק' },
    { english: 'Yellow', hebrew: 'צהוב' },
    { english: 'Orange', hebrew: 'כתום' },
    { english: 'Purple', hebrew: 'סגול' },
    { english: 'Pink', hebrew: 'ורוד' },
    { english: 'Brown', hebrew: 'חום' },
    { english: 'Black', hebrew: 'שחור' },
    { english: 'White', hebrew: 'לבן' },
    { english: 'Dog', hebrew: 'כלב' },
    { english: 'Cat', hebrew: 'חתול' },
    { english: 'Fish', hebrew: 'דג' },
    { english: 'Bird', hebrew: 'ציפור' },
    { english: 'Cow', hebrew: 'פרה' },
    { english: 'Horse', hebrew: 'סוס' },
    { english: 'Sheep', hebrew: 'כבש' },
    { english: 'Lion', hebrew: 'אריה' },
    { english: 'Elephant', hebrew: 'פיל' },
    { english: 'Monkey', hebrew: 'קוף' },
];

const cardSets = [{ set_name: 'Colors' }, { set_name: 'Animals' }];

const cardSetWords = [
    {
        set_name: 'Colors',
        words: ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', 'Black', 'White'],
    },
    {
        set_name: 'Animals',
        words: ['Dog', 'Cat', 'Fish', 'Bird', 'Cow', 'Horse', 'Sheep', 'Lion', 'Elephant', 'Monkey'],
    },
];

async function seedDatabase() {
    try {
        // Insert card sets
        for (const set of cardSets) {
            await db.query('INSERT INTO card_sets (set_name) VALUES ($1)', [set.set_name]);
        }

        // Insert words and generate audio files
        for (const word of words) {
            const audioFile = `./public/sounds/${word.english}.mp3`;
            await convertTextToSpeech(word.hebrew, audioFile);
            await db.query('INSERT INTO words (english, hebrew, audio_file) VALUES ($1, $2, $3)', [
                word.english,
                word.hebrew,
                audioFile,
            ]);
        }

        // Insert card set words
        for (const set of cardSetWords) {
            const result = await db.query('SELECT id FROM card_sets WHERE set_name = $1', [set.set_name]);
            const cardSetId = result.rows[0].id;

            for (const word of set.words) {
                const wordResult = await db.query('SELECT id FROM words WHERE english = $1', [word]);
                const wordId = wordResult.rows[0].id;

                await db.query('INSERT INTO card_set_words (card_set_id, word_id) VALUES ($1, $2)', [
                    cardSetId,
                    wordId,
                ]);
            }
        }

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

seedDatabase();
