---
layout: default
title: Operatory przypisania, inkrementacja i dekrementacja
---

# Operatory przypisania, inkrementacja i dekrementacja

## Cel lekcji

Nauczysz się zmieniać istniejącą wartość zmiennej oraz używać `+=`, `-=`, `*=`, `/=`, `%=`, `++` i `--`.

## Krótkie wprowadzenie

Zmienna może zmieniać wartość. Punkty mogą wzrosnąć, licznik może zwiększyć się o jeden, a zapas może się zmniejszyć.

## Wyjaśnienie idei

Znak `=` oznacza przypisanie, a nie równość matematyczną. Zapis `punkty = punkty + 5;` można skrócić do `punkty += 5;`. Zapis `licznik = licznik + 1;` można skrócić do `licznik++;`.

## Składnia

```cpp
punkty = punkty + 5;
punkty += 5;
licznik = licznik + 1;
licznik++;
++licznik;
licznik--;
--licznik;
```

W samodzielnej instrukcji `licznik++;` i `++licznik;` zwiększają wartość o jeden. W tym kursie używamy `++` i `--` jako osobnych instrukcji, nie w złożonych wyrażeniach.

## Pełny przykład programu

```cpp
#include <iostream>

using namespace std;

int main()
{
    int punkty = 10;
    int licznik = 0;
    int zapas = 5;

    punkty += 5;
    punkty -= 2;
    punkty *= 3;
    punkty /= 2;
    punkty %= 10;
    licznik++;
    ++licznik;
    zapas--;
    --zapas;

    cout << "Punkty: " << punkty << "\n";
    cout << "Licznik: " << licznik << "\n";
    cout << "Zapas: " << zapas << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Punkty: 9
Licznik: 2
Zapas: 3
```

</details>

## Omówienie programu krok po kroku

Każdy operator skrócony bierze starą wartość zmiennej, wykonuje działanie i zapisuje wynik z powrotem do tej samej zmiennej. `licznik++` i `++licznik` jako osobne instrukcje robią tu to samo.

## Kiedy tego użyć?

Używaj tych operatorów, gdy zmieniasz obecną wartość zmiennej.

## Kiedy wybrać coś innego?

Jeżeli skrót utrudnia czytanie, zapisz działanie pełną postacią.

## Ćwiczenia

### 1. Punkty gracza

Zmienna `punkty` ma wartość `20`. Zwiększ ją o `7` za pomocą `+=`.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 1</summary>

```text
Punkty: 27
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Użyj `punkty += 7;`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int punkty = 20;

    punkty += 7;

    cout << "Punkty: " << punkty << "\n";

    return 0;
}
```

</details>

### 2. Licznik prób

Zwiększ licznik dwa razy za pomocą `++`.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 2</summary>

```text
Licznik: 2
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Użyj dwóch osobnych instrukcji `licznik++;`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int licznik = 0;

    licznik++;
    licznik++;

    cout << "Licznik: " << licznik << "\n";

    return 0;
}
```

</details>

### 3. Ostatnia cyfra przez `%=`

Zmienna `liczba` ma wartość `38`. Użyj `%=`, aby zostawić ostatnią cyfrę.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 3</summary>

```text
Ostatnia cyfra: 8
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Użyj dzielnika `10`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczba = 38;

    liczba %= 10;

    cout << "Ostatnia cyfra: " << liczba << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Mylenie `=` z porównaniem.
- Pisanie `=+` zamiast `+=`.
- Używanie kilku `++` w jednym złożonym wyrażeniu.
- Stosowanie skrótów bez rozumienia pełnego zapisu.

## Podsumowanie

Operatory przypisania skracają zmianę wartości zmiennej. Inkrementację i dekrementację stosujemy jako osobne, czytelne instrukcje.
