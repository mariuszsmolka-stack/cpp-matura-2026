---
layout: default
title: Porównanie i wybór pętli
---

# Porównanie i wybór pętli

## Cel lekcji

Nauczysz się wybierać pętlę pasującą do problemu.

## Krótkie wprowadzenie do problemu

`while`, `do-while` i `for` realizują ten sam pomysł: powtarzanie instrukcji. Różnią się tym, gdzie najlepiej pasują i jak czytelnie zapisują sterowanie.

## Wyjaśnienie idei

Nie ma pętli zawsze najlepszej. Wybieramy zapis najbardziej czytelny dla problemu. `while` pasuje do nieznanej liczby powtórzeń, `do-while` do sytuacji, gdy ciało musi wykonać się co najmniej raz, a `for` do znanej liczby powtórzeń.

## Składnia

| Pętla | Typowy kontekst |
|---|---|
| `while` | liczba powtórzeń nie jest z góry znana |
| `do-while` | ciało musi wykonać się co najmniej raz |
| `for` | liczba powtórzeń jest znana albo sterujemy licznikiem |

## Przykład 1 - ten sam problem przez while

```cpp
#include <iostream>

using namespace std;

int main()
{
    int i = 1;

    while (i <= 3)
    {
        cout << i << "\n";
        i++;
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
1
2
3
```

</details>

## Przykład 2 - ten sam problem przez for

```cpp
#include <iostream>

using namespace std;

int main()
{
    for (int i = 1; i <= 3; i++)
    {
        cout << i << "\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
1
2
3
```

</details>

## Omówienie programu krok po kroku

Oba przykłady wypisują to samo. Wersja `for` jest krótsza, bo inicjalizacja, warunek i zmiana licznika są w jednym miejscu. Wersja `while` jest dobra, gdy zakończenie zależy od danych, a nie od prostego licznika.

## Kiedy tego użyć?

Użyj tej lekcji jako checklisty przy wyborze pętli. Najważniejszy jest kontekst i czytelność.

## Kiedy wybrać inną pętlę?

Każdą pętlę często da się zastąpić inną, ale nie zawsze będzie to czytelne.

## Ćwiczenia

### 1. Wybór pętli do zakresu

Wypisz liczby od `1` do `5`. Wybierz pętlę najbardziej czytelną dla znanej liczby powtórzeń.

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 1</summary>

```text
1
2
3
4
5
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Dla znanego zakresu naturalna jest pętla `for`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    for (int i = 1; i <= 5; i++)
    {
        cout << i << "\n";
    }

    return 0;
}
```

</details>

### 2. Wybór pętli do wartownika

Wczytuj liczby do podania `0`. Wypisz sumę liczb różną od zera.

Dane wejściowe:

```text
3
4
0
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 2</summary>

```text
Suma: 7
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Liczba powtórzeń nie jest znana, więc pasuje `while`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int liczba;
    int suma = 0;

    cin >> liczba;
    while (liczba != 0)
    {
        suma += liczba;
        cin >> liczba;
    }

    cout << "Suma: " << suma << "\n";

    return 0;
}
```

</details>

### 3. Wybór pętli do menu

Wczytuj wybór użytkownika co najmniej raz i zakończ po `0`.

Dane wejściowe:

```text
1
0
```

<details markdown="1">
<summary>Pokaż oczekiwany wynik ćwiczenia 3</summary>

```text
Wybrano start
Koniec
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Ciało ma wykonać się co najmniej raz, więc pasuje `do-while`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int wybor;

    do
    {
        cin >> wybor;
        if (wybor == 1)
        {
            cout << "Wybrano start\n";
        }
        else if (wybor == 0)
        {
            cout << "Koniec\n";
        }
    }
    while (wybor != 0);

    return 0;
}
```

</details>

## Typowe błędy

- Wybieranie pętli dlatego, że wydaje się zawsze lepsza.
- Użycie `do-while`, gdy ciało nie powinno wykonać się ani razu.
- Użycie `for` z bardzo skomplikowanym warunkiem.
- Ignorowanie czytelności.

## Podsumowanie

Pętle mają wspólny mechanizm powtarzania. Wybór pętli zależy od tego, co jest najczytelniejsze w danym problemie.
