---
layout: default
title: Podstawowe typy danych
---

# Podstawowe typy danych

## Cel lekcji

Poznasz najważniejsze typy danych używane w prostych programach: `int`, `double`, `char`, `bool` i `std::string`.

## Krótkie wprowadzenie do problemu

Nie każda wartość jest taka sama. Liczba całkowita, liczba z częścią ułamkową, pojedynczy znak, prawda albo fałsz oraz tekst wymagają innego traktowania.

## Wyjaśnienie idei

Typ danych mówi kompilatorowi, co znajduje się w zmiennej. `int` przechowuje liczby całkowite. `double` przechowuje liczby rzeczywiste. `char` przechowuje jeden znak. `bool` przechowuje `true` albo `false`.

`std::string` przechowuje tekst. Nie jest wbudowanym typem języka. Pochodzi z biblioteki standardowej i wymaga `#include <string>`. W tym kursie traktujemy go jako jeden z podstawowych typów używanych przez ucznia.

## Składnia

```cpp
int wiek = 16;
double temperatura = 21.5;
char grupa = 'B';
bool czyObecny = true;
std::string imie = "Anna";
```

## Pełny przykład programu

```cpp
#include <iostream>
#include <string>

int main()
{
    int wiek = 16;
    double temperatura = 21.5;
    char grupa = 'B';
    bool czyObecny = true;
    std::string imie = "Anna";

    std::cout << "Imie: " << imie << "\n";
    std::cout << "Wiek: " << wiek << "\n";
    std::cout << "Temperatura: " << temperatura << "\n";
    std::cout << "Grupa: " << grupa << "\n";
    std::cout << "Obecnosc: " << czyObecny << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Imie: Anna
Wiek: 16
Temperatura: 21.5
Grupa: B
Obecnosc: 1
```

</details>

## Omówienie programu krok po kroku

`int` pasuje do wieku, bo wiek zapisujemy jako liczbę całkowitą.

`double` pasuje do temperatury, bo może mieć część po kropce.

`char` zapisujemy w apostrofach.

`bool` domyślnie wypisuje `true` jako `1`, a `false` jako `0`.

`std::string` przechowuje tekst i wymaga nagłówka `<string>`.

## Kiedy tego użyć?

Użyj `int` do liczby sztuk i punktów, `double` do ceny lub średniej, `char` do jednego znaku, `bool` do odpowiedzi tak/nie, a `std::string` do imienia lub nazwy produktu.

## Kiedy wybrać coś innego?

Jeżeli liczby całkowite mogą być bardzo duże, użyjesz później `long long`. Jeżeli tekst zawiera spacje, użyjesz `getline`.

## Ćwiczenia

1. Utwórz zmienne opisujące ucznia: imię, wiek, klasę jako znak i obecność jako `bool`.
2. Utwórz `cena`, `liczbaSztuk` i oblicz koszt.
3. Sprawdź, co wypisze `bool` ustawiony na `false`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Do imienia użyj `std::string`, do wieku `int`, do klasy `char`, a do obecności `bool`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 1</summary>

```cpp
#include <iostream>
#include <string>

int main()
{
    std::string imie = "Jan";
    int wiek = 16;
    char klasa = 'A';
    bool obecny = true;

    std::cout << "Imie: " << imie << "\n";
    std::cout << "Wiek: " << wiek << "\n";
    std::cout << "Klasa: " << klasa << "\n";
    std::cout << "Obecny: " << obecny << "\n";

    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Cena może mieć część ułamkową, więc użyj `double`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 2</summary>

```cpp
#include <iostream>

int main()
{
    double cena = 9.99;
    int liczbaSztuk = 3;
    double koszt = cena * liczbaSztuk;

    std::cout << "Koszt: " << koszt << "\n";

    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Ustaw zmienną typu `bool` na `false` i wypisz ją przez `std::cout`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 3</summary>

```cpp
#include <iostream>

int main()
{
    bool obecny = false;

    std::cout << "Obecny: " << obecny << "\n";

    return 0;
}
```

</details>
## Typowe błędy

- Użycie cudzysłowu dla `char`.
- Brak `<string>` przy `std::string`.
- Użycie przecinka w liczbie rzeczywistej.
- Wybieranie `int` do wartości z częścią ułamkową.

## Podsumowanie

Typ danych pomaga dobrać właściwy rodzaj zmiennej. Dzięki temu program wie, czy pracuje z liczbą, tekstem, znakiem czy wartością logiczną.
