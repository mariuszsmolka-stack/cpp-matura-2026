---
layout: default
title: Operatory porównania
---

# Operatory porównania

## Cel lekcji

Nauczysz się porównywać wartości i zapisywać wynik w zmiennej typu `bool`.

## Krótkie wprowadzenie

Program często zadaje pytania: czy liczby są równe, czy wiek jest co najmniej 18, czy wynik jest większy od progu.

## Wyjaśnienie idei

Porównanie daje wynik typu `bool`: `true` albo `false`. Najważniejsza różnica to `=` => przypisanie, a `==` => porównanie.

## Składnia

```cpp
a == b;
a != b;
a < b;
a > b;
a <= b;
a >= b;
```

## Pełny przykład programu

```cpp
#include <iostream>

using namespace std;

int main()
{
    int pierwszaLiczba = 7;
    int drugaLiczba = 10;

    bool czyRowne = pierwszaLiczba == drugaLiczba;
    bool czyRozne = pierwszaLiczba != drugaLiczba;
    bool czyPierwszaMniejsza = pierwszaLiczba < drugaLiczba;
    bool czyCoNajmniejDziesiec = drugaLiczba >= 10;

    cout << boolalpha;
    cout << "Czy rowne: " << czyRowne << "\n";
    cout << "Czy rozne: " << czyRozne << "\n";
    cout << "Czy pierwsza mniejsza: " << czyPierwszaMniejsza << "\n";
    cout << "Czy druga co najmniej 10: " << czyCoNajmniejDziesiec << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Czy rowne: false
Czy rozne: true
Czy pierwsza mniejsza: true
Czy druga co najmniej 10: true
```

</details>

## Omówienie programu krok po kroku

Każde porównanie tworzy wartość logiczną. `boolalpha` wypisuje `true` i `false` zamiast `1` i `0`. Wyniki wcześniejszych obliczeń na `double` mogą czasami nie być zapisane idealnie dokładnie; szczegóły pojawią się później.

## Kiedy tego użyć?

Używaj operatorów porównania, gdy potrzebujesz odpowiedzi prawda/fałsz.

## Kiedy wybrać coś innego?

Jeżeli musisz połączyć kilka porównań, użyj operatorów logicznych.

## Ćwiczenia

### 1. Czy liczby są równe

Wczytaj dwie liczby i wypisz, czy są równe.

Dane wejściowe:

```text
5
5
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 1</summary>

```text
Czy rowne: true
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Użyj operatora `==`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int a;
    int b;

    cin >> a;
    cin >> b;

    cout << boolalpha;
    cout << "Czy rowne: " << (a == b) << "\n";

    return 0;
}
```

</details>

### 2. Pełnoletność jako bool

Wczytaj wiek i wypisz, czy jest co najmniej `18`.

Dane wejściowe:

```text
16
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 2</summary>

```text
Czy pelnoletni: false
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Użyj operatora `>=`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int wiek;

    cin >> wiek;

    cout << boolalpha;
    cout << "Czy pelnoletni: " << (wiek >= 18) << "\n";

    return 0;
}
```

</details>

### 3. Różne wartości

Wczytaj dwie liczby i wypisz, czy są różne.

Dane wejściowe:

```text
4
9
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 3</summary>

```text
Czy rozne: true
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Operator różności to `!=`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int a;
    int b;

    cin >> a;
    cin >> b;

    cout << boolalpha;
    cout << "Czy rozne: " << (a != b) << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Użycie `=` zamiast `==`.
- Zapomnienie `boolalpha`.
- Mylenie `<=` z `<`.
- Zbyt szybkie porównywanie wyników obliczeń na `double`.

## Podsumowanie

Operatory porównania zwracają `bool`. Rozróżnienie `=` i `==` jest jedną z najważniejszych zasad w C++.
