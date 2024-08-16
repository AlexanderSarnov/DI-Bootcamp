class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        """Returns a string representation of the currency in the format '<amount> <currency unit (singular or plural)>'.

        This method ensures proper pluralization of the currency unit based on the amount.
        """
        currency_unit = self.currency.lower() + ("s" if self.amount != 1 else "")
        return f"{self.amount} {currency_unit}"
    def __int__(self):
        return self.amount

    def __repr__(self):
        """Returns an unambiguous string representation of the Currency object for debugging purposes.

        - Includes both the amount and the pluralized currency unit.
        """
        currency_unit = self.currency.lower() + ("s" if self.amount != 1 else "")
        return f"{self.amount} {currency_unit}"

    def __add__(self, other):
        """Performs addition between Currency objects or a Currency object and a numeric value.

        - If both operands are Currency objects with the same currency, it returns the sum of their amounts as an integer.
        - If one operand is a Currency object and the other is a numeric value (int or float), it returns the sum as an integer.
        - Otherwise, raises a TypeError.
        """

        if isinstance(other, Currency) and self.currency == other.currency:
            return self.amount + other.amount  # Perform arithmetic on amounts (no currency)
        elif isinstance(other, (int, float)):
            return self.amount + other
        else:
            raise TypeError(f"Cannot add between Currency type <{self.currency}> and {type(other)}")

    def __iadd__(self, other):
        """Performs in-place addition between a Currency object and a numeric value.

        - If the other operand is a numeric value (int or float), it adds it to the current object's amount.
        - Otherwise, raises a TypeError.
        """

        if isinstance(other, (int, float)):
            self.amount += other
            return self  # Return self for chaining
        else:
            raise TypeError(f"Cannot add between Currency type <{self.currency}> and {type(other)}")

# Example Usage
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))  # Output: 5 dollars (user-facing output)
print(int(c1))  # Output: 5 (numeric value)
print(repr(c1))  # Output: 5 dollars (debugging representation)

print(c1 + 5)  # Output: 10 (integer sum)
print(c1 + c2)  # Output: 15 (integer sum)

print(c1)  # Output: 5 dollars
c1 += 5
print(c1)  # Output: 10 dollars (c1 modified)
c1 += c2
print(c1)  # Output: 20 dollars (c1 modified)

try:
    print(c1 + c3)  # Output: TypeError: Cannot add between Currency type...
except TypeError as e:
    print(e)