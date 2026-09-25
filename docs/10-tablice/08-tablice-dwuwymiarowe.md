---
layout: default
title: Tablice dwuwymiarowe
---

# Tablice dwuwymiarowe

## Cel lekcji

Nauczysz się tworzyć prostą tablicę dwuwymiarową, odczytywać jej elementy i przechodzić po niej zagnieżdżonymi pętlami.

## Krótkie wprowadzenie do problemu

Niektóre dane naturalnie układają się w wiersze i kolumny: plansza, tabela punktów, oceny z kilku przedmiotów albo mała mapa.

## Wyjaśnienie idei

Tablica dwuwymiarowa ma dwa indeksy. Pierwszy oznacza wiersz, drugi oznacza kolumnę. Wiersze i kolumny numerujemy od `0`.

| Zapis | Znaczenie |
|---|---|
| `liczby[0][0]` | pierwszy wiersz, pierwsza kolumna |
| `liczby[0][2]` | pierwszy wiersz, trzecia kolumna |
| `liczby[1][2]` | drugi wiersz, trzecia kolumna |

## Składnia

```cpp
const int WIERSZE = 2;
const int KOLUMNY = 3;

int liczby[WIERSZE][KOLUMNY] =
{
    {1, 2, 3},
    {4, 5, 6}
};
```

`liczby[1][2]` oznacza element w drugim wierszu i trzeciej kolumnie. W powyższej tablicy jest to `6`.

## Przykład 1 - wypisanie tablicy w formie tabeli

```cpp
#include <iostream>

using namespace std;

int main()
{
    const int WIERSZE = 2;
    const int KOLUMNY = 3;

    int liczby[WIERSZE][KOLUMNY] =
    {
        {1, 2, 3},
        {4, 5, 6}
    };

    for (int w = 0; w < WIERSZE; w++)
    {
        for (int k = 0; k < KOLUMNY; k++)
        {
            cout << liczby[w][k] << " ";
        }
        cout << "\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
1 2 3 
4 5 6 
```

</details>

## Przykład 2 - suma wszystkich elementów, wiersza i kolumny

```cpp
#include <iostream>

using namespace std;

int main()
{
    const int WIERSZE = 3;
    const int KOLUMNY = 3;

    int liczby[WIERSZE][KOLUMNY] =
    {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    int sumaWszystkich = 0;
    int sumaWiersza = 0;
    int sumaKolumny = 0;
    int sumaPrzekatnej = 0;

    for (int w = 0; w < WIERSZE; w++)
    {
        for (int k = 0; k < KOLUMNY; k++)
        {
            sumaWszystkich += liczby[w][k];
        }
    }

    for (int k = 0; k < KOLUMNY; k++)
    {
        sumaWiersza += liczby[1][k];
    }

    for (int w = 0; w < WIERSZE; w++)
    {
        sumaKolumny += liczby[w][2];
    }

    for (int i = 0; i < WIERSZE; i++)
    {
        sumaPrzekatnej += liczby[i][i];
    }

    cout << "Suma wszystkich: " << sumaWszystkich << "\n";
    cout << "Suma drugiego wiersza: " << sumaWiersza << "\n";
    cout << "Suma trzeciej kolumny: " << sumaKolumny << "\n";
    cout << "Suma przekatnej: " << sumaPrzekatnej << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Suma wszystkich: 45
Suma drugiego wiersza: 15
Suma trzeciej kolumny: 18
Suma przekatnej: 15
```

</details>

## Omówienie przykładu krok po kroku

- Zewnętrzna pętla wybiera wiersz.
- Wewnętrzna pętla przechodzi po kolumnach wybranego wiersza.
- `liczby[w][k]` oznacza element na przecięciu wiersza `w` i kolumny `k`.
- Suma wiersza używa stałego numeru wiersza i zmienia kolumny.
- Suma kolumny używa stałego numeru kolumny i zmienia wiersze.
- Główna przekątna tablicy kwadratowej ma elementy `liczby[i][i]`.

## Kiedy tego użyć?

Tablica dwuwymiarowa jest dobra do prostych tabel, plansz i danych ułożonych w wiersze oraz kolumny.

## Kiedy wybrać coś innego?

Jeżeli dane są zwykłą listą wartości, wystarczy tablica jednowymiarowa. Bardziej zaawansowane operacje na macierzach zostawiamy na później.

## Typowe błędy

- Mylenie numeru wiersza z numerem kolumny.
- Zapominanie, że oba indeksy zaczynają się od `0`.
- Użycie złego warunku w jednej z pętli.
- Próba odczytania elementu poza liczbą wierszy lub kolumn.
- Mylenie sumy wiersza z sumą kolumny.

## Ćwiczenia

### Ćwiczenie 1

Utwórz tablicę `2 x 2` i wypisz ją w dwóch wierszach.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Użyj dwóch pętli `for`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczby[2][2] =
    {
        {1, 2},
        {3, 4}
    };

    for (int w = 0; w < 2; w++)
    {
        for (int k = 0; k < 2; k++)
        {
            cout << liczby[w][k] << " ";
        }
        cout << "\n";
    }

    return 0;
}
```

</details>

### Ćwiczenie 2

Oblicz sumę wszystkich elementów tablicy `2 x 3`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Dodawaj `liczby[w][k]` w zagnieżdżonej pętli.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczby[2][3] =
    {
        {2, 4, 6},
        {1, 3, 5}
    };
    int suma = 0;

    for (int w = 0; w < 2; w++)
    {
        for (int k = 0; k < 3; k++)
        {
            suma += liczby[w][k];
        }
    }

    cout << suma << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 3

Oblicz sumę głównej przekątnej tablicy `3 x 3`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Główna przekątna ma elementy `liczby[0][0]`, `liczby[1][1]`, `liczby[2][2]`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczby[3][3] =
    {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    int suma = 0;

    for (int i = 0; i < 3; i++)
    {
        suma += liczby[i][i];
    }

    cout << suma << "\n";

    return 0;
}
```

</details>

## Podsumowanie

Tablica dwuwymiarowa ma wiersze i kolumny. Do przechodzenia po niej używamy zagnieżdżonych pętli. Pierwszy indeks oznacza wiersz, drugi indeks oznacza kolumnę.