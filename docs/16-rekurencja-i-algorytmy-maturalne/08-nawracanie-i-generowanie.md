---
layout: default
title: Nawracanie i generowanie
---

# Nawracanie i generowanie

## Krotkie przedstawienie problemu

Chcemy generowac wiele mozliwych rozwiazan.

## Proste wyjasnienie idei

Wybieramy mozliwosc, przechodzimy glebiej, po powrocie cofamy zmiane, jesli byla potrzebna, i sprawdzamy nastepna mozliwosc.

## Dokladne wyjasnienie techniczne

To rekurencja rozgaleziajaca sie. Czasem wystarczy przekazywac nowy napis, a czasem trzeba zmieniac wspolny stan i go cofac.

## Przypadek podstawowy

Gdy napis ma wymagana dlugosc, wypisujemy go i konczymy wywolanie.

## Krok rekurencyjny

Funkcja tworzy dwa wywolania: z dopisanym `0` i z dopisanym `1`.

## W jaki sposob problem sie zmniejsza?

W kazdym poprawnym przykladzie zmienia sie argument funkcji albo zakres danych. Nowe wywolanie dostaje mniejszy problem, wiec moze dojsc do przypadku podstawowego.

## Reczne przesledzenie niewielkiego przykladu

Dla dlugosci `3` powstaja galezie od pustego napisu do pelnych napisow binarnych.

## Drzewo decyzji

```mermaid
flowchart TD
    A["start"] --> B["0"]
    A --> C["1"]
    B --> D["00"]
    B --> E["01"]
    C --> F["10"]
    C --> G["11"]
    D --> H["000 albo 001"]
    E --> I["010 albo 011"]
    F --> J["100 albo 101"]
    G --> K["110 albo 111"]
```


## Pelny program C++

```cpp
#include <iostream>
#include <string>

using namespace std;

void generujBinarne(int dlugosc, string wynik)
{
    if ((int)wynik.size() == dlugosc)
    {
        cout << wynik << "\n";
        return;
    }

    generujBinarne(dlugosc, wynik + "0");
    generujBinarne(dlugosc, wynik + "1");
}

int main()
{
    generujBinarne(3, "");
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
000
001
010
011
100
101
110
111
```

</details>

## Omowienie programu krok po kroku

Program najpierw generuje warianty zaczynajace sie od `0`, a potem warianty zaczynajace sie od `1`. Permutacje sa trudniejsze, bo trzeba pilnowac uzytych elementow.

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

using namespace std;

void generujBinarne(int dlugosc, string wynik)
{
    if ((int)wynik.size() == dlugosc)
    {
        cout << wynik << "\n";
        return;
    }

    generujBinarne(dlugosc, wynik + "0");
    generujBinarne(dlugosc, wynik + "1");
}

int main()
{
    generujBinarne(3, "");
    return 0;
}
```

</details>


## Podsumowanie

Najwazniejsze jest rozumienie przypadku podstawowego, zmniejszania problemu i kolejności powrotow.
