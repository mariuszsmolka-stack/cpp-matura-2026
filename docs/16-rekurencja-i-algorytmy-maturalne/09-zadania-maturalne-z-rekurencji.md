---
layout: default
title: Zadania maturalne z rekurencji
---

# Zadania maturalne z rekurencji

## Jak pracować z zadaniami

W zadaniach maturalnych z rekurencji często nie trzeba pisać dużego programu. Trzeba zrozumieć, co robi funkcja: jaka jest wartość zwracana, kiedy pojawia się przypadek podstawowy, ile wywołań powstaje i w jakiej kolejności wykonywane są instrukcje.

Przy każdym zadaniu zapisuj:

- argumenty kolejnych wywołań,
- moment zatrzymania,
- wartości zwracane podczas powrotów,
- ostateczną odpowiedź.

## Rozgrzewka - zadania podstawowe

### Zadanie 1 - wartość zwracana

Dana jest funkcja:

```cpp
int sumaNieparzystych(int n)
{
    if (n <= 0)
    {
        return 0;
    }

    if (n % 2 == 1)
    {
        return n + sumaNieparzystych(n - 1);
    }

    return sumaNieparzystych(n - 1);
}
```

Podaj wartość zwracaną przez `sumaNieparzystych(7)`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Dodawane są tylko liczby nieparzyste.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```text
sumaNieparzystych(7)
= 7 + sumaNieparzystych(6)
= 7 + sumaNieparzystych(5)
= 7 + 5 + sumaNieparzystych(4)
= 7 + 5 + sumaNieparzystych(3)
= 7 + 5 + 3 + sumaNieparzystych(2)
= 7 + 5 + 3 + sumaNieparzystych(1)
= 7 + 5 + 3 + 1 + sumaNieparzystych(0)
= 16
```

Odpowiedź: `16`.

</details>

### Zadanie 2 - kolejność wypisywania

Dana jest funkcja:

```cpp
void wypisz(int n)
{
    if (n == 0)
    {
        return;
    }

    cout << n << " ";
    wypisz(n - 1);
    cout << n * 10 << " ";
}
```

Podaj dokładny tekst wypisany przez `wypisz(3)`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Pierwszy `cout` działa podczas schodzenia, drugi podczas powrotów.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Schodzenie wypisuje:

```text
3 2 1
```

Powroty wypisują:

```text
10 20 30
```

Cały wynik:

```text
3 2 1 10 20 30
```

</details>

### Zadanie 3 - tabela wywołań

Dla funkcji:

```cpp
int iloczyn(int n)
{
    if (n <= 1)
    {
        return 1;
    }

    return n * iloczyn(n - 1);
}
```

Uzupełnij tabelę dla `iloczyn(4)`: wywołanie, wartość zwracana przez głębsze wywołanie, wynik bieżącego wywołania.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Najpierw dojdź do `iloczyn(1)`, potem wracaj.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

| Wywołanie     | Wynik głębszego wywołania | Wynik bieżący |
| ------------- | -------------------------- | ------------- |
| `iloczyn(1)`  | brak                       | `1`           |
| `iloczyn(2)`  | `1`                        | `2 * 1 = 2`   |
| `iloczyn(3)`  | `2`                        | `3 * 2 = 6`   |
| `iloczyn(4)`  | `6`                        | `4 * 6 = 24`  |

Odpowiedź: `24`.

</details>

### Zadanie 4 - liczba wywołań

Ile wszystkich wywołań funkcji powstanie dla `licz(5)`?

```cpp
int licz(int n)
{
    if (n <= 0)
    {
        return 0;
    }

    return 1 + licz(n - 1);
}
```

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Policz także wywołanie z argumentem `0`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

Powstają wywołania:

```text
licz(5), licz(4), licz(3), licz(2), licz(1), licz(0)
```

Łącznie jest `6` wywołań.

</details>

### Zadanie 5 - maksymalna głębokość

Dla tej samej funkcji `licz` ustal maksymalną liczbę aktywnych wywołań jednocześnie dla `licz(4)`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Największa głębokość występuje tuż przed rozpoczęciem powrotów.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Najgłębszy moment:

```text
licz(4) czeka na licz(3)
licz(3) czeka na licz(2)
licz(2) czeka na licz(1)
licz(1) czeka na licz(0)
licz(0) działa
```

Aktywnych jest `5` wywołań.

</details>

### Zadanie 6 - brakujący przypadek podstawowy

Uzupełnij przypadek podstawowy w funkcji zliczającej cyfry liczby nieujemnej:

```cpp
int cyfry(int liczba)
{
    if (...)
    {
        return ...;
    }

    return 1 + cyfry(liczba / 10);
}
```

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 6</summary>

Liczby od `0` do `9` mają jedną cyfrę.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 6</summary>

Poprawne uzupełnienie:

```cpp
if (liczba < 10)
{
    return 1;
}
```

Dla `0` wynik też wynosi `1`, bo zapis `0` ma jedną cyfrę.

</details>

### Zadanie 7 - błąd bez zakończenia

Znajdź błąd:

```cpp
int f(int n)
{
    if (n == 0)
    {
        return 0;
    }

    return 1 + f(n + 1);
}
```

Rozważ wywołanie `f(3)`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 7</summary>

Sprawdź, czy argument zbliża się do `0`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 7</summary>

Dla `f(3)` powstają wywołania `f(4)`, `f(5)`, `f(6)` i tak dalej. Argument oddala się od przypadku podstawowego `n == 0`. Funkcja nie zakończy się poprawnie dla dodatniego argumentu.

</details>

### Zadanie 8 - funkcja z dwoma argumentami

Dana jest funkcja:

```cpp
int dodaj(int a, int b)
{
    if (b == 0)
    {
        return a;
    }

    return dodaj(a + 1, b - 1);
}
```

Podaj wynik `dodaj(4, 3)` i kolejne pary argumentów. Przyjmij założenie `b >= 0`. Dla ujemnego `b` warunek `b == 0` nie zostałby osiągnięty, bo w każdym kroku `b` jest zmniejszane.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 8</summary>

Pierwszy argument rośnie, drugi maleje.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 8</summary>

```text
dodaj(4, 3)
=> dodaj(5, 2)
=> dodaj(6, 1)
=> dodaj(7, 0)
=> 7
```

Wynik to `7`.

</details>

### Zadanie 9 - dwa wywołania rekurencyjne

Dana jest funkcja:

```cpp
int g(int n)
{
    if (n <= 1)
    {
        return 1;
    }

    return g(n - 1) + g(n - 2);
}
```

Podaj wartość `g(4)` i liczbę wszystkich wywołań funkcji.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 9</summary>

Rozpisz drzewo: `g(4)` tworzy `g(3)` i `g(2)`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 9</summary>

Wartości:

```text
g(0) = 1
g(1) = 1
g(2) = 2
g(3) = 3
g(4) = 5
```

Wywołania w drzewie:

```text
g(4)
g(3), g(2)
g(2), g(1), g(1), g(0)
g(1), g(0)
```

Łącznie jest `9` wywołań.

</details>

### Zadanie 10 - funkcja według specyfikacji

Napisz funkcję rekurencyjną `sumaKwadratow(int n)`, która dla `n >= 0` zwraca:

```text
1^2 + 2^2 + ... + n^2
```

Dla `n == 0` wynik ma wynosić `0`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 10</summary>

Dodaj `n * n` do wyniku dla `n - 1`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 10</summary>

```cpp
#include <iostream>

using namespace std;

int sumaKwadratow(int n)
{
    if (n <= 0)
    {
        return 0;
    }

    return n * n + sumaKwadratow(n - 1);
}

int main()
{
    cout << sumaKwadratow(4) << "\n";
    return 0;
}
```

Dla `4` wynik to `16 + 9 + 4 + 1 = 30`.

</details>


## Większe zadania w stylu maturalnym

### Zadanie 11 - analiza funkcji z cyframi

Dana jest funkcja działająca dla `liczba >= 0`:

```cpp
int sumaCoDrugiejCyfry(int liczba, bool dodaj)
{
    if (liczba == 0)
    {
        return 0;
    }

    int cyfra = liczba % 10;

    if (dodaj)
    {
        return cyfra + sumaCoDrugiejCyfry(liczba / 10, false);
    }

    return sumaCoDrugiejCyfry(liczba / 10, true);
}
```

Wykonaj polecenia:

1. Oblicz wynik `sumaCoDrugiejCyfry(58342, true)`.
2. Uzupełnij tabelę kolejnych wywołań: `liczba`, `dodaj`, użyta cyfra, wartość dodawana do wyniku.
3. Opisz jednym zdaniem, które cyfry liczby są sumowane.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 11</summary>

Funkcja zaczyna od ostatniej cyfry. Parametr `dodaj` zmienia się w każdym wywołaniu.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 11</summary>

| Wywołanie | `liczba` | `dodaj` | `cyfra` | Wartość dodana |
| --------- | -------: | ------- | ------: | --------------: |
| 1 | 58342 | `true`  | 2 | 2 |
| 2 | 5834  | `false` | 4 | 0 |
| 3 | 583   | `true`  | 3 | 3 |
| 4 | 58    | `false` | 8 | 0 |
| 5 | 5     | `true`  | 5 | 5 |
| 6 | 0     | -       | - | 0 |

Wynik:

```text
2 + 3 + 5 = 10
```

Funkcja sumuje co drugą cyfrę, licząc od końca liczby.

</details>

### Zadanie 12 - liczba wywołań i głębokość

Dana jest funkcja:

```cpp
int rozgalezienie(int n)
{
    if (n <= 0)
    {
        return 1;
    }

    return rozgalezienie(n - 1) + rozgalezienie(n - 2);
}
```

Dla wywołania `rozgalezienie(3)`:

1. Narysuj albo zapisz drzewo wywołań.
2. Podaj liczbę wszystkich wywołań.
3. Podaj maksymalną głębokość aktywnych wywołań.
4. Podaj wartość zwracaną przez funkcję.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 12</summary>

Każde wywołanie z `n > 0` tworzy dwa kolejne wywołania: dla `n - 1` i dla `n - 2`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 12</summary>

Drzewo wywołań:

```text
rozgalezienie(3)
├─ rozgalezienie(2)
│  ├─ rozgalezienie(1)
│  │  ├─ rozgalezienie(0)
│  │  └─ rozgalezienie(-1)
│  └─ rozgalezienie(0)
└─ rozgalezienie(1)
   ├─ rozgalezienie(0)
   └─ rozgalezienie(-1)
```

Liczba wszystkich wywołań: `9`.

Maksymalna głębokość: `4`, na przykład ścieżka `3 -> 2 -> 1 -> 0`.

Wartości zwracane:

```text
rozgalezienie(0) = 1
rozgalezienie(-1) = 1
rozgalezienie(1) = 2
rozgalezienie(2) = 3
rozgalezienie(3) = 5
```

Ostateczny wynik: `5`.

</details>

### Zadanie 13 - uzupełnianie funkcji z dwoma argumentami

Funkcja ma obliczać iloczyn `a * b` przez wielokrotne dodawanie. Przyjmij założenia: `a >= 0`, `b >= 0`.

Uzupełnij brakujące fragmenty:

```cpp
int mnoz(int a, int b)
{
    if (...)
    {
        return ...;
    }

    return a + mnoz(a, ...);
}
```

Następnie oblicz `mnoz(4, 3)` i zapisz kolejne wywołania.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 13</summary>

Drugi argument mówi, ile razy trzeba jeszcze dodać `a`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 13</summary>

Uzupełniona funkcja:

```cpp
int mnoz(int a, int b)
{
    if (b == 0)
    {
        return 0;
    }

    return a + mnoz(a, b - 1);
}
```

Przebieg:

```text
mnoz(4, 3)
=> 4 + mnoz(4, 2)
=> 4 + 4 + mnoz(4, 1)
=> 4 + 4 + 4 + mnoz(4, 0)
=> 12
```

</details>
