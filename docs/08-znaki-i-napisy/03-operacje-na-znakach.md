---
layout: default
title: Operacje na znakach
---

# Operacje na znakach

## Cel lekcji

Nauczysz się sprawdzać rodzaj znaku oraz zamieniać małe litery na wielkie i wielkie na małe.

## Krótkie wprowadzenie do problemu

Program często musi odpowiedzieć na pytanie: czy ten znak jest cyfrą, małą literą albo wielką literą? Możemy to zrobić przez porównanie znaku z początkiem i końcem zakresu.

## Wyjaśnienie idei

Znaki w podstawowym ASCII są ułożone w kolejności. Cyfry leżą od `'0'` do `'9'`, wielkie litery od `'A'` do `'Z'`, a małe litery od `'a'` do `'z'`.

Jeżeli znak znajduje się między początkiem i końcem zakresu, należy do tego zakresu.

## Składnia

```cpp
if ((znak >= '0') && (znak <= '9'))
{
    cout << "To jest cyfra\n";
}
```

```cpp
if ((znak >= 'a') && (znak <= 'z'))
{
    cout << "To jest mala litera\n";
}
```

```cpp
char wielkaLitera = (char)(malaLitera - ('a' - 'A'));
```

## Przykład 1 - sprawdzanie rodzaju znaku

```cpp
#include <iostream>

using namespace std;

int main()
{
    char znak;

    cout << "Podaj znak: ";
    cin >> znak;

    if ((znak >= '0') && (znak <= '9'))
    {
        cout << "To jest cyfra.\n";
    }
    else if ((znak >= 'a') && (znak <= 'z'))
    {
        cout << "To jest mala litera.\n";
    }
    else if ((znak >= 'A') && (znak <= 'Z'))
    {
        cout << "To jest wielka litera.\n";
    }
    else
    {
        cout << "To jest inny znak.\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
g
```

Wynik:

```text
Podaj znak: To jest mala litera.
```

</details>

## Przykład 2 - zamiana wielkości litery

```cpp
#include <iostream>

using namespace std;

int main()
{
    char malaLitera = 'd';
    char wielkaLitera = (char)(malaLitera - ('a' - 'A'));

    char drugaWielka = 'K';
    char drugaMala = (char)(drugaWielka + ('a' - 'A'));

    cout << malaLitera << " => " << wielkaLitera << "\n";
    cout << drugaWielka << " => " << drugaMala << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
d => D
K => k
```

</details>

## Omówienie najważniejszego przykładu krok po kroku

Wyrażenie `'a' - 'A'` oblicza różnicę kodów między małą i wielką literą. W typowym ASCII ta różnica wynosi `32`, ale nie trzeba wpisywać tej liczby na sztywno. Program może ją obliczyć.

Aby zamienić małą literę na wielką, odejmujemy tę różnicę. Aby zamienić wielką literę na małą, dodajemy tę różnicę.

Można krótko wspomnieć o gotowych narzędziach z `<cctype>`, takich jak `isdigit`, `isalpha`, `tolower` i `toupper`. W tej lekcji główne przykłady pokazują jednak zakresy i kody ASCII, bo to wyjaśnia mechanizm.

## Dlaczego polskie litery wymagają ostrożności?

Zakresy `'a'`-`'z'` i `'A'`-`'Z'` dotyczą podstawowych liter alfabetu łacińskiego. ASCII nie zawiera polskich liter. Dlatego proste warunki z tej lekcji nie rozpoznają poprawnie liter takich jak `ą` albo `ł` zapisanych w UTF-8.

## Kiedy tego użyć?

Użyj porównań znaków, gdy chcesz szybko sprawdzić cyfrę, literę albo wykonać prostą zmianę wielkości liter w zakresie ASCII.

## Kiedy wybrać coś innego?

Jeżeli program ma obsługiwać wiele języków albo pełne Unicode, potrzebne są inne narzędzia. Gdy zależy Ci tylko na krótszym kodzie dla podstawowych znaków, możesz później użyć funkcji z `<cctype>`.

## Ćwiczenia

### 1. Czy znak jest cyfrą?

Wczytaj znak i wypisz, czy jest cyfrą.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Sprawdź warunek `(znak >= '0') && (znak <= '9')`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    char znak;

    cin >> znak;

    if ((znak >= '0') && (znak <= '9'))
    {
        cout << "Cyfra\n";
    }
    else
    {
        cout << "Nie cyfra\n";
    }

    return 0;
}
```

</details>

### 2. Mała litera na wielką

Wczytaj małą literę i wypisz odpowiadającą jej wielką literę.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Odejmij od litery różnicę `'a' - 'A'`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    char malaLitera;
    char wielkaLitera;

    cin >> malaLitera;

    wielkaLitera = (char)(malaLitera - ('a' - 'A'));

    cout << wielkaLitera << "\n";

    return 0;
}
```

</details>

### 3. Wielka litera na małą

Wczytaj wielką literę i wypisz odpowiadającą jej małą literę.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Dodaj do litery różnicę `'a' - 'A'`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    char wielkaLitera;
    char malaLitera;

    cin >> wielkaLitera;

    malaLitera = (char)(wielkaLitera + ('a' - 'A'));

    cout << malaLitera << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Sprawdzanie tylko jednego końca zakresu.
- Mylenie małych i wielkich liter w warunku.
- Wpisywanie liczby `32` bez rozumienia, skąd się bierze.
- Zakładanie, że proste zakresy ASCII obsłużą polskie litery.
- Użycie `=` zamiast `==` przy porównywaniu.

## Podsumowanie

Znaki można porównywać tak jak liczby. Dzięki temu można sprawdzić zakres i wykonywać proste zmiany na literach.