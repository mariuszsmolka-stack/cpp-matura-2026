---
layout: default
title: Tablice i funkcje
---

# Tablice i funkcje

## Cel lekcji

Nauczysz się przekazywać tablice do funkcji oraz rozróżniać funkcje odczytujące i zmieniające elementy tablicy.

## Krótkie wprowadzenie do problemu

Gdy program pracuje z tablicą, wiele operacji się powtarza: wypisanie, suma, wyszukiwanie, zmiana elementów. Funkcje pozwalają nazwać te operacje i uporządkować program.

## Wyjaśnienie idei

Do funkcji przekazujemy tablicę oraz osobno liczbę używanych elementów. Sama tablica nie mówi funkcji, ile elementów jest aktywnych.

Funkcja otrzymuje dostęp do oryginalnych elementów tablicy. Jeżeli wewnątrz funkcji zmienimy `tablica[i]`, zmiana będzie widoczna po powrocie do `main()`.

Jeżeli funkcja ma tylko czytać elementy, warto użyć `const int tablica[]`.

## Składnia

```cpp
void wypiszTablice(const int tablica[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << tablica[i] << " ";
    }
    cout << "\n";
}
```

Funkcja zmieniająca elementy:

```cpp
void zwiekszElementy(int tablica[], int n, int wartosc)
{
    for (int i = 0; i < n; i++)
    {
        tablica[i] += wartosc;
    }
}
```

## Przykład 1 - wypisywanie i suma w funkcjach

```cpp
#include <iostream>

using namespace std;

void wypiszTablice(const int tablica[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << tablica[i] << " ";
    }
    cout << "\n";
}

int obliczSume(const int tablica[], int n)
{
    int suma = 0;

    for (int i = 0; i < n; i++)
    {
        suma += tablica[i];
    }

    return suma;
}

int main()
{
    int liczby[4] = {2, 4, 6, 8};
    int n = 4;

    wypiszTablice(liczby, n);
    cout << "Suma: " << obliczSume(liczby, n) << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
2 4 6 8 
Suma: 20
```

</details>

## Przykład 2 - wyszukiwanie i zmiana elementów

```cpp
#include <iostream>

using namespace std;

int znajdz(const int tablica[], int n, int szukana)
{
    for (int i = 0; i < n; i++)
    {
        if (tablica[i] == szukana)
        {
            return i;
        }
    }

    return -1;
}

void zwiekszElementy(int tablica[], int n, int wartosc)
{
    for (int i = 0; i < n; i++)
    {
        tablica[i] += wartosc;
    }
}

int main()
{
    int liczby[5] = {3, 6, 9, 12, 15};
    int n = 5;

    cout << "Indeks 9: " << znajdz(liczby, n, 9) << "\n";

    zwiekszElementy(liczby, n, 1);

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
Indeks 9: 2
4 7 10 13 16 
```

</details>

## Omówienie przykładu krok po kroku

- `znajdz()` tylko czyta tablicę, dlatego używa `const int tablica[]`.
- Funkcja zwraca indeks albo `-1`.
- `zwiekszElementy()` zmienia elementy oryginalnej tablicy.
- Po wywołaniu funkcji zmienione wartości są widoczne w `main()`.
- Liczba elementów `n` jest przekazana osobno.

## Kiedy tego użyć?

Funkcji używamy, gdy ta sama operacja na tablicy pojawia się więcej niż raz albo gdy chcemy uporządkować program.

## Kiedy wybrać coś innego?

W bardzo krótkim programie można wykonać operację bez osobnej funkcji. Funkcja ma pomagać w czytaniu kodu, a nie go komplikować.

## Typowe błędy

- Brak parametru `n`.
- Próba odczytania większej liczby elementów niż przekazano w `n`.
- Brak `const` w funkcji, która tylko czyta tablicę.
- Nieświadoma zmiana elementów tablicy w funkcji.
- Funkcja robi zbyt wiele rzeczy naraz.

## Ćwiczenia

### Ćwiczenie 1

Napisz funkcję, która wypisuje elementy tablicy w odwrotnej kolejności.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Pętla może zacząć od `n - 1`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

void wypiszOdKonca(const int tablica[], int n)
{
    for (int i = n - 1; i >= 0; i--)
    {
        cout << tablica[i] << " ";
    }
    cout << "\n";
}

int main()
{
    int liczby[4] = {1, 2, 3, 4};
    int n = 4;

    wypiszOdKonca(liczby, n);

    return 0;
}
```

</details>

### Ćwiczenie 2

Napisz funkcję, która zwraca największy element tablicy.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Załóż, że `n > 0` i zacznij od pierwszego elementu.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int maksimum(const int tablica[], int n)
{
    int wynik = tablica[0];

    for (int i = 1; i < n; i++)
    {
        if (tablica[i] > wynik)
        {
            wynik = tablica[i];
        }
    }

    return wynik;
}

int main()
{
    int liczby[5] = {4, 9, 2, 11, 7};
    int n = 5;

    cout << maksimum(liczby, n) << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 3

Napisz funkcję, która zwiększa wszystkie elementy tablicy o `10`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Funkcja zmienia tablicę, więc parametr nie powinien mieć `const`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

void dodajDziesiec(int tablica[], int n)
{
    for (int i = 0; i < n; i++)
    {
        tablica[i] += 10;
    }
}

int main()
{
    int liczby[3] = {1, 2, 3};
    int n = 3;

    dodajDziesiec(liczby, n);

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

Do funkcji przekazujemy tablicę i osobno liczbę używanych elementów. `const int tablica[]` chroni funkcję odczytującą przed zmianą elementów, a zwykłe `int tablica[]` pozwala elementy zmieniać.