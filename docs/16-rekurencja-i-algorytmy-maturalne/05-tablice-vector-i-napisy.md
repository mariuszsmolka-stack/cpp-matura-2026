---
layout: default
title: Tablice, vector i napisy
---

# Tablice, vector i napisy

## Krotkie przedstawienie problemu

Chcemy rekurencyjnie przetwarzac dane od podanego indeksu albo od dwoch koncow.

## Proste wyjasnienie idei

Argument `indeks` mowi, ktory element aktualnie rozpatrujemy. Dla napisu mozna uzyc indeksu lewego i prawego.

## Dokladne wyjasnienie techniczne

Nie kopiujemy calego `vector` ani napisu. Gdy funkcja tylko czyta dane, przekazujemy `const vector<int> &` albo `const string &`.

## Przypadek podstawowy

Dla vectora koniec jest wtedy, gdy `indeks == size()`. Dla palindromu koniec jest wtedy, gdy `lewy >= prawy`.

## Krok rekurencyjny

Krok rekurencyjny zwieksza indeks albo zaweza zakres z obu stron.

## W jaki sposob problem sie zmniejsza?

W kazdym poprawnym przykladzie zmienia sie argument funkcji albo zakres danych. Nowe wywolanie dostaje mniejszy problem, wiec moze dojsc do przypadku podstawowego.

## Reczne przesledzenie niewielkiego przykladu

Dla `{4, 7, 2, 9}` kolejne indeksy to `0`, `1`, `2`, `3`, `4`.



## Pelny program C++

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int suma(const vector<int> &liczby, int indeks)
{
    if (indeks == (int)liczby.size())
    {
        return 0;
    }

    return liczby[indeks] + suma(liczby, indeks + 1);
}

bool czyPalindrom(const string &tekst, int lewy, int prawy)
{
    if (lewy >= prawy)
    {
        return true;
    }

    if (tekst[lewy] != tekst[prawy])
    {
        return false;
    }

    return czyPalindrom(tekst, lewy + 1, prawy - 1);
}

int main()
{
    vector<int> liczby = {4, 7, 2, 9};
    cout << suma(liczby, 0) << "\n";
    cout << czyPalindrom("kajak", 0, 4) << "\n";
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
22
1
```

</details>

## Omowienie programu krok po kroku

Program sumuje vector i sprawdza palindrom bez kopiowania danych.

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
#include <string>
#include <vector>

using namespace std;

int suma(const vector<int> &liczby, int indeks)
{
    if (indeks == (int)liczby.size())
    {
        return 0;
    }

    return liczby[indeks] + suma(liczby, indeks + 1);
}

bool czyPalindrom(const string &tekst, int lewy, int prawy)
{
    if (lewy >= prawy)
    {
        return true;
    }

    if (tekst[lewy] != tekst[prawy])
    {
        return false;
    }

    return czyPalindrom(tekst, lewy + 1, prawy - 1);
}

int main()
{
    vector<int> liczby = {4, 7, 2, 9};
    cout << suma(liczby, 0) << "\n";
    cout << czyPalindrom("kajak", 0, 4) << "\n";
    return 0;
}
```

</details>


## Podsumowanie

Najwazniejsze jest rozumienie przypadku podstawowego, zmniejszania problemu i kolejności powrotow.
