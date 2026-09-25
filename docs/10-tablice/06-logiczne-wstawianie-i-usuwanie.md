---
layout: default
title: Logiczne wstawianie i usuwanie
---

# Logiczne wstawianie i usuwanie

## Cel lekcji

Nauczysz się logicznie wstawiać i usuwać elementy w klasycznej tablicy o stałej pojemności.

## Krótkie wprowadzenie do problemu

Klasyczna tablica ma stałą pojemność. Nie zwiększa się i nie zmniejsza fizycznie podczas działania programu. Możemy jednak zmieniać rozmiar logiczny `n`, czyli liczbę używanych elementów.

## Wyjaśnienie idei

Wstawianie logiczne oznacza zrobienie miejsca przez przesunięcie elementów w prawo, wpisanie nowej wartości i zwiększenie `n`.

Usuwanie logiczne oznacza przesunięcie elementów w lewo i zmniejszenie `n`. Stara wartość może nadal leżeć poza używanym zakresem, ale program już jej nie traktuje jako elementu tablicy.

## Składnia

Wstawianie:

```cpp
if (n < MAKS && indeks >= 0 && indeks <= n)
{
    for (int i = n; i > indeks; i--)
    {
        liczby[i] = liczby[i - 1];
    }

    liczby[indeks] = nowa;
    n++;
}
```

Usuwanie:

```cpp
if (indeks >= 0 && indeks < n)
{
    for (int i = indeks; i < n - 1; i++)
    {
        liczby[i] = liczby[i + 1];
    }

    n--;
}
```

## Przykład 1 - wstawienie elementu

```cpp
#include <iostream>

using namespace std;

int main()
{
    const int MAKS = 10;
    int liczby[MAKS] = {4, 7, 9};
    int n = 3;
    int indeks = 1;
    int nowa = 100;

    if (n < MAKS && indeks >= 0 && indeks <= n)
    {
        for (int i = n; i > indeks; i--)
        {
            liczby[i] = liczby[i - 1];
        }

        liczby[indeks] = nowa;
        n++;
    }

    for (int i = 0; i < n; i++)
    {
        cout << liczby[i] << " ";
    }
    cout << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
4 100 7 9 
```

</details>

## Przykład 2 - usunięcie elementu

```cpp
#include <iostream>

using namespace std;

int main()
{
    const int MAKS = 10;
    int liczby[MAKS] = {4, 100, 7, 9};
    int n = 4;
    int indeks = 1;

    if (indeks >= 0 && indeks < n)
    {
        for (int i = indeks; i < n - 1; i++)
        {
            liczby[i] = liczby[i + 1];
        }

        n--;
    }

    for (int i = 0; i < n; i++)
    {
        cout << liczby[i] << " ";
    }
    cout << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
4 7 9 
```

</details>

## Omówienie przykładu krok po kroku

- Sprawdzamy, czy w tablicy jest wolne miejsce.
- Sprawdzamy, czy indeks wstawienia jest od `0` do `n`.
- Przesuwamy elementy w prawo od końca.
- Wpisujemy nową wartość.
- Zwiększamy `n`.
- Przy usuwaniu indeks musi być od `0` do `n - 1`.
- Po przesunięciu w lewo zmniejszamy `n`.

## Kiedy tego użyć?

Tego schematu używamy, gdy pracujemy na klasycznej tablicy i chcemy ręcznie zarządzać aktywnym zakresem danych.

## Kiedy wybrać coś innego?

Jeżeli nie trzeba zachować kolejności elementów, czasem można rozwiązać problem prościej. W tym rozdziale ćwiczymy wersję zachowującą kolejność.

## Typowe błędy

- Brak sprawdzenia `n < MAKS` przed wstawieniem.
- Uznanie, że fizyczny rozmiar tablicy zmienia się po `n++`.
- Wstawienie na indeks większy niż `n`.
- Usunięcie elementu bez zmniejszenia `n`.
- Przesuwanie w prawo w złej kolejności.

## Ćwiczenia

### Ćwiczenie 1

Wstaw liczbę `50` na koniec aktywnego zakresu tablicy.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Wstawienie na koniec ma indeks równy `n` i nie wymaga przesuwania wielu elementów.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    const int MAKS = 5;
    int liczby[MAKS] = {1, 2, 3};
    int n = 3;

    if (n < MAKS)
    {
        liczby[n] = 50;
        n++;
    }

    for (int i = 0; i < n; i++)
    {
        cout << liczby[i] << " ";
    }
    cout << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 2

Usuń pierwszy element aktywnego zakresu tablicy.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Usuwany indeks to `0`, więc wszystkie kolejne elementy przesuwają się w lewo.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczby[5] = {9, 8, 7, 6};
    int n = 4;
    int indeks = 0;

    for (int i = indeks; i < n - 1; i++)
    {
        liczby[i] = liczby[i + 1];
    }

    n--;

    for (int i = 0; i < n; i++)
    {
        cout << liczby[i] << " ";
    }
    cout << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 3

Wczytaj indeks i usuń element tylko wtedy, gdy indeks jest poprawny.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Poprawny indeks usuwania spełnia warunek `indeks >= 0 && indeks < n`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczby[5] = {10, 20, 30, 40};
    int n = 4;
    int indeks;

    cin >> indeks;

    if (indeks >= 0 && indeks < n)
    {
        for (int i = indeks; i < n - 1; i++)
        {
            liczby[i] = liczby[i + 1];
        }

        n--;
    }

    for (int i = 0; i < n; i++)
    {
        cout << liczby[i] << " ";
    }
    cout << "\n";

    return 0;
}
```

</details>

## Podsumowanie

W klasycznej tablicy fizyczna pojemność się nie zmienia. Zmienia się tylko rozmiar logiczny `n`, czyli liczba elementów, które program traktuje jako aktywne.