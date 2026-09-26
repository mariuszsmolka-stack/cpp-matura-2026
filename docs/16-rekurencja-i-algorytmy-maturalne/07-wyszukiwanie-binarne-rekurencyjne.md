---
layout: default
title: Rekurencyjne wyszukiwanie binarne
---

# Rekurencyjne wyszukiwanie binarne

## Krótkie przedstawienie problemu

Chcemy szybko znaleźć element w posortowanym vectorze.

## Proste wyjaśnienie idei

Sprawdźamy środek zakresu i odrzucamy połowę danych.

## Dokładne wyjaśnienie techniczne

Zakres opisuja argumenty `lewy` i `prawy`. Środek liczymy jako `lewy + (prawy - lewy) / 2`.

## Przypadek podstawowy

Gdy `lewy > prawy`, zakres jest pusty i zwracamy `-1`.

## Krok rekurencyjny

Krok wybiera lewa albo prawa połowę, więc zakres się zmniejsza.

## W jaki sposób problem się zmniejsza?

W każdym poprawnym przykładzie zmienia się argument funkcji albo zakres danych. Nowe wywołanie dostaje mniejszy problem, więc może dojść do przypadku podstawowego.

## Ręczne prześledzenie niewielkiego przykładu

Dla szukania `16` zakresy to `0..6`, potem `4..6`, potem `4..4`.

## Tabela sledzenia

| Wywołanie | Lewy | Prawy | Środek | Decyzja |
| --------- | ---: | ----: | -----: | ------- |
| 1 | 0 | 6 | 3 | prawa połowa |
| 2 | 4 | 6 | 5 | lewa połowa |
| 3 | 4 | 4 | 4 | znaleziono |


## Pełny program C++

```cpp
#include <iostream>
#include <vector>

using namespace std;

int wyszukajBinarnie(const vector<int> &liczby, int lewy, int prawy, int szukana)
{
    if (lewy > prawy)
    {
        return -1;
    }

    int środek = lewy + (prawy - lewy) / 2;

    if (liczby[środek] == szukana)
    {
        return środek;
    }

    if (szukana < liczby[środek])
    {
        return wyszukajBinarnie(liczby, lewy, środek - 1, szukana);
    }

    return wyszukajBinarnie(liczby, środek + 1, prawy, szukana);
}

int main()
{
    vector<int> liczby = {2, 5, 8, 12, 16, 23, 38};
    cout << wyszukajBinarnie(liczby, 0, (int)liczby.size() - 1, 16) << "\n";
    cout << wyszukajBinarnie(liczby, 0, (int)liczby.size() - 1, 7) << "\n";
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
4
-1
```

</details>

## Omówienie programu krok po kroku

Program znajduje indeks `4` dla wartości `16` i `-1` dla wartości `7`. Dane musza byc posortowane.

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

Dla funkcji `wyszukajBinarnie` pokazanej w tej lekcji ustal wynik wywołania `wyszukajBinarnie(liczby, 0, 6, 16)`. Zapisz odpowiedź jako wartość zwracaną albo dokładny tekst wypisany przez program.

<details markdown="1">
<summary>Wskazówka</summary>

Najpierw znajdź przypadek podstawowy `lewy > prawy`, a potem rozpisz kolejne wartości argumentu `lewy i prawy`.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Wywołanie `wyszukajBinarnie(liczby, 0, 6, 16)` daje wynik:

```text
4
```

</details>

### Ćwiczenie 2 - rozpisanie wywołań

Zapisz kolejno argumenty wszystkich wywołań rekurencyjnych funkcji `wyszukajBinarnie` dla wywołania `wyszukajBinarnie(liczby, 0, 6, 16)`. Przy każdym wywołaniu dopisz, czy funkcja schodzi głębiej, czy osiąga przypadek podstawowy.

<details markdown="1">
<summary>Wskazówka</summary>

Zacznij od pierwszego wywołania. Potem zapisuj tylko te argumenty, które pojawiają się w kolejnych wywołaniach tej samej funkcji.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Poprawna odpowiedź powinna pokazywać, że każde kolejne wywołanie zbliża funkcję do przypadku podstawowego `lewy > prawy`. Ostatni wiersz opisu to wywołanie, które już nie uruchamia kolejnej rekurencji.

</details>

### Ćwiczenie 3 - przypadek podstawowy

Wskaż w funkcji `wyszukajBinarnie` przypadek podstawowy. Napisz jednym zdaniem, dlaczego bez tego warunku rekurencja nie mogłaby się poprawnie zakończyć.

<details markdown="1">
<summary>Wskazówka</summary>

Szukaj instrukcji `if`, po której funkcja kończy pracę bez kolejnego wywołania samej siebie.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Przypadek podstawowy to warunek `lewy > prawy`. Po jego spełnieniu funkcja nie wywołuje już samej siebie, więc rekurencja zaczyna się kończyć.

</details>

### Ćwiczenie 4 - błąd w kroku rekurencyjnym

Wyjaśnij, co mogłoby się stać, gdyby w funkcji `wyszukajBinarnie` krok rekurencyjny nie zmieniał argumentu `lewy i prawy` w stronę przypadku podstawowego.

<details markdown="1">
<summary>Wskazówka</summary>

Porównaj pierwsze wywołanie z następnym. Sprawdź, czy problem staje się mniejszy albo prostszy.

</details>

<details markdown="1">
<summary>Przykładowe rozwiązanie</summary>

Jeżeli argument nie zbliża się do przypadku podstawowego, funkcja może wywoływać samą siebie bez końca. Program zużywa wtedy coraz więcej pamięci stosu i może zakończyć się błędem.

</details>

### Ćwiczenie 5 - krótki program

Napisz krótki program testujący funkcję `wyszukajBinarnie` dla wywołania `wyszukajBinarnie(liczby, 0, 6, 16)`. Program ma wypisać wynik i działać w standardzie C++23.

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

int wyszukajBinarnie(const vector<int> &liczby, int lewy, int prawy, int szukana)
{
    if (lewy > prawy)
    {
        return -1;
    }

    int srodek = (lewy + prawy) / 2;

    if (liczby[srodek] == szukana)
    {
        return srodek;
    }

    if (szukana < liczby[srodek])
    {
        return wyszukajBinarnie(liczby, lewy, srodek - 1, szukana);
    }

    return wyszukajBinarnie(liczby, srodek + 1, prawy, szukana);
}

int main()
{
    vector<int> liczby = {2, 5, 8, 12, 16, 23, 38};
    cout << wyszukajBinarnie(liczby, 0, 6, 16) << "\n";
    return 0;
}
```

</details>
