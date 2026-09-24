---
layout: default
title: Wczytywanie danych
---

# Wczytywanie danych

## Cel lekcji

Nauczysz się pobierać dane od użytkownika za pomocą `std::cin` i operatora `>>`.

## Krótkie wprowadzenie do problemu

Program nie zawsze zna dane z góry. Czasem użytkownik musi podać wiek, cenę, liczbę sztuk albo imię.

Do pobierania danych z klawiatury służy `std::cin`.

## Wyjaśnienie idei

`std::cout` wysyła dane na ekran. `std::cin` pobiera dane z klawiatury.

`std::cin >> zmienna;` czytamy tak: weź wartość wpisaną przez użytkownika i zapisz ją do zmiennej.

## Składnia

```cpp
int liczba = 0;
std::cin >> liczba;

int a = 0;
int b = 0;
std::cin >> a >> b;
```

## Pełny przykład programu

```cpp
#include <iostream>

int main()
{
    double cena = 0.0;
    int liczbaSztuk = 0;

    std::cout << "Podaj cene jednej sztuki: ";
    std::cin >> cena;

    std::cout << "Podaj liczbe sztuk: ";
    std::cin >> liczbaSztuk;

    double koszt = cena * liczbaSztuk;

    std::cout << "Koszt zakupow: " << koszt << "\n";

    return 0;
}
```

<details>
<summary>Pokaż wynik</summary>

```text
Podaj cene jednej sztuki: 12.5
Podaj liczbe sztuk: 4
Koszt zakupow: 50
```

</details>

## Omówienie programu krok po kroku

Program tworzy zmienne `cena` i `liczbaSztuk` z wartościami początkowymi.

Najpierw wypisuje komunikat, aby użytkownik wiedział, co wpisać.

`std::cin >> cena;` wczytuje liczbę rzeczywistą.

`std::cin >> liczbaSztuk;` wczytuje liczbę całkowitą.

Po wczytaniu danych program oblicza koszt i wypisuje wynik.

## Niewłaściwy typ danych

Jeżeli program oczekuje liczby, a użytkownik wpisze tekst, wczytywanie się nie uda. W tej lekcji zapamiętaj prostą zasadę: wpisuj dane zgodne z typem zmiennej.

Pełna obsługa błędów strumienia pojawi się później.

## Kiedy tego użyć?

`std::cin` stosujesz, gdy program ma pobrać od użytkownika prostą wartość: liczbę, znak albo pojedyncze słowo bez spacji.

## Kiedy wybrać coś innego?

Jeżeli chcesz wczytać cały tekst ze spacjami, na przykład imię i nazwisko w jednej zmiennej, użyj `std::getline`. Ten temat pojawi się w lekcji 10.

## Ćwiczenia

1. Wczytaj dwie liczby całkowite i wypisz ich sumę.
2. Wczytaj długość i szerokość prostokąta, a potem wypisz pole.
3. Wczytaj imię bez spacji i wypisz powitanie.

<details>
<summary>Pokaż wskazówkę</summary>

Przed `std::cin` wypisz komunikat. Wynik obliczenia zapisz w osobnej zmiennej.

</details>

<details>
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>
#include <string>

int main()
{
    std::string imie;
    int a = 0;
    int b = 0;

    std::cout << "Podaj imie: ";
    std::cin >> imie;

    std::cout << "Podaj dwie liczby: ";
    std::cin >> a >> b;

    std::cout << "Witaj, " << imie << "\n";
    std::cout << "Suma: " << a + b << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Użycie `std::cout` zamiast `std::cin` przy wczytywaniu.
- Użycie `<<` zamiast `>>`.
- Brak komunikatu dla użytkownika.
- Wpisanie tekstu, gdy program oczekuje liczby.
- Oczekiwanie, że `std::cin >> tekst` wczyta tekst ze spacjami.

## Podsumowanie

`std::cin` pobiera dane od użytkownika. Operator `>>` kieruje wpisaną wartość do zmiennej. Typ zmiennej decyduje, jakiego rodzaju dane program oczekuje.
