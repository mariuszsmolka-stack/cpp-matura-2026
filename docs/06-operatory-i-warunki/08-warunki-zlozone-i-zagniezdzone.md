---
layout: default
title: Warunki złożone i zagnieżdżone
---

# Warunki złożone i zagnieżdżone

## Cel lekcji

Nauczysz się pisać warunki z `&&`, `||`, `!` oraz rozumieć zagnieżdżone instrukcje `if`.

## Krótkie wprowadzenie

Niektóre decyzje wymagają kilku pytań. Liczba ma być w przedziale, użytkownik ma spełniać dwa wymagania, a rok przestępny ma własne reguły.

## Wyjaśnienie idei

Warunek złożony łączy kilka porównań w jednym `if`. Zagnieżdżenie oznacza, że jeden `if` jest wewnątrz drugiego. Oba sposoby mogą być poprawne, ale wybieramy czytelniejszy.

## Składnia

```cpp
if ((liczba >= 10) && (liczba <= 20))
{
    cout << "W przedziale\n";
}

if (wiek >= 18)
{
    if (punkty >= 50)
    {
        cout << "Wymagania spelnione\n";
    }
}
```

## Rok przestępny

Rok jest przestępny, gdy:

```text
rok jest podzielny przez 400
LUB
rok jest podzielny przez 4 i jednocześnie nie jest podzielny przez 100
```

Czytelny zapis w C++:

```cpp
bool czyPrzestepny = (rok % 400 == 0) || ((rok % 4 == 0) && (rok % 100 != 0));
```

## Pełny przykład programu

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczba;
    int wiek;

    cout << "Podaj liczbe: ";
    cin >> liczba;
    cout << "Podaj wiek: ";
    cin >> wiek;

    if ((liczba >= 10) && (liczba <= 20))
    {
        cout << "Liczba jest w przedziale od 10 do 20.\n";
    }

    if (wiek >= 18)
    {
        if (liczba > 0)
        {
            cout << "Pelnoletni uzytkownik podal liczbe dodatnia.\n";
        }
    }

    if (!((liczba >= 10) && (liczba <= 20)))
    {
        cout << "Liczba jest poza przedzialem.\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Podaj liczbe: Podaj wiek: Liczba jest w przedziale od 10 do 20.
Pelnoletni uzytkownik podal liczbe dodatnia.
```

</details>

## Omówienie programu krok po kroku

Pierwszy warunek używa `&&`. Drugi fragment pokazuje zagnieżdżony `if`. Trzeci warunek używa `!`, aby odwrócić wynik warunku złożonego.

## Kiedy tego użyć?

Używaj warunków złożonych, gdy kilka prostych pytań opisuje jedną decyzję. Zagnieżdżenia używaj, gdy drugie pytanie ma sens dopiero po pierwszym.

## Kiedy wybrać coś innego?

Jeżeli zagnieżdżenia robią się głębokie, uprość warunek albo użyj zmiennych typu `bool`.

## Ćwiczenia

### 1. Przedział

Wczytaj liczbę i sprawdź, czy należy do przedziału od `1` do `100`.

Dane wejściowe:

```text
75
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 1</summary>

```text
Liczba jest w przedziale.
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Połącz dwa warunki operatorem `&&`.

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

    if ((liczba >= 1) && (liczba <= 100))
    {
        cout << "Liczba jest w przedziale.\n";
    }

    return 0;
}
```

</details>

### 2. Dwa wymagania

Wczytaj wiek i punkty. Wypisz komunikat, gdy wiek jest co najmniej `18` i punktów jest co najmniej `50`.

Dane wejściowe:

```text
19
60
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 2</summary>

```text
Wymagania spelnione.
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Użyj jednego warunku z `&&`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int wiek;
    int punkty;

    cin >> wiek;
    cin >> punkty;

    if ((wiek >= 18) && (punkty >= 50))
    {
        cout << "Wymagania spelnione.\n";
    }

    return 0;
}
```

</details>

### 3. Rok przestępny

Wczytaj rok i sprawdź, czy jest przestępny.

Dane wejściowe:

```text
2024
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 3</summary>

```text
Rok jest przestepny.
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Rok jest podzielny przez `400` lub podzielny przez `4` i niepodzielny przez `100`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int rok;

    cin >> rok;

    if ((rok % 400 == 0) || ((rok % 4 == 0) && (rok % 100 != 0)))
    {
        cout << "Rok jest przestepny.\n";
    }
    else
    {
        cout << "Rok nie jest przestepny.\n";
    }

    return 0;
}
```

</details>

## Typowe błędy

- Brak nawiasów w złożonym warunku.
- Mylenie `&&` i `||`.
- Zbyt głębokie zagnieżdżenia.
- Niepoprawny warunek roku przestępnego.

## Podsumowanie

Warunki złożone i zagnieżdżone rozwiązują podobne problemy. Najważniejsza jest czytelność i poprawna logika.
