---
layout: default
title: Zwracanie wyniku
---

# Zwracanie wyniku

## Krótkie przedstawienie problemu

Chcemy pisać funkcje rekurencyjne, które zwracają wartość.

## Proste wyjaśnienie idei

Bieżące wywołanie łączy swój fragment wyniku z wynikiem mniejszego problemu.

## Dokładne wyjaśnienie techniczne

Funkcja zwracająca wartość musi mieć `return` w przypadku podstawowym i w kroku rekurencyjnym.

## Przypadek podstawowy

`suma(1)` zwraca `1`, `silnia(0)` zwraca `1`, a `potega(..., 0)` zwraca `1`.

## Krok rekurencyjny

Krok rekurencyjny dodaje albo mnoży wynik bieżącego kroku z wynikiem mniejszego problemu.

## W jaki sposób problem się zmniejsza?

W każdym poprawnym przykładzie zmienia się argument funkcji albo zakres danych. Nowe wywołanie dostaje mniejszy problem, więc może dojść do przypadku podstawowego.

## Ręczne prześledzenie niewielkiego przykładu

`suma(4) = 4 + suma(3) = 4 + 3 + suma(2) = 4 + 3 + 2 + suma(1) = 10`.



## Pełny program C++

```cpp
#include <iostream>

using namespace std;

int suma(int liczba)
{
    if (liczba == 1)
    {
        return 1;
    }

    return liczba + suma(liczba - 1);
}

long long silnia(int liczba)
{
    if (liczba == 0)
    {
        return 1;
    }

    return liczba * silnia(liczba - 1);
}

long long potega(int podstawa, int wykladnik)
{
    if (wykladnik == 0)
    {
        return 1;
    }

    return podstawa * potega(podstawa, wykladnik - 1);
}

int main()
{
    cout << suma(4) << "\n";
    cout << silnia(5) << "\n";
    cout << potega(2, 6) << "\n";
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
120
64
```

</details>

## Omówienie programu krok po kroku

Program pokazuje sumę, silnię i potęgowanie. `int` nie jest wystarczający dla dowolnie dużych silni.

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

Dla funkcji `suma` pokazanej w tej lekcji ustal wynik wywołania `suma(4)`. Zapisz odpowiedź jako wartość zwracaną albo dokładny tekst wypisany przez program.

<details markdown="1">
<summary>Wskazówka</summary>

Najpierw znajdź przypadek podstawowy `liczba == 1`, a potem rozpisz kolejne wartości argumentu `liczba`.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Wywołanie `suma(4)` daje wynik:

```text
10
```

</details>

### Ćwiczenie 2 - rozpisanie wywołań

Zapisz kolejno argumenty wszystkich wywołań rekurencyjnych funkcji `suma` dla wywołania `suma(4)`. Przy każdym wywołaniu dopisz, czy funkcja schodzi głębiej, czy osiąga przypadek podstawowy.

<details markdown="1">
<summary>Wskazówka</summary>

Zacznij od pierwszego wywołania. Potem zapisuj tylko te argumenty, które pojawiają się w kolejnych wywołaniach tej samej funkcji.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Poprawna odpowiedź powinna pokazywać, że każde kolejne wywołanie zbliża funkcję do przypadku podstawowego `liczba == 1`. Ostatni wiersz opisu to wywołanie, które już nie uruchamia kolejnej rekurencji.

</details>

### Ćwiczenie 3 - przypadek podstawowy

Wskaż w funkcji `suma` przypadek podstawowy. Napisz jednym zdaniem, dlaczego bez tego warunku rekurencja nie mogłaby się poprawnie zakończyć.

<details markdown="1">
<summary>Wskazówka</summary>

Szukaj instrukcji `if`, po której funkcja kończy pracę bez kolejnego wywołania samej siebie.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Przypadek podstawowy to warunek `liczba == 1`. Po jego spełnieniu funkcja nie wywołuje już samej siebie, więc rekurencja zaczyna się kończyć.

</details>

### Ćwiczenie 4 - błąd w kroku rekurencyjnym

Wyjaśnij, co mogłoby się stać, gdyby w funkcji `suma` krok rekurencyjny nie zmieniał argumentu `liczba` w stronę przypadku podstawowego.

<details markdown="1">
<summary>Wskazówka</summary>

Porównaj pierwsze wywołanie z następnym. Sprawdź, czy problem staje się mniejszy albo prostszy.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Jeżeli argument nie zbliża się do przypadku podstawowego, funkcja może wywoływać samą siebie bez końca. Program zużywa wtedy coraz więcej pamięci stosu i może zakończyć się błędem.

</details>

### Ćwiczenie 5 - krótki program

Napisz krótki program testujący funkcję `suma` dla wywołania `suma(4)`. Program ma wypisać wynik i działać w standardzie C++23.

<details markdown="1">
<summary>Wskazówka</summary>

Zostaw przypadek podstawowy i krok rekurencyjny. W funkcji `main` wywołaj funkcję z podanymi argumentami.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

```cpp
#include <iostream>

using namespace std;

int suma(int liczba)
{
    if (liczba == 1)
    {
        return 1;
    }

    return liczba + suma(liczba - 1);
}

int main()
{
    cout << suma(4) << "\n";
    return 0;
}
```

</details>
