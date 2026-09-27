---
layout: default
title: Operacje na cyfrach
---

# Operacje na cyfrach

## Problem

Chcemy rekurencyjnie przetwarzać cyfry liczby. W zadaniach maturalnych często trzeba obliczyć sumę cyfr, liczbę cyfr, największą cyfrę albo liczbę wystąpień wskazanej cyfry.

W tej lekcji funkcje i ćwiczenia działają na liczbach nieujemnych. Nie omawiamy tu pełnej obsługi wszystkich wartości typu `int`, tylko mechanizm przetwarzania cyfr dla `liczba >= 0`.

## Dwie operacje na liczbie

Dla liczby całkowitej nieujemnej:

- `liczba % 10` daje ostatnią cyfrę,
- `liczba / 10` usuwa ostatnią cyfrę.

Przykład dla `472`:

| Wyrażenie  | Wynik | Znaczenie              |
| ---------- | ----- | ---------------------- |
| `472 % 10` | `2`   | ostatnia cyfra         |
| `472 / 10` | `47`  | liczba bez ostatniej   |

Dzielenie całkowite przez `10` zmniejsza problem, bo liczba ma mniej cyfr. Dlatego może prowadzić do przypadku podstawowego.

## Suma cyfr

Przypadek podstawowy: jeżeli `liczba < 10`, to liczba ma jedną cyfrę i sama jest sumą swoich cyfr.

Rozwinięcie dla `472`:

```text
sumaCyfr(472)
=> 2 + sumaCyfr(47)
=> 2 + 7 + sumaCyfr(4)
=> 2 + 7 + 4
=> 13
```

## Kod

```cpp
#include <iostream>

using namespace std;

int sumaCyfr(int liczba)
{
    if (liczba < 10)
    {
        return liczba;
    }

    return liczba % 10 + sumaCyfr(liczba / 10);
}

int liczbaCyfr(int liczba)
{
    if (liczba < 10)
    {
        return 1;
    }

    return 1 + liczbaCyfr(liczba / 10);
}

int najwiekszaCyfra(int liczba)
{
    if (liczba < 10)
    {
        return liczba;
    }

    int ostatnia = liczba % 10;
    int najlepszaZReszty = najwiekszaCyfra(liczba / 10);

    if (ostatnia > najlepszaZReszty)
    {
        return ostatnia;
    }

    return najlepszaZReszty;
}

int main()
{
    int liczba = 472;

    cout << "Suma cyfr: " << sumaCyfr(liczba) << "\n";
    cout << "Liczba cyfr: " << liczbaCyfr(liczba) << "\n";
    cout << "Największa cyfra: " << najwiekszaCyfra(liczba) << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Suma cyfr: 13
Liczba cyfr: 3
Największa cyfra: 7
```

</details>

## Zero

Dla `0` funkcje działają poprawnie:

- `sumaCyfr(0)` zwraca `0`,
- `liczbaCyfr(0)` zwraca `1`,
- `najwiekszaCyfra(0)` zwraca `0`.

Zero zapisujemy jedną cyfrą, dlatego liczba cyfr wynosi `1`.

## Założenia dla ćwiczeń

W ćwiczeniach z tej lekcji przyjmujemy liczby nieujemne. Dla funkcji:

```cpp
int ileCyfr(int liczba, int cyfra);
```

obowiązują założenia:

- `liczba >= 0`,
- `0 <= cyfra && cyfra <= 9`.

Dla liczby `0` funkcja `ileCyfr(0, 0)` powinna zwrócić `1`, bo zapis liczby `0` zawiera jedną cyfrę zero. Dla `ileCyfr(0, 5)` wynik powinien wynosić `0`.

## Typowe błędy

- Użycie `liczba % 10` jako liczby bez ostatniej cyfry.
- Brak zmniejszenia problemu, np. wywołanie `sumaCyfr(liczba)`.
- Niejasne traktowanie zera.
- Zły przypadek podstawowy dla funkcji liczącej cyfry.

## Ćwiczenia

### Ćwiczenie 1 - ręczne obliczenie sumy cyfr

Rozpisz działanie `sumaCyfr(905)` i podaj wartość zwracaną przez funkcję.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Ostatnia cyfra to `liczba % 10`, a reszta liczby to `liczba / 10`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```text
sumaCyfr(905)
=> 5 + sumaCyfr(90)
=> 5 + 0 + sumaCyfr(9)
=> 5 + 0 + 9
=> 14
```

Wartość zwracana to `14`.

</details>

### Ćwiczenie 2 - liczba cyfr

Podaj wynik funkcji `liczbaCyfr(1000)` i rozpisz kolejne argumenty wywołań.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Każde dzielenie przez `10` usuwa jedną cyfrę.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```text
liczbaCyfr(1000)
=> 1 + liczbaCyfr(100)
=> 1 + 1 + liczbaCyfr(10)
=> 1 + 1 + 1 + liczbaCyfr(1)
=> 4
```

Wynik to `4`.

</details>

### Ćwiczenie 3 - wystąpienia cyfry

Napisz funkcję `ileCyfr(int liczba, int cyfra)`, która dla `liczba >= 0` oraz `0 <= cyfra && cyfra <= 9` zlicza wystąpienia cyfry `cyfra`. Dla `ileCyfr(12022, 2)` wynik ma wynosić `3`. Dopilnuj, aby `ileCyfr(0, 0)` zwracało `1`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Porównuj `liczba % 10` z szukaną cyfrą, a potem wywołuj funkcję dla `liczba / 10`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int ileCyfr(int liczba, int cyfra)
{
    if (liczba < 10)
    {
        if (liczba == cyfra)
        {
            return 1;
        }
        return 0;
    }

    int wynik = ileCyfr(liczba / 10, cyfra);

    if (liczba % 10 == cyfra)
    {
        wynik = wynik + 1;
    }

    return wynik;
}

int main()
{
    cout << ileCyfr(12022, 2) << "\n";
    return 0;
}
```

</details>

### Ćwiczenie 4 - największa cyfra

Podaj wynik `najwiekszaCyfra(5831)` i wskaż, które cyfry są porównywane podczas powrotów.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Najpierw funkcja dochodzi do cyfry `5`, potem podczas powrotów porównuje kolejne ostatnie cyfry.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

Cyfry liczby to `5`, `8`, `3`, `1`. Największa z nich to `8`.

Podczas powrotów funkcja porównuje między innymi:

```text
3 z 1
8 z 3
5 z 8
```

Ostateczny wynik to `8`.

</details>

### Ćwiczenie 5 - błąd bez zmniejszenia liczby

W funkcji `sumaCyfr` ktoś napisał:

```cpp
return liczba % 10 + sumaCyfr(liczba);
```

Wyjaśnij, dlaczego to błąd.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Sprawdź, czy argument kolejnego wywołania jest mniejszym problemem.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Argument się nie zmienia. Dla liczby większej lub równej `10` funkcja będzie wywoływać samą siebie z tą samą wartością, więc nie dojdzie do przypadku podstawowego. Poprawnie trzeba użyć:

```cpp
return liczba % 10 + sumaCyfr(liczba / 10);
```

</details>
