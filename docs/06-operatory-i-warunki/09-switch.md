---
layout: default
title: Instrukcja switch
---

# Instrukcja switch

## Cel lekcji

Nauczysz się używać `switch` do wyboru jednej z wielu stałych wartości.

## Krótkie wprowadzenie

Czasem użytkownik wybiera jedną opcję z menu. Mamy jedną zmienną i kilka konkretnych wartości, na przykład `1`, `2`, `3` albo `0`.

## Wyjaśnienie idei

`switch` porównuje jedną wartość z kolejnymi `case`. `break` kończy dany przypadek. `default` obsługuje wartości niepasujące do żadnego `case`. `switch` działa dla `int` i `char`, ale nie obsługuje bezpośrednio `string`.

## Składnia

```cpp
switch (wybor)
{
    case 1:
        cout << "Opcja 1\n";
        break;
    default:
        cout << "Nieznana opcja\n";
        break;
}
```

## Pełny przykład programu

```cpp
#include <iostream>

using namespace std;

int main()
{
    int wybor;
    int a = 8;
    int b = 3;

    cout << "1 - Dodawanie\n";
    cout << "2 - Odejmowanie\n";
    cout << "3 - Mnozenie\n";
    cout << "0 - Koniec\n";
    cout << "Wybierz opcje: ";
    cin >> wybor;

    switch (wybor)
    {
        case 1:
            cout << "Wynik: " << a + b << "\n";
            break;
        case 2:
            cout << "Wynik: " << a - b << "\n";
            break;
        case 3:
            cout << "Wynik: " << a * b << "\n";
            break;
        case 0:
            cout << "Koniec programu.\n";
            break;
        default:
            cout << "Nieznana opcja.\n";
            break;
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
1 - Dodawanie
2 - Odejmowanie
3 - Mnozenie
0 - Koniec
Wybierz opcje: Wynik: 11
```

</details>

## Omówienie programu krok po kroku

Program wypisuje menu, wczytuje jedną liczbę i sprawdza ją w `switch`. Każdy `case` kończy się `break`. `default` działa dla nieznanej opcji.

## Kiedy tego użyć?

Używaj `switch`, gdy jedna zmienna jest porównywana z konkretnymi stałymi wartościami.

## Kiedy wybrać coś innego?

`if-else` jest lepsze dla przedziałów i warunków złożonych, na przykład `punkty >= 50`.

## Ćwiczenia

### 1. Dzień tygodnia

Wczytaj numer od `1` do `3` i wypisz nazwę dnia.

Dane wejściowe:

```text
2
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 1</summary>

```text
Wtorek
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Użyj `switch` na zmiennej typu `int`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int dzien;

    cin >> dzien;

    switch (dzien)
    {
        case 1:
            cout << "Poniedzialek\n";
            break;
        case 2:
            cout << "Wtorek\n";
            break;
        case 3:
            cout << "Sroda\n";
            break;
        default:
            cout << "Nieznany dzien\n";
            break;
    }

    return 0;
}
```

</details>

### 2. Ocena literowa

Wczytaj znak oceny. Dla `A` wypisz `Bardzo dobrze`, dla `B` wypisz `Dobrze`, dla innych znaków `Inna ocena`.

Dane wejściowe:

```text
A
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 2</summary>

```text
Bardzo dobrze
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Zmienna powinna mieć typ `char`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    char ocena;

    cin >> ocena;

    switch (ocena)
    {
        case 'A':
            cout << "Bardzo dobrze\n";
            break;
        case 'B':
            cout << "Dobrze\n";
            break;
        default:
            cout << "Inna ocena\n";
            break;
    }

    return 0;
}
```

</details>

### 3. Proste menu

Wczytaj wybór: `1` - start, `2` - ustawienia, `0` - koniec.

Dane wejściowe:

```text
0
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 3</summary>

```text
Koniec
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Każdy `case` zakończ przez `break`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int wybor;

    cin >> wybor;

    switch (wybor)
    {
        case 1:
            cout << "Start\n";
            break;
        case 2:
            cout << "Ustawienia\n";
            break;
        case 0:
            cout << "Koniec\n";
            break;
        default:
            cout << "Nieznana opcja\n";
            break;
    }

    return 0;
}
```

</details>

## Typowe błędy

- Brak `break`.
- Brak `default`.
- Próba użycia `switch` bezpośrednio dla `string`.
- Używanie `switch` do przedziałów.
- Pisanie `case wybor == 1:` zamiast `case 1:`.

## Podsumowanie

`switch` wybiera działanie na podstawie jednej wartości. Dobrze pasuje do prostych menu i stałych opcji.
