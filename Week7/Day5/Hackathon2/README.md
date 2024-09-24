DB Requests

##### GET All Sets

`GET http://localhost:3000/cardsets`

##### GET words by sets

**Endpoint**: `/cardsets/:setName/words`
`GET http://localhost:3000/cardsets/Colors/words`

##### GET All Games

**Endpoint**: `/games`
`GET http://localhost:3000/games`

##### POST Create a Set

**Endpoint**: `/cardsets`
`POST http://localhost:3000/cardsets`
**Body**

```json
{
    "set_name": "Colors"
}
```

##### POST Create New Pair of Words and Add to a Specific Set

**Endpoint**: `/words`
`POST http://localhost:3000/words`
Example **body** to add to the Colors set

```json
{
    "english": "Blue",
    "hebrew": "כחול",
    "set_name": "Colors"
}
```

##### POST Results to Player Statistics for game Match Words

**Endpoint**: `api/playerstatistics`
`POST http://localhost:3000/api/playerstatistics`
**body** example to add :

```json
{
    "username": "player1",
    "set_name": "Colors",
    "game_name": "Match Words",
    "number_of_attempts": 10,
    "time_spent": 120
}
```

##### POST Results to Player Statistics for game Choose Correct Word

**Endpoint**: `api/playerstatistics`
`POST http://localhost:3000/api/playerstatistics`
**body** example to add :

```json
{
    "username": "player1",
    "set_name": "Animals",
    "game_name": "Choose Correct Word",
    "correct_answers": 14,
    "time_spent": 95
}
```

##### GET Top results for Match Words

**Endpoint**: `api/playerstatistics`
`GET http://localhost:3000/api/topresults/Colors/Match%20Words

##### GET Top results for Choose Correct Word

**Endpoint**: `api/playerstatistics`
`GET http://localhost:3000/api/topresults/Animals/Choose%20Correct%20Word`
