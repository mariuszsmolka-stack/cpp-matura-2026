---
layout: default
title: Stos wywolan i kolejnosc dzialania
---

# Stos wywolan i kolejnosc dzialania

## Krotkie przedstawienie problemu

Chcemy zrozumiec, dlaczego polozenie instrukcji przed albo po wywolaniu rekurencyjnym zmienia wynik.

## Proste wyjasnienie idei

Kazde wywolanie ma wlasny argument i moze czekac na zakonczenie glebszego wywolania.

## Dokladne wyjasnienie techniczne

Stos wywolan przechowuje aktywne wywolania. Najnowsze wywolanie konczy sie jako pierwsze.

## Przypadek podstawowy

Dla `liczba == 0` funkcja wraca.

## Krok rekurencyjny

Argument maleje przez wywolanie z `liczba - 1`.

## W jaki sposob problem sie zmniejsza?

W kazdym poprawnym przykladzie zmienia sie argument funkcji albo zakres danych. Nowe wywolanie dostaje mniejszy problem, wiec moze dojsc do przypadku podstawowego.

## Reczne przesledzenie niewielkiego przykladu

Dla `rosnaco(3)` funkcja najpierw schodzi do zera, a potem wypisuje `1`, `2`, `3`.

## Tabela wywolan

| Wywolanie | Argument | Co robi? |
| --- | ---: | --- |
| `wypisz(3)` | 3 | czeka na `wypisz(2)` |
| `wypisz(2)` | 2 | czeka na `wypisz(1)` |
| `wypisz(1)` | 1 | czeka na `wypisz(0)` |
| `wypisz(0)` | 0 | konczy schodzenie |
| powrot do `wypisz(1)` | 1 | wykonuje dalsza czesc |
| powrot do `wypisz(2)` | 2 | wykonuje dalsza czesc |
| powrot do `wypisz(3)` | 3 | wykonuje dalsza czesc |

```mermaid
flowchart TD
    A["wypisz(3)"] --> B["wypisz(2)"]
    B --> C["wypisz(1)"]
    C --> D["wypisz(0)"]
    D --> E["powrot do 1"]
    E --> F["powrot do 2"]
    F --> G["powrot do 3"]
```


## Pelny program C++

```cpp
#include <iostream>

using namespace std;

void malejaco(int liczba)
{
    if (liczba == 0)
    {
        return;
    }

    cout << liczba << " ";
    malejaco(liczba - 1);
}

void rosnaco(int liczba)
{
    if (liczba == 0)
    {
        return;
    }

    rosnaco(liczba - 1);
    cout << liczba << " ";
}

int main()
{
    malejaco(3);
    cout << "\n";
    rosnaco(3);
    cout << "\n";
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
3 2 1
1 2 3
```

</details>

## Omowienie programu krok po kroku

Pierwsza funkcja wypisuje podczas schodzenia, a druga podczas powrotow.

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

void malejaco(int liczba)
{
    if (liczba == 0)
    {
        return;
    }

    cout << liczba << " ";
    malejaco(liczba - 1);
}

void rosnaco(int liczba)
{
    if (liczba == 0)
    {
        return;
    }

    rosnaco(liczba - 1);
    cout << liczba << " ";
}

int main()
{
    malejaco(3);
    cout << "\n";
    rosnaco(3);
    cout << "\n";
    return 0;
}
```

</details>


## Podsumowanie

Najwazniejsze jest rozumienie przypadku podstawowego, zmniejszania problemu i kolejności powrotow.
