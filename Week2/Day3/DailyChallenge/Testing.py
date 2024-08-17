import math
import unittest
from DailyChallenge_Circle import Circle

class TestCircle(unittest.TestCase):
    def setUp(self):
        self.circle1 = Circle(radius=3)
        self.circle2 = Circle(diameter=4)
        self.circles = [Circle(radius=2), Circle(diameter=6), Circle(radius=4)]

    def test_radius_and_diameter(self):
        self.assertEqual(self.circle1.radius, 3)
        self.assertEqual(self.circle1.diameter, 6)
        self.assertEqual(self.circle2.radius, 2)
        self.assertEqual(self.circle2.diameter, 4)

    def test_area(self):
        expected_area1 = 3 * 3 * math.pi
        expected_area2 = 2 * 2 * math.pi
        self.assertAlmostEqual(self.circle1.area, expected_area1, places=2)
        self.assertAlmostEqual(self.circle2.area, expected_area2, places=2)

    def test_addition(self):
        result_circle = self.circle1 + self.circle2
        expected_radius = 3 + 2
        self.assertEqual(result_circle.radius, expected_radius)

    def test_comparison(self):
        self.assertTrue(self.circle1 > self.circle2)
        self.assertFalse(self.circle1 == self.circle2)
        self.assertFalse(self.circle1 < self.circle2)

    def test_sorting(self):
        sorted_circles = Circle.sort_circles(self.circles)
        expected_radii = [2, 3, 4]  # Assuming diameter=6 is converted to radius=3.0
        self.assertEqual([c.radius for c in sorted_circles], expected_radii)

if __name__ == '__main__':
    unittest.main()