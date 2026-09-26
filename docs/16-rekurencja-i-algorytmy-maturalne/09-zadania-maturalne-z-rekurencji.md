---
layout: default
title: Zadania maturalne z rekurencji
---

# Zadania maturalne z rekurencji

## Krotkie przedstawienie problemu

Chcemy cwiczyc analize rekurencji podobna do zadan maturalnych.

## Proste wyjasnienie idei

Najpierw znajdujemy przypadek podstawowy, potem zmiane argumentu, a na koncu kolejnosc wykonywania instrukcji.

## Dokladne wyjasnienie techniczne

W zadaniach analitycznych rozwiazaniem moze byc tabela wywolan, rozwiniecie wzoru albo poprawiony fragment funkcji.

## Przypadek podstawowy

W programie modelowym przypadek podstawowy to `n == 0`.

## Krok rekurencyjny

Krok rekurencyjny zwraca `n + funkcja(n - 1)`.

## W jaki sposob problem sie zmniejsza?

W kazdym poprawnym przykladzie zmienia sie argument funkcji albo zakres danych. Nowe wywolanie dostaje mniejszy problem, wiec moze dojsc do przypadku podstawowego.

## Reczne przesledzenie niewielkiego przykladu

Dla `funkcja(4)` otrzymujemy `4 + 3 + 2 + 1 + 0`.

## Zadania modelowe

1. Ustal wynik funkcji.
2. Ustal kolejnosc wypisywania.
3. Znajdz przypadek podstawowy.
4. Popraw blad zatrzymania.
5. Zamien prosta rekurencje na petle.


## Pelny program C++

```cpp
#include <iostream>

using namespace std;

int funkcja(int n)
{
    if (n == 0)
    {
        return 0;
    }

    return n + funkcja(n - 1);
}

int main()
{
    cout << funkcja(4) << "\n";
    return 0;
}
```

<details markdown="1">
<summary>Pokaz przykladowe dane i wynik</summary>

Dane wejsciowe:

```text
brak
```

Wynik:

```text
10
```

</details>

## Omowienie programu krok po kroku

Program modelowy sumuje liczby od `1` do `n`. Podobne zadanie moze pytac o wynik, liczbe wywolan, brakujacy warunek albo maksymalna glebokosc.

## Kiedy rekurencja sie zakonczy?

Rekurencja zakonczy sie wtedy, gdy kolejne wywolania doprowadza do przypadku podstawowego. Jezeli argument nie zbliza sie do konca, funkcja moze wywolywac sie bez konca.

## Kiedy lepsza bedzie petla?

Petla bedzie lepsza, gdy zadanie polega na prostym przejsciu po kolejnych wartosciach i rekurencja nie ulatwia myslenia. Petla zwykle zuzywa mniej pamieci i jest bezpieczniejsza dla bardzo duzych danych.

## Typowe bledy

- Brak przypadku podstawowego.
- Przypadek podstawowy, ktorego nie da sie osiagnac.
- Argument rosnacy zamiast zblizajacego sie do konca.
- Pominiecie `return` w funkcji zwracajacej wartosc.
- Pomylenie instrukcji wykonywanych podczas schodzenia z instrukcjami wykonywanymi podczas powrotu.
- Uzycie rekurencji tam, gdzie zwykla petla jest prostsza.

## Cwiczenia

### Cwiczenie 1 - Przewidzenie wyniku

Przewidz wynik malego wywolania z lekcji.

<details markdown="1">
<summary>Pokaz wskazowke do cwiczenia 1</summary>

Rozpisz kolejne argumenty i zaznacz przypadek podstawowy.

</details>

<details markdown="1">
<summary>Pokaz rozwiazanie cwiczenia 1</summary>

Rozwiazanie polega na rozpisaniu kolejnych wywolan i powrotow. Dla malego przykladu widac, kiedy funkcja przestaje wywolywac sama siebie.

</details>

### Cwiczenie 2 - Reczne rozpisanie wywolan

Utworz tabele wywolan dla wartosci poczatkowej podanej w przykladzie.

<details markdown="1">
<summary>Pokaz wskazowke do cwiczenia 2</summary>

W pierwszej kolumnie wpisz numer wywolania, w drugiej argument, w trzeciej decyzje.

</details>

<details markdown="1">
<summary>Pokaz rozwiazanie cwiczenia 2</summary>

Tabela powinna pokazac schodzenie do przypadku podstawowego oraz powroty do poprzednich wywolan.

</details>

### Cwiczenie 3 - Przypadek podstawowy

Wskaz przypadek podstawowy i wyjasnij, dlaczego konczy rekurencje.

<details markdown="1">
<summary>Pokaz wskazowke do cwiczenia 3</summary>

Szukaj warunku, po ktorym funkcja nie wywoluje samej siebie.

</details>

<details markdown="1">
<summary>Pokaz rozwiazanie cwiczenia 3</summary>

Przypadek podstawowy jest tym fragmentem funkcji, ktory zwraca wynik albo wykonuje `return` bez kolejnego wywolania rekurencyjnego.

</details>

### Cwiczenie 4 - Poprawienie bledu

Wyjasnij, co stanie sie, gdy argument nie bedzie sie zmniejszal.

<details markdown="1">
<summary>Pokaz wskazowke do cwiczenia 4</summary>

Sprawdz, czy kolejne wywolanie zbliza sie do konca.

</details>

<details markdown="1">
<summary>Pokaz rozwiazanie cwiczenia 4</summary>

Jezeli argument nie zbliza sie do przypadku podstawowego, rekurencja moze dzialac bez konca albo zakonczyc sie bledem wykonania.

</details>

### Cwiczenie 5 - Program

Napisz lub uruchom kompletny program oparty na schemacie z lekcji.

<details markdown="1">
<summary>Pokaz wskazowke do cwiczenia 5</summary>

Zachowaj przypadek podstawowy i krok rekurencyjny.

</details>

<details markdown="1">
<summary>Pokaz rozwiazanie cwiczenia 5</summary>

```cpp
#include <iostream>

using namespace std;

int funkcja(int n)
{
    if (n == 0)
    {
        return 0;
    }

    return n + funkcja(n - 1);
}

int main()
{
    cout << funkcja(4) << "\n";
    return 0;
}
```

</details>


## Podsumowanie

Najwazniejsze jest rozumienie przypadku podstawowego, zmniejszania problemu i kolejności powrotow.
