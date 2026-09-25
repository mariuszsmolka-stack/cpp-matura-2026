# 10 - Tablice

Tablica pozwala przechowywać wiele wartości tego samego typu pod jedną nazwą. Zamiast tworzyć zmienne `liczba1`, `liczba2`, `liczba3`, możemy utworzyć jedną tablicę `liczby`.

Pojedyncza zmienna przechowuje jedną wartość. Tablica przechowuje wiele wartości ustawionych w określonej kolejności.

Każdy element tablicy ma indeks. W C++ pierwszy indeks ma wartość `0`. Jeżeli tablica ma 5 elementów, ostatni poprawny indeks to `4`.

W podstawowym toku rozdziału omawiamy klasyczne tablice C++ o stałej pojemności. To znaczy, że liczba dostępnych miejsc jest ustalona w kodzie programu. Gdy użytkownik podaje liczbę danych, używamy osobnej zmiennej `n`, która oznacza rozmiar logiczny, czyli liczbę aktualnie używanych elementów.

## Cele rozdziału

Po materiale podstawowym nauczysz się:

- deklarować tablice jednowymiarowe i dwuwymiarowe,
- odczytywać i zmieniać elementy tablicy,
- przechodzić po tablicy pętlą `for`,
- rozróżniać pojemność tablicy i rozmiar logiczny,
- obliczać sumę, średnią, minimum i maksimum,
- wyszukiwać oraz zliczać elementy,
- przesuwać elementy,
- logicznie wstawiać i usuwać wartości,
- przekazywać tablice do funkcji,
- pracować z prostą tablicą dwuwymiarową.

## Materiał podstawowy

1. [Pierwsza tablica](01-pierwsza-tablica.md)
2. [Wczytywanie i wypisywanie](02-wczytywanie-i-wypisywanie.md)
3. [Suma, średnia, minimum i maksimum](03-suma-srednia-minimum-maksimum.md)
4. [Wyszukiwanie i zliczanie](04-wyszukiwanie-i-zliczanie.md)
5. [Przesuwanie elementów](05-przesuwanie-elementow.md)
6. [Logiczne wstawianie i usuwanie](06-logiczne-wstawianie-i-usuwanie.md)
7. [Tablice i funkcje](07-tablice-i-funkcje.md)
8. [Tablice dwuwymiarowe](08-tablice-dwuwymiarowe.md)

## Materiał nieobowiązkowy

- [Tablice dynamiczne - materiał nieobowiązkowy](09-tablice-dynamiczne-material-nieobowiazkowy.md)

Materiał o tablicach dynamicznych wymaga poznania podstaw wskaźników oraz ręcznego zarządzania pamięcią. Nie jest potrzebny do przejścia do następnego rozdziału. Możesz wrócić do niego później.

## Co warto zapamiętać

Tablica ma stałą pojemność, ale program może używać tylko części jej elementów. Indeksy zaczynają się od `0`, więc trzeba bardzo uważać na zakres pętli. Dobra kontrola indeksów jest ważniejsza niż szybkie pisanie kodu.
