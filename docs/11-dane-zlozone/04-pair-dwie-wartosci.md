# `pair` i dwie wartości

## Cel lekcji

Nauczysz się używać typu `pair`, gdy program potrzebuje przechować albo zwrócić dokładnie dwie powiązane wartości.

## Krótkie wprowadzenie do problemu

Czasami wynik składa się z dwóch liczb. Przykład: minimum i maksimum. Można zwrócić jedną wartość, ale co zrobić z dwiema?

Jednym prostym rozwiązaniem jest `pair`.

## Wyjaśnienie idei

`pair` przechowuje dwie wartości. Pierwsza nazywa się `first`, druga nazywa się `second`.

```cpp
pair<int, int> punkt = {4, 7};
```

```cpp
punkt.first
punkt.second
```

`pair` jest krótki, ale mniej czytelny niż `struct`, bo nazwy `first` i `second` nie mówią, co naprawdę oznaczają dane.

## Składnia

Do użycia `pair` potrzebny jest nagłówek `<utility>`.

```cpp
#include <utility>

pair<int, int> wynik = {3, 9};
cout << wynik.first << "\n";
cout << wynik.second << "\n";
```

## Przykład 1 - punkt na planszy

```cpp
#include <iostream>
#include <utility>

using namespace std;

int main()
{
    pair<int, int> punkt = {4, 7};

    cout << "Wiersz: " << punkt.first << "\n";
    cout << "Kolumna: " << punkt.second << "\n";

    punkt.first = 5;

    cout << "Nowy wiersz: " << punkt.first << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Wiersz: 4
Kolumna: 7
Nowy wiersz: 5
```

</details>

## Przykład 2 - funkcja zwracająca minimum i maksimum

```cpp
#include <iostream>
#include <utility>

using namespace std;

pair<int, int> znajdzMinMaks(const int tablica[], int n)
{
    int minimum = tablica[0];
    int maksimum = tablica[0];

    for (int i = 1; i < n; i++)
    {
        if (tablica[i] < minimum)
        {
            minimum = tablica[i];
        }

        if (tablica[i] > maksimum)
        {
            maksimum = tablica[i];
        }
    }

    return {minimum, maksimum};
}

int main()
{
    const int MAKS = 100;
    int liczby[MAKS];
    int n;

    cin >> n;

    if (n < 1 || n > MAKS)
    {
        cout << "Nieprawidlowy rozmiar.\n";
        return 0;
    }

    for (int i = 0; i < n; i++)
    {
        cin >> liczby[i];
    }

    pair<int, int> wynik = znajdzMinMaks(liczby, n);

    cout << "Minimum: " << wynik.first << "\n";
    cout << "Maksimum: " << wynik.second << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
5
8 3 10 4 6
```

Wynik:

```text
Minimum: 3
Maksimum: 10
```

</details>

## Omówienie najważniejszego przykładu krok po kroku

1. Funkcja `znajdzMinMaks` dostaje tablicę i liczbę elementów.
2. `minimum` i `maksimum` startują od pierwszego elementu.
3. Pętla sprawdza kolejne elementy.
4. Gdy znajdzie mniejszą wartość, zmienia `minimum`.
5. Gdy znajdzie większą wartość, zmienia `maksimum`.
6. `return {minimum, maksimum};` zwraca dwie wartości jako `pair`.
7. W `main()` wynik odbieramy do zmiennej `pair<int, int> wynik`.
8. `wynik.first` oznacza minimum, a `wynik.second` oznacza maksimum.

## Przykład 3 - wartość i indeks

```cpp
#include <iostream>
#include <utility>

using namespace std;

pair<int, int> znajdzPierwszaWieksza(const int tablica[], int n, int granica)
{
    for (int i = 0; i < n; i++)
    {
        if (tablica[i] > granica)
        {
            return {tablica[i], i};
        }
    }

    return {-1, -1};
}

int main()
{
    int liczby[5] = {4, 7, 2, 9, 3};

    pair<int, int> wynik = znajdzPierwszaWieksza(liczby, 5, 6);

    cout << "Wartosc: " << wynik.first << "\n";
    cout << "Indeks: " << wynik.second << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Wartosc: 7
Indeks: 1
```

</details>

## `pair` czy `struct`?

Dwie krótkotrwałe wartości => `pair` może być wygodny.

Trwałe dane opisujące obiekt => lepszy jest `struct`.

```cpp
pair<string, int>
```

Taki zapis nie mówi, czy tekst jest nazwą, imieniem, tytułem czy kategorią.

```cpp
struct Wynik
{
    string nazwa;
    int punkty;
};
```

`wynik.nazwa` jest czytelniejsze niż `wynik.first`, gdy dane mają trwałe znaczenie.

## Kiedy tego użyć?

Użyj `pair`, gdy funkcja ma szybko zwrócić dokładnie dwie powiązane wartości, na przykład minimum i maksimum albo wartość i jej indeks.

## Kiedy wybrać coś innego?

Jeżeli danych jest więcej niż dwie, `pair` nie wystarczy. Jeżeli pola mają ważne znaczenie i będą długo używane, wybierz `struct`. Jeżeli chcesz połączyć kilka krótkotrwałych wyników, można rozważyć nieobowiązkowy materiał o `tuple`.

## Typowe błędy

- Brak nagłówka `<utility>`.
- Mylenie `first` i `second`.
- Używanie `pair`, gdy `struct` byłby czytelniejszy.
- Próba nadania własnych nazw polom `first` i `second`.
- Brak sprawdzenia, czy tablica ma co najmniej jeden element przed szukaniem minimum i maksimum.

## Ćwiczenia

### Ćwiczenie 1

Utwórz `pair<int, int>` opisujący pozycję wiersz-kolumna i wypisz obie wartości.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Utwórz zmienną `pair<int, int> pozycja = {2, 5};` i użyj pól `first` oraz `second`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>
#include <utility>

using namespace std;

int main()
{
    pair<int, int> pozycja = {2, 5};

    cout << "Wiersz: " << pozycja.first << "\n";
    cout << "Kolumna: " << pozycja.second << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 2

Napisz funkcję, która dla tablicy zwraca parę: pierwsza wartość i ostatnia wartość.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Pierwszy element to `tablica[0]`, a ostatni to `tablica[n - 1]`. Funkcja wymaga `n > 0`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <utility>

using namespace std;

pair<int, int> pierwszaIOstatnia(const int tablica[], int n)
{
    return {tablica[0], tablica[n - 1]};
}

int main()
{
    int liczby[4] = {8, 3, 6, 10};
    pair<int, int> wynik = pierwszaIOstatnia(liczby, 4);

    cout << wynik.first << " " << wynik.second << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 3

Napisz funkcję, która zwraca wartość największego elementu i jego indeks.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Zapamiętaj indeks największego elementu. Na końcu zwróć `{tablica[indeks], indeks}`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <utility>

using namespace std;

pair<int, int> znajdzNajwiekszy(const int tablica[], int n)
{
    int indeks = 0;

    for (int i = 1; i < n; i++)
    {
        if (tablica[i] > tablica[indeks])
        {
            indeks = i;
        }
    }

    return {tablica[indeks], indeks};
}

int main()
{
    int liczby[5] = {4, 11, 7, 3, 9};
    pair<int, int> wynik = znajdzNajwiekszy(liczby, 5);

    cout << "Wartosc: " << wynik.first << "\n";
    cout << "Indeks: " << wynik.second << "\n";

    return 0;
}
```

</details>

## Podsumowanie

`pair` łączy dokładnie dwie wartości. Jest wygodny dla krótkich wyników funkcji, ale nie zastępuje czytelnych struktur z nazwanymi polami.
