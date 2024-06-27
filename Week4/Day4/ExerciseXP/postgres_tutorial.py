import psycopg2

DBNAME = 'hollywood'
USER = 'postgres'
PASSWORD = '1488'
HOST = 'localhost'
PORT = '5432'

connection = psycopg2.connect(dbname = DBNAME, user = USER, password = PASSWORD, host = HOST, port = PORT)


# create a cursor
cursor = connection.cursor()

# Run Select Queries
query = "SELECT * from actors;"

cursor.execute(query)

rows = cursor.fetchall()

for row in rows:
    print(row)

# update queries
table = 'actors'
old_name = 'George'
new_name = 'GORGE'
# table = "actors"
query = f"UPDATE {table} SET first_name = %s where first_name = %s;"

cursor.execute(query, (old_name,new_name))
connection.commit() # Apply changes done by cursor through the connection