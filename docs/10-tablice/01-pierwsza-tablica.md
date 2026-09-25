---
layout: default
title: Pierwsza tablica
---

# Pierwsza tablica

## Cel lekcji

Nauczysz się tworzyć pierwszą tablicę, odczytywać jej elementy i zmieniać ich wartości.

## Krótkie wprowadzenie do problemu

Gdy program ma zapamiętać kilka ocen, kilka temperatur albo kilka wyników, osobne zmienne szybko robią się niewygodne. Tablica pozwala trzymać wiele wartości tego samego typu pod jedną nazwą.

## Wyjaśnienie idei

Tablica działa jak rząd ponumerowanych miejsc. Każde miejsce przechowuje jedną wartość. Numer miejsca nazywamy indeksem.

W C++ numerowanie zaczyna się od `0`.

| Indeks | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Wartość | 4 | 7 | 2 | 9 | 1 |

Dla tablicy pięcioelementowej:

- `liczby[0]` oznacza pierwszy element,
- `liczby[4]` oznacza piąty element,
- `liczby[5]` znajduje się już poza tablicą.

Wyjście poza zakres tablicy prowadzi do niezdefiniowanego zachowania. Program nie musi zgłosić czytelnego błędu.

## Składnia

```cpp
const int ROZMIAR = 5;
int liczby[ROZMIAR] = {4, 7, 2, 9, 1};
```

Można też wyzerować tablicę:

```cpp
int liczby[5] = {};
```

Stała `ROZMIAR` pomaga uniknąć wpisywania tej samej liczby w wielu miejscach.

## Przykład 1 - odczyt elementów tablicy

```cpp
#include <iostream>

using namespace std;

int main()
{
    const int ROZMIAR = 5;
    int liczby[ROZMIAR] = {4, 7, 2, 9, 1};

    cout << "Pierwszy element: " << liczby[0] << "\n";
    cout << "Trzeci element: " << liczby[2] << "\n";
    cout << "Piaty element: " << liczby[4] << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Pierwszy element: 4
Trzeci element: 2
Piaty element: 1
```

</details>

## Przykład 2 - zmiana elementu tablicy

```cpp
#include <iostream>

using namespace std;

int main()
{
    int punkty[3] = {10, 15, 20};

    cout << "Przed zmiana: " << punkty[1] << "\n";

    punkty[1] = 18;

    cout << "Po zmianie: " << punkty[1] << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Przed zmiana: 15
Po zmianie: 18
```

</details>

## Omówienie przykładu krok po kroku

- `int punkty[3]` tworzy tablicę trzech liczb całkowitych.
- Elementy mają indeksy `0`, `1`, `2`.
- `punkty[1]` oznacza drugi element.
- Instrukcja `punkty[1] = 18;` zmienia wartość drugiego elementu.
- Rozmiar tablicy nadal wynosi `3`.

## Kiedy tego użyć?

Tablicy używamy, gdy mamy wiele danych tego samego typu i chcemy przechodzić po nich według indeksów.

## Kiedy wybrać coś innego?

Jeżeli potrzebna jest tylko jedna wartość, wystarczy zwykła zmienna. Jeżeli liczba elementów ma zmieniać się swobodnie podczas działania programu, klasyczna tablica o stałej pojemności nie jest najwygodniejszym wyborem.

## Typowe błędy

- Mylenie pierwszego indeksu `0` z indeksem `1`.
- Próba użycia `liczby[5]` w tablicy pięcioelementowej.
- Brak stałej określającej rozmiar tablicy.
- Myślenie, że C++ zawsze zgłosi błąd wyjścia poza zakres.
- Nadpisanie złego elementu przez pomylenie indeksu.

## Ćwiczenia

### Ćwiczenie 1

Utwórz tablicę pięciu liczb całkowitych i wypisz pierwszy oraz ostatni element.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Dla pięciu elementów ostatni indeks to `4`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczby[5] = {3, 6, 9, 12, 15};

    cout << liczby[0] << "\n";
    cout << liczby[4] << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 2

Utwórz tablicę trzech cen typu `double`, zmień drugą cenę i wypisz ją przed zmianą oraz po zmianie.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Drugi element ma indeks `1`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    double ceny[3] = {12.5, 20.0, 7.5};

    cout << "Przed: " << ceny[1] << "\n";
    ceny[1] = 18.5;
    cout << "Po: " << ceny[1] << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 3

Utwórz tablicę czterech liczb wyzerowaną zapisem `{}` i wypisz wszystkie elementy ręcznie, bez pętli.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Użyj indeksów od `0` do `3`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczby[4] = {};

    cout << liczby[0] << "\n";
    cout << liczby[1] << "\n";
    cout << liczby[2] << "\n";
    cout << liczby[3] << "\n";

    return 0;
}
```

</details>

## Podsumowanie

Tablica przechowuje wiele wartości tego samego typu. Elementy tablicy mają indeksy od `0` do `rozmiar - 1`. Trzeba pilnować zakresu, bo wyjście poza tablicę jest błędem programu.