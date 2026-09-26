---
layout: default
title: Tablice, vector i napisy
---

# Tablice, vector i napisy

## Krótkie przedstawienie problemu

Chcemy rekurencyjnie przetwarzać dane od podanego indeksu albo od dwóch końców.

## Proste wyjaśnienie idei

Argument `indeks` mowi, który element aktualnie rozpatrujemy. Dla napisu można uzyc indeksu lewego i prawego.

## Dokładne wyjaśnienie techniczne

Nie kopiujemy całego `vector` ani napisu. Gdy funkcja tylko czyta dane, przekazujemy `const vector<int> &` albo `const string &`.

## Przypadek podstawowy

Dla vectora koniec jest wtedy, gdy `indeks == size()`. Dla palindromu koniec jest wtedy, gdy `lewy >= prawy`.

## Krok rekurencyjny

Krok rekurencyjny zwiększa indeks albo zawęża zakres z obu stron.

## W jaki sposób problem się zmniejsza?

W każdym poprawnym przykładzie zmienia się argument funkcji albo zakres danych. Nowe wywołanie dostaje mniejszy problem, więc może dojść do przypadku podstawowego.

## Ręczne prześledzenie niewielkiego przykładu

Dla `{4, 7, 2, 9}` kolejne indeksy to `0`, `1`, `2`, `3`, `4`.



## Pełny program C++

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int suma(const vector<int> &liczby, int indeks)
{
    if (indeks == (int)liczby.size())
    {
        return 0;
    }

    return liczby[indeks] + suma(liczby, indeks + 1);
}

bool czyPalindrom(const string &tekst, int lewy, int prawy)
{
    if (lewy >= prawy)
    {
        return true;
    }

    if (tekst[lewy] != tekst[prawy])
    {
        return false;
    }

    return czyPalindrom(tekst, lewy + 1, prawy - 1);
}

int main()
{
    vector<int> liczby = {4, 7, 2, 9};
    cout << suma(liczby, 0) << "\n";
    cout << czyPalindrom("kajak", 0, 4) << "\n";
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
22
1
```

</details>

## Omówienie programu krok po kroku

Program sumuje vector i sprawdźa palindrom bez kopiowania danych.

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

Dla funkcji `suma` pokazanej w tej lekcji ustal wynik wywołania `suma(liczby, 0)`. Zapisz odpowiedź jako wartość zwracaną albo dokładny tekst wypisany przez program.

<details markdown="1">
<summary>Wskazówka</summary>

Najpierw znajdź przypadek podstawowy `indeks == liczby.size()`, a potem rozpisz kolejne wartości argumentu `indeks`.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Wywołanie `suma(liczby, 0)` daje wynik:

```text
22
```

</details>

### Ćwiczenie 2 - rozpisanie wywołań

Zapisz kolejno argumenty wszystkich wywołań rekurencyjnych funkcji `suma` dla wywołania `suma(liczby, 0)`. Przy każdym wywołaniu dopisz, czy funkcja schodzi głębiej, czy osiąga przypadek podstawowy.

<details markdown="1">
<summary>Wskazówka</summary>

Zacznij od pierwszego wywołania. Potem zapisuj tylko te argumenty, które pojawiają się w kolejnych wywołaniach tej samej funkcji.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Poprawna odpowiedź powinna pokazywać, że każde kolejne wywołanie zbliża funkcję do przypadku podstawowego `indeks == liczby.size()`. Ostatni wiersz opisu to wywołanie, które już nie uruchamia kolejnej rekurencji.

</details>

### Ćwiczenie 3 - przypadek podstawowy

Wskaż w funkcji `suma` przypadek podstawowy. Napisz jednym zdaniem, dlaczego bez tego warunku rekurencja nie mogłaby się poprawnie zakończyć.

<details markdown="1">
<summary>Wskazówka</summary>

Szukaj instrukcji `if`, po której funkcja kończy pracę bez kolejnego wywołania samej siebie.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Przypadek podstawowy to warunek `indeks == liczby.size()`. Po jego spełnieniu funkcja nie wywołuje już samej siebie, więc rekurencja zaczyna się kończyć.

</details>

### Ćwiczenie 4 - błąd w kroku rekurencyjnym

Wyjaśnij, co mogłoby się stać, gdyby w funkcji `suma` krok rekurencyjny nie zmieniał argumentu `indeks` w stronę przypadku podstawowego.

<details markdown="1">
<summary>Wskazówka</summary>

Porównaj pierwsze wywołanie z następnym. Sprawdź, czy problem staje się mniejszy albo prostszy.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Jeżeli argument nie zbliża się do przypadku podstawowego, funkcja może wywoływać samą siebie bez końca. Program zużywa wtedy coraz więcej pamięci stosu i może zakończyć się błędem.

</details>

### Ćwiczenie 5 - krótki program

Napisz krótki program testujący funkcję `suma` dla wywołania `suma(liczby, 0)`. Program ma wypisać wynik i działać w standardzie C++23.

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

int suma(const vector<int> &liczby, int indeks)
{
    if (indeks == (int)liczby.size())
    {
        return 0;
    }

    return liczby[indeks] + suma(liczby, indeks + 1);
}

int main()
{
    vector<int> liczby = {4, 7, 2, 9};
    cout << suma(liczby, 0) << "\n";
    return 0;
}
```

</details>
