---
layout: default
title: Zadania maturalne z rekurencji
---

# Zadania maturalne z rekurencji

## Krótkie przedstawienie problemu

Chcemy ćwiczyć analizę rekurencji podobną do zadan maturalnych.

## Proste wyjaśnienie idei

Najpierw znajdujemy przypadek podstawowy, potem zmianę argumentu, a na końcu kolejność wykonywania instrukcji.

## Dokładne wyjaśnienie techniczne

W zadaniach analitycznych rozwiązaniem może byc tabela wywołań, rozwinięcie wzoru albo poprawiony fragment funkcji.

## Przypadek podstawowy

W programie modelowym przypadek podstawowy to `n == 0`.

## Krok rekurencyjny

Krok rekurencyjny zwraca `n + funkcja(n - 1)`.

## W jaki sposób problem się zmniejsza?

W każdym poprawnym przykładzie zmienia się argument funkcji albo zakres danych. Nowe wywołanie dostaje mniejszy problem, więc może dojść do przypadku podstawowego.

## Ręczne prześledzenie niewielkiego przykładu

Dla `funkcja(4)` otrzymujemy `4 + 3 + 2 + 1 + 0`.

## Zadania modelowe

1. Ustal wynik funkcji.
2. Ustal kolejność wypisywania.
3. Znajdz przypadek podstawowy.
4. Popraw błąd zatrzymania.
5. Zamień prosta rekurencje na petle.


## Pełny program C++

```cpp
#include <iostream>

using namespace std;

int funkcja(int n)
{
    if (n == 0)
    {
        return 0;
    }

    return n + funkcja(n - 1);
}

int main()
{
    cout << funkcja(4) << "\n";
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
10
```

</details>

## Omówienie programu krok po kroku

Program modelowy sumuje liczby od `1` do `n`. Podobne zadanie może pytac o wynik, liczbę wywołań, brakujący warunek albo maksymalna głębokość.

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

Dla funkcji `funkcja` pokazanej w tej lekcji ustal wynik wywołania `funkcja(4)`. Zapisz odpowiedź jako wartość zwracaną albo dokładny tekst wypisany przez program.

<details markdown="1">
<summary>Wskazówka</summary>

Najpierw znajdź przypadek podstawowy `n == 0`, a potem rozpisz kolejne wartości argumentu `n`.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Wywołanie `funkcja(4)` daje wynik:

```text
10
```

</details>

### Ćwiczenie 2 - rozpisanie wywołań

Zapisz kolejno argumenty wszystkich wywołań rekurencyjnych funkcji `funkcja` dla wywołania `funkcja(4)`. Przy każdym wywołaniu dopisz, czy funkcja schodzi głębiej, czy osiąga przypadek podstawowy.

<details markdown="1">
<summary>Wskazówka</summary>

Zacznij od pierwszego wywołania. Potem zapisuj tylko te argumenty, które pojawiają się w kolejnych wywołaniach tej samej funkcji.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Poprawna odpowiedź powinna pokazywać, że każde kolejne wywołanie zbliża funkcję do przypadku podstawowego `n == 0`. Ostatni wiersz opisu to wywołanie, które już nie uruchamia kolejnej rekurencji.

</details>

### Ćwiczenie 3 - przypadek podstawowy

Wskaż w funkcji `funkcja` przypadek podstawowy. Napisz jednym zdaniem, dlaczego bez tego warunku rekurencja nie mogłaby się poprawnie zakończyć.

<details markdown="1">
<summary>Wskazówka</summary>

Szukaj instrukcji `if`, po której funkcja kończy pracę bez kolejnego wywołania samej siebie.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Przypadek podstawowy to warunek `n == 0`. Po jego spełnieniu funkcja nie wywołuje już samej siebie, więc rekurencja zaczyna się kończyć.

</details>

### Ćwiczenie 4 - błąd w kroku rekurencyjnym

Wyjaśnij, co mogłoby się stać, gdyby w funkcji `funkcja` krok rekurencyjny nie zmieniał argumentu `n` w stronę przypadku podstawowego.

<details markdown="1">
<summary>Wskazówka</summary>

Porównaj pierwsze wywołanie z następnym. Sprawdź, czy problem staje się mniejszy albo prostszy.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Jeżeli argument nie zbliża się do przypadku podstawowego, funkcja może wywoływać samą siebie bez końca. Program zużywa wtedy coraz więcej pamięci stosu i może zakończyć się błędem.

</details>

### Ćwiczenie 5 - krótki program

Napisz krótki program testujący funkcję `funkcja` dla wywołania `funkcja(4)`. Program ma wypisać wynik i działać w standardzie C++23.

<details markdown="1">
<summary>Wskazówka</summary>

Zostaw przypadek podstawowy i krok rekurencyjny. W funkcji `main` wywołaj funkcję z podanymi argumentami.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

```cpp
#include <iostream>

using namespace std;

int funkcja(int n)
{
    if (n == 0)
    {
        return 0;
    }

    return n + funkcja(n - 1);
}

int main()
{
    cout << funkcja(4) << "\n";
    return 0;
}
```

</details>
