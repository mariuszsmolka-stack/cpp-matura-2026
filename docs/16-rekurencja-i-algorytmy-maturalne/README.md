# 16 - Rekurencja i algorytmy maturalne

Rekurencja to sposób rozwiązywania problemu za pomocą funkcji, która wywołuje samą siebie dla mniejszej części tego samego problemu. Nie chodzi o „magiczne powtarzanie”. Chodzi o rozbicie zadania na prostszy przypadek i jasne określenie, kiedy kończymy.

Jedno wywołanie funkcji to jedna konkretna praca do wykonania. Ma własne argumenty, własne zmienne lokalne i własne miejsce, do którego program wróci po zakończeniu głębszego wywołania. Jeśli funkcja wywoła samą siebie, poprzednie wywołanie czeka na wynik następnego.

Każda poprawna rekurencja ma dwa najważniejsze elementy:

- przypadek podstawowy - sytuację, w której funkcja przestaje wywoływać samą siebie,
- krok rekurencyjny - wywołanie tej samej funkcji dla mniejszego albo prostszego problemu.

Problem musi się zmniejszać. Jeżeli argumenty nie zbliżają się do przypadku podstawowego, program może działać bez końca albo zakończyć się błędem przepełnienia stosu.

W rekurencji często rozróżniamy dwa etapy:

- schodzenie - powstają kolejne wywołania, zwykle z coraz mniejszym problemem,
- powroty - zakończone wywołania oddają wynik do poprzednich wywołań.

Rekurencja jest naturalna, gdy problem sam ma strukturę „mniejszej wersji siebie”. Dotyczy to między innymi drzew wywołań, dzielenia zakresu na połowy, przechodzenia po cyfrach liczby, generowania możliwości oraz niektórych zadań maturalnych z analizą funkcji.

Pętla bywa lepsza, gdy zadanie polega po prostu na przejściu po kolejnych wartościach. Pętla zwykle zużywa mniej pamięci i jest łatwiejsza do kontroli, gdy nie potrzebujemy naturalnego podziału problemu.

| Pytanie                              | Co sprawdzamy?                               |
| ------------------------------------ | -------------------------------------------- |
| Kiedy funkcja się zatrzyma?          | przypadek podstawowy                         |
| Co zmienia się w kolejnym wywołaniu? | sposób zmniejszania problemu                 |
| Co dzieje się przed wywołaniem?      | etap schodzenia                              |
| Co dzieje się po wywołaniu?          | etap powrotów                                |
| Co zwraca funkcja?                   | wynik przekazywany do poprzedniego wywołania |
| Czy każda gałąź się zakończy?        | poprawność rekurencji                        |

## Lekcje

1. [Pierwsza funkcja rekurencyjna](01-pierwsza-funkcja-rekurencyjna.md)
2. [Stos wywołań i kolejność działania](02-stos-wywolan-i-kolejnosc-dzialania.md)
3. [Zwracanie wyniku](03-zwracanie-wyniku.md)
4. [Operacje na cyfrach](04-operacje-na-cyfrach.md)
5. [Tablice, vector i napisy](05-tablice-vector-i-napisy.md)
6. [Wiele wywołań i ciąg Fibonacciego](06-wiele-wywolan-i-fibonacci.md)
7. [Rekurencyjne wyszukiwanie binarne](07-wyszukiwanie-binarne-rekurencyjne.md)
8. [Nawracanie i generowanie](08-nawracanie-i-generowanie.md)
9. [Zadania maturalne z rekurencji](09-zadania-maturalne-z-rekurencji.md)
10. [Wydajność i ograniczenia - materiał nieobowiązkowy](10-wydajnosc-i-ograniczenia-material-nieobowiazkowy.md)

## Po tym rozdziale

Po rozdziale umiesz wskazać przypadek podstawowy, opisać krok rekurencyjny, prześledzić schodzenie i powroty, analizować wartości zwracane, rozpoznawać rozgałęzianie wywołań oraz zdecydować, kiedy lepsza będzie pętla.
