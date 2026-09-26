# 16 - Rekurencja i algorytmy maturalne

Rekurencja to sposób rozwiązywania problemu za pomocą tej samej funkcji uruchomionej dla mniejszego problemu.

Funkcja nie musi od razu rozwiązać całego problemu. Wykonuje jeden krok i przekazuje mniejszy problem kolejnemu wywołaniu.

Najważniejsze są dwa elementy: przypadek podstawowy oraz krok rekurencyjny. Przypadek podstawowy zatrzymuje dalsze wywołania. Krok rekurencyjny prowadzi do mniejszej wersji tego samego zadania.

Każde wywołanie funkcji ma własne argumenty i własne zmienne lokalne. Gdy jedno wywołanie czeka na wynik następnego, jego dane nadal istnieją i program wraca do nich po zakończeniu głębszego wywołania.

Rekurencja nie zawsze jest lepsza od pętli. Czasem pętla jest prostsza i bezpieczniejsza.

| Pytanie                         | Co należy ustalić?                        |
| ------------------------------- | ----------------------------------------- |
| Kiedy funkcja ma się zatrzymać? | przypadek podstawowy                      |
| Jak problem staje się mniejszy? | zmiana argumentu w wywołaniu              |
| Co wykonuje bieżące wywołanie?  | jeden krok rozwiązania                    |
| Co dzieje się po powrocie?      | dalsza część funkcji lub zwrócenie wyniku |
| Czy rekurencja jest potrzebna?  | porównanie z rozwiązaniem iteracyjnym     |

## Lekcje

1. [Pierwsza funkcja rekurencyjna](01-pierwsza-funkcja-rekurencyjna.md)
2. [Stos wywołań i kolejność działania](02-stos-wywolan-i-kolejnosc-dzialania.md)
3. [Zwracanie wyniku](03-zwracanie-wyniku.md)
4. [Operacje na cyfrach](04-operacje-na-cyfrach.md)
5. [Tablice, vector i napisy](05-tablice-vector-i-napisy.md)
6. [Wiele wywołań i Fibonacci](06-wiele-wywolan-i-fibonacci.md)
7. [Rekurencyjne wyszukiwanie binarne](07-wyszukiwanie-binarne-rekurencyjne.md)
8. [Nawracanie i generowanie](08-nawracanie-i-generowanie.md)
9. [Zadania maturalne z rekurencji](09-zadania-maturalne-z-rekurencji.md)
10. [Wydajność i ograniczenia - materiał nieobowiązkowy](10-wydajnosc-i-ograniczenia-material-nieobowiazkowy.md)

## Umiejętności po rozdziale

Po rozdziale umiesz wskazać przypadek podstawowy, opisać krok rekurencyjny, prześledzić stos wywołań, napisać funkcję rekurencyjną i ocenić, kiedy lepsza będzie zwykła pętla.
