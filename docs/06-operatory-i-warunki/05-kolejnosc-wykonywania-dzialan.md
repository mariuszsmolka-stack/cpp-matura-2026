---
layout: default
title: Kolejność wykonywania działań
---

# Kolejność wykonywania działań

## Cel lekcji

Zrozumiesz priorytet operatorów i rolę nawiasów.

## Krótkie wprowadzenie

Komputer wykonuje wyrażenia według określonych zasad. Jeśli zapis jest nieczytelny, uczeń i autor kodu mogą łatwo pomylić wynik.

## Wyjaśnienie idei

Najpierw liczą się nawiasy, potem między innymi `!`, mnożenie, dzielenie i `%`, dodawanie i odejmowanie, porównania, `&&`, `||`, a na końcu przypisanie. Nie trzeba znać całej tabeli na pamięć. Gdy masz wątpliwość, użyj nawiasów.

## Składnia

```cpp
int wynikA = 2 + 3 * 4;
int wynikB = (2 + 3) * 4;
```

## Pełny przykład programu

```cpp
#include <iostream>

using namespace std;

int main()
{
    int wynikA = 2 + 3 * 4;
    int wynikB = (2 + 3) * 4;
    bool warunekA = 5 + 3 > 7 && 2 < 4;
    bool warunekB = (5 + 3 > 7) && (2 < 4);
    bool warunekC = !(3 > 5) || 10 == 2 * 5;

    cout << "Wynik A: " << wynikA << "\n";
    cout << "Wynik B: " << wynikB << "\n";
    cout << boolalpha;
    cout << "Warunek A: " << warunekA << "\n";
    cout << "Warunek B: " << warunekB << "\n";
    cout << "Warunek C: " << warunekC << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Wynik A: 14
Wynik B: 20
Warunek A: true
Warunek B: true
Warunek C: true
```

</details>

## Omówienie programu krok po kroku

`2 + 3 * 4` daje `14`, bo mnożenie jest wcześniej. `(2 + 3) * 4` daje `20`, bo nawias zmienia kolejność. Warunek z nawiasami jest czytelniejszy, nawet jeśli wynik jest taki sam.

## Kiedy tego użyć?

Używaj nawiasów, gdy w wyrażeniu jest kilka operatorów.

## Kiedy wybrać coś innego?

Jeżeli wyrażenie nadal jest trudne, rozbij je na kilka zmiennych pomocniczych.

## Ćwiczenia

### 1. Wynik bez nawiasów

Oblicz `10 - 2 * 3`.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 1</summary>

```text
Wynik: 4
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Mnożenie wykonuje się przed odejmowaniem.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int wynik = 10 - 2 * 3;

    cout << "Wynik: " << wynik << "\n";

    return 0;
}
```

</details>

### 2. Wynik z nawiasami

Oblicz `(10 - 2) * 3`.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 2</summary>

```text
Wynik: 24
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Nawias wymusza wcześniejsze odejmowanie.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int wynik = (10 - 2) * 3;

    cout << "Wynik: " << wynik << "\n";

    return 0;
}
```

</details>

### 3. Czytelny warunek

Dla `liczba = 15` sprawdź, czy jest większa od `10` i mniejsza od `20`.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 3</summary>

```text
Wynik: true
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Zapisz każde porównanie w nawiasie.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczba = 15;
    bool wynik = (liczba > 10) && (liczba < 20);

    cout << boolalpha;
    cout << "Wynik: " << wynik << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Zakładanie, że wszystko wykonuje się od lewej do prawej.
- Brak nawiasów w długim warunku.
- Mylenie priorytetu `&&` i `||`.
- Oszczędzanie nawiasów kosztem czytelności.

## Podsumowanie

Priorytet operatorów ustala kolejność działań. Nawiasy pokazują intencję autora i często są najlepszym wyborem.
