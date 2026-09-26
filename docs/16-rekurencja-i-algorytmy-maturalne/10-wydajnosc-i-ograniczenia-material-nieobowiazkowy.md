---
layout: default
title: Wydajność i ograniczenia - materiał nieobowiązkowy
---

# Wydajność i ograniczenia - materiał nieobowiązkowy

> Materiał nieobowiązkowy. Możesz pominąć te lekcje bez utraty ciągłości materialu podstawowego.

## Krótkie przedstawienie problemu

Chcemy wiedzieć, kiedy rekurencja staje się kosztowna.

## Proste wyjaśnienie idei

Każde wywołanie funkcji ma koszt. Jeżeli wynik został już policzony, można go zapamiętać.

## Dokładne wyjaśnienie techniczne

Zapamiętywanie wcześniej policzonych wyników ogranicza wielokrotne obliczanie tych samych wartości.

## Przypadek podstawowy

Dla Fibonacciego przypadki podstawowe to `0` i `1`.

## Krok rekurencyjny

Jeżeli wyniku nie ma w pamięci, funkcja liczy go z dwóch mniejszych wyników i zapisuje.

## W jaki sposób problem się zmniejsza?

W każdym poprawnym przykładzie zmienia się argument funkcji albo zakres danych. Nowe wywołanie dostaje mniejszy problem, więc może dojść do przypadku podstawowego.

## Ręczne prześledzenie niewielkiego przykładu

Dla `fibMemo(10)` część wartości jest potrzebna wiele razy, ale zostaje zapisana.



## Pełny program C++

```cpp
#include <iostream>
#include <vector>

using namespace std;

long long fibMemo(int n, vector<long long> &pamiec)
{
    if (n == 0)
    {
        return 0;
    }

    if (n == 1)
    {
        return 1;
    }

    if (pamiec[n] != -1)
    {
        return pamiec[n];
    }

    pamiec[n] = fibMemo(n - 1, pamiec) + fibMemo(n - 2, pamiec);
    return pamiec[n];
}

int main()
{
    int n = 10;
    vector<long long> pamiec(n + 1, -1);
    cout << fibMemo(n, pamiec) << "\n";
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
55
```

</details>

## Omówienie programu krok po kroku

Program tworzy vector `pamiec`. Wartość `-1` oznacza, że wynik nie został jeszcze policzony.

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

Dla funkcji `fibMemo` pokazanej w tej lekcji ustal wynik wywołania `fibMemo(10, pamiec)`. Zapisz odpowiedź jako wartość zwracaną albo dokładny tekst wypisany przez program.

<details markdown="1">
<summary>Wskazówka</summary>

Najpierw znajdź przypadek podstawowy `n == 0 albo n == 1`, a potem rozpisz kolejne wartości argumentu `n`.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Wywołanie `fibMemo(10, pamiec)` daje wynik:

```text
55
```

</details>

### Ćwiczenie 2 - rozpisanie wywołań

Zapisz kolejno argumenty wszystkich wywołań rekurencyjnych funkcji `fibMemo` dla wywołania `fibMemo(10, pamiec)`. Przy każdym wywołaniu dopisz, czy funkcja schodzi głębiej, czy osiąga przypadek podstawowy.

<details markdown="1">
<summary>Wskazówka</summary>

Zacznij od pierwszego wywołania. Potem zapisuj tylko te argumenty, które pojawiają się w kolejnych wywołaniach tej samej funkcji.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Poprawna odpowiedź powinna pokazywać, że każde kolejne wywołanie zbliża funkcję do przypadku podstawowego `n == 0 albo n == 1`. Ostatni wiersz opisu to wywołanie, które już nie uruchamia kolejnej rekurencji.

</details>

### Ćwiczenie 3 - przypadek podstawowy

Wskaż w funkcji `fibMemo` przypadek podstawowy. Napisz jednym zdaniem, dlaczego bez tego warunku rekurencja nie mogłaby się poprawnie zakończyć.

<details markdown="1">
<summary>Wskazówka</summary>

Szukaj instrukcji `if`, po której funkcja kończy pracę bez kolejnego wywołania samej siebie.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Przypadek podstawowy to warunek `n == 0 albo n == 1`. Po jego spełnieniu funkcja nie wywołuje już samej siebie, więc rekurencja zaczyna się kończyć.

</details>

### Ćwiczenie 4 - błąd w kroku rekurencyjnym

Wyjaśnij, co mogłoby się stać, gdyby w funkcji `fibMemo` krok rekurencyjny nie zmieniał argumentu `n` w stronę przypadku podstawowego.

<details markdown="1">
<summary>Wskazówka</summary>

Porównaj pierwsze wywołanie z następnym. Sprawdź, czy problem staje się mniejszy albo prostszy.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Jeżeli argument nie zbliża się do przypadku podstawowego, funkcja może wywoływać samą siebie bez końca. Program zużywa wtedy coraz więcej pamięci stosu i może zakończyć się błędem.

</details>

### Ćwiczenie 5 - krótki program

Napisz krótki program testujący funkcję `fibMemo` dla wywołania `fibMemo(10, pamiec)`. Program ma wypisać wynik i działać w standardzie C++23.

<details markdown="1">
<summary>Wskazówka</summary>

Zostaw przypadek podstawowy i krok rekurencyjny. W funkcji `main` wywołaj funkcję z podanymi argumentami.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

long long fibMemo(int n, vector<long long> &pamiec)
{
    if (n == 0)
    {
        return 0;
    }

    if (n == 1)
    {
        return 1;
    }

    if (pamiec[n] != -1)
    {
        return pamiec[n];
    }

    pamiec[n] = fibMemo(n - 1, pamiec) + fibMemo(n - 2, pamiec);
    return pamiec[n];
}

int main()
{
    int n = 10;
    vector<long long> pamiec(n + 1, -1);
    cout << fibMemo(n, pamiec) << "\n";
    return 0;
}
```

</details>
