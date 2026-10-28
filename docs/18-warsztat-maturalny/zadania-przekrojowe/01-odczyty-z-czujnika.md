---
layout: default
title: Zadanie 01 - Licznik rowerów
---

# Zadanie 01 - Licznik rowerów

## Treść zadania

Przy ścieżce rowerowej działa licznik rowerów. Każdego dnia zapisuje liczbę przejazdów.

Tabela przedstawia przykładowe wyniki z siedmiu dni.

| Dzień | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Liczba przejazdów | 3 | 1 | 4 | 1 | 5 | 9 | 2 |

## Polecenie

**Napisz program w C++, który dla każdego podanego przedziału dni obliczy łączną liczbę przejazdów rowerowych.**

Przedział obejmuje oba wskazane dni. Dni numerowane są od 1.

## Dane wejściowe

W pierwszym wierszu znajdują się dwie liczby całkowite:

- `n` - liczba dni, dla których zapisano wyniki;
- `q` - liczba pytań.

W drugim wierszu znajduje się `n` liczb całkowitych oznaczających liczbę przejazdów w kolejnych dniach.

W następnych `q` wierszach znajdują się po dwie liczby całkowite:

- `l` - pierwszy dzień okresu;
- `r` - ostatni dzień okresu.

## Ograniczenia

- `1 <= n <= 100000`
- `1 <= q <= 100000`
- `0 <= liczba przejazdów <= 1000`
- `1 <= l <= r <= n`

## Dane wyjściowe

Dla każdego pytania wypisz w osobnym wierszu jedną liczbę całkowitą - łączną liczbę przejazdów w podanym okresie.

Odpowiedzi wypisz w kolejności otrzymanych pytań.

## Przykładowe wejście

```text
7 3
3 1 4 1 5 9 2
2 5
1 7
4 4
```

## Przykładowe wyjście

```text
11
25
1
```

## Wyjaśnienie przykładu

Pierwszy wiersz `7 3` oznacza, że otrzymaliśmy wyniki z 7 dni oraz 3 pytania.

Drugi wiersz zawiera liczbę przejazdów w kolejnych dniach.

Pozostałe wiersze określają okresy, dla których należy obliczyć sumy.

| Pytanie | Okres | Obliczenie | Wynik |
| --- | --- | --- | ---: |
| 1 | Dni od 2 do 5 | 1 + 4 + 1 + 5 | 11 |
| 2 | Dni od 1 do 7 | 3 + 1 + 4 + 1 + 5 + 9 + 2 | 25 |
| 3 | Tylko dzień 4 | 1 | 1 |

Program wypisuje trzy wyniki, każdy w osobnym wierszu.

<details markdown="1">
<summary>Omówienie problemu</summary>

Zanim zaczniesz pisać kod, zastanów się, czy przy każdym zapytaniu trzeba ponownie dodawać wszystkie liczby z podanego okresu.

W zadaniu wiele razy pytamy o **sumę kolejnego fragmentu tej samej tablicy**. Wartości w tablicy nie zmieniają się.

To wskazówka, że można najpierw przygotować dodatkową tablicę z sumami prefiksowymi.

Niech `pref[i]` oznacza sumę wartości od dnia 1 do dnia `i`, a `pref[0] = 0`.

Obliczamy wyniki od pierwszego dnia do ostatniego. Do sumy poprzednich dni dodajemy bieżący odczyt: `pref[i] = pref[i - 1] + liczba`. Przechowujemy liczby przejazdów, nie liczbę dni.

Dla danych przykładowych:

| Indeks `i` | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `pref[i]` | 0 | 3 | 4 | 8 | 9 | 14 | 23 | 25 |

Sumę dla dni od `l` do `r` otrzymujemy przez odjęcie dwóch prefiksów:

```text
suma = pref[r] - pref[l - 1]
```

Przykładowo dla przedziału od 2 do 5:

```text
pref[5] - pref[1] = 14 - 3 = 11
```

**Dlaczego to działa?** Od sumy wszystkich przejazdów do dnia `r` odejmujemy przejazdy sprzed dnia `l`. Pozostają dokładnie dni od `l` do `r`.

Dla drugiego zapytania obliczamy `pref[7] - pref[0] = 25 - 0 = 25`. Dla trzeciego: `pref[4] - pref[3] = 9 - 8 = 1`. To działa także dla pojedynczego dnia i dla okresu zaczynającego się od dnia 1.

**Poprawność przygotowania:** na początku `pref[0]` opisuje pusty okres. Jeśli znamy poprawną sumę do dnia `i - 1`, dodanie odczytu z dnia `i` daje sumę do dnia `i`. W ten sposób każda komórka opisuje właściwy okres. Odjęcie sumy dni `1..l - 1` od sumy dni `1..r` pozostawia dokładnie wymagane dni `l..r`.

**Porównanie metod:**

- Zwykła pętla sumująca każdy wskazany fragment: w najgorszym przypadku `O(n * q)`.
- Przygotowanie prefiksów: `O(n)`, a odpowiedź na jedno zapytanie: `O(1)`. Łącznie `O(n + q)`.

Dla `n = 100000` i `q = 100000` zwykłe sumowanie może wymagać `10000000000` dodawań. Tak będzie, jeśli każde pytanie obejmuje wszystkie dni. Przygotowanie tablicy wymaga wtedy 100000 dodawań, a odpowiedzi na wszystkie pytania - 100000 odejmowań. Ponowne sumowanie każdego okresu może więc być zbyt wolne.

Dodatkowa tablica prefiksów zajmuje `O(n)` pamięci.

### Kiedy tego użyć?

Gdy zapytań o sumy przedziałów jest wiele, wartości tablicy się nie zmieniają, a odczyt musi być szybki.

### Kiedy wybrać coś innego?

Przy pojedynczym zapytaniu zwykłe sumowanie też może wystarczyć. Wcześniejsze przygotowanie pozwala jednak nie powtarzać sumowania tych samych dni przy kolejnych pytaniach. Jeżeli odczyty zmieniałyby się między zapytaniami, przygotowana tablica wymagałaby aktualizacji. W tym zadaniu takich zmian nie ma.

### Typowe błędy

- Odjęcie `pref[l]` zamiast `pref[l - 1]` => pominięcie pierwszego dnia okresu.
- Pominięcie `pref[0] = 0` => błędny odczyt przy zapytaniu zaczynającym się od dnia 1.
- Tablica ze 100000 elementów zamiast 100001 => brak miejsca na indeks 100000.
- Zmiana kolejności odpowiedzi => niezgodność z kolejnością zapytań.

</details>

<details markdown="1">
<summary>Rozwiązanie w C++</summary>

```cpp
#include <iostream>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    int pref[100001];
    pref[0] = 0;

    for (int i = 1; i <= n; i++) {
        int liczba;
        cin >> liczba;
        pref[i] = pref[i - 1] + liczba;
    }

    for (int i = 0; i < q; i++) {
        int l, r;
        cin >> l >> r;
        cout << pref[r] - pref[l - 1] << '\n';
    }

    return 0;
}
```

Tablica `pref` ma 100001 elementów, ponieważ dopuszczamy maksymalnie 100000 dni oraz dodatkowy element `pref[0]`. Poprawne indeksy to `0..100000`.

Dla przyjętych ograniczeń największa suma wynosi `100000 * 1000 = 100000000`. W rozwiązaniu zakładamy `int` o zakresie co najmniej do `2147483647`, jak w typowym środowisku z 32-bitowym `int`. Wynik i każda suma pośrednia mieszczą się wtedy w tym typie. Mniejszy, 16-bitowy `int` dopuszczany przez standard C++ nie wystarczyłby dla maksymalnych danych.

Pętla wczytująca zapisuje pozycje `1..n`, a pozycja 0 jest ustawiona wcześniej. Warunki `1 <= l <= r <= n` zapewniają poprawność indeksów `r` i `l - 1`. Program zakłada poprawne dane zgodne z treścią zadania.

</details>
