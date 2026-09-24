---
layout: default
title: Wyświetlanie danych
---

# Wyświetlanie danych

## Cel lekcji

Nauczysz się wypisywać tekst, liczby i kilka elementów w jednej instrukcji za pomocą `std::cout`.

## Krótkie wprowadzenie do problemu

Program musi pokazać użytkownikowi komunikat, wynik obliczenia albo opis kolejnego kroku. W C++ do wypisywania danych w konsoli używamy `std::cout`.

## Wyjaśnienie idei

`std::cout` można wyobrazić sobie jako strumień prowadzący na ekran. Operator `<<` wysyła dane do tego strumienia.

`\n` przechodzi do nowej linii. `\t` wstawia tabulator. `\"` pozwala wypisać cudzysłów, a `\\` wypisuje ukośnik odwrotny.

`std::endl` też przechodzi do nowej linii i dodatkowo opróżnia strumień. Na początku zwykle wystarczy `\n`.

## Składnia

```cpp
std::cout << "Tekst";
std::cout << 123;
std::cout << "Wynik: " << 10 << "\n";
```

## Pełny przykład programu

```cpp
#include <iostream>

int main()
{
    std::cout << "Witaj w C++\n";
    std::cout << "Liczba: " << 2026 << "\n";
    std::cout << "Kolumna 1\tKolumna 2\n";
    std::cout << "Napis z cudzyslowem: \"C++\"\n";
    std::cout << "Sciezka: C:\\kurs\\cpp\n";

    return 0;
}
```

<details>
<summary>Pokaż wynik</summary>

```text
Witaj w C++
Liczba: 2026
Kolumna 1        Kolumna 2
Napis z cudzyslowem: "C++"
Sciezka: C:\kurs\cpp
```

</details>

## Omówienie programu krok po kroku

Pierwsza instrukcja wypisuje tekst.

Druga łączy tekst i liczbę.

Trzecia używa tabulatora.

Czwarta pokazuje cudzysłów wewnątrz napisu.

Piąta pokazuje znak `\`, który w kodzie trzeba zapisać jako `\\`.

## Kiedy tego użyć?

`std::cout` stosuj, gdy program ma pokazać użytkownikowi komunikat, wynik albo opis danych wejściowych.

## Kiedy wybrać coś innego?

Do wczytywania danych użyjesz `std::cin`. Do zapisu do pliku służą inne strumienie, które pojawią się później.

## Ćwiczenia

1. Wypisz swoje imię, klasę i trzy przedmioty w osobnych liniach.
2. Wypisz tekst `C++ jest "dokładny"`.
3. Wypisz działanie `5 + 3 = 8` w jednej instrukcji.

<details>
<summary>Pokaż wskazówkę</summary>

Możesz łączyć kilka elementów, dopisując kolejne operatory `<<`.

</details>

<details>
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>

int main()
{
    std::cout << "Imie: Jan\n";
    std::cout << "Klasa: 1A\n";
    std::cout << "Matematyka\nInformatyka\nFizyka\n";
    std::cout << "C++ jest \"dokladny\"\n";
    std::cout << "5 + 3 = " << 8 << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Użycie `>>` zamiast `<<`.
- Brak cudzysłowu wokół tekstu.
- Oczekiwanie, że `std::cout` sam doda nową linię.
- Zapisanie pojedynczego `\` w napisie zamiast `\\`.

## Podsumowanie

`std::cout` wypisuje dane w konsoli. Operator `<<` wysyła kolejne elementy do ekranu, a `\n` przechodzi do nowej linii.
