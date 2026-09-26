---
layout: default
title: Operacje na cyfrach
---

# Operacje na cyfrach

## Krótkie przedstawienie problemu

Chcemy przetwarzać liczbę cyfra po cyfrze.

## Proste wyjaśnienie idei

Ostatnia cyfrę pobieramy przez `% 10`, a reszte liczby przez `/ 10`.

## Dokładne wyjaśnienie techniczne

Dzielenie całkowite przez 10 usuwa ostatnią cyfrę, więc problem staje się krótszy. Liczbę ujemną najpierw zamieniamy na dodatnią.

## Przypadek podstawowy

Dla liczby jednocyfrowej zwracamy wynik bez dalszego wywołania. Dla `0` liczba cyfr wynosi `1`.

## Krok rekurencyjny

Krok rekurencyjny przetwarza ostatnią cyfrę i wywołuje funkcję dla `liczba / 10`.

## W jaki sposób problem się zmniejsza?

W każdym poprawnym przykładzie zmienia się argument funkcji albo zakres danych. Nowe wywołanie dostaje mniejszy problem, więc może dojść do przypadku podstawowego.

## Ręczne prześledzenie niewielkiego przykładu

Dla `3054` kolejne argumenty to `3054`, `305`, `30`, `3`.



## Pełny program C++

```cpp
#include <iostream>

using namespace std;

int sumaCyfr(int liczba)
{
    if (liczba < 0)
    {
        liczba = -liczba;
    }

    if (liczba < 10)
    {
        return liczba;
    }

    return liczba % 10 + sumaCyfr(liczba / 10);
}

int liczbaCyfr(int liczba)
{
    if (liczba < 0)
    {
        liczba = -liczba;
    }

    if (liczba < 10)
    {
        return 1;
    }

    return 1 + liczbaCyfr(liczba / 10);
}

int main()
{
    cout << sumaCyfr(-3054) << "\n";
    cout << liczbaCyfr(0) << "\n";
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
12
1
```

</details>

## Omówienie programu krok po kroku

Program sumuje cyfry liczby ujemnej po zmianie znaku i poprawnie liczy liczbę cyfr zera.

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

Dla funkcji `sumaCyfr` pokazanej w tej lekcji ustal wynik wywołania `sumaCyfr(472)`. Zapisz odpowiedź jako wartość zwracaną albo dokładny tekst wypisany przez program.

<details markdown="1">
<summary>Wskazówka</summary>

Najpierw znajdź przypadek podstawowy `liczba < 10`, a potem rozpisz kolejne wartości argumentu `liczba`.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Wywołanie `sumaCyfr(472)` daje wynik:

```text
13
```

</details>

### Ćwiczenie 2 - rozpisanie wywołań

Zapisz kolejno argumenty wszystkich wywołań rekurencyjnych funkcji `sumaCyfr` dla wywołania `sumaCyfr(472)`. Przy każdym wywołaniu dopisz, czy funkcja schodzi głębiej, czy osiąga przypadek podstawowy.

<details markdown="1">
<summary>Wskazówka</summary>

Zacznij od pierwszego wywołania. Potem zapisuj tylko te argumenty, które pojawiają się w kolejnych wywołaniach tej samej funkcji.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Poprawna odpowiedź powinna pokazywać, że każde kolejne wywołanie zbliża funkcję do przypadku podstawowego `liczba < 10`. Ostatni wiersz opisu to wywołanie, które już nie uruchamia kolejnej rekurencji.

</details>

### Ćwiczenie 3 - przypadek podstawowy

Wskaż w funkcji `sumaCyfr` przypadek podstawowy. Napisz jednym zdaniem, dlaczego bez tego warunku rekurencja nie mogłaby się poprawnie zakończyć.

<details markdown="1">
<summary>Wskazówka</summary>

Szukaj instrukcji `if`, po której funkcja kończy pracę bez kolejnego wywołania samej siebie.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Przypadek podstawowy to warunek `liczba < 10`. Po jego spełnieniu funkcja nie wywołuje już samej siebie, więc rekurencja zaczyna się kończyć.

</details>

### Ćwiczenie 4 - błąd w kroku rekurencyjnym

Wyjaśnij, co mogłoby się stać, gdyby w funkcji `sumaCyfr` krok rekurencyjny nie zmieniał argumentu `liczba` w stronę przypadku podstawowego.

<details markdown="1">
<summary>Wskazówka</summary>

Porównaj pierwsze wywołanie z następnym. Sprawdź, czy problem staje się mniejszy albo prostszy.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Jeżeli argument nie zbliża się do przypadku podstawowego, funkcja może wywoływać samą siebie bez końca. Program zużywa wtedy coraz więcej pamięci stosu i może zakończyć się błędem.

</details>

### Ćwiczenie 5 - krótki program

Napisz krótki program testujący funkcję `sumaCyfr` dla wywołania `sumaCyfr(472)`. Program ma wypisać wynik i działać w standardzie C++23.

<details markdown="1">
<summary>Wskazówka</summary>

Zostaw przypadek podstawowy i krok rekurencyjny. W funkcji `main` wywołaj funkcję z podanymi argumentami.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

```cpp
#include <iostream>

using namespace std;

int sumaCyfr(int liczba)
{
    if (liczba < 10)
    {
        return liczba;
    }

    return liczba % 10 + sumaCyfr(liczba / 10);
}

int main()
{
    cout << sumaCyfr(472) << "\n";
    return 0;
}
```

</details>
