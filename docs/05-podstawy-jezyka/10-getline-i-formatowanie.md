---
layout: default
title: getline i formatowanie wyników
---

# getline i formatowanie wyników

## Cel lekcji

Nauczysz się wczytywać tekst ze spacjami za pomocą `getline` oraz formatować proste wyniki przy użyciu `<iomanip>`.

## Krótkie wprowadzenie do problemu

`cin >> tekst` wczytuje tylko do pierwszej spacji. To wystarczy dla jednego słowa, ale nie wystarczy dla imienia i nazwiska albo nazwy produktu.

Do całej linii tekstu używamy `getline`.

## Wyjaśnienie idei

`getline` pobiera cały wiersz tekstu. Jeżeli wcześniej użyto `cin >>`, w buforze może zostać znak nowej linii.

Prosty i bezpieczny zapis to `getline(cin >> ws, tekst);`.

`ws` usuwa białe znaki na początku, w tym pozostający znak nowej linii.

Do formatowania liczb używamy `<iomanip>`, na przykład `fixed` i `setprecision`.

## Składnia

```cpp
string tekst;
getline(cin >> ws, tekst);

cout << fixed << setprecision(2) << cena;
cout << boolalpha << true;
```

## Pełny przykład programu

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main()
{
    string produkt;
    double cena = 0.0;
    bool dostepny = true;

    cout << "Podaj nazwe produktu: ";
    getline(cin >> ws, produkt);

    cout << "Podaj cene: ";
    cin >> cena;

    cout << "Produkt: " << produkt << "\n";
    cout << fixed << setprecision(2);
    cout << "Cena: " << cena << " zl\n";
    cout << boolalpha;
    cout << "Dostepny: " << dostepny << "\n";

    return 0;
}
```

<details>
<summary>Pokaż wynik</summary>

```text
Podaj nazwe produktu: zeszyt w kratke
Podaj cene: 4.5
Produkt: zeszyt w kratke
Cena: 4.50 zl
Dostepny: true
```

</details>

## Omówienie programu krok po kroku

`#include <iomanip>` pozwala użyć `fixed`, `setprecision` i `boolalpha`.

`getline(cin >> ws, produkt);` wczytuje całą linię tekstu i pomija początkowe białe znaki.

`fixed << setprecision(2)` sprawia, że liczby rzeczywiste będą wypisywane z dwoma miejscami po kropce.

`boolalpha` powoduje, że `bool` jest wypisywany jako `true` albo `false`, a nie jako `1` albo `0`.

## Kiedy tego użyć?

Użyj `getline`, gdy użytkownik może wpisać tekst ze spacjami. Użyj `fixed` i `setprecision`, gdy wypisujesz kwoty, średnie albo wyniki wymagające określonej liczby miejsc po kropce.

## Kiedy wybrać coś innego?

Jeżeli potrzebujesz tylko jednego słowa bez spacji, `cin >> tekst` jest prostsze. Jeżeli potrzebujesz zaawansowanej walidacji wejścia, to będzie temat późniejszych lekcji.

## Ćwiczenia

1. Wczytaj imię i nazwisko w jednej zmiennej, a potem wypisz powitanie.
2. Wczytaj nazwę produktu i cenę, a potem wypisz cenę z dwoma miejscami po kropce.
3. Wypisz wartość logiczną raz normalnie, a raz z `boolalpha`.

<details>
<summary>Pokaż wskazówkę</summary>

Do tekstu ze spacjami użyj `getline(cin >> ws, nazwa)`. Do ceny dodaj `fixed << setprecision(2)` przed wypisaniem.

</details>

<details>
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main()
{
    string imieINazwisko;
    double cena = 0.0;

    cout << "Podaj imie i nazwisko: ";
    getline(cin >> ws, imieINazwisko);

    cout << "Podaj cene: ";
    cin >> cena;

    cout << "Witaj, " << imieINazwisko << "\n";
    cout << fixed << setprecision(2);
    cout << "Cena: " << cena << " zl\n";
    cout << boolalpha << "Czy cena jest zapisana: " << true << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Użycie `cin >> tekst` do tekstu ze spacjami.
- Zapomnienie `#include <string>`.
- Zapomnienie `#include <iomanip>`.
- Pominięcie `ws` po wcześniejszym wczytywaniu przez `cin >>`.
- Mylenie formatowania wyniku z konwersją typu.

## Podsumowanie

`getline` wczytuje całą linię tekstu. `cin >> ws` pomaga uniknąć problemu pozostającego znaku nowej linii. `<iomanip>` pozwala prosto formatować liczby i wartości logiczne.
