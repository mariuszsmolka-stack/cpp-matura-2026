# `vector` dwuwymiarowy

## Krótkie wprowadzenie do problemu

Czasami dane tworzą tabelę: wiersze i kolumny. Przykład: wyniki uczniów z kilku sprawdzianów albo plansza gry.

## Proste wyjaśnienie idei

`vector<vector<int>>` to `vector`, którego elementami są inne obiekty `vector<int>`. Zewnętrzny `vector` przechowuje wiersze, a każdy wewnętrzny `vector` przechowuje kolumny.

## Składnia

```cpp
vector<vector<int>> tablica(liczbaWierszy, vector<int>(liczbaKolumn, 0));
```

Czytamy to tak: utwórz `liczbaWierszy` wierszy, a każdy wiersz ma `liczbaKolumn` liczb początkowo równych `0`.

## Przykład 1 - tabela wyników

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int wiersze, kolumny;
    cin >> wiersze >> kolumny;

    if (wiersze < 1 || kolumny < 1)
    {
        cout << "Nieprawidlowy rozmiar.\n";
        return 0;
    }

    vector<vector<int>> wyniki(wiersze, vector<int>(kolumny, 0));

    for (int i = 0; i < wiersze; i++)
    {
        for (int j = 0; j < kolumny; j++)
        {
            cin >> wyniki[i][j];
        }
    }

    int suma = 0;
    int maksimum = wyniki[0][0];
    int wierszMaksimum = 0;
    int kolumnaMaksimum = 0;

    for (int i = 0; i < wiersze; i++)
    {
        for (int j = 0; j < kolumny; j++)
        {
            suma += wyniki[i][j];

            if (wyniki[i][j] > maksimum)
            {
                maksimum = wyniki[i][j];
                wierszMaksimum = i;
                kolumnaMaksimum = j;
            }
        }
    }

    cout << "Suma: " << suma << "\n";
    cout << "Maksimum: " << maksimum << "\n";
    cout << "Pozycja: " << wierszMaksimum << " " << kolumnaMaksimum << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
2 3
5 7 4
8 2 6
```

Wynik:

```text
Suma: 32
Maksimum: 8
Pozycja: 1 0
```

</details>

## Omówienie programu krok po kroku

1. Program wczytuje liczbę wierszy i kolumn.
2. Sprawdza, czy rozmiary są dodatnie.
3. Tworzy tabelę wypełnioną zerami.
4. Dwie pętle wczytują elementy.
5. Kolejne dwie pętle liczą sumę i szukają największego elementu.
6. Pozycja ma dwa indeksy: numer wiersza i numer kolumny.

## Przykład 2 - sumy wierszy

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<vector<int>> tabela = {{1, 2, 3}, {4, 5, 6}};

    for (int i = 0; i < (int)tabela.size(); i++)
    {
        int sumaWiersza = 0;

        for (int liczba : tabela[i])
        {
            sumaWiersza += liczba;
        }

        cout << "Wiersz " << i << ": " << sumaWiersza << "\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Wiersz 0: 6
Wiersz 1: 15
```

</details>

## Kiedy tego użyć?

Użyj `vector<vector<int>>`, gdy potrzebujesz tabeli albo planszy, której rozmiar może być ustalany podczas działania programu.

## Kiedy wybrać coś innego?

Jeżeli tabela ma stały mały rozmiar, wystarczy zwykła tablica dwuwymiarowa. Jeżeli każdy wiersz opisuje rekord, lepszy może być `vector` struktur.

## Typowe błędy

- Odczyt pierwszego wiersza z pustej tabeli.
- Mylenie liczby wierszy z liczbą kolumn.
- Użycie jednego indeksu zamiast dwóch.
- Założenie, że każda tabela musi być kwadratowa.
- Brak sprawdzenia rozmiaru przed szukaniem maksimum.

## Ćwiczenia

### Ćwiczenie 1

Wczytaj i wyświetl tabelę liczb.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Użyj dwóch zagnieżdżonych pętli.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int w, k;
    cin >> w >> k;
    vector<vector<int>> tabela(w, vector<int>(k, 0));

    for (int i = 0; i < w; i++)
        for (int j = 0; j < k; j++) cin >> tabela[i][j];

    for (int i = 0; i < w; i++)
    {
        for (int j = 0; j < k; j++) cout << tabela[i][j] << " ";
        cout << "\n";
    }

    return 0;
}
```

</details>

### Ćwiczenie 2

Oblicz sumę wszystkich elementów tabeli.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Dodawaj każdy element do jednej zmiennej `suma`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<vector<int>> tabela = {{1, 2}, {3, 4}};
    int suma = 0;

    for (const vector<int> &wiersz : tabela)
        for (int liczba : wiersz) suma += liczba;

    cout << suma << "\n";
    return 0;
}
```

</details>

### Ćwiczenie 3

Wypisz sumę każdego wiersza.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Dla każdego wiersza ustaw `sumaWiersza = 0`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<vector<int>> tabela = {{2, 3, 4}, {5, 6, 7}};

    for (const vector<int> &wiersz : tabela)
    {
        int suma = 0;
        for (int liczba : wiersz) suma += liczba;
        cout << suma << "\n";
    }

    return 0;
}
```

</details>

### Ćwiczenie 4

Znajdź największy element i jego położenie.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Zacznij od elementu `[0][0]`, jeśli tabela nie jest pusta.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<vector<int>> tabela = {{3, 9}, {10, 4}};
    int maks = tabela[0][0], wi = 0, ko = 0;

    for (int i = 0; i < (int)tabela.size(); i++)
    {
        for (int j = 0; j < (int)tabela[i].size(); j++)
        {
            if (tabela[i][j] > maks)
            {
                maks = tabela[i][j];
                wi = i;
                ko = j;
            }
        }
    }

    cout << maks << " " << wi << " " << ko << "\n";
    return 0;
}
```

</details>

### Ćwiczenie 5

Dla macierzy kwadratowej wypisz elementy głównej przekątnej.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Elementy przekątnej mają indeksy `[i][i]`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<vector<int>> tabela = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

    for (int i = 0; i < (int)tabela.size(); i++)
    {
        cout << tabela[i][i] << " ";
    }
    cout << "\n";

    return 0;
}
```

</details>

## Podsumowanie

`vector<vector<int>>` pozwala tworzyć tabele o rozmiarze ustalanym podczas działania programu. Zawsze pamiętaj o dwóch indeksach: wiersz i kolumna.
