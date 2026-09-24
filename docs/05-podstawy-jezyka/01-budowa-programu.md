---
layout: default
title: Budowa programu
---

# Budowa programu

## Cel lekcji

Zrozumiesz, z czego składa się najprostszy program w C++ i w jakiej kolejności komputer wykonuje instrukcje.

## Krótkie wprowadzenie do problemu

Program to zestaw dokładnych poleceń. Kod źródłowy to tekst zapisany przez programistę. Uruchomiony program to efekt kompilacji i wykonania tych poleceń przez komputer.

## Wyjaśnienie idei

Najprostszy program konsolowy ma punkt startu. W C++ jest nim funkcja `main`. Instrukcje zapisane między nawiasami klamrowymi wykonują się od góry do dołu.

Średnik kończy pojedynczą instrukcję. `return 0;` oznacza, że program zakończył się poprawnie.

## Składnia

```text
int main()
{
    instrukcja;
    return 0;
}
```

## Pełny przykład programu

```cpp
#include <iostream>

int main()
{
    std::cout << "Start programu\n";
    std::cout << "Ucze sie C++\n";
    std::cout << "Koniec programu\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Start programu
Ucze sie C++
Koniec programu
```

</details>

## Omówienie programu krok po kroku

`#include <iostream>` pozwala użyć wypisywania w konsoli.

`int main()` wyznacza początek programu.

Nawias `{` otwiera blok kodu.

Trzy instrukcje `std::cout` wykonują się po kolei.

`return 0;` kończy program poprawnie.

Nawias `}` zamyka blok funkcji `main`.

## Kiedy tego użyć?

Tej budowy używasz w każdym prostym programie konsolowym w Code::Blocks. Na początku kursu większość kodu będziesz pisać właśnie wewnątrz `main`.

## Kiedy wybrać coś innego?

W większych programach kod dzieli się na wiele funkcji i plików. Ten temat pojawi się później. W tej lekcji najważniejsze jest zrozumienie miejsca startu programu.

## Ćwiczenia

1. Napisz program wypisujący trzy linie: imię, klasę i szkołę.
2. Przewidź kolejność wypisania trzech komunikatów, a potem uruchom program.
3. Zmień kolejność instrukcji i sprawdź zmianę wyniku.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

W funkcji `main` wpisz trzy osobne instrukcje `std::cout`. Każda może kończyć się `\n`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 1</summary>

```cpp
#include <iostream>

int main()
{
    std::cout << "Jan Kowalski\n";
    std::cout << "Klasa 1A\n";
    std::cout << "Liceum\n";

    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Czytaj instrukcje od góry do dołu. Wynik pojawi się w tej samej kolejności.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 2</summary>

```cpp
#include <iostream>

int main()
{
    std::cout << "Pierwszy komunikat\n";
    std::cout << "Drugi komunikat\n";
    std::cout << "Trzeci komunikat\n";

    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Zamień miejscami dwie instrukcje `std::cout` i ponownie uruchom program.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 3</summary>

```cpp
#include <iostream>

int main()
{
    std::cout << "Trzeci komunikat\n";
    std::cout << "Pierwszy komunikat\n";
    std::cout << "Drugi komunikat\n";

    return 0;
}
```

</details>
## Typowe błędy

- Brak średnika po instrukcji.
- Brak jednego nawiasu klamrowego.
- Pisanie instrukcji poza `main`.
- Mylenie kodu źródłowego z wynikiem działania programu.

## Podsumowanie

Program w C++ ma punkt startu. Dla prostych programów jest nim `main`. Instrukcje wykonują się w zapisanej kolejności.
