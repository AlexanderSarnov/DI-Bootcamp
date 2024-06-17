"""
Exercise 3 : Who’s The Song Producer?
Instructions
Define a class called Song, it will show the lyrics of a song.
Its __init__() method should have two arguments: self and lyrics (a list).
Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
Create an object, for example:

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


Then, call the sing_me_a_song method. The output should be:

There’s a lady who's sure
all that glitters is gold
and she’s buying a stairway to heaven
"""

class Song:
    """Represents a song with lyrics."""

    def __init__(self, lyrics: list):
        """
        Initializes a Song object with a list of lyrics lines.

        Args:
            lyrics: A list of strings representing the song's lyrics.
        """

        self.lyrics = lyrics

    def sing_me_a_song(self):
        """Prints each lyric in the song on a separate line."""

        for lyric in self.lyrics:
            print(lyric)


# Create a Song object with lyrics
stairway = Song(["There’s a lady who's sure",
                   "all that glitters is gold",
                   "and she’s buying a stairway to heaven"])

# Call the sing_me_a_song method
stairway.sing_me_a_song()
