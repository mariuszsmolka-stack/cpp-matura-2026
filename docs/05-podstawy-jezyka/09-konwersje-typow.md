---
layout: default
title: Konwersje typów
---

# Konwersje typów

## Cel lekcji

Zrozumiesz konwersję niejawną, konwersję jawną, `static_cast` oraz problem dzielenia liczb całkowitych.

## Krótkie wprowadzenie do problemu

Czasem program ma wartość jednego typu, ale do obliczenia potrzebuje innego typu. Na przykład dwie liczby całkowite mają dać wynik rzeczywisty.

Konwersja to przepisanie wartości do innego rodzaju reprezentacji.

## Wyjaśnienie idei

Konwersja może być niejawna albo jawna.

Konwersja niejawna dzieje się automatycznie. Kompilator sam decyduje, że może zamienić typ.

Konwersja jawna oznacza, że programista wyraźnie pisze, jakiego typu chce użyć. W C++ czytelnym sposobem jest `static_cast`.

## Składnia

```cpp
int liczba = 5;
double wynik = static_cast<double>(liczba);
```

## Pełny przykład programu

```cpp
#include <iostream>

using namespace std;

int main()
{
    int punkty = 7;
    int maksimum = 2;

    int wynikCalkowity = punkty / maksimum;
    double wynikRzeczywisty = static_cast<double>(punkty) / maksimum;

    double cena = 19.99;
    int cenaBezGroszy = static_cast<int>(cena);

    cout << "Dzielenie int / int: " << wynikCalkowity << "\n";
    cout << "Dzielenie z konwersja: " << wynikRzeczywisty << "\n";
    cout << "Cena po konwersji na int: " << cenaBezGroszy << "\n";

    return 0;
}
```

<details>
<summary>Pokaż wynik</summary>

```text
Dzielenie int / int: 3
Dzielenie z konwersja: 3.5
Cena po konwersji na int: 19
```

</details>

## Omówienie programu krok po kroku

`punkty / maksimum` to dzielenie dwóch wartości typu `int`. Wynik też jest całkowity, więc część ułamkowa znika.

`static_cast<double>(punkty)` zamienia `punkty` na `double` przed dzieleniem.

Dzięki temu wynik dzielenia może mieć część ułamkową.

`static_cast<int>(cena)` zamienia `double` na `int`. Część ułamkowa zostaje utracona.

## Utrata danych

Konwersja z `double` na `int` nie zaokrągla w zwykłym sensie. Część po kropce jest odcinana. Dlatego trzeba robić to świadomie.

## Kiedy tego użyć?

Użyj `static_cast`, gdy chcesz jasno pokazać, że zmieniasz typ wartości. Szczególnie przy dzieleniu liczb całkowitych, gdy oczekujesz wyniku rzeczywistego.

## Kiedy wybrać coś innego?

Jeżeli od początku pracujesz na wartościach rzeczywistych, możesz użyć typu `double` dla zmiennych wejściowych. Nie omawiamy tu jeszcze konwersji napisów na liczby.

## Ćwiczenia

1. Wczytaj dwie liczby całkowite i oblicz ich średnią jako liczbę rzeczywistą.
2. Sprawdź, co stanie się po konwersji `double` o wartości `8.75` na `int`.
3. Oblicz wynik dzielenia `5 / 2` jako `int` i jako `double`.

<details>
<summary>Pokaż wskazówkę</summary>

Aby uzyskać wynik rzeczywisty, wystarczy zamienić jedną z liczb na `double` przed dzieleniem.

</details>

<details>
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int a = 0;
    int b = 0;

    cout << "Podaj dwie liczby: ";
    cin >> a >> b;

    double srednia = (a + b) / 2.0;
    double iloraz = static_cast<double>(a) / b;

    cout << "Srednia: " << srednia << "\n";
    cout << "Iloraz: " << iloraz << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Oczekiwanie, że `7 / 2` da `3.5`.
- Konwersja na `int` bez świadomości utraty części ułamkowej.
- Stosowanie starego zapisu rzutowania zamiast czytelnego `static_cast`.
- Konwersja w złym miejscu działania.
- Mylenie konwersji typów z formatowaniem wyniku.

## Podsumowanie

Konwersja zmienia sposób traktowania wartości przez program. `static_cast` jest czytelnym sposobem jawnej konwersji. Przy dzieleniu dwóch `int` trzeba uważać na wynik całkowity.
