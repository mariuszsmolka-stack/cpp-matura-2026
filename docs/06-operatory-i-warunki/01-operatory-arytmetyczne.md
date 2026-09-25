---
layout: default
title: Operatory arytmetyczne
---

# Operatory arytmetyczne

## Cel lekcji

Poznasz podstawowe operatory arytmetyczne w C++: `+`, `-`, `*`, `/` i `%`.

## Krótkie wprowadzenie

Program często musi coś policzyć: sumę, cenę, resztę z dzielenia albo ostatnią cyfrę liczby. Do takich zadań służą operatory arytmetyczne. Operator to znak działania. Operand to wartość, na której wykonujemy działanie.

## Wyjaśnienie idei

`+` dodaje, `-` odejmuje, `*` mnoży, `/` dzieli, a `%` daje resztę z dzielenia. Operator `%` stosujemy do liczb całkowitych. W tej lekcji używamy nieujemnych liczb, żeby nie komplikować zachowania reszty dla liczb ujemnych. Dzielenie przez zero i reszta z dzielenia przez zero są błędem.

## Składnia

```cpp
int suma = a + b;
int roznica = a - b;
int iloczyn = a * b;
int iloraz = a / b;
int reszta = a % b;
double wynik = (double)liczbaA / liczbaB;
```

Dla dwóch wartości typu `int`:

```text
7 / 2 => 3
```

Dla wartości rzeczywistej:

```text
7.0 / 2 => 3.5
```

## Pełny przykład programu

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczbaA = 7;
    int liczbaB = 2;
    int suma = liczbaA + liczbaB;
    int dzielenieCalkowite = liczbaA / liczbaB;
    int reszta = liczbaA % liczbaB;
    double dzielenieRzeczywiste = (double)liczbaA / liczbaB;
    int ostatniaCyfra = 123 % 10;
    bool czyParzysta = 24 % 2 == 0;

    cout << "Suma: " << suma << "\n";
    cout << "Dzielenie int: " << dzielenieCalkowite << "\n";
    cout << "Reszta: " << reszta << "\n";
    cout << "Dzielenie double: " << dzielenieRzeczywiste << "\n";
    cout << "Ostatnia cyfra: " << ostatniaCyfra << "\n";
    cout << boolalpha;
    cout << "Czy parzysta: " << czyParzysta << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Suma: 9
Dzielenie int: 3
Reszta: 1
Dzielenie double: 3.5
Ostatnia cyfra: 3
Czy parzysta: true
```

</details>

## Omówienie programu krok po kroku

`7 / 2` daje `3`, bo obie wartości są typu `int`. `7 % 2` daje resztę `1`. `(double)liczbaA / liczbaB` wymusza wynik rzeczywisty. `123 % 10` daje ostatnią cyfrę. `24 % 2 == 0` tworzy wartość logiczną parzystości bez używania `if`.

## Kiedy tego użyć?

Używaj operatorów arytmetycznych do obliczeń, sprawdzania podzielności, parzystości i ostatniej cyfry.

## Kiedy wybrać coś innego?

Jeżeli chcesz na podstawie wyniku wykonać różny kod, potrzebujesz instrukcji `if`, która pojawi się później.

## Ćwiczenia

### 1. Reszta z dzielenia

Wczytaj dwie dodatnie liczby całkowite i wypisz resztę z dzielenia pierwszej przez drugą.

Dane wejściowe:

```text
17
5
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 1</summary>

```text
Reszta: 2
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Użyj operatora `%`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int a;
    int b;

    cin >> a;
    cin >> b;

    cout << "Reszta: " << a % b << "\n";

    return 0;
}
```

</details>

### 2. Ostatnia cyfra

Wczytaj nieujemną liczbę całkowitą i wypisz jej ostatnią cyfrę.

Dane wejściowe:

```text
248
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 2</summary>

```text
Ostatnia cyfra: 8
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Ostatnia cyfra to reszta z dzielenia przez `10`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczba;

    cin >> liczba;

    cout << "Ostatnia cyfra: " << liczba % 10 << "\n";

    return 0;
}
```

</details>

### 3. Parzystość jako bool

Wczytaj liczbę i wypisz wartość logiczną mówiącą, czy jest parzysta.

Dane wejściowe:

```text
12
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 3</summary>

```text
Czy parzysta: true
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Sprawdź, czy reszta z dzielenia przez `2` jest równa `0`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczba;

    cin >> liczba;

    bool czyParzysta = liczba % 2 == 0;

    cout << boolalpha;
    cout << "Czy parzysta: " << czyParzysta << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Oczekiwanie, że `7 / 2` da `3.5`.
- Użycie `%` dla liczb rzeczywistych.
- Dzielenie przez zero.
- Mylenie `/` i `%`.

## Podsumowanie

Operatory arytmetyczne wykonują obliczenia. Dzielenie dwóch wartości `int` daje wynik całkowity, a `%` pozwala obliczyć resztę z dzielenia.
