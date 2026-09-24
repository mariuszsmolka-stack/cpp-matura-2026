---
layout: default
title: Zmienne i stałe
---

# Zmienne i stałe

## Cel lekcji

Poznasz zmienne, stałe, deklarację, inicjalizację i przypisanie wartości.

## Krótkie wprowadzenie do problemu

Program musi zapamiętywać dane: cenę, wynik, liczbę punktów albo wiek. Do tego służą zmienne. Czasem wartość nie powinna się zmieniać. Wtedy używamy stałej.

## Wyjaśnienie idei

Zmienna to podpisane pudełko na wartość. Nazwa jest etykietą pudełka. Typ mówi, co wolno włożyć do środka.

Deklaracja tworzy zmienną. Inicjalizacja nadaje jej pierwszą wartość. Przypisanie zmienia wartość. `const` tworzy stałą, której nie wolno potem zmienić.

## Składnia

```cpp
int wiek = 16;
wiek = 17;
const double STAWKA_VAT = 23.0;
```

## Pełny przykład programu

```cpp
#include <iostream>

int main()
{
    int punkty = 10;
    std::cout << "Punkty na poczatku: " << punkty << "\n";

    punkty = 15;
    std::cout << "Punkty po zmianie: " << punkty << "\n";

    const double STAWKA_VAT = 23.0;
    std::cout << "Stawka VAT: " << STAWKA_VAT << "%\n";

    int dlugosc = 8;
    int szerokosc = 4;
    int pole = dlugosc * szerokosc;
    std::cout << "Pole prostokata: " << pole << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Punkty na poczatku: 10
Punkty po zmianie: 15
Stawka VAT: 23%
Pole prostokata: 32
```

</details>

## Omówienie programu krok po kroku

`int punkty = 10;` tworzy zmienną i nadaje jej wartość.

`punkty = 15;` zastępuje starą wartość nową.

`const double STAWKA_VAT = 23.0;` tworzy stałą.

`pole` przechowuje wynik mnożenia długości i szerokości.

## Nazwy zmiennych

Dobra nazwa mówi, co przechowuje zmienna, na przykład `wiek`, `liczbaPunktow`, `poleProstokata`.

Nazwa nie może zaczynać się od cyfry i nie może zawierać spacji. W C++ wielkość liter ma znaczenie.

## Niezainicjalizowana zmienna

Zmienna lokalna bez wartości początkowej może zawierać przypadkową wartość. Dlatego na początku kursu nadawaj zmiennym wartość od razu.

## Kiedy tego użyć?

Zmiennych używaj, gdy program ma zapamiętać dane albo wynik obliczenia. Stałych używaj, gdy wartość jest znana i nie powinna się zmienić.

## Kiedy wybrać coś innego?

Jeżeli wartość ma się zmieniać, wybierz zwykłą zmienną. Jeżeli ma pozostać taka sama, wybierz `const`. Zakres zmiennych omówimy w rozdziale 09.

## Ćwiczenia

1. Utwórz zmienne `cena` i `liczbaSztuk`, a potem oblicz koszt.
2. Utwórz stałą `LICZBA_DNI_TYGODNIA` i wypisz ją.
3. Zmień wartość zmiennej `punkty` i wypisz ją przed oraz po zmianie.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Utwórz dwie zmienne, a wynik mnożenia zapisz w trzeciej zmiennej.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 1</summary>

```cpp
#include <iostream>

int main()
{
    double cena = 12.50;
    int liczbaSztuk = 4;
    double koszt = cena * liczbaSztuk;

    std::cout << "Koszt: " << koszt << "\n";

    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Stałą utwórz z użyciem słowa `const` i nadaj jej wartość od razu.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 2</summary>

```cpp
#include <iostream>

int main()
{
    const int LICZBA_DNI_TYGODNIA = 7;

    std::cout << "Liczba dni tygodnia: " << LICZBA_DNI_TYGODNIA << "\n";

    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Najpierw wypisz początkową wartość `punkty`, potem przypisz nową wartość i wypisz zmienną jeszcze raz.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 3</summary>

```cpp
#include <iostream>

int main()
{
    int punkty = 10;
    std::cout << "Punkty przed zmiana: " << punkty << "\n";

    punkty = 20;
    std::cout << "Punkty po zmianie: " << punkty << "\n";

    return 0;
}
```

</details>
## Typowe błędy

- Użycie zmiennej przed inicjalizacją.
- Próba zmiany stałej `const`.
- Nazwa zmiennej ze spacją.
- Literówka w nazwie.
- Mylenie deklaracji z przypisaniem.

## Podsumowanie

Zmienna przechowuje wartość, którą można zmienić. Stała `const` przechowuje wartość, która nie powinna się zmieniać.
