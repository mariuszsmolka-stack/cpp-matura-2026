# 16 - Rekurencja i algorytmy maturalne

Rekurencja to sposob rozwiazywania problemu za pomoca tej samej funkcji uruchomionej dla mniejszego problemu.

Funkcja nie musi od razu rozwiazac calego problemu. Wykonuje jeden krok i przekazuje mniejszy problem kolejnemu wywolaniu.

Najwazniejsze sa dwa elementy: przypadek podstawowy oraz krok rekurencyjny. Przypadek podstawowy zatrzymuje dalsze wywolania. Krok rekurencyjny prowadzi do mniejszej wersji tego samego zadania.

Kazde wywolanie funkcji ma wlasne argumenty i wlasne zmienne lokalne. Gdy jedno wywolanie czeka na wynik nastepnego, jego dane nadal istnieja i program wraca do nich po zakonczeniu glebszego wywolania.

Rekurencja nie zawsze jest lepsza od petli. Czasem petla jest prostsza i bezpieczniejsza.

| Pytanie                         | Co nalezy ustalic?                        |
| ------------------------------- | ----------------------------------------- |
| Kiedy funkcja ma sie zatrzymac? | przypadek podstawowy                      |
| Jak problem staje sie mniejszy? | zmiana argumentu w wywolaniu              |
| Co wykonuje biezace wywolanie?  | jeden krok rozwiazania                    |
| Co dzieje sie po powrocie?      | dalsza czesc funkcji lub zwrocenie wyniku |
| Czy rekurencja jest potrzebna?  | porownanie z rozwiazaniem iteracyjnym     |

## Lekcje

1. [Pierwsza funkcja rekurencyjna](01-pierwsza-funkcja-rekurencyjna.md)
2. [Stos wywolan i kolejnosc dzialania](02-stos-wywolan-i-kolejnosc-dzialania.md)
3. [Zwracanie wyniku](03-zwracanie-wyniku.md)
4. [Operacje na cyfrach](04-operacje-na-cyfrach.md)
5. [Tablice, vector i napisy](05-tablice-vector-i-napisy.md)
6. [Wiele wywolan i Fibonacci](06-wiele-wywolan-i-fibonacci.md)
7. [Rekurencyjne wyszukiwanie binarne](07-wyszukiwanie-binarne-rekurencyjne.md)
8. [Nawracanie i generowanie](08-nawracanie-i-generowanie.md)
9. [Zadania maturalne z rekurencji](09-zadania-maturalne-z-rekurencji.md)
10. [Wydajnosc i ograniczenia - material nieobowiazkowy](10-wydajnosc-i-ograniczenia-material-nieobowiazkowy.md)

## Umiejetnosci po rozdziale

Po rozdziale umiesz wskazac przypadek podstawowy, opisac krok rekurencyjny, przesledzic stos wywolan, napisac funkcje rekurencyjna i ocenic, kiedy lepsza bedzie zwykla petla.
