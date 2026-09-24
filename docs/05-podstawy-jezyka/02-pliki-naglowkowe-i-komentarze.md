---
layout: default
title: Pliki nagłówkowe i komentarze
---

# Pliki nagłówkowe i komentarze

## Cel lekcji

Poznasz dyrektywę `#include`, nagłówek `<iostream>` oraz komentarze `//` i `/* ... */`.

## Krótkie wprowadzenie do problemu

Program czasem potrzebuje gotowych narzędzi. Jeżeli chcesz użyć `std::cout`, kompilator musi znać jego opis.

Komentarz ma inny cel. Pomaga człowiekowi czytać kod i jest pomijany podczas kompilacji.

## Wyjaśnienie idei

Plik nagłówkowy zawiera informacje o gotowych elementach biblioteki. `#include <iostream>` dołącza narzędzia do wejścia i wyjścia.

Nawiasy `< >` oznaczają nagłówek z biblioteki standardowej.

Komentarz jednowierszowy zaczyna się od `//`. Komentarz wielowierszowy jest zapisany między `/*` i `*/`.

## Składnia

```cpp
#include <iostream>

// komentarz jednowierszowy
/* komentarz wielowierszowy */
```

## Pełny przykład programu

```cpp
#include <iostream>

int main()
{
    // Wypisujemy krótki komunikat dla użytkownika.
    std::cout << "Program pokazuje komentarze\n";

    /*
       Ten komentarz opisuje większy fragment programu.
       Kompilator go pomija.
    */
    std::cout << "Komentarze nie pojawiaja sie na ekranie\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Program pokazuje komentarze
Komentarze nie pojawiaja sie na ekranie
```

</details>

## Omówienie programu krok po kroku

`#include <iostream>` daje dostęp do `std::cout`.

Komentarz po `//` trwa do końca linii.

Komentarz między `/*` i `*/` może mieć kilka linii.

Program wykonuje instrukcje `std::cout`, ale nie wykonuje komentarzy.

## Błąd bez nagłówka

Jeżeli usuniesz `#include <iostream>`, kompilator może nie rozpoznać `std::cout`. To tak, jakbyś próbował użyć narzędzia bez wcześniejszego pokazania, skąd ono pochodzi.

## Kiedy tego użyć?

`#include <iostream>` dodaj, gdy program wypisuje albo wczytuje dane z konsoli. Komentarz dodaj wtedy, gdy wyjaśnia zamiar albo sens fragmentu kodu.

## Kiedy wybrać coś innego?

Nie omawiamy jeszcze własnych plików `.h`. Własne nagłówki przydają się w większych programach dzielonych na kilka plików.

## Ćwiczenia

1. Napisz program z dwoma komunikatami i jednym komentarzem opisującym cel programu.
2. Dodaj komentarz wielowierszowy z krótkim opisem autora i tematu.
3. Usuń na chwilę `#include <iostream>`, skompiluj program, a potem przywróć nagłówek.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Dodaj `#include <iostream>`, a komentarz zapisz nad instrukcjami wypisywania.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 1</summary>

```cpp
#include <iostream>

int main()
{
    // Program wypisuje podstawowe informacje o lekcji.
    std::cout << "Ucze sie naglowkow\n";
    std::cout << "Komentarze sa dla czlowieka\n";

    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Komentarz wielowierszowy zacznij od `/*` i zakończ przez `*/`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 2</summary>

```cpp
#include <iostream>

int main()
{
    /*
       Autor: uczen
       Temat: komentarze w C++
    */
    std::cout << "Program z komentarzem wielowierszowym\n";

    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Po teście błędu przywróć nagłówek. Poprawny program musi znów zawierać `#include <iostream>`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie do ćwiczenia 3</summary>

```cpp
#include <iostream>

int main()
{
    std::cout << "Naglowek iostream jest potrzebny do cout\n";

    return 0;
}
```

</details>
## Typowe błędy

- Brak `#` w `#include`.
- Brak `<iostream>` przy użyciu `std::cout`.
- Komentowanie każdej linii bez potrzeby.
- Zapomnienie zamknięcia komentarza `/* ... */`.

## Podsumowanie

Nagłówek daje dostęp do potrzebnych narzędzi. Komentarz pomaga człowiekowi, ale nie wpływa na działanie programu.
