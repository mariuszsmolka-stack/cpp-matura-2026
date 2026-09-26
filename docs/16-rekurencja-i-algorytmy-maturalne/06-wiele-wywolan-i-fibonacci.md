---
layout: default
title: Wiele wywołań i Fibonacci
---

# Wiele wywołań i Fibonacci

## Krótkie przedstawienie problemu

Chcemy zobaczyć funkcję, która wykonuje więcej niż jedno wywołanie rekurencyjne.

## Proste wyjaśnienie idei

Zamiast jednej linii wywołań powstaje drzewo wywołań.

## Dokładne wyjaśnienie techniczne

Dla `fib(n)` potrzebne są dwa wyniki: `fib(n - 1)` i `fib(n - 2)`.

## Przypadek podstawowy

Przypadki podstawowe to `fib(0) = 0` i `fib(1) = 1`.

## Krok rekurencyjny

Dla większego `n` funkcja wywołuje dwa mniejsze problemy.

## W jaki sposób problem się zmniejsza?

W każdym poprawnym przykładzie zmienia się argument funkcji albo zakres danych. Nowe wywołanie dostaje mniejszy problem, więc może dojść do przypadku podstawowego.

## Ręczne prześledzenie niewielkiego przykładu

Dla `fib(4)` pojawia się `fib(3)`, `fib(2)`, `fib(1)` i `fib(0)`.

## Drzewo wywołań dla `fib(4)`

```mermaid
flowchart TD
    A["fib(4)"] --> B["fib(3)"]
    A --> C["fib(2)"]
    B --> D["fib(2)"]
    B --> E["fib(1)"]
    C --> F["fib(1)"]
    C --> G["fib(0)"]
    D --> H["fib(1)"]
    D --> I["fib(0)"]
```


## Pełny program C++

```cpp
#include <iostream>

using namespace std;

int fib(int n)
{
    if (n == 0)
    {
        return 0;
    }

    if (n == 1)
    {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

int main()
{
    cout << fib(6) << "\n";
    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
brak
```

Wynik:

```text
8
```

</details>

## Omówienie programu krok po kroku

Rekurencyjna definicja ciągu Fibonacciego jest bardzo czytelna, ale jej prosta implementacja wielokrotnie oblicza te same wartości. Nie należy używac jej dla dużych argumentow.

## Kiedy rekurencja się zakończy?

Rekurencja zakończy się wtedy, gdy kolejne wywołania doprowadzą do przypadku podstawowego. Jeżeli argument nie zbliża się do końca, funkcja może wywoływać się bez końca.

## Kiedy lepsza będzie pętla?

Pętla będzie lepsza, gdy zadanie polega na prostym przejściu po kolejnych wartościach i rekurencja nie ułatwia myślenia. Pętla zwykle zużywa mniej pamięci i jest bezpieczniejsza dla bardzo dużych danych.

## Typowe błędy

- Brak przypadku podstawowego.
- Przypadek podstawowy, którego nie da się osiągnąć.
- Argument rosnący zamiast zbliżającego się do końca.
- Pominięcie `return` w funkcji zwracającej wartość.
- Pomylenie instrukcji wykonywanych podczas schodzenia z instrukcjami wykonywanymi podczas powrotu.
- Użycie rekurencji tam, gdzie zwykła pętla jest prostsza.

## Ćwiczenia

### Ćwiczenie 1 - przewidzenie wyniku

Dla funkcji `fib` pokazanej w tej lekcji ustal wynik wywołania `fib(4)`. Zapisz odpowiedź jako wartość zwracaną albo dokładny tekst wypisany przez program.

<details markdown="1">
<summary>Wskazówka</summary>

Najpierw znajdź przypadek podstawowy `n == 0 albo n == 1`, a potem rozpisz kolejne wartości argumentu `n`.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Wywołanie `fib(4)` daje wynik:

```text
3
```

</details>

### Ćwiczenie 2 - rozpisanie wywołań

Zapisz kolejno argumenty wszystkich wywołań rekurencyjnych funkcji `fib` dla wywołania `fib(4)`. Przy każdym wywołaniu dopisz, czy funkcja schodzi głębiej, czy osiąga przypadek podstawowy.

<details markdown="1">
<summary>Wskazówka</summary>

Zacznij od pierwszego wywołania. Potem zapisuj tylko te argumenty, które pojawiają się w kolejnych wywołaniach tej samej funkcji.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Poprawna odpowiedź powinna pokazywać, że każde kolejne wywołanie zbliża funkcję do przypadku podstawowego `n == 0 albo n == 1`. Ostatni wiersz opisu to wywołanie, które już nie uruchamia kolejnej rekurencji.

</details>

### Ćwiczenie 3 - przypadek podstawowy

Wskaż w funkcji `fib` przypadek podstawowy. Napisz jednym zdaniem, dlaczego bez tego warunku rekurencja nie mogłaby się poprawnie zakończyć.

<details markdown="1">
<summary>Wskazówka</summary>

Szukaj instrukcji `if`, po której funkcja kończy pracę bez kolejnego wywołania samej siebie.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Przypadek podstawowy to warunek `n == 0 albo n == 1`. Po jego spełnieniu funkcja nie wywołuje już samej siebie, więc rekurencja zaczyna się kończyć.

</details>

### Ćwiczenie 4 - błąd w kroku rekurencyjnym

Wyjaśnij, co mogłoby się stać, gdyby w funkcji `fib` krok rekurencyjny nie zmieniał argumentu `n` w stronę przypadku podstawowego.

<details markdown="1">
<summary>Wskazówka</summary>

Porównaj pierwsze wywołanie z następnym. Sprawdź, czy problem staje się mniejszy albo prostszy.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Jeżeli argument nie zbliża się do przypadku podstawowego, funkcja może wywoływać samą siebie bez końca. Program zużywa wtedy coraz więcej pamięci stosu i może zakończyć się błędem.

</details>

### Ćwiczenie 5 - krótki program

Napisz krótki program testujący funkcję `fib` dla wywołania `fib(4)`. Program ma wypisać wynik i działać w standardzie C++23.

<details markdown="1">
<summary>Wskazówka</summary>

Zostaw przypadek podstawowy i krok rekurencyjny. W funkcji `main` wywołaj funkcję z podanymi argumentami.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

```cpp
#include <iostream>

using namespace std;

int fib(int n)
{
    if (n == 0)
    {
        return 0;
    }

    if (n == 1)
    {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

int main()
{
    cout << fib(4) << "\n";
    return 0;
}
```

</details>
