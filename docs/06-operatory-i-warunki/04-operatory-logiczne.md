---
layout: default
title: Operatory logiczne
---

# Operatory logiczne

## Cel lekcji

Nauczysz się łączyć warunki operatorami `&&`, `||` i `!`.

## Krótkie wprowadzenie

Czasem jedno porównanie nie wystarcza. Liczba ma być w przedziale, uczeń ma spełniać dwa wymagania, a dostęp może być możliwy po spełnieniu jednego z dwóch warunków.

## Wyjaśnienie idei

`&&` oznacza AND - wszystkie wymagania muszą być spełnione. `||` oznacza OR - wystarczy co najmniej jedno wymaganie. `!` oznacza NOT - odwraca wartość logiczną. Przy `&&` drugi warunek może nie zostać sprawdzony, gdy pierwszy jest fałszywy. Przy `||` drugi warunek może nie zostać sprawdzony, gdy pierwszy jest prawdziwy.

## Składnia

```cpp
bool wPrzedziale = (liczba >= 10) && (liczba <= 20);
bool dostep = maBilet || maZaproszenie;
bool brakDostepu = !dostep;
```

## Tabele prawdy

### Operator &&

| A | B | A && B |
|---|---|--------|
| false | false | false |
| false | true | false |
| true | false | false |
| true | true | true |

### Operator ||

| A | B | A || B |
|---|---|--------|
| false | false | false |
| false | true | true |
| true | false | true |
| true | true | true |

### Operator !

| A | !A |
|---|----|
| false | true |
| true | false |

## Pełny przykład programu

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczba = 15;
    int punkty = 70;
    bool maLegitymacje = true;
    bool maZaproszenie = false;

    bool liczbaWPrzedziale = (liczba >= 10) && (liczba <= 20);
    bool uczenSpelniaWymagania = (punkty >= 50) && maLegitymacje;
    bool dostepMozliwy = maLegitymacje || maZaproszenie;
    bool brakZaproszenia = !maZaproszenie;

    cout << boolalpha;
    cout << "Liczba w przedziale: " << liczbaWPrzedziale << "\n";
    cout << "Uczen spelnia wymagania: " << uczenSpelniaWymagania << "\n";
    cout << "Dostep mozliwy: " << dostepMozliwy << "\n";
    cout << "Brak zaproszenia: " << brakZaproszenia << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Liczba w przedziale: true
Uczen spelnia wymagania: true
Dostep mozliwy: true
Brak zaproszenia: true
```

</details>

## Omówienie programu krok po kroku

Pierwszy warunek sprawdza oba końce przedziału. Drugi wymaga punktów i legitymacji. Trzeci pozwala na jedną z dwóch możliwości. Czwarty odwraca wartość zmiennej.

## Kiedy tego użyć?

Używaj operatorów logicznych, gdy decyzja zależy od kilku prostych warunków.

## Kiedy wybrać coś innego?

Jeżeli warunek robi się długi, zapisz części w zmiennych typu `bool`.

## Ćwiczenia

### 1. Liczba w przedziale

Wczytaj liczbę i sprawdź, czy należy do przedziału od `10` do `20`.

Dane wejściowe:

```text
13
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 1</summary>

```text
W przedziale: true
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Połącz dwa porównania operatorem `&&`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczba;

    cin >> liczba;

    bool wPrzedziale = (liczba >= 10) && (liczba <= 20);

    cout << boolalpha;
    cout << "W przedziale: " << wPrzedziale << "\n";

    return 0;
}
```

</details>

### 2. Dwa wymagania

Ustaw `punkty = 65` i `pracaOddana = true`. Sprawdź, czy oba wymagania są spełnione.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 2</summary>

```text
Zaliczone: true
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Użyj operatora `&&`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int punkty = 65;
    bool pracaOddana = true;

    bool zaliczone = (punkty >= 50) && pracaOddana;

    cout << boolalpha;
    cout << "Zaliczone: " << zaliczone << "\n";

    return 0;
}
```

</details>

### 3. Jedna z dwóch możliwości

Ustaw `maBilet = false` i `maZaproszenie = true`. Sprawdź dostęp.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 3</summary>

```text
Dostep: true
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Użyj operatora `||`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    bool maBilet = false;
    bool maZaproszenie = true;

    bool dostep = maBilet || maZaproszenie;

    cout << boolalpha;
    cout << "Dostep: " << dostep << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Użycie `&` zamiast `&&`.
- Użycie `|` zamiast `||`.
- Brak nawiasów w długim warunku.
- Mylenie `&&` i `||`.

## Podsumowanie

Operatory logiczne łączą warunki. `&&` wymaga wszystkich części, `||` co najmniej jednej, a `!` odwraca wynik.
