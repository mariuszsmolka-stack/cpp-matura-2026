---
layout: default
title: Tablice, vector i napisy
---

# Tablice, vector i napisy

## Problem

Rekurencja może przetwarzać dane złożone: `vector`, tablicę albo napis. Wtedy zamiast zmniejszać liczbę, zwykle zmieniamy indeksy.

W tej lekcji używamy `vector<int>` i `string`. Nazwy zmiennych w kodzie są bez polskich znaków.

## 1. Przetwarzanie vector od podanego indeksu

Chcemy obliczyć sumę elementów od indeksu `0` do końca. Funkcję wywołujemy z indeksem `0`.

Przypadek podstawowy:

```cpp
if (indeks >= (int)liczby.size())
{
    return 0;
}
```

Ten warunek jest bezpieczny także wtedy, gdy `vector` jest pusty.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int suma(const vector<int> &liczby, int indeks)
{
    if (indeks >= (int)liczby.size())
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

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
22
```

</details>

## 2. Przetwarzanie napisu od dwóch końców

Palindrom to napis, który czytany od lewej i od prawej strony jest taki sam, np. `kajak`.

Używamy dwóch indeksów:

- `lewy` wskazuje znak z lewej strony,
- `prawy` wskazuje znak z prawej strony.

Przypadek podstawowy to `lewy >= prawy`. Oznacza to, że sprawdziliśmy już wszystkie potrzebne pary znaków.

```cpp
#include <iostream>
#include <string>

using namespace std;

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
    string tekst = "kajak";

    if (czyPalindrom(tekst, 0, (int)tekst.size() - 1))
    {
        cout << "TAK\n";
    }
    else
    {
        cout << "NIE\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
TAK
```

</details>

Pusty napis i napis jednoznakowy są palindromami. Dla pustego napisu `prawy` ma wartość `-1`, więc warunek `lewy >= prawy` jest od razu prawdziwy.

## 3. Warunki poprawności indeksów

- Dla `vector` nie wolno czytać elementu poza zakresem.
- Dla napisu ostatni indeks to `(int)tekst.size() - 1`.
- Warunek `indeks >= (int)liczby.size()` zatrzymuje funkcję, zanim odczyta element poza końcem.
- W palindromie po każdym kroku `lewy` rośnie, a `prawy` maleje.

## Typowe błędy

- Wywołanie funkcji z indeksem `1` zamiast `0`, przez co pomijamy pierwszy element.
- Warunek `indeks > size()` zamiast `indeks >= size()`.
- Odczyt `tekst[prawy]`, gdy napis jest pusty i warunek zatrzymania jest źle ustawiony.
- Wypisywanie wartości logicznej jako `1` lub `0` bez wyjaśnienia.
- Kopiowanie całego `vector` w każdym wywołaniu zamiast przekazania przez referencję do odczytu.

## Ćwiczenia

### Ćwiczenie 1 - suma elementów

Dla `vector<int> liczby = {3, -1, 5}` rozpisz wywołania funkcji `suma(liczby, 0)` i podaj wynik.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Indeks przyjmuje kolejno wartości `0`, `1`, `2`, `3`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```text
suma(liczby, 0) => 3 + suma(liczby, 1)
suma(liczby, 1) => -1 + suma(liczby, 2)
suma(liczby, 2) => 5 + suma(liczby, 3)
suma(liczby, 3) => 0
```

Wynik to `3 + (-1) + 5 = 7`.

</details>

### Ćwiczenie 2 - liczba dodatnich elementów

Napisz funkcję `ileDodatnich`, która zlicza dodatnie elementy w `vector<int>` od podanego indeksu do końca.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Dla elementu dodatniego dodaj `1` do wyniku dalszego wywołania.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int ileDodatnich(const vector<int> &liczby, int indeks)
{
    if (indeks >= (int)liczby.size())
    {
        return 0;
    }

    if (liczby[indeks] > 0)
    {
        return 1 + ileDodatnich(liczby, indeks + 1);
    }

    return ileDodatnich(liczby, indeks + 1);
}

int main()
{
    vector<int> liczby = {3, -1, 0, 5};
    cout << ileDodatnich(liczby, 0) << "\n";
    return 0;
}
```

</details>

### Ćwiczenie 3 - największy element

Napisz funkcję `maksimum`, która zwraca największy element w niepustym `vector<int>`. Funkcję możesz wywoływać od indeksu `0`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Przypadek podstawowy może wystąpić przy ostatnim elemencie.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int maksimum(const vector<int> &liczby, int indeks)
{
    if (indeks == (int)liczby.size() - 1)
    {
        return liczby[indeks];
    }

    int najlepszyDalej = maksimum(liczby, indeks + 1);

    if (liczby[indeks] > najlepszyDalej)
    {
        return liczby[indeks];
    }

    return najlepszyDalej;
}

int main()
{
    vector<int> liczby = {4, 9, 2, 7};
    cout << maksimum(liczby, 0) << "\n";
    return 0;
}
```

</details>

### Ćwiczenie 4 - wyszukanie wartości

Napisz funkcję `czyJest`, która sprawdza, czy w `vector<int>` występuje podana wartość.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Jeżeli aktualny element jest równy szukanej wartości, możesz od razu zwrócić `true`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

bool czyJest(const vector<int> &liczby, int indeks, int szukana)
{
    if (indeks >= (int)liczby.size())
    {
        return false;
    }

    if (liczby[indeks] == szukana)
    {
        return true;
    }

    return czyJest(liczby, indeks + 1, szukana);
}

int main()
{
    vector<int> liczby = {4, 7, 2, 9};

    if (czyJest(liczby, 0, 2))
    {
        cout << "TAK\n";
    }
    else
    {
        cout << "NIE\n";
    }

    return 0;
}
```

</details>

### Ćwiczenie 5 - porównywanie znaków od końców

Dla napisu `radar` zapisz pary indeksów porównywane przez funkcję `czyPalindrom`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Pierwsza para to pierwszy i ostatni znak.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Dla `radar` długość wynosi `5`, więc ostatni indeks to `4`.

Porównania:

```text
(0, 4): r i r
(1, 3): a i a
```

Potem `lewy == prawy`, więc funkcja kończy się wynikiem `true`.

</details>
