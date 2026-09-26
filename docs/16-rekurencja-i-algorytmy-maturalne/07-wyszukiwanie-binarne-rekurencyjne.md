---
layout: default
title: Rekurencyjne wyszukiwanie binarne
---

# Rekurencyjne wyszukiwanie binarne

## Krotkie przedstawienie problemu

Chcemy szybko znalezc element w posortowanym vectorze.

## Proste wyjasnienie idei

Sprawdzamy srodek zakresu i odrzucamy polowe danych.

## Dokladne wyjasnienie techniczne

Zakres opisuja argumenty `lewy` i `prawy`. Srodek liczymy jako `lewy + (prawy - lewy) / 2`.

## Przypadek podstawowy

Gdy `lewy > prawy`, zakres jest pusty i zwracamy `-1`.

## Krok rekurencyjny

Krok wybiera lewa albo prawa polowe, wiec zakres sie zmniejsza.

## W jaki sposob problem sie zmniejsza?

W kazdym poprawnym przykladzie zmienia sie argument funkcji albo zakres danych. Nowe wywolanie dostaje mniejszy problem, wiec moze dojsc do przypadku podstawowego.

## Reczne przesledzenie niewielkiego przykladu

Dla szukania `16` zakresy to `0..6`, potem `4..6`, potem `4..4`.

## Tabela sledzenia

| Wywolanie | Lewy | Prawy | Srodek | Decyzja |
| --------- | ---: | ----: | -----: | ------- |
| 1 | 0 | 6 | 3 | prawa polowa |
| 2 | 4 | 6 | 5 | lewa polowa |
| 3 | 4 | 4 | 4 | znaleziono |


## Pelny program C++

```cpp
#include <iostream>
#include <vector>

using namespace std;

int wyszukajBinarnie(const vector<int> &liczby, int lewy, int prawy, int szukana)
{
    if (lewy > prawy)
    {
        return -1;
    }

    int srodek = lewy + (prawy - lewy) / 2;

    if (liczby[srodek] == szukana)
    {
        return srodek;
    }

    if (szukana < liczby[srodek])
    {
        return wyszukajBinarnie(liczby, lewy, srodek - 1, szukana);
    }

    return wyszukajBinarnie(liczby, srodek + 1, prawy, szukana);
}

int main()
{
    vector<int> liczby = {2, 5, 8, 12, 16, 23, 38};
    cout << wyszukajBinarnie(liczby, 0, (int)liczby.size() - 1, 16) << "\n";
    cout << wyszukajBinarnie(liczby, 0, (int)liczby.size() - 1, 7) << "\n";
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
4
-1
```

</details>

## Omowienie programu krok po kroku

Program znajduje indeks `4` dla wartosci `16` i `-1` dla wartosci `7`. Dane musza byc posortowane.

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
#include <vector>

using namespace std;

int wyszukajBinarnie(const vector<int> &liczby, int lewy, int prawy, int szukana)
{
    if (lewy > prawy)
    {
        return -1;
    }

    int srodek = lewy + (prawy - lewy) / 2;

    if (liczby[srodek] == szukana)
    {
        return srodek;
    }

    if (szukana < liczby[srodek])
    {
        return wyszukajBinarnie(liczby, lewy, srodek - 1, szukana);
    }

    return wyszukajBinarnie(liczby, srodek + 1, prawy, szukana);
}

int main()
{
    vector<int> liczby = {2, 5, 8, 12, 16, 23, 38};
    cout << wyszukajBinarnie(liczby, 0, (int)liczby.size() - 1, 16) << "\n";
    cout << wyszukajBinarnie(liczby, 0, (int)liczby.size() - 1, 7) << "\n";
    return 0;
}
```

</details>


## Podsumowanie

Najwazniejsze jest rozumienie przypadku podstawowego, zmniejszania problemu i kolejności powrotow.
